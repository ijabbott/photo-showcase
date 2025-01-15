import { Photo } from "./PhotoShowcase"

type AlbumDisplayProps = {
    albumTitle: string,
    photos: Photo[],
    albumId?: number
}

const AlbumDisplay = ({albumTitle, photos, albumId}: AlbumDisplayProps) => {

    return (
        <div data-testid={`album-${albumId}`}>
            <h4>{albumTitle}</h4>
            {photos.map(photo => 
                <img alt={photo.title} src={photo.url} width="300" height="200"/>
            )}
        </div>
    )
}

export default AlbumDisplay