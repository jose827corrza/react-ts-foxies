/* eslint-disable @next/next/no-img-element */
import React, {useRef, useEffect, useState, ImgHTMLAttributes} from 'react'
import type {LazyImageProps} from '../types/props'

const GRAY_BASE_SQUARE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
type ImageNative = ImgHTMLAttributes<HTMLImageElement>
const testVar: GlobalTest = 'test'

type Props = LazyImageProps & ImageNative

export const LazyImage = ({src, onLazyLoad, ...imgProps}: Props):  JSX.Element => {
  const node = useRef<HTMLImageElement>(null) // Inicialiazarlo en null evita que se ponga por defecto "udefined"
  const [currentSrc, setCurrentSrc] = useState<string>(GRAY_BASE_SQUARE)
  const [isLazyLoaded, setIsLazyLoaded] = useState(false)

  useEffect(() => {
    if(isLazyLoaded){
      return ;
    }


    // New observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting || !node.current){ 
          return ;
        }
        setCurrentSrc(src)
        observer.disconnect()
        setIsLazyLoaded(true)    

        if(typeof onLazyLoad === 'function'){

          onLazyLoad(node.current)
        }
      })
    })
  
    // Observe node
    if(node.current){
      observer.observe(node.current) // Node is a reference, the value is always in .current
    }
    // Disconnect
    return () => {
      observer.disconnect()
    }
  },[src, isLazyLoaded, onLazyLoad])


  return (
    <img 
      ref={node}
      src={currentSrc}
      className="mx-auto rounded-md bg-gray-300"
      {...imgProps}
      alt={currentSrc}
      />
  )
}
