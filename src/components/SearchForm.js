import React from 'react';

const SearchForm = (props) => {
  return (
    <form onSubmit={props.handleOnSubmit} className="container">
      <input className="form-control mt-3 mb-3" type="text" value={props.searchValue} onChange={(e) => props.handleOnChange(e.target.value)} placeholder="Search recipes..."/> 
      <button type="submit" className="btn btn-dark btn-block mb-3">Search</button>
    </form>
  )
}

export default SearchForm
