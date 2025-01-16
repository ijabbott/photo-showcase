import {render, screen, waitFor, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {describe, test, expect} from 'vitest'
import PhotoDisplay from '../src/PhotoDisplay'

describe('PhotoDisplay', () => {
    test('PhotoDisplay displays photo with title', async () => {
        const photo = {"photoId": 1, "url": "https://testPhotoUrl/testPhoto.jpg", "albumId": 1, "title": "testTitle"}

        render(<PhotoDisplay photos={[photo]} filteredPhotoIds={[]}/>)

        const image = screen.getByAltText("testTitle")

        expect(screen.getByText("testTitle")).toHaveTextContent("testTitle")
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', photo.url)

    })

    test('PhotoDisplay displays overlay when clicked', async () => {
        const photo = {"photoId": 1, "url": "https://testPhotoUrl/testPhoto.jpg", "albumId": 1, "title": "testTitle"}

        render(<PhotoDisplay photos={[photo]} filteredPhotoIds={[]}/>)

        const image = screen.getByAltText("testTitle")

        userEvent.click(image)

        await waitFor(() => {
            const overlay = screen.getByTestId('photo-overlay')
            expect(within(overlay).getByText(photo.title)).toHaveTextContent(photo.title)
            expect(image).toBeInTheDocument()
            expect(image).toHaveAttribute('src', photo.url)
        })
    })
})