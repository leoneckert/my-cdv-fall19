let w = 1200;
let h = 800;

let viz = d3.select("#viz-container3")
                .append("svg")
                    .attr("id", "viz")
                    .attr("width", 2400)
                    .attr("height", 800)

;
/////////////////////////////////////////////////////////////////////////
//BLUR compliments given online

function blurOnline(datapoint){
  console.log(datapoint);
  if (datapoint.type == "online" ){
      return "url(#blurMe)";
  }
}
/////////////////////////////////////////
//COMPLIMENTS RECEIVED

function showItem(anyData){
}

function pickItem(anyData){
    return (anyData.name);
}



/////////////////////////////////////////
//upload data: compliments received


function gotData(newData){
        console.log(newData.length);
        newData.forEach(showItem)


function filterLife(anyData){
    return (anyData.medium == "life")
}

let lifeArray = newData.filter(filterLife)
console.log(lifeArray);

//
// viz.append('g').attr("class", "life").append("circle")
//         .attr("cx", 200)
//         .attr("cy", h/2)
//         .attr("r", lifeArray.length*5)
//         ;


function filterOnline(anyData){
    return (anyData.medium == "Facebook " || anyData.medium == "WhatsApp" || anyData.medium == "WeChat" || anyData.medium == "email" || anyData.medium == "Instagram" || anyData.medium == "iMessage")
}

let onlineArray = newData.filter(filterOnline)
console.log(onlineArray);

let simpledata = [
  {type:"life", value: lifeArray.length},
  {type:"online", value: onlineArray.length}

]

viz.selectAll("circle").data(simpledata).enter().append("circle")
        .attr("cx", function(d, i){
          return w/8+(5*i*(w/8));
        })
        .attr("cy", h/2)
        .attr("r", function(d, i){
          console.log(d.value);
          return d.value * 5 ;
        })
        .attr("filter", blurOnline)
        .attr("fill", "#ab906d")
        ;

}
d3.json("data.json").then(gotData);
