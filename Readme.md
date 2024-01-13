Array to be used
Given the following array , use .map or .forEach functions to do the following -
[{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}]
You have been given a github repo already, simply clone it and edit the script.js only. You need to edit the functions given in script.js.

Tasks
You have been given an array and 4 functions inside the script.js - just write the correct code inside these functions.
PrintDeveloperbyMap() - console.log all the employees which have the profession of developer using the map function.
PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
addData() - In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array.
ConcatinateArray() - Make another array with 3 objects just like the one in the above given array.
The objects should be different, with different ids and all other paramters should be different too. Then concatinate these 2 arrays, and console.log
Relevants Link:
GitHub Repo (Starter Template)- https://github.com/saksham-accio/f2_contest_template

Marking Scheme (100 Marks)
PrintDeveloperbyMap() - 25 marks
Correct use of .map() function
Correct filtering of developer objects
Correct use of console.log()
PrintDeveloperbyForEach() - 25 marks
Correct use of .forEach() function
Correct filtering of developer objects
Correct use of console.log()
addData() - 20 marks
Correct addition of employee object to the array
Correct use of console.log()
Proper formatting of the added employee object
removeAdmin() - 15 marks
Correct use of .filter() function
Correct filtering of admin objects
ConcatinateArray() - 15 marks
Correct creation of new array with 3 objects
Correct use of .concat() function
Correct use of console.log()