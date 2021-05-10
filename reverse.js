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

const string="hello world"
function reversed (string){
    if (string.length===0) return 0
 
    splitString=string.split("") 
   console.log(splitString)
  const reverseArray = splitString.reverse()
  console.log(reverseArray)
joined = reverseArray.join()
console.log(joined)
}
reversed(string)