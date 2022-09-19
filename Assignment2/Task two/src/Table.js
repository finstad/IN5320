function Table(props) {

  const data = props.apiData.results;
  console.log(data);


  

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
  
    return <table>
    <th>Country</th>
    <th>Continent</th>
    <th>Population </th>
    <th>Population Growth</th>
    {listItems}
    </table>;
  }
}

export default Table;
