// import React from "react"

// const SongNew = ({ song }) => {

//   // attr that your obj 
//   const { name } = song
//   // in case there are error it saves the user input
//   // one per attr
//   const defaultName = name ? name : ""
//   return (
//     <>
//       <h1>Create new song</h1>
//       <form action="/song" method="post">
//         <input
//           type="text"
//           placeholder="Song name"
//           required
//           // these next ones are a must
//           defaultValue={defaultName}
//           name="song[name]"
//         />
//         <button type="submit">Add Song</button>
//       </form>
//       <a href="/artists">Back to Artists</a>
//     </>
//   )
// }

// export default SongNew;