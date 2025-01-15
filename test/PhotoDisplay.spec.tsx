import {render, screen} from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import PhotoDisplay from '../src/PhotoDisplay'


describe('PhotoDisplay', () => {
    test('PhotoDisplay displays photo information', () => {
        const photo = {"photoId": 1, "url": "https://testPhotoUrl/testPhoto.jpg", "albumId": 1, "title": "testTitle"}

        render(<PhotoDisplay title={photo.title} url={photo.url}/>)

        const image = screen.getByAltText("testTitle")

        expect(screen.getByText("testTitle")).toHaveTextContent("testTitle")
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', photo.url)
    })
})