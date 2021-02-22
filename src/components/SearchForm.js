import React from 'react';

const SearchForm = (props) => {
  return (
    <form onSubmit={() => props.handleOnSubmit()}>
      <input type="text" value={props.searchValue} onChange={(e) => props.handleOnChange(e.target.value)}/> 
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
