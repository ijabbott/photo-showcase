import {render, screen, waitFor} from '@testing-library/react'
import PhotoShowcase from '../src/PhotoShowcase'
import {describe, test, expect} from 'vitest'
import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'


const server = setupServer(
    http.get('photoApi/albums', () => {
        return HttpResponse.json([{"albumId": 2}, {"albumId": 3}, {"albumId": 1}, {"albumId": 4}])
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('PhotoShowcase', () => {
    test('PhotoShowcase displays Photo Showcase heading text', () => {
        render(<PhotoShowcase/>)

        expect(screen.getByRole('heading', {name: 'Photo Showcase'})).toHaveTextContent('Photo Showcase')
    })

    describe('Albums', () => {
        test('PhotoShowcase displays Album heading text', () => {
            render(<PhotoShowcase/>)
    
            expect(screen.getByRole('heading', {name: 'Albums'})).toHaveTextContent('Albums')
        })
    
        test('PhotoShowcase displays Album title for each retrieved album', async () => {
            render(<PhotoShowcase/>)
            
            expect(await screen.findByRole('heading', {name: 'Album 1'})).toHaveTextContent('Album 1')
            expect(await screen.findByRole('heading', {name: 'Album 2'})).toHaveTextContent('Album 2')
            expect(await screen.findByRole('heading', {name: 'Album 3'})).toHaveTextContent('Album 3')
            expect(await screen.findByRole('heading', {name: 'Album 4'})).toHaveTextContent('Album 4')
        })
    })
})