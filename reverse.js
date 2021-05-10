/*#### Write a function which can reverse string
* Write a JavaScript function that reverse a string.
Sample Data and output:
Example reverse("hello world")
Expected Output: dlrow olleh


```javascript
    const string="hello world"
    reverse(string)  // return dlrow olleh
```*/

/* const string="hello world"
function reverse (string){
    if (string.length===0) return 0
   const splitString = string.split("") 
   console.log(splitString)
  const reverseArray = splitString.reverse()
  console.log(reverseArray)
  const joinReversed = reverseArray.join("")
console.log(joinReversed)
}
reverse(string) */


function reverse(str) {
  if (str === "")
    return "";
  else
    return reverse(str.substr(1)) + str.charAt(0);
}
console.log(reverse("hello world"))