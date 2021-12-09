
import React from 'react'

const ArtistEdit = ({ billboard, artist }) => {

  const { id } = billboard 
  const { name, genre } = artist
  const defaultName = name ? name : ""
  const defaultGenre = genre ? genre : ""
  return (
    <>
      <h1>New artist from the Billboard </h1>
      <form action={`/billboards/${id}/artists/${artist.id}`} method="post">
          <input type="hidden" name="_method" value="patch" />
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="artist[name]"
        />
        <label>Genre</label>
        <textarea
          required 
          defaultValue={defaultGenre}
          name="artist[genre]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistEdit;