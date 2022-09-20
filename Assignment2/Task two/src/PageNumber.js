import React, { useState } from 'react';

function PageNumber(props) {
    console.log(props);
    
    const [page, setPage] = useState(1);
    console.log(page);

    const nextPage = (event) => {
        setPage(page + 1)
        event.preventDefault();
        props.setPageNumber(page)
    }

    return ( 
        <div>
            <button>Last page</button>
            <button onClick={nextPage}>Next page</button>
        </div>
     );
}

export default PageNumber;