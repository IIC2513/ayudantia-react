function Card({text, clase}) {

  return (
    <>
      <div id={clase}>
        <h2>Lo bueno de esta etiqueta es que la puedes reutilizar en distintos archivos</h2>
        <h3>También puedes darles distintos textos como este:</h3>
        <h3>{text}</h3>
      </div>
    </>
  )
}

export default Card
