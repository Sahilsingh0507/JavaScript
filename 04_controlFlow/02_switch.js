// checking value by multiple condition 
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


// if we dont use break in switch case it executes all the values present below it including default case  
const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("default case match");
        break;
}

const Month = "apr";
switch (Month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;

    default:
        console.log("Default case")
        break;
}