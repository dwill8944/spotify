// import React from 'react'

// const SongEdit = ({ artist, song }) => {

//   const { id, name } = artist
//   const { title, body } = song
//   const defaultTitle = title ? title : ""
//   const defaultBody = body ? body : ""
//   return (
//     <>
//       <h1>New song from the artist {name}</h1>
//       <form action={`/artists/${id}/songs/${artist.id}`} method="post">
//         <input type="hidden" name="_method" value="patch" />
//         <label>Title</label>
//         <input 
//           type="text"
//           required 
//           defaultValue={defaultTitle}
//           name="song[title]"
//         />
//         <label>Body</label>
//         <textarea
//           required 
//           defaultValue={defaultBody}
//           name="song[body]"
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }

// export default ArtistEdit;