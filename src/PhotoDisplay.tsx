type PhotoProps = {
    url: string,
    title: string
}

const PhotoDisplay = ({ url, title}: PhotoProps) => {

    return (
        <>
            <h4>{title}</h4>
            <img alt={title} src={url} width="300" height="200"/>
        </>
    )
}

export default PhotoDisplay