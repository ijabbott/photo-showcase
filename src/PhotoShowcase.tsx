import AlbumDisplay from './AlbumDisplay'
import PhotoDisplay from './PhotoDisplay'
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
      {/* <PhotoDisplay title='Test Photo Title' url='https://showcase.leantechniques.com/image/welcome.jpg'/>
      <AlbumDisplay albumTitle='Album 1' photos={albums.at(1)?.photos || []}/> */}
      <h1>Photo Showcase</h1>
      <h2>Albums</h2>
      {albums.map(album => 
        <AlbumDisplay albumTitle={`Album ${album.albumId}`} photos={album.photos} albumId={album.albumId} />
      )}
    </>
  )
}

export default PhotoShowcase
