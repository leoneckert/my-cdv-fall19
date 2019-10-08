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
  if (datapoint.medium == "WhatsApp" || datapoint.medium == "Facebook " || datapoint.medium == "WeChat" || datapoint.medium == "email" || datapoint.medium == "Instagram" || datapoint.medium == "iMessage"){
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


viz.append('g').attr("class", "life").append("circle")
        .attr("cx", 200)
        .attr("cy", h/2)
        .attr("r", lifeArray.length*5)
        ;


function filterOnline(anyData){
    return (anyData.medium == "Facebook " || anyData.medium == "WhatsApp" || anyData.medium == "WeChat" || anyData.medium == "email" || anyData.medium == "Instagram" || anyData.medium == "iMessage")
}

let onlineArray = newData.filter(filterOnline)
console.log(onlineArray);


viz.append('g').attr("class", "online").append("circle")
        .attr("cx", 900)
        .attr("cy", h/2)
        .attr("r", onlineArray.length*5)
        .attr("filter", blurOnline)
        ;

}
d3.json("data.json").then(gotData);
