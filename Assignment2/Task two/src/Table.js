import React from 'react';

function Table(props) {

  const data = props.apiData.results;
  // console.log(data);

  

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
    const listItems =  data.map((element) => 
    <tr>
      <td>{element.Country}</td>
      <td>{element.Continent}</td>
      <td>{element.Population}</td>
      <td>{element.PopulationGrowth}</td>
    </tr>
  );

  const handleOrder = (event) => {
    if (props.order === event.target.dataset.value + ":ASC"){
      props.setOrder(event.target.dataset.value + ":DESC");
    } else {
      props.setOrder(event.target.dataset.value + ":ASC");
    }

  }

  const handleFilter = () => {
    let checkboxes = document.getElementsByTagName("input");
    let filterList = "";

    for (let checkbox of checkboxes){
      if (checkbox.checked){
        if (filterList === ""){
          filterList += checkbox.value;
        } else {
          filterList += "," + checkbox.value;
        }
        
      }
    }

    props.setContinentCode(filterList);

  }
  
    return <div>
      <form>
        <input type="checkbox" id='Europe' value={"EU"} onClick={handleFilter}/>
        <label for="Europe">Europe</label>

        <input type="checkbox" id='Asia' value={"AS"} onClick={handleFilter}/>
        <label for="Asia">Asia</label>

        <input type="checkbox" id='Africa' value={"AF"} onClick={handleFilter}/>
        <label for="Africa">Africa</label>

        <input type="checkbox" id='Oceania' value={"OC"} onClick={handleFilter}/>
        <label for="Oceania">Oceania</label>

        <input type="checkbox" id='NorthAmerica' value={"NA"} onClick={handleFilter}/>
        <label for="NorthAmerica">North America</label>

        <input type="checkbox" id='SouthAmerica' value={"SA"} onClick={handleFilter}/>
        <label for="SouthAmerica">SouthAmerica</label>
      </form>
      <table>
        <thead>
          <tr>
            <th data-value="Country" onClick={handleOrder}>Country</th>
            <th data-value="Continent" onClick={handleOrder}>Continent</th>
            <th data-value="Population" onClick={handleOrder}>Population </th>
            <th data-value="PopulationGrowth" onClick={handleOrder}>Population Growth</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>    
    </table>
    </div>;}
}

export default Table;
