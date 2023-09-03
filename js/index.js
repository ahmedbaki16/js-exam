var homeData = [];
var categoryData = [];
var areaData = [];
var ingredientData = [];
var searchName = [];
var serachN ="";

(async function (){
    var https = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    var reply = await https.json();
    homeData = reply.meals;

    var display = ``;
    for(i=0;i<homeData.length;i++){
        display += `
        <div class="col-lg-3">
           <div class="meal position-relative">
              <img src="${homeData[i].strMealThumb}" alt="" class="w-100">
              <div class="layer position-absolute bottom-0 left-0 d-flex flex-column justify-content-center">
                 <h3>${homeData[i].strMeal}</h3>
              </div>
           </div>
        </div>`;
    }
    document.getElementById("display-home").innerHTML=display;
})();


(async function (){
    var https = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    var reply = await https.json();
    categoryData = reply.categories;
})();

(async function (){
    var https = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    var reply = await https.json();
    areaData = reply.meals;
})();

(async function (){
    var https = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    var reply = await https.json();
    ingredientData = reply.meals;
    
})();

//Navbar Function

function menubutton(){

    if (document.querySelector(".nav-bar i").classList.contains("fa-x")){
        document.querySelector(".nav-bar i").classList.replace("fa-x","fa-align-justify");
        document.querySelector(".toggle-bar").classList.add("d-none");

    } 
    else if (document.querySelector(".nav-bar i").classList.contains("fa-align-justify")){
        document.querySelector(".nav-bar i").classList.replace("fa-align-justify","fa-x");
        document.querySelector(".toggle-bar").classList.remove("d-none");
    }
}

//Toggle Functions

function search(){
    document.getElementById("home").classList.add("d-none");
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("category").classList.add("d-none");
    document.getElementById("area").classList.add("d-none");
    document.getElementById("ingredient").classList.add("d-none");
    document.getElementById("search").classList.remove("d-none");
    menubutton();
}

function category(){
    document.getElementById("home").classList.add("d-none");
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("search").classList.add("d-none");
    document.getElementById("area").classList.add("d-none");
    document.getElementById("ingredient").classList.add("d-none");
    document.getElementById("category").classList.remove("d-none");
    /*                   */
    menubutton();

        var display = ``;
        for(i=0;i<categoryData.length;i++){
        display += ` 
        <div class="col-lg-3">
            <div class="meal position-relative">
                <img src="${categoryData[i].strCategoryThumb}" alt="" class="w-100">
                <div class="layer position-absolute bottom-0 left-0 text-center">
                    <h3 id="cat${i}">${categoryData[i].strCategory}</h3>
                    <p class="d-block text-truncate">${categoryData[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("display-category").innerHTML = display;
}


function area(){
    document.getElementById("home").classList.add("d-none");
    document.getElementById("search").classList.add("d-none");
    document.getElementById("category").classList.add("d-none");
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("ingredient").classList.add("d-none");
    document.getElementById("area").classList.remove("d-none");
    menubutton();
    
    
    var display = ``;
    for(i=0;i<areaData.length;i++){
    display += `
        <div class="col-lg-3">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h3>${areaData[i].strArea}</h3>
        </div>`;
    }
    document.getElementById("display-area").innerHTML = display;
}

function ingredient(){
    document.getElementById("home").classList.add("d-none");
    document.getElementById("search").classList.add("d-none");
    document.getElementById("category").classList.add("d-none");
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("area").classList.add("d-none");
    document.getElementById("ingredient").classList.remove("d-none");
    menubutton();
    
    var display = ``;
    for(i=0;i<20;i++){
    display += `
        <div class="col-lg-3">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3>${ingredientData[i].strIngredient}</h3>
        <p class="d-block text-truncate">${ingredientData[i].strDescription}</p>
        </div>`;
    }
    document.getElementById("display-ingredient").innerHTML = display;
}

function contact(){
    document.getElementById("home").classList.add("d-none");
    document.getElementById("search").classList.add("d-none");
    document.getElementById("category").classList.add("d-none");
    document.getElementById("area").classList.add("d-none");
    document.getElementById("ingredient").classList.add("d-none");
    document.getElementById("contact").classList.remove("d-none");
    menubutton();
}

//Search Functions

async function findname(){
    var api = "https://www.themealdb.com/api/json/v1/1/search.php?s="+searchN;
    var https = await fetch(api);
    var reply = await https.json();
    searchName = reply.meals;
    console.log(searchName)
}

function namesearch() {
    var element = document.getElementById("namesearch").value;
    searchN = element;
    findname();
    var display = ``;
    for(i=0;i<searchName.length;i++){
        display += `
        <div class="col-lg-3">
           <div class="meal position-relative">
              <img src="${searchName[i].strMealThumb}" alt="" class="w-100">
              <div class="layer position-absolute bottom-0 left-0 d-flex flex-column justify-content-center">
                 <h3>${searchName[i].strMeal}</h3>
              </div>
           </div>
        </div>`;
    }
    document.getElementById("display-search").innerHTML=display;
}


//Contact Functions
var nameCheck = false; 
var emailCheck = false; 
var phoneCheck = false; 
var ageCheck = false; 
var passwordCheck = false; 
var repasswordCheck = false; 

function buttonenable(){
    if(nameCheck && emailCheck && phoneCheck && ageCheck && passwordCheck && repasswordCheck){
        document.getElementById("submit").classList.remove("disabled", "text-danger","btn-danger");
        document.getElementById("submit").classList.add("text-success","btn-success");
    } else{
        document.getElementById("submit").classList.add("disabled", "text-danger","btn-danger");
        document.getElementById("submit").classList.remove("text-success","btn-success");
    }
}
function checkname(){
    var regex = /^[A-Za-z]{3,10}$/;
    var username = document.getElementById("name").value;
    nameCheck = regex.test(username);
    buttonenable()    
}

function checkemail(){
    var regex = /^[A-Za-z]{3,10}$/;
    var email = document.getElementById("email").value;
    emailCheck = regex.test(email);
    buttonenable()
}

function checkphone(){
    var regex = /^(\+20)?01[0-9]{9}$/;
    var phone = document.getElementById("phone").value;
    phoneCheck = regex.test(phone);
    buttonenable()
}

function checkage(){
    var regex = /^[1-9]{1,2}$/;
    var age = document.getElementById("age").value;
    ageCheck = regex.test(age);
    buttonenable()
}

function checkpassword(){
    var regex = /^[A-Za-z]{3,10}$/;
    var password = document.getElementById("password").value;
    passwordCheck = regex.test(password);
    buttonenable()
}

function samepassword(){
    var regex = /^[A-Za-z]{3,10}$/;
    var repassword = document.getElementById("repassowrd").value;
    repasswordCheck = regex.test(repassword);
    buttonenable()
    
}
