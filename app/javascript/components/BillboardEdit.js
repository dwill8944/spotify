
import React from 'react'

const BillboardEdit = ({billboard}) => {
  const { title, description, id } = billboard
  const defaultTitle = title ? title : ""
  const defaultDescription = description ? description : ""
  return (
    <>
    <h3>Create Edit Song</h3>
    <form action={`/billboards/${id}`} method="post">
    <input type='hidden' name='_method' value="patch" />
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
      <button type="submit">Update Song</button>
    </form>
      <a href="/billboards">Back to Billboards</a>
    </>
  )
}

export default BillboardEdit