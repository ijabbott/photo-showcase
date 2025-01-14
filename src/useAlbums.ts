import { useEffect, useState } from "react"
import { Album } from "./PhotoShowcase"

const useAlbums = (): Album[] => {
      const [albums, setAlbums] = useState<Album[]>([])
    
      useEffect(() => {
        const fetchAlbums = async () => {
            await fetch("photoApi/albums", {
                headers: {
                    "lt_api_key": "lt_tech_showcase"
                }
            })
            .then((res) => res.json())
            .then((data) => setAlbums(data))
            .catch((e) => console.error(e))
        }

        fetchAlbums()
      }, [])
      
    return albums.sort((album1, album2) => album1.albumId - album2.albumId)
}

export default useAlbums