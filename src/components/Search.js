import React from 'react';

export default function Search() {
  return (
    <div className="container mb-4">
      <h2 className="mb-3">Search for a character</h2>
      <input className="form-control mb-3" placeholder="Type to search..."></input>
      <button className="btn btn-primary">Search</button>
    </div>
  )
}
