import React from 'react';

function PageNumber(props) {

    const pager = props.apiData.pager;
    
    //const [page, setPage] = useState(1);

    if (!props.apiData.pager){
        return <p>Loading...</p>;
    } else {

        const nextPage = () => {
            props.setPageNumber(pager.page + 1);
        }

        const prevPage = () => {
            props.setPageNumber(pager.page - 1);
        }


        if (pager.page === 1) {
            return ( 
                <div>
                    <label>Page {pager.page} of {pager.pageCount}</label>
                    <button onClick={nextPage}>Next page</button>
                </div>
            );
        } else if (pager.pageCount === pager.page) {
            return ( 
                <div>
                    <button onClick={prevPage}>Previous page</button>
                    <label>Page {pager.page} of {pager.pageCount}</label>
                </div>
            );
            
        } else {
            return ( 
                <div>
                    <button onClick={prevPage}>Previous page</button>
                    <label>Page {pager.page} of {pager.pageCount}</label>
                    <button onClick={nextPage}>Next page</button>
                </div>
            );
        }
    }



    
    
}

export default PageNumber;