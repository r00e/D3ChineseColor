function show(color){
    var bodyWidth = $("body").width()
    var blockWidth = 95;
    var colorCount = color.member.length;

    var group = d3.select("body")
        .selectAll("svg")
        .data(d3.range(colorCount)
                .map(function(d, i){
                    return {width: blockWidth, c: color.member[i]}
                }))
        .enter().append("svg")
            .attr("width", blockWidth)
            .attr("height", blockWidth)
            .attr("id", function(d, i){ return "svg" + d.c.name });
    
    group.append("rect")
        .attr("width", function(d) {return d.width;})
        .attr("height", function(d) {return d.width;})
        .attr("title", function(d){return d.c.name;})
        .style("fill", function(d) { return d.c.rgbValue; })

    group.selectAll("rect")
        .on("click", function(d){
            d3.select(this).transition()
                    .attr("width", bodyWidth)
                    .attr("height", bodyWidth)
                    .duration(1000);
            d3.select("svg#svg"+d.c.name).transition()
                    .attr("width", bodyWidth)
                    .attr("height", bodyWidth)
                    .duration(1000);
        })
        // .append("svg")
        // .append("text")
        // .text(function(d) { return d.name + ' : ' + d.rgbValue; })
        // .attr("x", blockWidth/2 - 30)
        // .attr("y", "50")
        // .attr("font-size", "10px")
        // .attr("fill", function(d) { return "#" + (Number("0xFFFFFF") - Number("0x" + d.rgbValue.substr(1))).toString(16).toUpperCase(); });

    // d3.select("body").insert("svg", "div").attr("width", "50").attr("height", "50")
    //                 .append("rect").attr("x",0).attr("y",0).attr("width", 100).attr("height", 100).attr("fill", "yellow");
}

var color =
{
    "name":"Chinese Tradional Color",
    "member":
    [{
    "name":"艾绿",
    "rgbValue":"#A3E2C5"
    },
    {
    "name":"黯",
    "rgbValue":"#41555C"
    },
    {
    "name":"宝蓝",
    "rgbValue":"#4B5CC4"
    },
    {
    "name":"碧蓝",
    "rgbValue":"#3EEDE8"
    },
    {
    "name":"随机1",
    "rgbValue":"#3ADE80"
    },
    {
    "name":"随机2",
    "rgbValue":"#3E8548"
    },
    {
    "name":"随机3",
    "rgbValue":"#AB5328"
    },
    {
    "name":"随机4",
    "rgbValue":"#38472F"
    }]
};