let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
    ;

function gotData(incomingData){
  // console.log(incomingData);


function printIndexAndValue(d){
  // console.log(d);
}

incomingData.forEach(function(d,i){
  // console.log("current: ", i);
  // console.log(d);
});

function NewDataPointBasedOnOldDatapoint(d){
  let entity = d.Entity;
  let year = d.Year;
  return {firstValue: entity, secondValue: year}
}

let newArray = incomingData.map(NewDataPointBasedOnOldDatapoint)

// console.log(newArray);

function filterFunction(d){
  if (d.Code=="CHN"){
  return true;
    }else{
        return false;
      }
}

let filteredData = incomingData.filter(filterFunction);
console.log (filteredData);


let yearToDataObjectConverter = d3.timeParse("%Y");



let alterativeDomainArray = d3.extent(filteredData, function(d){
  return yearToDataObjectConverter(d.Year);
})
console.log(alterativeDomainArray)

let xPadding = 50;
let xScale = d3.scaleTime().domain(alterativeDomainArray).range([xPadding,w-xPadding])
// console.log(xScale(yearToDataObjectConverter("2007")))

let xAxis = d3.axisBottom(xScale);
let xAxisGroup = viz.append("g").attr("class", "xaxis");

xAxisGroup.call(xAxis);

let xAxisYPos = h - 30;
xAxisGroup.attr("transform", "translate(0, "+ xAxisYPos +")");

let valueKey = "Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)";
let yScale = d3.scaleLinear()
                .domain(
                  d3.extent(
                    filteredData, function(d){
                      return d[valueKey]
                    }
                  )
               )
                            .range([ xAxisYPos, 30])
                        ;

let yAxis = d3.axisLeft(yScale);
let yAxisGroup = viz.append("g").attr("class", "yaxis");
yAxisGroup.call(yAxis);

yAxisGroup.attr("transform", "translate("+ xPadding +", 0)")





}
d3.csv("new-cases-of-hiv-infection.csv").then(gotData);
