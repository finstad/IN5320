
const btn = document.getElementById('btn');
const list = document.getElementById("listItem");
const searchBox = document.getElementById('Search');
 

btn.addEventListener("click", () => {
    let inputValue = document.querySelector("input[type=text]").value;
    addValue(inputValue);
    document.querySelector("input[type=text]").value = "";
});

const addValue = async (value) => {
    const newLi = document.createElement("li");
    const newbtn = document.createElement("input");
    let population = await setPopulation(value);
    console.log(population);

    newbtn.type = "submit";
    newbtn.value = "Delete";
    newbtn.addEventListener("click", () => {
        removeElement(newLi);
    });

    
    newLi.appendChild(document.createTextNode(value.toLowerCase() + " " + population + " "));
    newLi.appendChild(newbtn);
    list.appendChild(newLi);
}

const removeElement = (el) => {
    list.removeChild(el);
}

const strStartsWith = (element, searchWord) => {
    if (!element.startsWith(searchWord)){
        return false;
    }

    return true;
}

const listSearch = (list, searchWord) => {
    
    let filteredList = list.filter((x, y) => {return strStartsWith(x, searchWord);});
    return filteredList;

}

searchBox.addEventListener('input', () => {
    let liValues = Array.from(list.children);
    let allElements = liValues.map(el => el.innerText);

    let filteredList = listSearch(allElements, searchBox.value.toLowerCase());

    for (let i = 0; i < liValues.length; i++) {
        if (filteredList.includes(allElements[i])){
            liValues[i].style.display = "";
        } else {
            liValues[i].style.display = "none";
        }
    }
    
});

const setPopulation = async (value) => {
    return fetch('https://d6wn6bmjj722w.population.io:443/1.0/population/'+ value +'/today-and-tomorrow/')
                .then(response => response.json())
                .then(data => data.total_population[0].population);
};





