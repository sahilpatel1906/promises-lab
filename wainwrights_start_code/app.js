let jsonData = {};

const getAllWaingwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    jsonData = await response.json();
    const listOfHills =  document.querySelector("#wainwrights-list");
    jsonData.forEach((hill) => {
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

const filterData = () => {
    const filterName = document.querySelector("#filter-submit")
}

getAllWaingwrights();