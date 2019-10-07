let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
    ;

function gotData(incomingData){
  console.log(incomingData);


function printIndexAndValue(d){
  console.log(d);
}

incomingData.forEach(function(d,i){
  console.log("current: ", i);
  console.log(d);
});

function NewDataPointBasedOnOldDatapoint(d){
  let entity = d.Entity;
  let year = d.Year;
  return {firstValue: entity, secondValue: year}
}

let newArray = incomingData.map(NewDataPointBasedOnOldDatapoint)

console.log(newArray);



}

d3.csv("new-cases-of-hiv-infection.csv").then(gotData);
