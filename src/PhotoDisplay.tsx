import './PhotoDisplay.css'

type PhotoProps = {
    url: string,
    title: string
}

const PhotoDisplay = ({ url, title}: PhotoProps) => {

    return (
        <div className='photo-display'>
            <img alt={title} src={url} width="300" height="200"/>
            <h4 className='photo-title'>{title}</h4>
        </div>
    )
}

export default PhotoDisplay