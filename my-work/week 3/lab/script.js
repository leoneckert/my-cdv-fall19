// 1. find *real* data (array containing JS objects) in JSON format
var y=0;
var numColumns = 6;

function randomNumber(datapoint, index){
  console.log(datapoint.complimentType);
  console.log(index);
  return index*30;

}

function getColor(datapoint, index){
  if (datapoint.day=="Monday"){
    return "red";
  }
  if (datapoint.day=="Tuesday"){
    return "blue";
  }
  if (datapoint.day=="Wednesday"){
    return "yellow";
  }
  if (datapoint.day=="Thursday"){
    return "green";
  }
  if (datapoint.day=="Friday"){
    return "lightblue";
  }
  if (datapoint.day=="Saturday"){
    return "purple";
  }
  if (datapoint.day=="Sunday"){
    return "orange";
  }
}


function increasingX(datapoint, i){
return 60*(i%numColumns)+30;
}



function increasingY(datapoint, i){
    if (i%numColumns==0){
      y++;
    }
    return 60*y;
}

// 2. load data (make it *console.loggable* (what a word!) in our script)

function gotData(incomingData){
console.log(incomingData)

// 4. make on circle for each datapoint (size and position doesn't matter)

let viz = d3.select("body")
  .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    ;

viz.selectAll("circle").data(incomingData)
  .enter()
    .append("circle")
    .attr("cx", increasingX)
    .attr("cy", increasingY)
    .attr("r", 20)
    .attr("fill", getColor)
    ;

}
d3.json("data.json").then(gotData);

// 3. concept: data and datapoint





// 5. concept: functions that "return"
// 6. use function to position circles randomly
// 7. realize "who" calls this function / why is there no `()`?
// 8. concept: "passing value into function"
// 9. let's assume: "D3 passes value into the data function"
// 10. if D3 passes a value, how can we receive it?
// 11. use *real* information to impact the x position
// 12. let's assume: "D3 passes another value!"
// 13. how can we receive that value?
// 14. in which ways is D3 making our live easy?
