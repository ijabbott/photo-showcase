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

const PhotoShowcase = () => {
  const albums:Album[] = useAlbums()
  const photos:Photo[] = albums.flatMap(album => album.photos)
  const helperText:string = 'No photos matching search criteria'

  const [searchText, setSearchText] = useState<string>('');
  const [filteredPhotoIds, setFilteredPhotoIds] = useState<number[]>([])


  const onSearchChange = (searchInput: string) => {
    setSearchText(searchInput)

    setFilteredPhotoIds(photos
      .filter(photo => !photo.title.toLowerCase().includes(searchInput))
      .map(photo => photo.photoId)
    )
  }

  const showHelperText = ():boolean => {
    return albums.length > 0 && filteredPhotoIds.length === photos.length
  }


  return (
    <div className='photo-showcase'>
      <div className='header'>
        <h1>Photo Showcase</h1>
        <label>
          Image Search: <input value={searchText} onChange={e => onSearchChange(e.target.value)}/>
        </label>
        <div hidden={!showHelperText()}>{helperText}</div>
      </div>
      
      <div className='albums'>
        {albums.map(album => 
          <AlbumDisplay 
            key={album.albumId}
            albumTitle={`Album ${album.albumId}`}
            photos={album.photos} albumId={album.albumId}
            filteredPhotoIds={filteredPhotoIds}
          />
        )}
      </div>
    </div>
  )
}

export default PhotoShowcase
