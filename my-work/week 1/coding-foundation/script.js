


// create button on page (html)
//✅

//select the button
var button = document.getElementById('button');
console.log (button);
//✅


//detect the click
button.addEventListener('click', createBox)


function createBox (){
  var box = document.createElement("div");   // Create a <button> element
  box.className = "box1";                 // Insert text
  document.body.appendChild(box);               // Append <button> to <body>

}
