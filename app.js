//let w = document.getElementById(ccnum);
function ccValidation (w) {   
    let countOdd = 0;
    let countEven = 0;
    let k = w.length;

    for (i=k-1; i>=0; i--) {
        let currVal =parseInt(w[i]);

        if (i % 2 !==0) {countOdd += currVal;}
        else{currVal *=2;}

        if(currVal>9){currVal-=9; countEven +=currVal;}
        else {countEven += currVal;}
    }
    
    let sum = countOdd + countEven;

    if (sum % 10 == 0) {return true;}
    else {return false}; // return sum % 10? "Valid": "Invalid"
    
}


let w = "2345347482910198";
//console.log(ccValidation(w));

function ccCheck(){
    const ccBtn = document.getElementById("btnbtn")
    const ccNumber = document.getElementById("ccnum");

    if (ccValidation(ccNumber.value)){
        ccNumber.style= "border-color: green;"
        ccBtn.style= "background-color: green;"
    }
    else{ccNumber.style= "border-color: red;"
    ccBtn.style= "background-color: red;"

    }
}