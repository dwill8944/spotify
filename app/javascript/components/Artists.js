import React from 'react'

const Artists = ({ billboard, artists }) => {

  const { id, title } = billboard
//   // const id = billboard.id
//   // const name = billboard.name
  // const url = `/billboards/${id}/artists/`
  return(
    <>
      <h1> all the artists from {title} </h1>
      <a href={`/billboards/${billboard.id}/artists/new`}>Add new artist</a>

      { artists.map( (artist) => (
        <>
           <h3>{artist.name}</h3>
          <a href={`/billboards/${billboard.id}/artists/${artist.id}`}>Show</a>
          <a href={`/billboards/${billboard.id}/artists/${artist.id}/edit`}>Edit</a>
          <a href={`/billboards/${billboard.id}/artists/${artist.id}`} data-method="delete">
            Delete
          </a> 
        </>
      ))}
    </>
  )
}

export default Artists;