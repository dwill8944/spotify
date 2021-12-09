
import React from 'react';

const BillboardNew = ({ billboard }) => {
  const { title, description } = billboard
  const defaultTitle = title ? title : ""
   const defaultDescription = description ? description : ""
  return (
    <>
    <h3>Create a New Billboard</h3>
    <form action="/billboards" method="post">
    <input
      type="text"
      placeholder="Billboard title"
      required
      defaultValue={defaultTitle}
      name="billboard[title]"
      />
       <input
     type="text"
     placeholder="Billboard description"
     defaultValue={defaultDescription}
     name="billboard[description]"
     
     />   
      <button type="submit">Add Billboard</button>
    </form>
      <a href="/billboards">Back to Billboards</a>
    </>
  )
}

export default BillboardNew