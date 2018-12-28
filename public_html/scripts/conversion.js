/**
 * This javascript file converts multiple metrics.
 *
 */

//function for rounding numbers and set to two decimal places
// Number(Math.round(amount+'e2')+'e-2').toFixed(2);
function twoDecimal(amount) {
    return Number(Math.round(amount + 'e2') + 'e-2').toFixed(2);
}

//function for calculating celcius
function celcius(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " &deg;" + "F = " +
                twoDecimal((quantity - 32) * 5 / 9) + " &deg;" + "C";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//function for calculating fahrenheit
function fahrenheit(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " &deg;" + "C = " +
                twoDecimal(quantity * 9 / 5 + 32) + " &deg;" + "F";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//fuction for calculating feet
//1m = 3.280839895ft
function feet(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " m = " +
                twoDecimal(quantity * 3.280839895) + " ft";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//function for calculating meters
//1ft = 0.3048m
function meters(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " ft = " +
                twoDecimal(quantity * 0.3048) + " m";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//function for calculating inches
//0.3937008
function inches(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " cm = " +
                twoDecimal(quantity * 0.3937008) + " in";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//function for calculating centimeters
//2.54
function centimeters(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " in = " +
                twoDecimal(quantity * 2.54) + " cm";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//function for calculating kilograms
//2.20462
function kilograms(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " lb = " +
                twoDecimal(quantity / 2.20462262185) + " kg";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//function for calculating pounds
//2.2 
function pounds(quantity) {
    if (!isNaN(parseFloat(quantity))) {
        document.getElementById("output").innerHTML =
                twoDecimal(quantity) + " kb = " +
                twoDecimal(quantity * 2.20462262185) + " lb";
    } else {
        document.getElementById("output").innerHTML =
                "Please enter a valid input";
    }
}

//reset function
function clean() {
    //alert("Im here");
    document.getElementById("output").innerHTML = "";
    document.forms[0]['quantity'].value = "";
    document.forms[0]['quantity'].focus();
}
