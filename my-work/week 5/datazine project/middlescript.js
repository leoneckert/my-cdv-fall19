let w = 1200;
let h = 800;

////////////////////////////////////////////
//create viz container

let viz = d3.select("#viz-container")
                .append("svg")
                    .attr("id", "viz")
                    .attr("width", 2400)
                    .attr("height", 800)

;

////////////////////////////////////////////
//create background: names of the days


viz.append('g').attr("class", "days").append("text")
      .text("Tuesday")
      .attr("x", 1200)
      .attr("y", 150)
          ;

viz.append('g').attr("class", "days").append("text")
      .text("Wednesday")
      .attr("x", 1200)
      .attr("y", 250)
          ;

viz.append('g').attr("class", "days").append("text")
      .text("Thursday")
      .attr("x", 1200)
      .attr("y", 350)
          ;

viz.append('g').attr("class", "days").append("text")
      .text("Friday")
      .attr("x", 1200)
      .attr("y", 450)
          ;

viz.append('g').attr("class", "days").append("text")
      .text("Saturday")
      .attr("x", 1200)
      .attr("y", 550)
          ;

viz.append('g').attr("class", "days").append("text")
      .text("Sunday")
      .attr("x", 1200)
      .attr("y", 650)
          ;

////////////////////////////////////////////
//create background: the six lines

let background = viz.append('g').attr("class", "backgroundLines")
        .append("line")
                  .attr("x1", 0)
                  .attr("y1", 150)
                  .attr("x2", 2400)
                  .attr("y2", 150)
                  .attr("stroke-width", 1)
                  .attr("stroke", "gray")
                  .style("stroke-dasharray", ("3, 3"))
                ;

viz.append('g').attr("class", "backgroundLines").append("line")
                  .attr("x1", 0)
                  .attr("y1", 250)
                  .attr("x2", 2400)
                  .attr("y2", 250)
                  .attr("stroke-width", 1)
                  .attr("stroke", "gray")
                  .style("stroke-dasharray", ("3, 3"))
                ;

viz.append('g').attr("class", "backgroundLines").append("line")
                  .attr("x1", 0)
                  .attr("y1", 350)
                  .attr("x2", 2400)
                  .attr("y2", 350)
                  .attr("stroke-width", 1)
                  .attr("stroke", "gray")
                  .style("stroke-dasharray", ("3, 3"))
                ;

viz.append('g').attr("class", "backgroundLines").append("line")
                  .attr("x1", 0)
                  .attr("y1", 450)
                  .attr("x2", 2400)
                  .attr("y2", 450)
                  .attr("stroke-width", 1)
                  .attr("stroke", "gray")
                  .style("stroke-dasharray", ("3, 3"))
                ;

viz.append('g').attr("class", "backgroundLines").append("line")
                  .attr("x1", 0)
                  .attr("y1", 550)
                  .attr("x2", 2400)
                  .attr("y2", 550)
                  .attr("stroke-width", 1)
                  .attr("stroke", "gray")
                  .style("stroke-dasharray", ("3, 3"))
                ;

viz.append('g').attr("class", "backgroundLines").append("line")
                  .attr("x1", 0)
                  .attr("y1", 650)
                  .attr("x2", 2400)
                  .attr("y2", 650)
                  .attr("stroke-width", 1)
                  .attr("stroke", "gray")
                  .style("stroke-dasharray", ("3, 3"))
                ;


////////////////////////////////////////////////////////////////////////////////////////
//COMPLIMENTS I RECEIVED
////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////
//functions
function showItem(anyData){
}

function pickItem(anyData){
  return (anyData.name);
}

///////////////////////////////////////////////////////////////////////////
//BLUR compliments given online

function blurOnline(datapoint){
  if (datapoint.medium == "WhatsApp" || datapoint.medium == "Facebook " || datapoint.medium == "WeChat" || datapoint.medium == "email" || datapoint.medium == "Instagram" || datapoint.medium == "iMessage"){
      return "url(#blurMe)";
  }
}

///////////////////////////////////////////////////////////////////////////
//circle locations

function circleLocation  (d,i, set){
  console.log(d)
  let y = 0;
  if(d.day == "Tuesday"){
    y = 150;
  }else if(d.day == "Wednesday"){
    y = 250;
  }else if(d.day == "Thursday"){
    y = 350;
  }else if(d.day == "Friday"){
    y = 450;
  }else if(d.day == "Saturday"){
    y = 550;
  }else if(d.day == "Sunday"){
    y = 650;
  }
  return "translate (" + (50+((w-100)/set.length*i)+(((w-100)/set.length)/2)) + ", "+y+")";
}

///////////////////////////////////////////////////////////////////////////
//COLOR of each type's bubbles

function color(datapoint){
  if (datapoint.complimentType=="Personality"){
    return "blue";
  }

  else if (datapoint.complimentType=="Appearance"){
    return "green";
  }

  else if (datapoint.complimentType=="Work"){
    return "yellow";
  }

  else if (datapoint.complimentType=="Birthday related"){
    return "pink";
  }

}

////////////////////////////////////////////
//loading & manipulating data : COMPLIMENTS RECEIVED
function gotData(newData){
  console.log(newData.length);
  newData.forEach(showItem)


  ////////////////////////////////////////////
  //create foreground: the six day containers
    let tuesdayWrapper = viz.append('g').attr("class", "tuesdayWrapper")
    let wednesdayWrapper = viz.append('g').attr("class", "wednesdayWrapper")
    let thursdayWrapper = viz.append('g').attr("class", "thursdayWrapper")
    let fridayWrapper = viz.append('g').attr("class", "fridayWrapper")
    let saturdayWrapper = viz.append('g').attr("class", "saturdayWrapper")
    let sundayWrapper = viz.append('g').attr("class", "sundayWrapper")

  ///////////////////////////////////////////////////////////////////////
  //TUESDAY manipulations
    function filterTuesday(anyData){
        return (anyData.day == "Tuesday")
    }

    let tuesdayArray = newData.filter(filterTuesday)
    console.log(tuesdayArray);

    let tuesdayGroup = tuesdayWrapper.selectAll(".datagroup").data(tuesdayArray)
              .enter()
                .append("g")
                .attr("class", "tuesdayData")
                      tuesdayGroup.append("circle")
                          .attr("cx", 0)
                          .attr("cy", 0)
                          .attr("r", 15)
                          .attr("fill", color)
                          .attr("filter", blurOnline)

                            tuesdayGroup.append("text")
                                .attr("x", 20)
                                .attr("y", 5)
                                .text(pickItem)

                                  tuesdayGroup.attr("transform", circleLocation);

///////////////////////////////////////////////////////////////////////
//WEDNESDAY manipulations

function filterWednesday(anyData){
    return (anyData.day == "Wednesday")
}

let wednesdayArray = newData.filter(filterWednesday)
console.log(tuesdayArray);

let wednesdayGroup = wednesdayWrapper.selectAll(".datagroup").data(wednesdayArray)
          .enter()
            .append("g")
            .attr("class", "wednesdayData")
                  wednesdayGroup.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color)
                      .attr("filter", blurOnline)

                        wednesdayGroup.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem)

                              wednesdayGroup.attr("transform", circleLocation);

///////////////////////////////////////////////////////////////////////
//THURSDAY
function filterThursday(anyData){
    return (anyData.day == "Thursday")
}

let thursdayArray = newData.filter(filterThursday)
console.log(thursdayArray);

let thursdayGroup = thursdayWrapper.selectAll(".datagroup").data(thursdayArray)
          .enter()
            .append("g")
            .attr("class", "thursdayData")
                  thursdayGroup.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color)
                      .attr("filter", blurOnline)

                        thursdayGroup.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem)
                            thursdayGroup.attr("transform", circleLocation);

///////////////////////////////////////////////////////////////////////
//FRIDAY
function filterFriday(anyData){
    return (anyData.day == "Friday")
}

let fridayArray = newData.filter(filterFriday)
console.log(fridayArray);

let fridayGroup = fridayWrapper.selectAll(".datagroup").data(fridayArray)
          .enter()
            .append("g")
            .attr("class", "fridayData")
                  fridayGroup.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color)
                      .attr("filter", blurOnline)

                        fridayGroup.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem)
                            fridayGroup.attr("transform", circleLocation);

///////////////////////////////////////////////////////////////////////
//SATURDAY
function filterSaturday(anyData){
    return (anyData.day == "Saturday")
}

let saturdayArray = newData.filter(filterSaturday)
console.log(saturdayArray);

let saturdayGroup = saturdayWrapper.selectAll(".datagroup").data(saturdayArray)
          .enter()
            .append("g")
            .attr("class", "saturdayData")
                  saturdayGroup.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color)
                      .attr("filter", blurOnline)

                        saturdayGroup.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem)
                            saturdayGroup.attr("transform", circleLocation);

///////////////////////////////////////////////////////////////////////
//SUNDAY
function filterSunday(anyData){
    return (anyData.day == "Sunday")
}

let sundayArray = newData.filter(filterSunday)
console.log(sundayArray);

let sundayGroup = sundayWrapper.selectAll(".datagroup").data(sundayArray)
          .enter()
            .append("g")
            .attr("class", "sundayData")
                  sundayGroup.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color)
                      .attr("filter", blurOnline)

                        sundayGroup.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem)
                            sundayGroup.attr("transform", circleLocation);



}
d3.json("data.json").then(gotData);

////////////////////////////////////////////////////////////////////////////////////////
//COMPLIMENTS I GAVE
////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////
//functions x 2
function showItem2(anyData2){
}

function pickItem2(anyData2){
  return (anyData2.name);
}

///////////////////////////////////////////////////////////////////////////
//BLUR compliments given online

function blurOnline2(datapoint2){
  if (datapoint2.medium == "WhatsApp" || datapoint2.medium == "Facebook " || datapoint2.medium == "WeChat" || datapoint2.medium == "email" || datapoint2.medium == "Instagram" || datapoint2.medium == "iMessage"){
      return "url(#blurMe)";
  }
}

///////////////////////////////////////////////////////////////////////////
//circle locations

function circleLocation2  (d,i, set){
  console.log(d)
  let y = 0;
  if(d.day == "Tuesday"){
    y = 150;
  }else if(d.day == "Wednesday"){
    y = 250;
  }else if(d.day == "Thursday"){
    y = 350;
  }else if(d.day == "Friday"){
    y = 450;
  }else if(d.day == "Saturday"){
    y = 550;
  }else if(d.day == "Sunday"){
    y = 650;
  }
  return "translate (" + (1250+((w-100)/set.length*i)+(((w-100)/set.length)/2)) + ", "+y+")";
}

///////////////////////////////////////////////////////////////////////////
//COLOR of each type's bubbles

function color2(datapoint2){
  if (datapoint2.complimentType=="Personality"){
    return "blue";
  }

  else if (datapoint2.complimentType=="Appearance"){
    return "green";
  }

  else if (datapoint2.complimentType=="Work"){
    return "yellow";
  }

  else if (datapoint2.complimentType=="Birthday related"){
    return "pink";
  }

}

////////////////////////////////////////////
//loading & manipulating data : COMPLIMENTS RECEIVED
function gotData2(newData2){
  console.log(newData2.length);
  newData2.forEach(showItem2)

////////////////////////////////////////////
//create foreground: the six day containers
  let tuesdayWrapper2 = viz.append('g').attr("class", "tuesdayWrapper2")
  let wednesdayWrapper2 = viz.append('g').attr("class", "wednesdayWrapper2")
  let thursdayWrapper2 = viz.append('g').attr("class", "thursdayWrapper2")
  let fridayWrapper2 = viz.append('g').attr("class", "fridayWrapper2")
  let saturdayWrapper2 = viz.append('g').attr("class", "saturdayWrapper2")
  let sundayWrapper2 = viz.append('g').attr("class", "sundayWrapper2")


  ///////////////////////////////////////////////////////////////////////
  //TUESDAY manipulations
    function filterTuesday2(anyData2){
        return (anyData2.day == "Tuesday")
    }

    let tuesdayArray2 = newData2.filter(filterTuesday2)
    console.log(tuesdayArray2);

    let tuesdayGroup2 = tuesdayWrapper2.selectAll(".datagroup").data(tuesdayArray2)
              .enter()
                .append("g")
                .attr("class", "tuesdayData2")
                      tuesdayGroup2.append("circle")
                          .attr("cx", 0)
                          .attr("cy", 0)
                          .attr("r", 15)
                          .attr("fill", color2)
                          .attr("filter", blurOnline2)

                            tuesdayGroup2.append("text")
                                .attr("x", 20)
                                .attr("y", 5)
                                .text(pickItem2)

                                  tuesdayGroup2.attr("transform", circleLocation2);

///////////////////////////////////////////////////////////////////////
//WEDNESDAY manipulations

function filterWednesday2(anyData2){
    return (anyData2.day == "Wednesday")
}

let wednesdayArray2 = newData2.filter(filterWednesday2)
console.log(tuesdayArray2);

let wednesdayGroup2 = wednesdayWrapper2.selectAll(".datagroup").data(wednesdayArray2)
          .enter()
            .append("g")
            .attr("class", "wednesdayData2")
                  wednesdayGroup2.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color2)
                      .attr("filter", blurOnline2)

                        wednesdayGroup2.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem2)

                              wednesdayGroup2.attr("transform", circleLocation2);

///////////////////////////////////////////////////////////////////////
//THURSDAY
function filterThursday2(anyData2){
    return (anyData2.day == "Thursday")
}

let thursdayArray2 = newData2.filter(filterThursday2)
console.log(thursdayArray2);

let thursdayGroup2 = thursdayWrapper2.selectAll(".datagroup").data(thursdayArray2)
          .enter()
            .append("g")
            .attr("class", "thursdayData2")
                  thursdayGroup2.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color2)
                      .attr("filter", blurOnline2)

                        thursdayGroup2.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem2)
                            thursdayGroup2.attr("transform", circleLocation2);

///////////////////////////////////////////////////////////////////////
//FRIDAY
function filterFriday2(anyData2){
    return (anyData2.day == "Friday")
}

let fridayArray2 = newData2.filter(filterFriday2)
console.log(fridayArray2);

let fridayGroup2 = fridayWrapper2.selectAll(".datagroup").data(fridayArray2)
          .enter()
            .append("g")
            .attr("class", "fridayData2")
                  fridayGroup2.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color2)
                      .attr("filter", blurOnline2)

                        fridayGroup2.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem2)
                            fridayGroup2.attr("transform", circleLocation2);

///////////////////////////////////////////////////////////////////////
//SATURDAY
function filterSaturday2(anyData2){
    return (anyData2.day == "Saturday")
}

let saturdayArray2 = newData2.filter(filterSaturday2)
console.log(saturdayArray2);

let saturdayGroup2 = saturdayWrapper2.selectAll(".datagroup").data(saturdayArray2)
          .enter()
            .append("g")
            .attr("class", "saturdayData2")
                  saturdayGroup2.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color2)
                      .attr("filter", blurOnline2)

                        saturdayGroup2.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem2)
                            saturdayGroup2.attr("transform", circleLocation2);

///////////////////////////////////////////////////////////////////////
//SUNDAY
function filterSunday2(anyData2){
    return (anyData2.day == "Sunday")
}

let sundayArray2 = newData2.filter(filterSunday2)
console.log(sundayArray2);

let sundayGroup2 = sundayWrapper2.selectAll(".datagroup").data(sundayArray2)
          .enter()
            .append("g")
            .attr("class", "sundayData2")
                  sundayGroup2.append("circle")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", 15)
                      .attr("fill", color2)
                      .attr("filter", blurOnline2)

                        sundayGroup2.append("text")
                            .attr("x", 20)
                            .attr("y", 5)
                            .text(pickItem2)
                            sundayGroup2.attr("transform", circleLocation2);



}

d3.json("data2.json").then(gotData2);
