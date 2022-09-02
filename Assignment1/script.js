
const btn = document.getElementById('btn');
const list = document.getElementById("listItem");
const searchBox = document.getElementById('Search');


btn.addEventListener("click", () => {
    let inputValue = document.querySelector("input[type=text]").value;
    addValue(inputValue);
    document.querySelector("input[type=text]").value = "";
});

const addValue = value => {
    const newLi = document.createElement("li");
    const newbtn = document.createElement("input");

    newbtn.type = "submit";
    newbtn.value = "Delete";
    newbtn.addEventListener("click", () => {
        removeElement(newLi);
    });

    newLi.appendChild(document.createTextNode(value.toLowerCase() + " "));
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
    let allElements = []; 

    for (let i = 0; i < liValues.length; i++){
        allElements.push(liValues[i].innerText);
        list.removeChild(liValues[i]);
    }

    allElements = listSearch(allElements, searchBox.value.toLowerCase());

    if(allElements.length > 0) {
        for (let i = 0; i < allElements.length; i++) {
            addValue(allElements[i]);
        }
    }
    
});
