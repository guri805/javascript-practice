// topics : for in , for of , for each 

// +++++++++ FOR OF LOOP

const strArr = ["spiderman" , "batman" , "superman"];
for (const ele of strArr) {
  // console.log(ele); 
}
/* output:
 spiderman
 batman
 superman
*/
const str = "hello world"
for (const ele of str) {
  // console.log(ele);  
}
/* output:
 print char by char
*/


// ++++ map
// is has unique value and it maintain the order

const map = new Map();
map.set('IN', 'INDIA');
map.set('USA', 'UNITED STATES OF AMERICA');
map.set('FR', 'FRANCE');

for (const key of map) {
  // console.log(key); 
}
/* output:
 [ 'IN', 'INDIA' ]
 [ 'USA', 'UNITED STATES OF AMERICA' ]
 [ 'FR', 'FRANCE' ]
*/
// destrucure array
for (const [key , value] of map) {
  // console.log(key , ':-' , value);
}
/* output:
 IN :- INDIA
  USA :- UNITED STATES OF AMERICA
  FR :- FRANCE
*/

// ++++++++ FOR IN

const myObject = {
  js : "javascript" ,
  cpp : "c++" ,
  rb : "ruby"
}

for(const key in myObject){
  // console.log(`${key} is the shortcut of ${myObject[key]}`); 
              // ^only print key          ^print values  
}
/* output: js is the shortcut of javascript
           cpp is the shortcut of c++
           rb is the shortcut of rub
*/ 


// +++++++ FOR EACH LOOP

const coding = ["java","c++","ruby","javascript","go","python"];
coding.forEach( function (val) {
  // console.log(val);
})
/* output : 
 java
 c++
 ruby
 javascript
 go
 python
*/

coding.forEach( (val) => {
  // console.log(val);
})

function printMe(val){
  // console.log(val); 
}
coding.forEach(printMe);

coding.forEach( (val , index , arr)=> {
  // console.log(val , index , arr);
})
/* output : 
java 0 [ 'java', 'c++', 'ruby', 'javascript', 'go', 'python' ]
c++ 1 [ 'java', 'c++', 'ruby', 'javascript', 'go', 'python' ]
ruby 2 [ 'java', 'c++', 'ruby', 'javascript', 'go', 'python' ]
javascript 3 [ 'java', 'c++', 'ruby', 'javascript', 'go', 'python' ]
go 4 [ 'java', 'c++', 'ruby', 'javascript', 'go', 'python' ]
python 5 [ 'java', 'c++', 'ruby', 'javascript', 'go', 'python' ]
*/

const myCoding = [
  {
    languageName : "javascript" ,
    languageFileName : "js"
  },
  {
    languageName : "java" ,
    languageFileName : "java"
  },
  {
    languageName : "python" ,
    languageFileName : "py"
  }    
]

myCoding.forEach( (val)=> {
  // console.log(val.languageName);
} )
/* output : 
javascript
java
python
*/