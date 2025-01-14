import { renderHook, waitFor } from '@testing-library/react'
import useAlbums from '../src/useAlbums'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import {describe, test, expect} from 'vitest'
import { Album } from '../src/PhotoShowcase'

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('useAlbums', () => {
    test('should return empty list when request fails', () => {
        server.use(
            http.get('photoApi/albums', () => HttpResponse.error())
        )
        const {result} = renderHook(() => useAlbums())

        expect(result.current).toEqual([])
    })

    test('should return albums ordered by albumId when request succeeds', async () => {
        server.use(
            http.get('photoApi/albums', () => HttpResponse.json([
                {"albumId": 2, photos: []}, 
                {"albumId": 3, photos: []},
                {"albumId": 1, photos: []},
                {"albumId": 4, photos: []}
            ]))
        )

        const expectedResult: Album[] = [
            {"albumId": 1, photos: []}, 
            {"albumId": 2, photos: []},
            {"albumId": 3, photos: []},
            {"albumId": 4, photos: []}
        ]

        const {result} = renderHook(() => useAlbums())

        await waitFor(() => {
            expect(result.current).toEqual(expectedResult)
        })
        
    })
})