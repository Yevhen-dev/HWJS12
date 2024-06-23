// Currency converter
// Create a simple currency converter that converts the money entered by the user from one currency to another.
// Instructions:
// Create two input fields: one for the amount, the other for the exchange rate.
// Add a button that will perform the conversion when clicked.
// When you click the button, read the values ​​from both fields and perform the conversion.
// Display the conversion result on the page.
let taskOneMoney = document.querySelector( "#money" );
let taskOneRate = document.querySelector( "#rate" );
let taskOneBtn = document.querySelector( ".taks__one__wrap__btn>input" );
let taskOneResult = document.querySelector( ".taks__one__wrap__result__amount" );

taskOneBtn.addEventListener( "click", function ( e ) {
    taskOneResult.innerHTML = ( +taskOneMoney.value * +taskOneRate.value ).toFixed(2); 
} );


// Add to Todo the list created in the lesson in each item a button to delete the item. In the task list, make it possible to edit the list items  
let taskTwoTask = document.querySelector( "#task" );
let taskTwoBtnAdd = document.querySelector( "#todo-btn" );
let taskTwoToDoList = document.querySelector( ".taks__two__todo__list" );

taskTwoBtnAdd.addEventListener( "click", function (e) {
    let li = document.createElement( "li" );
    li.classList.add( "taks__two__todo__list__item" );
    let div = document.createElement( "div" );
    let iconWrap = document.createElement( "div" );
    iconWrap.classList.add( "taks__two__todo__list__item__icon-wrap" );
    let deleteIcon = document.createElement( "img" );
    let editIcon = document.createElement( "img" );
    editIcon.src = "../images/icon_edit.svg";
    editIcon.alt = "edit icon";
    editIcon.classList.add( "taks__two__todo__list__item__icon-wrap__edit" );
    deleteIcon.src = "../images/icon_del.svg";
    deleteIcon.alt = "delete icon";
    deleteIcon.classList.add( "taks__two__todo__list__item__icon-wrap__delete" );
    iconWrap.appendChild( editIcon );
    iconWrap.appendChild( deleteIcon );
    div.innerHTML = taskTwoTask.value;
    taskTwoToDoList.appendChild( li );
    li.appendChild( div );
    li.appendChild( iconWrap );
    taskTwoTask.value = "";
    li.addEventListener( "click", function (e) {
        if( e.target.classList.value === "taks__two__todo__list__item__icon-wrap__edit" && !this.classList.contains( "active" ) ) {
            this.classList.add( "active" );
            let input = document.createElement( "input" );
            let done = document.createElement( "img" );
            done.src = "../images/icon_done.svg";
            done.alt = "done icon";
            done.classList.add( "taks__two__todo__list__item__icon-wrap__done" );
            input.type = "text";
            input.value = div.innerHTML;
            div.classList.toggle( "hide" );
            this.prepend( input );
            iconWrap.prepend( done );
            done.addEventListener( "click", function() {
                div.innerHTML = input.value;
                input.remove();
                div.classList.toggle( "hide" );
                done.remove();
                li.classList.remove( "active" );
            } );
        } else if( e.target.classList.value === "taks__two__todo__list__item__icon-wrap__delete" ) {
            this.remove();
        }
    } );
} );


// Theme editor
// Purpose: To create a simple graphic editor of the theme of the page
// Instructions:
// Create 4 input fields that select a color, and change it in a css variable

let settings = document.querySelector( ".taks__three__settings>form" );

let colorHeader = document.querySelector( "#colorHeader" );
let colorMain = document.querySelector( "#colorMain" );
let colorMainSection = document.querySelector( "#colorMainSection" );
let colorFooter = document.querySelector( "#colorFooter" );

let taskThreeHeader = document.querySelector( ".taks__three__page__header" );
let taskThreeMain = document.querySelector( ".taks__three__page__main" );
let taskThreeSection = document.querySelector( ".taks__three__page__main__section" );
let taskThreeFooter = document.querySelector( ".taks__three__page__footer" );

colorHeader.value = getComputedStyle(taskThreeHeader).getPropertyValue("--bg-header");
colorMain.value = getComputedStyle(taskThreeMain).getPropertyValue("--bg-main");
colorMainSection.value = getComputedStyle(taskThreeSection).getPropertyValue("--bg-section");
colorFooter.value = getComputedStyle(taskThreeFooter).getPropertyValue("--bg-footer");

settings.addEventListener( "change", function(e) {
    if( e.target.id === "colorHeader" ) {
        taskThreeHeader.style.setProperty( "--bg-header", e.target.value );
    } else if( e.target.id === "colorMain" ) {
        taskThreeMain.style.setProperty( "--bg-main", e.target.value );
    } else if ( e.target.id === "colorMainSection" ) {
        taskThreeSection.style.setProperty( "--bg-section", e.target.value );
    } else if ( e.target.id === "colorFooter" ) {
        taskThreeFooter.style.setProperty( "--bg-footer", e.target.value );
    }
} );



// Registration form
// Create a simple new user registration form.
// Create a form that should contain the fields name, password, password re-entry, e-mail. If the fields are not filled in, the button to send the form is blocked, if all the fields are filled in and the passwords match, the button is unlocked (loses the disabled attribute)

let taskFourForm = document.querySelector( ".taks__four--wrap>form" );
let taskFourName = document.querySelector( "#name" );
let taskFourEmail = document.querySelector( "#email" );
let taskFourPass = document.querySelector( "#password" );
let taskFourPassRep = document.querySelector( "#passwordRepeat" );
let taskFourBtn = document.querySelector( "#submit" );

taskFourForm.addEventListener( "change", function(e) {
    if( validationName( taskFourName ) && validationEmail( taskFourEmail ) && validationPassword( taskFourPass, taskFourPassRep ) ) {
        taskFourBtn.disabled = false ;
    }
} );

function validationName (name) {
    if( name.value.length >= 3 ) {
        name.classList.remove( "invalid" );
        name.classList.add( "valid" );
        return true;
    } else {
        name.classList.remove( "valid" );
        name.classList.add( "invalid" );
        return false;
    }
}

function validationEmail( input ) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( !emailPattern.test( input.value ) ) {
        input.classList.add( "invalid" );
        input.classList.remove( "valid" );
        return false;
    } else {
        input.classList.remove( "invalid" );
        input.classList.add( "valid" );
        return true;
    }
}

function validationPassword ( passOne, passTwo ) {
    let passPatern = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if( !passPatern.test( passOne.value ) || !passPatern.test( passTwo.value ) || passOne.value !== passTwo.value ) {
        passOne.classList.add( "invalid" );
        passTwo.classList.add( "invalid" );
        passOne.classList.remove( "valid" );
        passTwo.classList.remove( "valid" );
        return false;
    }  else {
        passOne.classList.remove( "invalid" );
        passTwo.classList.remove( "invalid" );
        passOne.classList.add( "valid" );
        passTwo.classList.add( "valid" );
        return true;
    }
}


taskFourBtn.addEventListener( "mouseover", function(e) {
    if( validationName( taskFourName ) && validationEmail( taskFourEmail ) && validationPassword( taskFourPass, taskFourPassRep ) ) {
        e.target.disabled = false ;
    } 
} );

taskFourBtn.addEventListener( "click", function(e) {
    e.preventDefault();
    taskFourName.value = "";
    taskFourName.classList.remove( "valid" );
    taskFourEmail.value = "";
    taskFourEmail.classList.remove( "valid" );
    taskFourPass.value = "";
    taskFourPass.classList.remove( "valid" );
    taskFourPassRep.value = "";
    taskFourPassRep.classList.remove( "valid" );
} )