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
            <h4>{albumTitle}</h4>
            <div className='photo-wrapper'>
                {photos.map(photo => 
                    <PhotoDisplay title={photo.title} url={photo.url}/>
                    // <img alt={photo.title} src={photo.url} width="300" height="200"/>
                )}
            </div>
        </div>
    )
}

export default AlbumDisplay