let suggestions = [
    "All",
    "Marvel",
    "DC",
    "Thor",
    "Hulk",
    "Captain America",
    "Ironman",
    "summer",
    "sunset",
    "new year",
    "motivation",
    "Spiderman",
    "education",
    // "Antman",
    // "Bucky",
    "Superman",
    "Batman",
    // "Blackadam",
    // "Bluebeetle",
    "CyberPunk",
    "Eminem",
    "Indian traditional",
    "Holi",
    "Diwali",
    "Raksha bandhan",
    "indian revolution",
    "Independent day",
    "Indian Flag",
    "indian monument",
    "Indian Culture",
    "krantikari",
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
            if (data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()) || data.toLocaleLowerCase().includes(userData.toLocaleLowerCase()))
                return data;
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
                resultBox.innerHTML = '';
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
        name: "Captain america",
        category: "Marvel",
        image: "./mokup/design/captain-america.png"
    },
    {
        name: "Spiderman",
        category: "Marvel",
        image: "./mokup/design/spiderman.png"
    },
    {
        name: "Hulk",
        category: "Marvel",
        image: "./mokup/design/hulk.png"
    },
    {
        name: "Hulk with background",
        category: "Marvel",
        image: "./mokup/design/hulk-with-background.png"
    },
    {
        name: "Batman",
        category: "DC",
        image: "./mokup/design/design-6.png"
    },
    {
        name: "Batman",
        category: "DC",
        image: "./mokup/design/batman-2.png"
    },
    {
        name: "Batman",
        category: "DC",
        image: "./mokup/design/batman-3.png"
    },
    {
        name: "Ironman",
        category: "Marvel",
        image: "./mokup/design/ironman.png"
    },
    {
        name: "Ironman",
        category: "Marvel",
        image: "./mokup/design/ironman-2.png"
    },
    {
        name: "Thor",
        category: "Marvel",
        image: "./mokup/design/thor.png"
    },
    {
        name: "Superman",
        category: "DC",
        image: "./mokup/design/superman-2.png"
    },
    {
        name: "Superman",
        category: "DC",
        image: "./mokup/design/superman-3.png"
    },
    {
        name: "new year",
        category: "new year",
        image: "./mokup/design/new-year.png"
    },
    {
        name: "happy new year",
        category: "new year",
        image: "./mokup/design/new-year-2.png"
    },
    {
        name: "Flash",
        category: "DC",
        image: "./mokup/design/flash.png"
    },
    {
        name: "Sunset",
        category: "nature",
        image: "./mokup/design/sunset.png"
    },
    {
        name: "Sunset",
        category: "nature",
        image: "./mokup/design/sunset-2.png"
    },
    {
        name: "Summer",
        category: "nature",
        image: "./mokup/design/summer.png"
    },
    {
        name: "Summer-t-shirt-design",
        category: "nature",
        image: "./mokup/design/Summer-T-Shirt-Design.png"
    },
    {
        name: "Eat sleep game repeat",
        category: "funcky",
        image: "./mokup/design/other.png"
    },
    {
        name: "Raksha bandhan",
        category: "Indian Traditional",
        image: "./mokup/design/raksha-bandhan.png"
    },
    {
        name: "diwali",
        category: "Indian Traditional",
        image: "./mokup/design/diwali.png"
    },
    {
        name: "diwali",
        category: "Indian Traditional",
        image: "./mokup/design/diwali-2.png"
    },
    {
        name: "diwali",
        category: "Indian Traditional",
        image: "./mokup/design/diwali-3.png"
    },
    {
        name: "diwali",
        category: "Indian Traditional",
        image: "./mokup/design/diwali-4.png"
    },
    {
        name: "indian revolution",
        category: "revolution",
        image: "./mokup/design/indian-revolution.png"
    },
    {
        name: "indian revolution kashmir",
        category: "revolution",
        image: "./mokup/design/indian-revolution-kashmir.png"
    },
    {
        name: "never give up",
        category: "motivation",
        image: "./mokup/design/never-give-up.png"
    },
    {
        name: "never stop dream",
        category: "motivation",
        image: "./mokup/design/never-stop-dream.png"
    },
    {
        name: "holi",
        category: "Indian Traditional",
        image: "./mokup/design/holi.png"
    },
    {
        name: "holi",
        category: "Indian Traditional",
        image: "./mokup/design/holi-2.png"
    },
    {
        name: "education",
        category: "education",
        image: "./mokup/design/education.png"
    },
    {
        name: "education",
        category: "education",
        image: "./mokup/design/education-2.png"
    },
    {
        name: "education",
        category: "education",
        image: "./mokup/design/education-3.png"
    },
    {
        name: "indian culture",
        category: "culture",
        image: "./mokup/design/indian-culture.png"
    },
    {
        name: "independent day",
        category: "indian culture",
        image: "./mokup/design/independent-day.png"
    },
    {
        name: "indian navy",
        category: "indian culture",
        image: "./mokup/design/indian-navy.png"
    },
    {
        name: "krantikari",
        category: "krantikari",
        image: "./mokup/design/krantikari.png"
    },
    {
        name: "indian flag",
        category: "indian flag",
        image: "./mokup/design/Indian-Flag-Characters-Cheer.png"
    },
    {
        name: "indian flag",
        category: "indian flag",
        image: "./mokup/design/indian-flag.png"
    },
    {
        name: "Indian revolution",
        category: "revolution",
        image: "./mokup/design/Retro-fist-power-worker-revolution.png"
    },
    {
        name: "Indian monument",
        category: "indian culture",
        image: "./mokup/design/indian-monument.png"
    },
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
    if (value.toLocaleLowerCase() === "all" || value === null) {
        console.log(value);
        filterDesign = designList;
    }
    else {
        filterDesign = designList.filter(design => {
            if (design.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
                || design.category.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
                || design.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                || design.category.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                ||design.image.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {

                return design;
            }
        });
    }

    showResult(filterDesign);
}

function showResult(filterDesign) {
    ContainerDesign.innerHTML = '';
    if (filterDesign.length === 0) {

        ContainerDesign.classList.add("design-cards-disable");
        ContainerDesign.classList.remove('design-cards');
        var notfoundElement = document.createElement('div');
        notfoundElement.classList.add('design-not-found');
        var text = document.createElement('p');
        text.textContent = 'No Design Found';
        var button = document.createElement('button');
        button.textContent = 'View Design';
        button.setAttribute("onclick", "validateDesign('All')");
        notfoundElement.appendChild(text);
        notfoundElement.appendChild(button);
        ContainerDesign.appendChild(notfoundElement);


    } else {
        ContainerDesign.classList.add('design-cards');
        ContainerDesign.classList.remove("design-cards-disable");
        filterDesign.forEach(design => {
            var card = '<div class="design-card is-animated">' +
                '   <div class="design-container">' +
                '       <img src="' + design.image + '" alt="" srcset="">' +
                '   </div>' +
                '</div>';

            ContainerDesign.innerHTML += card;
        });
    }

}

showResult(filterDesign);


