import { useEffect, useState } from "react"
import { Album } from "../PhotoShowcase"

const useAlbums = (): Album[] => {
      const [albums, setAlbums] = useState<Album[]>([])

      const API_KEY_HEADER =  import.meta.env.VITE_API_KEY_HEADER
      const API_KEY_VALUE = import.meta.env.VITE_API_KEY_VALUE
      const API_ROUTE = import.meta.env.VITE_ALBUMS_ROUTE

      useEffect(() => {
        const fetchAlbums = async () => {
            await fetch(`photoApi/${API_ROUTE}`, {
                headers: {
                    [API_KEY_HEADER]: API_KEY_VALUE
                }
            })
            .then((res) => res.json())
            .then((data:Album[]) => setAlbums(data))
            .catch((e) => console.error(e))
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchAlbums()
      }, [API_KEY_HEADER, API_KEY_VALUE])
      
    return albums.sort((album1, album2) => album1.albumId - album2.albumId)
}

export default useAlbums