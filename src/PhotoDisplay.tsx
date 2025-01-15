import { PhotoProvider, PhotoView } from 'react-photo-view'
import './PhotoDisplay.css'

type PhotoProps = {
    url: string,
    title: string,
    hidden?: boolean
}

const PhotoDisplay = ({url, title, hidden}: PhotoProps) => {
    return (
        <PhotoProvider overlayRender={() => {
            return <div className='photo-overlay' data-testid={`photo-overlay`}>
                    <div>{title}</div>
                </div>
        }}>
            <PhotoView src={url}>
                <div className='photo-display' hidden={hidden}>
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