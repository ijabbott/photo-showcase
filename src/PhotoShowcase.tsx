import { useEffect, useState } from 'react'
import './PhotoShowcase.css'

function PhotoShowcase() {
  const [albumIds, setAlbumIds] = useState([])

  useEffect(() => {
    fetch("photoApi/albums", {
      headers: {
        "lt_api_key": "lt_tech_showcase"
      }
    })
    .then((res) => res.json())
    .then((data) => {
      const albumIds = data.map((album: { albumId: number }) => album.albumId)
      setAlbumIds(albumIds)
    })
  }, [])

  return (
    <>
      <h1>Photo Showcase</h1>
      <h2>Albums</h2>
      {albumIds.map(albumId => <h3>{`Album ${albumId}`}</h3>)}
    </>
  )
}

export default PhotoShowcase
