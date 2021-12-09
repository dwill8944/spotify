
import React from 'react';

const Artist = ({ billboard, artist }) => {

    const { id, title } = billboard
    return (
        <>
            <h1>Artist: {artist.name}</h1>
            <h1>Billboard: {title}</h1>
            <p>
                {artist.genre}
            </p>
            <a href={`/billboards/${id}`}>Show page of {title}</a>
        </>
    )
}

export default Artist