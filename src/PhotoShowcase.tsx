import AlbumDisplay from './AlbumDisplay'
import './PhotoShowcase.css'
import useAlbums from './useAlbums'

export type Photo = {
  photoId: number,
  url: string,
  albumId: number,
  title: string
}

export type Album = {
  albumId: number,
  photos: Photo[]
}

function PhotoShowcase() {
  const albums = useAlbums()

  return (
    <>
      <h1>Photo Showcase</h1>
      <h2>Albums</h2>
      {albums.map(album => 
        <AlbumDisplay key={album.albumId} albumTitle={`Album ${album.albumId}`} photos={album.photos} albumId={album.albumId} />
      )}
    </>
  )
}

export default PhotoShowcase
