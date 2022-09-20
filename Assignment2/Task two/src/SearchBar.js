import React, {useState} from 'react';

function SearchBar(props) {

    const [search, setSearch] = useState("")

    const onChange = event => {
        setSearch(event.target.value);
    }

    const onClick = (event) => {
        event.preventDefault();
        props.setSearchQuery(search);
    }



    return (
        <div>
        <input onChange={onChange} type="text"></input>
        <button onClick={onClick}>Search</button>
    </div>
    );
}

export default SearchBar;