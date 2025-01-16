import './PhotoOverlay.css'

type PhotoOverlayProps = {
    photoTitle: string
}

const PhotoOverlay = ({photoTitle}: PhotoOverlayProps) => {
    return (
        <div className='photo-overlay' data-testid={`photo-overlay`}>
            <div>{photoTitle}</div>
        </div>
    )
}

export default PhotoOverlay