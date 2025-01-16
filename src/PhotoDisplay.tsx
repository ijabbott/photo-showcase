import { PhotoProvider, PhotoView } from 'react-photo-view'
import './PhotoDisplay.css'
import { Photo } from './PhotoShowcase'
import PhotoOverlay from './PhotoOverlay'

type PhotoProps = {
    photos: Photo[],
    filteredPhotoIds: number[]
}

const PhotoDisplay = ({photos, filteredPhotoIds}: PhotoProps) => {
    return (
        <PhotoProvider overlayRender={({overlay}) => overlay}>
            {photos.map(photo => 
                <PhotoView key={photo.photoId} src={photo.url} overlay={<PhotoOverlay photoTitle={photo.title}/>}>
                    <div className='photo-display' hidden={filteredPhotoIds.includes(photo.photoId)}>
                        <div className='image-background'>
                            <img className='image' alt={photo.title} src={photo.url} loading="lazy"/>
                        </div>
                        <h4 className='photo-title'>{photo.title}</h4>
                    </div>
                </PhotoView>
            )}
        </PhotoProvider>
    )
}

export default PhotoDisplay