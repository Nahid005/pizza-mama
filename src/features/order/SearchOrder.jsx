import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigator = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if(!query) return;
        
        navigator(`order/${query}`);
        setQuery('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setQuery(e.target.value)} type="text" value={query} />
        </form>
    )
}

export default SearchOrder;