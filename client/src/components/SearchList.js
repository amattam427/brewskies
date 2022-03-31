import React from 'react';


function SearchList({setSearchTerm}){
    function handleSearch(e){
        setSearchTerm(e.target.value)
    }

    return (
        <div className = "search-filter">
            <input 
                className = "search"
                type = 'text'
                id = 'search'
                placeholder = 'Search by state'
                onChange = {handleSearch}
                />
        </div>
    )
}




export default SearchList;