let age = 20
// let age = prompt("What is your age ?")
// age = Number.parseInt(age)
// if(age >= 18){
//     console.log("You can vote in elections")
// }else{
//     console.log("You cannot vote in elections")
// }


// let trafficLight = 'red'

// if(trafficLight == "red"){
//     console.log('Stop')
// }else if (trafficLight == "yellow"){
//     console.log('Slow down')
//  } else if(trafficLight == "green"){
//     console.log('Go  Ahead')
//  }
/*
Find Odd Or Even Number
let num =3
if(num%2==0){
    console.log("Even Number Baby")
}else{
    console.log("Odd Number Baby")
}

let day = 7;
switch(day){
    case 1 :{
        console.log('Monday')
        break
    }
    case 2 : {
        console.log('Tuesday')
        break
    }
    case 3 : {
        console.log('Wednesday')
        break
    }
    case 4 :{
        console.log("Thursday")
        break
    }
    case 5 :{
        console.log('Friday')
        break
    }
    case 6 :{
        console.log("Staruday")
        break
    }
    case 7 :{
        console.log('Sunday')
        break
    }
    default :
    {
        console.log('Invalid Number')
    }


}
*/


//Ternary Operator
/*
let isUserLoggedIn = false;

if(isUserLoggedIn){
    console.log('You user has access to PW skills lab');
}else{
    console.log("User Cannot have has access to PW Skills lab");
}

isUserLoggedIn ? console.log("Yes Login") : console.log('No Login');


*/

let isUserLoggedIn = true;
let isCoursePurchased = false;

isUserLoggedIn ? (isCoursePurchased ? console.log('Access Granted'):console.log('Access denied !!!') ) : console.log('Not Logged In!');


