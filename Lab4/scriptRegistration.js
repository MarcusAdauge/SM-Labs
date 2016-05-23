function Submit(){

   var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
   var fname = document.form.Name.value,
    lname = document.form.LastName.value,
    femail = document.form.Email.value,
    fdestination = document.form.Destination.value,
    fmonth = document.form.trip_month.value,
    fday = document.form.trip_day.value,
    fyear = document.form.trip_year.value;
     
    if( fname == "" ){
         document.form.Name.focus() ;
         document.getElementById("errorBox").innerHTML = "enter the first name";
         return false;
     }

    if( lname == "" ){
        document.form.LastName.focus() ;
        document.getElementById("errorBox").innerHTML = "enter the last name";
        return false;
     }
      
    if (femail == "" ){
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "enter the email";
        return false;
    }
    else if(!emailRegex.test(femail)){
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "enter the valid email";
        return false;
    }
     
     
    if (fmonth == "") {
          document.form.trip_month.focus();
          document.getElementById("errorBox").innerHTML = "select the trip month";
          return false;
       }

    if (fday == "") {
          document.form.trip_day.focus();
          document.getElementById("errorBox").innerHTML = "select the trip day";
          return false;
       }

    if (fyear == "") {
          document.form.trip_year.focus();
          document.getElementById("errorBox").innerHTML = "select the trip year";
          return false;
       }

    if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false){
        document.getElementById("errorBox").innerHTML = "select a trip package";
        return false;
     }

    if(fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != '' && fmonth != '' && fday != '' && fyear != ''){
        document.getElementById("errorBox").innerHTML = "form submitted successfully";
     }

}