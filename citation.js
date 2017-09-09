// code use to create modal is found on W3School - "modal"
//https://www.w3schools.com/w3css/w3css_modal.asp

function introduction() {
    modal.style.display = "block";
}

startBtn.onclick = function() {
    modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// code to create donut chart is found from Nattawat Nonsung's block
// http://bl.ocks.org/nnattawat/9368297
// major adjustments are done to inplement the function using our data,
// but few changes are done to the structure of code.

function donut(){
    // Default settings

    var $el = d3.select("#recommendationChart");
    var data = {};
    // var showTitle = true;
    var width = 350,
        height = 160,
        radius = Math.min(width, height) / 2;

    var currentVal;
    var color = d3.scaleOrdinal(d3.schemeCategory20);


    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.value; });

    var svg, g, arc;

    var object = {};

    // Method for render/refresh graph
    object.render = function(){
        if(!svg){
            arc = d3.arc()
                .outerRadius(radius)
                .innerRadius(radius - (radius/2.5));

            svg = $el.append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + (width / 2 + 80) + "," + height / 2 + ")");

            g = svg.selectAll(".arc")
                .data(pie(d3.entries(data)))
                .enter().append("g")
                .attr("class", "arc");


            svg.append("text")
                .attr("x", -230 )
                .attr("y", -65 )
                .attr("style","font-family: 'Source Sans Pro', serif;")
                .style("fill", "white")
                .text("| User Preference Weight");


            svg.append("text")
                .attr("x", -230 )
                .attr("y", -40 )
                .attr("style","font-family: 'Source Sans Pro', serif;")
                .style("fill", "white")
                .text("Cash Back");

            svg.append("text")
                .attr("x", -230 )
                .attr("y", -15 )
                .attr("style","font-family: 'Source Sans Pro', serif;")
                .style("fill", "white")
                .text("Travel Reward");

            svg.append("text")
                .attr("x", -230 )
                .attr("y", 10 )
                .attr("style","font-family: 'Source Sans Pro', serif;")
                .style("fill", "white")
                .text("Open Bonus");

            svg.append("text")
                .attr("x", -230 )
                .attr("y", 35 )
                .attr("style","font-family: 'Source Sans Pro', serif;")
                .style("fill", "white")
                .text("APR Rate");

            svg.append("text")
                .attr("x", -230 )
                .attr("y", 60 )
                .attr("style","font-family: 'Source Sans Pro', serif;")
                .style("fill", "white")
                .text("Annual Fee");



            svg.append("rect")

                .attr("x", -230)
                .attr("y", -35)
                .attr("width", 95)
                .attr("height", 1)
                .attr("rx", 2)
                .attr("ry", 2)
                .attr("opacity", 1)
                .style("stroke", "#78f1d6")
                .style("stroke-width",1);

            svg.append("rect")

                .attr("x", -230)
                .attr("y", -10)
                .attr("width", 95)
                .attr("height", 1)
                .attr("rx", 2)
                .attr("ry", 2)
                .attr("opacity", 1)
                .style("stroke", "#a760ef")
                .style("stroke-width",1);

            svg.append("rect")

                .attr("x", -230)
                .attr("y", 15)
                .attr("width", 95)
                .attr("height", 1)
                .attr("rx", 2)
                .attr("ry", 2)
                .attr("opacity", 1)
                .style("stroke", "#ef795b")
                .style("stroke-width",1);

            svg.append("rect")

                .attr("x", -230)
                .attr("y", 40)
                .attr("width", 95)
                .attr("height", 1)
                .attr("rx", 2)
                .attr("ry", 2)
                .attr("opacity", 1)
                .style("stroke", "#efe45d")
                .style("stroke-width",1);

            svg.append("rect")

                .attr("x", -230)
                .attr("y", 65)
                .attr("width", 95)
                .attr("height", 1)
                .attr("rx", 2)
                .attr("ry", 2)
                .attr("opacity", 1)
                .style("stroke", "#DB324D")
                .style("stroke-width",1);




            g.append("path")
            // Attach current value to g so that we can use it for animation
                .each(function(d) { this._current = d; })
                .attr("d", arc)
                .style("fill", function(d) {

                    if (d.data.key == "Cash Back") {
                        return "#78f1d6";
                    } else if (d.data.key == "Travel Reward") {
                        return "#ef795b";
                    } else if (d.data.key == "Open Bonus") {
                        return "#efe45d";

                    } else if (d.data.key == "APR Rate") {
                        return "#a760ef";

                    } else if (d.data.key == "Annual Fee") {
                        return "#DB324D";
                    }

                   });


            g.select("text").text(function(d) { return d.data.key; });

            svg.append("text")
                .datum(data)
                .attr("x", -18 )
                .attr("y", 0 + radius/10 )
                .attr("class", "text-tooltip")
                .style("text-anchor", "middle")
                .attr("font-weight", "bold")
                .attr("style","font-family: 'Source Sans Pro', serif;")
                .style("font-size", radius/3+"px");



            g.on("mouseover", function(obj){

                svg.select("text.text-tooltip")
                    .attr("fill", function(d) {
                        if (obj.data.key == "Cash Back") {
                            return "#78f1d6";
                        } else if (obj.data.key == "Travel Reward") {
                            return "#ef795b";
                        } else if (obj.data.key == "Open Bonus") {
                            return "#efe45d";

                        } else if (obj.data.key == "APR Rate") {
                            return "#a760ef";

                        } else if (obj.data.key == "Annual Fee") {
                            return "#DB324D";
                        }
                    })
                    .text(function(d){
                        return d[obj.data.key];
                    });
            });

            g.on("mouseout", function(obj){
                svg.select("text.text-tooltip").text("");
            });

        }else{
            g.data(pie(d3.entries(data))).exit().remove();

            g.select("path")
                .transition().duration(200)
                .attrTween("d", function(a){
                    var i = d3.interpolate(this._current, a);
                    this._current = i(0);
                    return function(t) {
                        return arc(i(t));
                    };
                })

            g.select("text")
                .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; });

            svg.select("text.text-tooltip").datum(data);
        }
        return object;
    };

    // Getter and setter methods
    object.data = function(value){
        if (!arguments.length) return data;
        data = value;
        return object;
    };

    object.$el = function(value){
        if (!arguments.length) return $el;
        $el = value;
        return object;
    };

    object.width = function(value){
        if (!arguments.length) return width;
        width = value;
        radius = Math.min(width, height) / 2;
        return object;
    };

    object.height = function(value){
        if (!arguments.length) return height;
        height = value;
        radius = Math.min(width, height) / 2;
        return object;
    };

    return object;
};
