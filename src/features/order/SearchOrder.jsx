import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if(!query) return;
        
        navigate(`order/${query}`);
        setQuery('')
    }
    
    return (
        <form onSubmit={handleSubmit} className="w-full">
            <input className="input w-full" onChange={(e) => setQuery(e.target.value)} type="text" value={query} placeholder="Search with order ID" />
        </form>
    )
}

export default SearchOrder;