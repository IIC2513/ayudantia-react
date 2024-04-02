import { useState } from 'react'
import Card from './card';
import './Home.css'

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Card clase="home-box" text="¡Gracias por venir a la ayudantía!"/>
    </>
  )
}

export default Home;