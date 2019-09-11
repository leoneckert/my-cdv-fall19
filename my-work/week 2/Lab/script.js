//
//
let viz = d3.select("#viz-container")
                .append("svg")
                    .attr("id", "viz")
                    //changing the attribute -
                    // which one i chose and to what i want to change it
                    .attr("width", 800)
                    .attr("height", 800)

;
//
// viz.attr("height", 500);
//
// let myCircle = viz.append("circle")
//               .attr("cx", 200)
//               .attr("cy", 100)
//               .attr("r", 50)
// ;
//
// myCircle.attr("fill", "white");
//
// let myRect = viz.append("rect")
//         .attr("x", 100)
//         .attr("y", 300)
//         .attr("height", 25)
//         .attr("width", 25)
// ;
//
// myRect.attr("fill", "pink");

let myData = [3, 6, 8, 1, 5];

viz.selectAll("circle").data(myData).enter().append("circle")
                                    .attr("cx", 120)
                                    .attr("cy", 400)
                                    .attr("r", 20)
;
