// create button on page (html)
//✅

//select the button
var button = document.getElementById('button');
console.log (button);
//✅


//detect the click
button.addEventListener('click', createBoxes)


function createBoxes() {
  //select input
  var inputNumber = document.getElementById('inputNumber').value;
  //read value of input
  // var number = inputNumber.value;
  console.log (inputNumber);
  //fill value into the for loop
  for (i = 0; i <inputNumber; i++){
    createBox()
  }
}


function createBox (){
  var box = document.createElement("div");   // Create a <button> element
  box.className = "box1";                 // Insert text
  document.body.appendChild(box);               // Append <button> to <body>

}
