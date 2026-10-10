function convertValue() {
    var dollar=document.getElementById("dollar").value;
    var result=document.getElementById("result");


    if(dollar==""){
    result.innerHTML="Please enter a number";
    }else if(isNaN(dollar)){
        result.innerHTML="Enter a Number not Text";
    } else if( dollar<0){
        result.innerHTML="Enter a Positive Number";
    } else if(dollar==0){
        result.innerHTML="Enter a value greater than 0";
    }
    else{
       result.innerHTML= dollar *50   + "Egyptian Pound" ;
      }



    return false;
}
