


import React, { useEffect, useState } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState()

    useEffect(()=>{
        const media = window.matchMedia(query);
        console.log(media);
        if (media.matches !== matches){
            setMatches(media.matches)

        }
        const listener=()=> setMatches(media.matches)
        window.addEventListener('resize',listener)
        return () => window.removeEventListener("resize", listener);

    },[matches,query])

return matches;
  
}

export default useMediaQuery