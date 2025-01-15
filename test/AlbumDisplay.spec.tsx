import {render, screen} from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import AlbumDisplay from '../src/AlbumDisplay'

describe('AlbumDisplay', () => {
    test('AlbumDisplay displays album title', () => {
        const albumTitle = 'Album 1'
        const photo1 = {"photoId": 1, "url": "https://testPhotoUrl/testPhoto1.jpg", "albumId": 1, "title": "testTitle1"}

        render(<AlbumDisplay albumTitle={albumTitle} photos={[photo1]} albumId={photo1.albumId} filteredPhotoIds={[]}/>)

        expect(screen.getByRole('heading', {name: albumTitle})).toHaveTextContent(albumTitle)
    })

    test('AlbumDisplay displays all photos in album', () => {
        const albumTitle = 'Album 1'
        const photo1 = {"photoId": 1, "url": "https://testPhotoUrl/testPhoto1.jpg", "albumId": 1, "title": "testTitle1"}
        const photo2 = {"photoId": 2, "url": "https://testPhotoUrl/testPhoto2.jpg", "albumId": 1, "title": "testTitle2"}

        render(<AlbumDisplay albumTitle={albumTitle} photos={[photo1, photo2]} albumId={photo1.albumId} filteredPhotoIds={[]}/>)

        const image1 = screen.getByAltText("testTitle1")
        const image2 = screen.getByAltText("testTitle2")

        expect(image1).toBeInTheDocument()
        expect(image2).toBeInTheDocument()
        expect(image1).toHaveAttribute('src', photo1.url)
        expect(image2).toHaveAttribute('src', photo2.url)
    })
})