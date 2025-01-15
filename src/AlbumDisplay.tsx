import PhotoDisplay from "./PhotoDisplay"
import { Photo } from "./PhotoShowcase"
import './AlbumDisplay.css'

type AlbumDisplayProps = {
    albumTitle: string,
    photos: Photo[],
    albumId?: number
}

const AlbumDisplay = ({albumTitle, photos, albumId}: AlbumDisplayProps) => {

    return (
        <div data-testid={`album-${albumId}`}>
            <h4 className='album-header'>{albumTitle}</h4>
            <div className='album-wrapper'>
                {photos.map(photo => 
                    <PhotoDisplay key={photo.photoId} title={photo.title} url={photo.url}/>
                )}
            </div>
        </div>
    )
}

export default AlbumDisplay