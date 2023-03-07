/* eslint-disable @next/next/no-img-element */
import React from 'react'
import type {RandomFoxProps} from '../types/props'

export const RandomFox = ({id, imageUrl}: RandomFoxProps) => {
  return (
    <img 
      width={320} 
      height='auto' 
      src={imageUrl} 
      alt={id.toString()}
      className="mx-auto rounded-md bg-gray-300"
      />
  )
}
