import { useState } from 'react'
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
  const [searchText, setSearchText] = useState('');
  
  const filterAlbums = (filterText: string) => {
    const photos = albums.flatMap(album => album.photos)
    const filteredPhotoIds = photos
      .filter(photo => !photo.title.toLowerCase().includes(filterText))
      .map(photo => photo.photoId)

    return filteredPhotoIds
  }

  return (
    <div className='photo-showcase'>
      <div className='header'>
        <h1>Photo Showcase</h1>
        <label>
          Image Search: <input value={searchText} onChange={e => setSearchText(e.target.value)}/>
        </label>
      </div>
      
      <div className='albums'>
        {albums.map(album => 
          <AlbumDisplay key={album.albumId} albumTitle={`Album ${album.albumId}`} photos={album.photos} albumId={album.albumId} filteredPhotoIds={filterAlbums(searchText)}/>
        )}
      </div>
    </div>
  )
}

export default PhotoShowcase
