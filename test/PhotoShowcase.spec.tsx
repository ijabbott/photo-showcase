import {render, screen, waitFor, within} from '@testing-library/react'
import PhotoShowcase from '../src/PhotoShowcase'
import {describe, test, expect} from 'vitest'
import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'
import { mockSuccessfulResponse } from './mocks/mockApiResponses'

const server = setupServer(
    http.get('photoApi/albums', () => {
        return HttpResponse.json(mockSuccessfulResponse)
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('PhotoShowcase', () => {
    test('PhotoShowcase displays Photo Showcase heading text', async () => {
        render(<PhotoShowcase/>)

        await waitFor(() => {
            expect(screen.getByRole('heading', {name: 'Photo Showcase'})).toHaveTextContent('Photo Showcase')
        })
    })

    describe('Albums', () => {
        test('PhotoShowcase displays Album heading text', async () => {
            render(<PhotoShowcase/>)
    
            await waitFor(() => {
                expect(screen.getByRole('heading', {name: 'Albums'})).toHaveTextContent('Albums')
            })
        })
    
        test('PhotoShowcase displays Album title for each retrieved album', async () => {
            render(<PhotoShowcase/>)

            expect(await screen.findByRole('heading', {name: 'Album 1'})).toHaveTextContent('Album 1')
            expect(await screen.findByRole('heading', {name: 'Album 2'})).toHaveTextContent('Album 2')
            expect(await screen.findByRole('heading', {name: 'Album 3'})).toHaveTextContent('Album 3')
            expect(await screen.findByRole('heading', {name: 'Album 4'})).toHaveTextContent('Album 4')
        })

        test('PhotoShowcase displays photos under each album', async () => {
            render(<PhotoShowcase/>)

            const album1Element = await screen.findByTestId('album-1')
            const album4Element = await screen.findByTestId('album-4')

            const photo5 = within(album1Element).getByAltText('Photo5Album1')
            const photo6 = within(album4Element).getByAltText('Photo6Album4')
            const photo7 = within(album4Element).getByAltText('Photo7Album4')
            const photo8 = within(album4Element).getByAltText('Photo8Album4')

            expect(photo5).toBeInTheDocument()
            expect(photo6).toBeInTheDocument()
            expect(photo7).toBeInTheDocument()
            expect(photo8).toBeInTheDocument()
        })
    })
})