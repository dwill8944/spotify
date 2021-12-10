// import React from 'react'

// const url = "http://localhost:3000/billboards/";

// const Billboards = ({ billboards }) => {
//     return (
//       <>
//         <h1> Billboards </h1>

//         <a href="/billboards/new">Add billboard</a>
//         { billboards.map( (billboard) => (
//           <>
//             <h3>{billboard.name}</h3>
//             <a href={`/billboards/${billboard.id}`}>Show</a>
//             <a href={`/billboards/${billboard.id}/edit`}>Edit</a>
           
//             <a href={`/billboards/${billboard.id}`} data-method='delete'>
//               Delete
//             </a>
//           </>
//         ) )}

//       </>
//     )
//   }
// //    you get all of the href from the localhost:3000/rails/info/routes
//   export default Billboards;
import React from 'react'

const Songs = ({ artist, songs }) => {

    const {id, name} = artist

    const url = `/artists/${id}/songs/`
    return(
        <>
        <h1>All songs from {name}</h1>
        {/* <a href={`/artists/${id}/songs/new`}>Add new song</a> */}
        { songs.map( (song) => (
            <>
                <h3>{song.title}</h3>
                <a href={`/artists/${artist.id}/songs/${song.id}`}>Show</a>
                <a href={`/artists/${artist.id}/songs/${song.id}/edit`}>Edit</a>
                <a href={`/artists/${artist.id}/songs/${song.id}`} data-method="delete"> delete</a>
            </>
        ))}
        </>
    )
}
export default Songs;