import React from 'react'

 const Billboard = ({ billboard }) => {
    
  const { id, title, created_at } = billboard
  return (
    <>
      <h3>{title}</h3>
      <p>
        Created: {created_at}, id: {id}
      </p>
      <a href="/billboards">Back</a>
      <br/>
      <a href={`/billboards/${id}/artists`}>Go to Artists</a>
      
      
    </>
  )
}

export default Billboard;