import React from 'react';

const SongEdit = ({ artist, song}) => {
    const { id, name} = artist
    const { title, category } = song
    const defaultTitle = title ? title : ""
    const defaultCategory = category ? category : ""
    return (
        <>
        <h1>New song from {name}</h1>
        <form action={`/artists/${id}/songs/${song.id}`} method="post">
            <input type="hidden" name="_method" value="patch" />
            <label>Title</label>
            <input
                type="text"
                required
                defaultValue={defaultTitle}
                name="song[title]"
                />
                <label>Category</label>
                <textarea
                required
                defaultValue={defaultCategory}
                name="song[category]"
                ></textarea>
                <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default SongEdit;