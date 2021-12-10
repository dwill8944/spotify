import React from 'react';
const Song = ({ artist, song }) => {

    const {id, name} = artist
    const { title, category } = song
    return (
        <>
        <h1>Song: {title}</h1>
        <h1>artist: {name}</h1>
        <p>
            {category}
        </p>
        <a href={`/artists/${id}`}>Show page of {name}</a>
        </>
    )
}

export default Song;