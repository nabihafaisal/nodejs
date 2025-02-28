import { useEffect, useState } from "react"

export const useWindowsize =()=>{
    const [size,setsize ]=useState([0,0])

    useEffect(()=>{
        const updateSize=()=>{
            setsize([window.innerWidth,window.innerHeight])
        }
        window.addEventListener('resize',updateSize)
        return()=>window.removeEventListener('resize',updateSize)

    },[])
    return{
        width:size[0],
        height:size[1]
    }
}