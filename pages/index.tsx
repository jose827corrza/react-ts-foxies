
import { LazyImageProps } from '@/src/types/props';
import { Inter } from 'next/font/google'
import React, { MouseEventHandler } from 'react';
// import styles from '@/styles/Home.module.css'
import { LazyImage } from '../src/components/LazyImage';

const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
const random = () => Math.floor(Math.random() * 122) + 1;


export default function Home() {
  const [images, setImagesSet] = React.useState<Array<LazyImageProps>>([])
  const [isDark, setIsDark] = React.useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${random()}.jpg`
    setImagesSet([...images, { src: url}])
  }

  const toogleDarkMode = () => {
    if (!isDark) {
        document.documentElement.classList.add('dark')
        console.log('activated dark mode');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark')
        console.log('Deactivated dark mode');
        setIsDark(false);
      }
  }

  return (
    <div className={`bg-slate-100 dark:bg-gray-500 ${images.length > 3 ? 'h-max': 'h-screen'}`}>
      <h1 className='text-3xl font-bold font-splineSans text-center dark:text-white'>Hello, to the world of Foxes</h1>
      <div className='flex justify-end'>
        <button 
          className='border border-slate-200 px-3 py-2 bg-green-400 hover:border-green-600 ml-4 rounded-lg fixed mr-4'
          onClick={handleClick}
          >Load more foxes
        </button>
      </div>
        <button
          onClick={toogleDarkMode}
          className="px-3 py-2 dark:bg-cyan-400 bg-cyan-700 ml-4 rounded-lg fixed"
        >
          {isDark ? 'Light Mode':'Dark Mode'}
        </button>
      {
        images.map(({ src}, index) => (
          <div className="p-4" key={src}>
            <LazyImage 
              src={src} 
              alt={src}
              width='320'
              height='auto'
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("holi!");
              }}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} loaded`, img);
                
              }}
              />
          </div>
        ))
      }
    </div>
  )
}
