// ******************************************
// Assignment no 21
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var a=prompt("Enter First Name:")
// var b=prompt("Enter Last  Name:")
// document.write("Greetings "+a+b)
// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var a=prompt("Your favourite Phone is")
// document.writeln("My favourite Phone is:"+a)
// document.writeln("\nlength of String is :",a.length)
// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// var a="Pakistani"

// document.write("String:"+a+" \n Index of n is:"+a.indexOf("n"))

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var a="Hello World"

// document.write("String:"+a+" \n Index of n is:"+a.lastIndexOf('l'))

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var a="Pakistani"
// document.write("String:"+a+" \n character at third index :",a[3])

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// var a="Hyderabad"
// document.write("City:"+a)
// document.write("<br>After replacment:"+a.replace("Hyder","Islam"))
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var a="Ali and Sam are Bestfriends.They play cricket and football together"
// var b=a.replace(/and/g,"&")
// document.write("Before Replacment&nbsp",a,"<br>Before Replacment&nbsp",b)

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var a="472"
// var b=Number(a)
// document.write("Value:",a)
// document.write("<br>Typeof:",typeof(a))
// document.write("<br>Value:",b)
// document.write("<br>Typeof:",typeof(b))

// Write a program that takes user input. Convert and show the input in capital letters.
// var a=prompt("Input:")
// document.write("User Input:",a)
// document.write("<br>UpperCase:",a.toUpperCase())

// 11. Write a program that takes user input. Convert and show the input in title case.
//  var word = prompt("Enter a word");
// var replace = word.replace(word[0], word[0].toUpperCase());
// document.write("User Input: "+ word+"<br>");
// document.write("Title Case: "+ replace); 

// Write a program that converts the variable num to string.
//  var num = 35.36 ;
//  var a=String(num)
//  a=a.replace(".","")
//  document.write("Number:",num)
//  document.write("<br>Result:",a)

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@
// var a=prompt("Enter Valid UserName:")
// var b= [',','.','@','!']
// if (b in a){
//     alert("Enter Valid Password")
// }

// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?");
// var str1 = search.toLowerCase();
// for(i=0; i< items.length; i++){
//     if(items[i] == str1){
//         document.write(items[i] + " is available at index "+i+" in our bakery"+'<br/>');    
//     }    
// }
// if(!items.includes(str1) || !str1.includes(str1) ){
//     document.write("We are sorry. "+search + " is not available in our bakery"+'<br/>');
// } 

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// var a=prompt("Enter Password:")
// if (a.length>=6){
//     document.write("Password must not contain more than 6 characters")
// }
// else if(a[0]>=0 || a[0]<=9){
//     document.write("Password must not start with numbers")


// }
// else{
//     document.write("valid Password:",a)
// }

// 16. Write a program to convert the following string to an array using string split method.
// var university = "University of Karachi";
// for (i in university){
//     document.write(university[i],"<br>")
// }

// 17. Write a program to display the last character of a user input.
// var a=prompt("User input:")
// document.write("User input:",a)
// document.write("<br> Last Character:",a.length-1)

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// var str = "The quick brown fox jumps over the lazy dog";
// var str2 = str.toLowerCase();
// var count = str2.match(/the/g);
// var result = count.length;
// document.write("Text: "+str+"<br>");
// document.write("There are "+ result + " occurence(s) of the word 'the'");

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// var a=Number(prompt('Enter Number:'))
// document.write("Number:",a)
// document.write("<br>RoundOff:",Math.round(a))
// document.write("<br>Floor:",Math.floor(a))
// document.write("<br>Ceil:",Math.ceil(a))

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// var a=Number(prompt('Enter Number:'))
// document.write("Number:",a)
// document.write("<br>RoundOff:",Math.round(a))
// document.write("<br>Floor:",Math.floor(a))
// document.write("<br>Ceil:",Math.ceil(a))

// 3. Write a program that displays the absolute value of a number.
var a=-4
document.write("The absolute value of &nbsp",a,"&nbspis&nbsp",Math.abs(a))



