import React, { useState } from 'react';


function PageSize(props) {
    const [pageNumber, setPageNumber] = useState(10)

    const onChange = event => {
        setPageNumber(event.target.value);
        handleChange();
    }

    const handleChange = () => {
        // event.preventDefault();
        props.setPageSize(pageNumber);
    }

    return ( 
        <div>
            <select name="pageSize" value={pageNumber} onChange={onChange}>
                <option selected value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
     );
}

export default PageSize;