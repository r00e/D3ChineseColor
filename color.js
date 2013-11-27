function show(color){
    var blockWidth = ($("body").width() - 40 ) / 4;

    d3.select("body")
        .selectAll("div")
        .data(color.member)
        .enter()
        .append("div")
        .attr("class", "color")
        .style("width", blockWidth)
        .style("background-color", function(d) { return d.rgbValue; })
        .append("svg")
        .append("text")
        .text(function(d) { return d.name + ' : ' + d.rgbValue; })
        .attr("x", blockWidth/2 - 70)
        .attr("y", "100")
        .attr("font-size", "20px")
        .attr("fill", function(d) { return "#" + (Number("0xFFFFFF") - Number("0x" + d.rgbValue.substr(1))).toString(16).toUpperCase(); });
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
    }]
};