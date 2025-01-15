import { PhotoProvider, PhotoView } from 'react-photo-view'
import './PhotoDisplay.css'

type PhotoProps = {
    url: string,
    title: string
}

const PhotoDisplay = ({url, title}: PhotoProps) => {
    return (
        <PhotoProvider overlayRender={() => {
            return <div className='photo-overlay' data-testid={`photo-overlay`}>
                    <div>{title}</div>
                </div>
        }}>
            <PhotoView src={url}>
                <div className='photo-display'>
                    <div className='image-background'>
                        <img className='image' alt={title} src={url} loading="lazy"/>
                    </div>
                    <h4 className='photo-title'>{title}</h4>
                </div>
            </PhotoView>
        </PhotoProvider>
    )
}

export default PhotoDisplay