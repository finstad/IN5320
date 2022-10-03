import React, { useState } from 'react';


function PageSize(props) {
    const [currentNumber, setCurrentNumber] = useState(10)


    const handleChange = (event) => {
        setCurrentNumber(event.target.value)
        props.setPageSize(event.target.value);

    }

    return ( 
        <div>
            <label for="pageSize">Select table size</label>
            <select id="pageSize" name="pageSize" value={currentNumber} onChange={handleChange}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select> 
        </div>
     );
}

export default PageSize;