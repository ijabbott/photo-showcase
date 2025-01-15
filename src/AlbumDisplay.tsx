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

    const hideAlbum = (photos: Photo[], filter?: number[]) => {
        if(filter === undefined || filter?.length === 0) {
            return false;
        }

        return photos.every(photo => filter?.includes(photo.photoId))
    }

    return (
        <div className='album-wrapper' data-testid={`album-${albumId}`} hidden={hideAlbum(photos, filteredPhotoIds)}>
            <h4 className='album-header'>{albumTitle}</h4>
            <div className='album-photos'>
                {photos.map(photo => 
                    <PhotoDisplay key={photo.photoId} title={photo.title} url={photo.url} hidden={filteredPhotoIds.includes(photo.photoId)}/>
                )}
            </div>
        </div>
    )
}

export default AlbumDisplay