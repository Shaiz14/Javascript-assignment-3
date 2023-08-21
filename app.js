// // q#1
// var arr = [];
// //q#2
// var strArr = ["Talha"];
// //q#3
// var numArr = [1,2,3,4,5,6];
// //q#4
// var boolArr = [true, false];
// //q#5
// var mixArr = ['Talha', 1, true, 0.123];
// // q#6
// var newArr = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD."];
// document.write("Qualification:" + newArr);
// Q No.9(a)
// var color = ["red", "orange", 'yellow', 'black', 'white', 'pink'];
// var addition = prompt("enter your first colour");
// var newArr = color.unshift(addition);
// document.write(color);
// Q No.9(b)
// var color = ["red", "orange", 'yellow', 'black', 'white', 'pink'];
// var addition = prompt("enter your last colour");
// var newArr = color.push(addition);
// document.write(color);
// Q No.c
// var color = ["red", "orange"];
// var addition = prompt("enter your first colour");
// var newArr = color.push(addition);
// var addition = prompt("enter your second colour");
// var newArr = color.push(addition);
// document.write(color);
// Q No.d
// var color = ["red", "orange", "purple", "blue"];
// color.shift(0.1);
// document.write(color);
// Q No.e
// var color = ["red", "orange", "purple", "blue"];
// color.pop(3.1);
// document.write(color);
// Q No.f
// var arr = ['blue', 'red', 'orange'];
// var del = prompt("from which index you want to add");
// var desireCol = prompt("your color?")
// var newArr = arr.push(del, 1, desireCol);
// document.write(arr)
// Q No.f
// var arr = ['blue', 'red', 'orange'];
// var del = prompt("from which index you want to remove");
// var hwMany = prompt("how many color you want to delete")
// var newArr = arr.splice(del, hwMany);
// document.write(arr)
// // Q No.10
// var a = [320,230,480,120]
// var b = [120,230,320,480]
// document.write("Scores of Student = "  + a+ "</br>")
// document.write("Ordered Scores of Student = "  + b+"</br>")
// Q Node.11
// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<br/>" + city);
// document.write("<br/>");
// document.write("<br/> Selected cities list:");

// var selectedCity = city.slice(2, 4);
// document.write("<br/>" + selectedCity);

//Questin No-12

// var arr = ["This ", " is ", " my ", " cat"];

// document.write("Array" + "<br/>" + arr);

// document.write("<br/>");

// document.write("<br/> String:" + "<br/>" + arr.join(""));

// //Questin No-13

// var device = ["Keyboard", "Mouse", "Printer", "Monitor"];

// document.write("Devices:" + "<br/>" + device);
// document.write("<br/>");

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

//Questin No-14

var device = ["Keyboard", "Mouse", "Printer", "Monitor"];

document.write("Devices:" + "<br/>" + device);
document.write("<br/>");

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);


