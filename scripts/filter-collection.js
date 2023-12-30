let suggestions = [
    "All",
    "Marvel",
    "DC",
    "Thor",
    "Hulk",
    "Captain America",
    "Ironman",
    "Loki",
    "DoctorStrange",
    "Vlogger",
    "Spiderman",
    "Antman",
    "Bucky",
    "Superman",
    "Batman",
    "Blackadam",
    "Bluebeetle",
    "CyberPunk",
    "Eminem",
    "Indian traditional",
    "Holi",
    "Diwali",
    "Raksha bandhan",
    "Independent day",
    "Indian Flag",
    "Culture of India",
    "Indian Culture",
];
// getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
input.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];

    // validateDesign(userData);

    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = '<li>' + data + '</li>';
        });
        searchInput.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].addEventListener("click", function () {

                validateDesign(allList[i].textContent);
                resultBox.innerHTML='';
                input.value = '';
            });
        }
    } else {
        searchInput.classList.remove("active"); //hide autocomplete box
    }
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
}




////----------------item filtering



let designList = [
    {
        name: "Spiderman",
        category: "Marvel",
        image: "./mokup/design/design-1.PNG"
    },
    {
        name: "Batman",
        category: "DC",
        image: "./mokup/design/design-2.PNG"
    },
    {
        name: "DoctorStrange",
        category: "Marvel",
        image: "./mokup/design/design-3.PNG"
    },
    {
        name: "Ironman",
        category: "Marvel",
        image: "./mokup/design/design-4.PNG"
    },
    {
        name: "Thor",
        category: "Marvel",
        image: "./mokup/design/design-5.PNG"
    },
    {
        name: "Loki",
        category: "Marvel",
        image: "./mokup/design/design-6.png"
    },
    {
        name: "Hulk",
        category: "Marvel",
        image: "./mokup/design/design-1.PNG"
    },
    {
        name: "Superman",
        category: "DC",
        image: "./mokup/design/design-2.PNG"
    },
    {
        name: "Flash",
        category: "DC",
        image: "./mokup/design/design-3.PNG"
    },
    {
        name: "Blackadam",
        category: "DC",
        image: "./mokup/design/design-4.PNG"
    },
    {
        name: "Bluebeetle",
        category: "DC",
        image: "./mokup/design/design-5.PNG"
    },
    {
        name: "CyberPunk",
        category: "CyberPunk",
        image: "./mokup/design/design-6.png"
    },
    {
        name: "Holi",
        category: "Indian Traditional",
        image: "./mokup/design/design-1.PNG"
    },
    {
        name: "Diwali",
        category: "Indian Traditional",
        image: "./mokup/design/design-2.PNG"
    },
    {
        name: "Raksha bandhan",
        category: "Indian Traditional",
        image: "./mokup/design/design-3.PNG"
    }
]


var filterDesign = [];

filterDesign = designList;


var ContainerDesign = document.querySelector('.design-cards');



var searchItem = document.querySelectorAll('.search-item');

searchItem.forEach(function (item) {
    item.addEventListener('click', function () {
        filterDesign = [];
        // Get the value of the data-design attribute
        var designValue = item.getAttribute('data-design');

        validateDesign(designValue);


    });
});

function validateDesign(value) {
    if(value.toLocaleLowerCase()==="all"){
        filterDesign=designList;
    }
    else{
    filterDesign = designList.filter(design => {
        if (design.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
            || design.category.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
            || design.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            || design.category.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {

            return design;
        }
    });
}

    showResult(filterDesign);
}

function showResult(filterDesign) {
    ContainerDesign.innerHTML='';
    filterDesign.forEach(design => {
        var card = '<div class="design-card">' +
            '   <div class="design-container">' +
            '       <img src="' + design.image + '" alt="" srcset="">' +
            '   </div>' +
            '</div>';

        ContainerDesign.innerHTML += card;
    });

}

showResult(filterDesign);


