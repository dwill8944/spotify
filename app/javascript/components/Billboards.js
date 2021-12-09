import React from 'react'

const url = "http://localhost:3000/billboards/";

const Billboards = ({ billboards }) => {
    return (
      <>
        <h1> Billboards </h1>
          
        <a href="/billboards/new">Add billboard</a>
        { billboards.map( (billboard) => (
          <>
            <h3>{billboard.title}</h3>
             <a href={`/billboards/${billboard.id}`}>Show</a>
            <a href={`/billboards/${billboard.id}/edit`}>Edit</a>
           
            <a href={`/billboards/${billboard.id}`} data-method='delete'>
              Delete
            </a> 
          </>
        ) )}

      </>
    )
  }
//    you get all of the href from the localhost:3000/rails/info/routes
  export default Billboards;