let jsonData = {};

const getAllWaingwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    jsonData = await response.json();
    displayList(jsonData);
}

const displayList = (data) => {
    const listOfHills =  document.querySelector("#wainwrights-list");
    listOfHills.innerText = "";
    data.forEach((hill) => {
        const hillItem = document.createElement("li");
        const hillInfo = document.createElement("p");
        hillInfo.innerText = JSON.stringify(hill);
        hillItem.appendChild(hillInfo);
        listOfHills.appendChild(hillItem);
    })
    // const hillItem = document.createElement("li");
    // console.log(hill);
    // hill.forEach((hillProperty) => {
    //     const hillInfo = document.createElement("section");
    //     const property = document.createElement("p");
    //     property.innerText = hillProperty;
    //     hillInfo.appendChild(property);

    // })
    // hillItem.appendChild(hillInfo);
    // listOfHills.appendChild(hillItem);
}

const filterNameForm= document.querySelector("#filter-hills-form");
filterNameForm.addEventListener("submit", (event) => {
    event.preventDefault();   
    const filterName = event.target["filter-text"].value
    if(filterName != ""){
        filteredData = jsonData.filter((hill) => {
            const name = hill.name.toLowerCase();
            if(name.includes(filterName)){
                return hill
            }
        })
        displayList(filteredData);
    } else {
        getAllWaingwrights();  
    }

    
})

getAllWaingwrights();