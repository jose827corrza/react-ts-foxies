
import { RandomFoxProps } from '@/src/types/props';
import { Inter } from 'next/font/google'
import React, { MouseEventHandler } from 'react';
// import styles from '@/styles/Home.module.css'
import { RandomFox } from './../src/components/RandomFox';

const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
const random = () => Math.floor(Math.random() * 122) + 1;


export default function Home() {
  const [images, setImagesSet] = React.useState<Array<RandomFoxProps>>([])

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${random()}.jpg`
    setImagesSet([...images, {id, imageUrl: url}])
  }

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello, to the world of Foxes</h1>
      <button 
        className='px-3 py-2'
        onClick={handleClick}
        >Load more foxes</button>
      {
        images.map(({id, imageUrl}) => (
          <div className="p-4" key={id}>
            <RandomFox id={id} imageUrl={imageUrl} />
          </div>
        ))
      }
    </>
  )
}
