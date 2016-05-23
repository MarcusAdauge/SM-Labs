$(document).ready(function(){
var header = $('header');

var backgrounds = new Array(
    'url(images/header/header1.jpg)'
  , 'url(images/header/header2.jpg)'
  , 'url(images/header/header3.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 3000);

header.css('background-image', backgrounds[0]);
});


//--------------------------- VALIDATION -------------------------
function validName(uname)
{
    var letters = /^[A-Za-z]+$/;

    if(uname.value == ""){
    	alert("Name missing!");
    	return false;
    }
    else if(uname.value.match(letters)) return true;
    else
    {
        alert('Name must have alphabet characters only');
        return false;
    }
}

function validLastName(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value == ""){
    	alert("Last Name missing!");
    	return false;
    }
    else if(uname.value.match(letters)) return true;
    else
    {
        alert('Last Name must have alphabet characters only');
        return false;
    }
}

function validEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
	    alert('Invalid email address');
	    email.focus;
	    return false;
 	}
 	else return true;
}

function validDest(dest){
	if(dest.value == ""){
		alert("Destination missing!");
		return false;
	}
	else return true;
}

function validDay(day){
	if(day.value == ""){
		alert("Select the day!")
		return false;
	}
	else return true;
}

function validMonth(mon){
	if(mon.value == ""){
		alert("Select the month!")
		return false;
	}
	else return true;
}

function validYear(year){
	if(year.value == ""){
		alert("Select the year!")
		return false;
	}
	else return true;
}

function validPackage(pack){
	if(pack[0].checked == false && pack[1].checked == false){
		alert("Select a trip package!");
		return false;
	}
	else return true;
}

function formValidation()
{
    var name = document.form.Name;
    var lastName = document.form.LastName;
    var email = document.form.Email;
    var dest = document.form.Destination;
    var day = document.form.trip_day;
    var month = document.form.trip_month;
    var year = document.form.trip_year;
    var pack = document.form.radiobutton;

    if(validName(name) && validLastName(lastName) &&
    	validEmail(email) && validDay(day) &&
    	validMonth(month) && validYear(year) &&
    	validPackage(pack && validDestination(dest))){
    	alert("Successfull submision!")
    	return true;
    }

    return false;
}