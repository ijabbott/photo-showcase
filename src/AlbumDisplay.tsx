import PhotoDisplay from "./PhotoDisplay"
import { Photo } from "./PhotoShowcase"
import './AlbumDisplay.css'

type AlbumDisplayProps = {
    albumTitle: string,
    photos: Photo[],
    albumId: number,
    filteredPhotoIds: number[]
}

const AlbumDisplay = ({albumTitle, photos, albumId, filteredPhotoIds}: AlbumDisplayProps) => {

    const hideAlbum = (photos: Photo[], photoIdsToFilter?: number[]):boolean => {
        if(photoIdsToFilter === undefined || photoIdsToFilter?.length === 0) {
            return false;
        }

        return photos.every(photo => photoIdsToFilter?.includes(photo.photoId))
    }

    return (
        <div className='album-wrapper' data-testid={`album-${albumId}`} hidden={hideAlbum(photos, filteredPhotoIds)}>
            <h2 className='album-header'>{albumTitle}</h2>
            <div className='album-photos'>
                <PhotoDisplay photos={photos} filteredPhotoIds={filteredPhotoIds}/>
            </div>
        </div>
    )
}

export default AlbumDisplay