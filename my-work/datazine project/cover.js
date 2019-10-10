let w = 1200;
let h = 800;

let viz = d3.select("#viz-container2")
                .append("svg")
                    .attr("id", "viz")
                    //changing the attribute -
                    // which one i chose and to what i want to change it
                    .attr("width", 1200)
                    .attr("height", 800)

;

function blurOnline(datapoint){
  return "url(#blurMe)";
}

//COLOR of each type's bubbles

function color(datapoint){
  if (datapoint.complimentType=="Personality"){
    return "#ea8484";
  }

  else if (datapoint.complimentType=="Appearance"){
    return "	#f6ba5e";
  }

  else if (datapoint.complimentType=="Work"){
    return "#ddbaba";
  }

  else if (datapoint.complimentType=="Birthday related"){
    return "#ab906d";
  }

}

function showItem(anyData){
  console.log(anyData);
}

function showItem2(anyData2){
  console.log(anyData2);
}

function pickItem(anyData){
  console.log(anyData);
  return(anyData.complimentType);
}

function pickItemData2(anyData2){
  console.log(anyData2);
  return(anyData2.complimentType);
}

function pickItem2(anyData){
  console.log(anyData);
  return(anyData.medium);
}
////////////////////////////////////////////////////

function filterBirthday(anyData){
  return(anyData.complimentType == "Birthday related")
}

function filterPersonality(anyData){
  return(anyData.complimentType == "Personality")
}

function filterWork(anyData){
  return(anyData.complimentType == "Work")
}

function filterAppearance(anyData){
  return(anyData.complimentType == "Appearance")
}

////////////////////////////////////////////////////

function filterBirthday2(anyData2){
  return(anyData2.complimentType == "Birthday related")
}

function filterPersonality2(anyData2){
  return(anyData2.complimentType == "Personality")
}

function filterWork2(anyData2){
  return(anyData2.complimentType == "Work")
}

function filterAppearance2(anyData2){
  return(anyData2.complimentType == "Appearance")
}

////////////////////////////////////////////////////

function filterWhatsapp(anyData){
  return(anyData.medium == "WhatsApp")
}

function filterWechat(anyData){
  return(anyData.medium == "WeChat")
}

function filterInstagram(anyData){
  return(anyData.medium == "Instagram")
}

function filterFacebook(anyData){
  return(anyData.medium == "Facebook")
}

function filterLife(anyData){
  return(anyData.medium == "life")
}

////////////////////////////////////////////////////

function gotData(newData){
  console.log(newData.length);

newData.forEach(showItem);

////////////////////////////////////////////////////

let birthdayArray = newData.filter(filterBirthday)
console.log(birthdayArray);

let personalityArray = newData.filter(filterPersonality)
console.log(personalityArray);

let workArray = newData.filter(filterWork)
console.log(workArray);

let appearanceArray = newData.filter(filterAppearance)
console.log(appearanceArray);

////////////////////////////////////////////////////
let whatsappArray = newData.filter(filterWhatsapp)

let wechatArray = newData.filter(filterWechat)

let instagramArray = newData.filter(filterInstagram)

let facebookArray = newData.filter(filterFacebook)

let lifeArray = newData.filter(filterLife)

////////////////////////////////////////////////////

let birthdayGroup = viz.append("g")
    .attr("class", "birthdayData")
    ;
    birthdayGroup.append("circle")
      .attr("cx", 10)
      .attr("cy", 10)
      .attr("r", 15)
      .attr("fill", "#ab906d")
      ;
    birthdayGroup.append("text")
      .attr("x", 30)
      .attr("y",15)
      .attr("fill", "#ab906d")
      .text("Birthday")
      ;
    birthdayGroup.append("rect")
        .attr("width",100)
        .attr("height",25)
        .attr("fill", "none")
        .attr("stroke", "#ab906d")
        .attr("stroke-width", 5)
        .attr("x", -2.5)
        .attr("y", 40)
    birthdayGroup.append("text")
        .attr("x",40)
        .attr("y", 58)
        .attr("fill", "#ab906d")
        .text(birthdayArray.length)
    birthdayGroup.attr("transform", "translate (20, 10)");


let personalityGroup = viz.append("g")
          .attr("class", "personalityData")
          ;
          personalityGroup.append("circle")
            .attr("cx", 10)
            .attr("cy", 10)
            .attr("r", 15)
            .attr("fill", "#ea8484")
            ;
          personalityGroup.append("text")
            .attr("x", 30)
            .attr("y",15)
            .attr("fill", "#ab906d")
            .text("Personality")
            ;
          personalityGroup.append("rect")
              .attr("width",100)
              .attr("height",25)
              .attr("fill", "none")
              .attr("stroke", "#ea8484")
              .attr("stroke-width", 5)
              .attr("x", -2.5)
              .attr("y", 40)
         personalityGroup.append("text")
              .attr("x",40)
              .attr("y", 58)
              .attr("fill", "#ab906d")
              .text(personalityArray.length)
          personalityGroup.attr("transform", "translate (220, 10)");


let workGroup = viz.append("g")
                    .attr("class", "workData")
                    ;
                    workGroup.append("circle")
                      .attr("cx", 10)
                      .attr("cy", 10)
                      .attr("r", 15)
                      .attr("fill", "#ddbaba")
                      ;
                    workGroup.append("text")
                      .attr("x", 30)
                      .attr("y",15)
                      .attr("fill", "#ab906d")
                      .text("Work")
                      ;
                    workGroup.append("rect")
                        .attr("width",100)
                        .attr("height",25)
                        .attr("fill", "none")
                        .attr("stroke", "#ddbaba")
                        .attr("stroke-width", 5)
                        .attr("x", -2.5)
                        .attr("y", 40)
                    workGroup.append("text")
                        .attr("x",40)
                        .attr("y", 58)
                        .attr("fill", "#ab906d")
                        .text(workArray.length)
                    workGroup.attr("transform", "translate (20, 150)");

let appearanceGroup = viz.append("g")
                                        .attr("class", "appearanceData")
                                        ;
                                        appearanceGroup.append("circle")
                                          .attr("cx", 10)
                                          .attr("cy", 10)
                                          .attr("r", 15)
                                          .attr("fill", "#f6ba5e")
                                          ;
                                        appearanceGroup.append("rect")
                                          .attr("width",100)
                                          .attr("height",25)
                                          .attr("fill", "none")
                                          .attr("stroke", "#f6ba5e")
                                          .attr("stroke-width", 5)
                                          .attr("x", -2.5)
                                          .attr("y", 40)
                                          ;
                                        appearanceGroup.append("text")
                                          .attr("x",40)
                                          .attr("y", 58)
                                          .attr("fill", "#ab906d")
                                          .text(appearanceArray.length)
                                          ;
                                        appearanceGroup.append("text")
                                          .attr("x", 30)
                                          .attr("y",15)
                                          .attr("fill", "#ab906d")
                                          .text("Appearance")
                                          ;
                                        appearanceGroup.attr("transform", "translate (220, 150)");

////////////////////////////////////////////////////

let whatsappGroup = viz.append("g")
      .attr("class", "whatsappData")
;
    whatsappGroup.append("circle")
      .attr("cx", 10)
      .attr("cy", 10)
      .attr("r", 15)
      .attr("fill", "#ab906d")
      .attr("filter", blurOnline)
    whatsappGroup.append("text")
      .attr("x", 40)
      .attr("y", 15)
      .attr("fill", "#ab906d")
      .text("WhatsApp");

    whatsappGroup.attr("transform", "translate(400,10)");


let wechatGroup = viz.append("g")
          .attr("class", "wechatData")
    ;
        wechatGroup.append("circle")
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 15)
          .attr("fill", "#ab906d")
          .attr("filter", blurOnline)
        wechatGroup.append("text")
          .attr("x", 40)
          .attr("y", 15)
          .attr("fill", "#ab906d")
          .text("WeChat");

        wechatGroup.attr("transform", "translate(400,60)");


let instagramGroup = viz.append("g")
                  .attr("class", "instagramData")
            ;
                instagramGroup.append("circle")
                  .attr("cx", 10)
                  .attr("cy", 10)
                  .attr("r", 15)
                  .attr("fill", "#ab906d")
                  .attr("filter", blurOnline)
                instagramGroup.append("text")
                  .attr("x", 40)
                  .attr("y", 15)
                  .attr("fill", "#ab906d")
                  .text("Instagram");

                instagramGroup.attr("transform", "translate(400,110)");


                let facebookGroup = viz.append("g")
                          .attr("class", "facebookData")
                    ;
                        facebookGroup.append("circle")
                          .attr("cx", 10)
                          .attr("cy", 10)
                          .attr("r", 15)
                          .attr("fill", "#ab906d")
                          .attr("filter", blurOnline)
                        facebookGroup.append("text")
                          .attr("x", 40)
                          .attr("y", 15)
                          .attr("fill", "#ab906d")
                          .text("Facebook");

                        facebookGroup.attr("transform", "translate(400,160)");

let lifeGroup = viz.append("g")
                                  .attr("class", "lifeData")
                            ;
                                lifeGroup.append("circle")
                                  .attr("cx", 10)
                                  .attr("cy", 10)
                                  .attr("r", 15)
                                  .attr("fill", "#ab906d")
                                lifeGroup.append("text")
                                  .attr("x", 40)
                                  .attr("y", 15)
                                  .attr("fill", "#ab906d")
                                  .text("Life");

                                lifeGroup.attr("transform", "translate(400,210)");
}
d3.json("data.json").then(gotData);


////////////////////////////////////////////////////

function gotData2(newData2){
  console.log(newData2.length);
  newData2.forEach(showItem2);

  ////////////////////////////////////////////////////

  let birthdayArray2 = newData2.filter(filterBirthday2)
  console.log(birthdayArray2);

  let personalityArray2 = newData2.filter(filterPersonality2)
  console.log(personalityArray2);

  let workArray2 = newData2.filter(filterWork2)
  console.log(workArray2);

  let appearanceArray2 = newData2.filter(filterAppearance2)
  console.log(appearanceArray2);
  ////////////////////////////////////////////////////

  let birthdayGroup2 = viz.append("g")
      .attr("class", "birthdayData2")
      ;
      birthdayGroup2.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 15)
        .attr("fill", "#ab906d")
        ;
      birthdayGroup2.append("text")
        .attr("x", 30)
        .attr("y",15)
        .attr("fill", "#ab906d")
        .text("Birthday")
        ;
      birthdayGroup2.append("rect")
          .attr("width",100)
          .attr("height",25)
          .attr("fill", "none")
          .attr("stroke", "#ab906d")
          .attr("stroke-width", 5)
          .attr("x", -2.5)
          .attr("y", 40)
      birthdayGroup2.append("text")
          .attr("x",40)
          .attr("y", 58)
          .attr("fill", "#ab906d")
          .text(birthdayArray2.length)
      birthdayGroup2.attr("transform", "translate (800, 10)");


  let personalityGroup2 = viz.append("g")
            .attr("class", "personalityData2")
            ;
            personalityGroup2.append("circle")
              .attr("cx", 10)
              .attr("cy", 10)
              .attr("r", 15)
              .attr("fill", "#ea8484")
              ;
            personalityGroup2.append("text")
              .attr("x", 30)
              .attr("y",15)
              .attr("fill", "#ab906d")
              .text("Personality")
              ;
            personalityGroup2.append("rect")
                .attr("width",100)
                .attr("height",25)
                .attr("fill", "none")
                .attr("stroke", "#ea8484")
                .attr("stroke-width", 5)
                .attr("x", -2.5)
                .attr("y", 40)
           personalityGroup2.append("text")
                .attr("x",40)
                .attr("y", 58)
                .attr("fill", "#ab906d")
                .text(personalityArray2.length)
            personalityGroup2.attr("transform", "translate (600, 150)");


  let workGroup2 = viz.append("g")
                      .attr("class", "workData2")
                      ;
                      workGroup2.append("circle")
                        .attr("cx", 10)
                        .attr("cy", 10)
                        .attr("r", 15)
                        .attr("fill", "#ddbaba")
                        ;
                      workGroup2.append("text")
                        .attr("x", 30)
                        .attr("y",15)
                        .attr("fill", "#ab906d")
                        .text("Work")
                        ;
                      workGroup2.append("rect")
                          .attr("width",100)
                          .attr("height",25)
                          .attr("fill", "none")
                          .attr("stroke", "#ddbaba")
                          .attr("stroke-width", 5)
                          .attr("x", -2.5)
                          .attr("y", 40)
                      workGroup2.append("text")
                          .attr("x",40)
                          .attr("y", 58)
                          .attr("fill", "#ab906d")
                          .text(workArray2.length)
                      workGroup2.attr("transform", "translate (600, 10)");

  let appearanceGroup2 = viz.append("g")
                                          .attr("class", "appearanceData2")
                                          ;
                                          appearanceGroup2.append("circle")
                                            .attr("cx", 10)
                                            .attr("cy", 10)
                                            .attr("r", 15)
                                            .attr("fill", "#f6ba5e")
                                            ;
                                          appearanceGroup2.append("rect")
                                            .attr("width",100)
                                            .attr("height",25)
                                            .attr("fill", "none")
                                            .attr("stroke", "#f6ba5e")
                                            .attr("stroke-width", 5)
                                            .attr("x", -2.5)
                                            .attr("y", 40)
                                            ;
                                          appearanceGroup2.append("text")
                                            .attr("x",40)
                                            .attr("y", 58)
                                            .attr("fill", "#ab906d")
                                            .text(appearanceArray2.length)
                                            ;
                                          appearanceGroup2.append("text")
                                            .attr("x", 30)
                                            .attr("y",15)
                                            .attr("fill", "#ab906d")
                                            .text("Appearance")
                                            ;
                                          appearanceGroup2.attr("transform", "translate (800, 150)");

  ////////////////////////////////////////////////////

}
d3.json("data2.json").then(gotData2);
