import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';

const Search: React.FC = () => {
    const [search, setSearch] = useState('');
    const history = useHistory();

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setSearch(value);
    }
    
    const submitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter" && search) {
            history.push({
                pathname:'/search',
                search: `q=${search.trim()}&type=users`
            })
        }
    }
    return (
        <>
        <form className="d-flex">
            <input 
            type="search"
            className="form-control me-2" 
            placeholder="Search..." 
            aria-label="Search"
            onChange={onSearchChange}
            onKeyDown={submitHandler}
            />
            <button className="btn btn-outline-light" type="submit">search</button>
        </form>
        </>
    )
}

export default Search;