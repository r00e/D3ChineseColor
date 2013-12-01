function show(color){
    var bodyWidth = $("body").width()
    var bodyHeight = $("body").height()
    var colorCount = color.member.length;
    var blockWidth = 50;
    var blockInnerRectWidth = 48;
    var blockStrokeWidth = 1

    var svgContainer = d3.select("body")
                        .append("svg")
                        .attr("id", "svgContainer")
    
    var colorBlock = svgContainer.selectAll("rect");
    var column = bodyWidth/blockWidth;

    for (var i = 0; i < colorCount; i++) {
        colorBlock.data( [ color.member[i] ], function(c) { return c;} )
            .enter()
            .append("rect")
            .attr("class", "colorBlock")
            .attr("width", blockInnerRectWidth)
            .attr("height", blockInnerRectWidth)
            .attr("x", function() { 
                return (i%column) * blockWidth + 1;
            })
            .attr("y", function() { 
                return parseInt(i/column) * blockWidth + 1;
            })
            .style("stroke-width", blockStrokeWidth)
            .style("stroke", "#000000")
            .style("fill", function(c) { return c.rgbValue;} )
    };

    var nodeArray = [];
    for (var i = 0; i < colorCount; i++) {
        nodeArray.push( {id : i} );
    };

    var force = d3.layout.force()
            .nodes(nodeArray)
            .links([])
            .gravity(0.05)
            .charge(-50)
            .size([bodyWidth, bodyHeight])
            .start();


    var allColorBlocks = d3.selectAll(".colorBlock");
    allColorBlocks.on("click", function() {
        d3.selectAll(".colorBlock")
            .attr("class", "colorBlock showtime");
    
        d3.selectAll(".showtime").data(nodeArray).call(force.drag);

        d3.select(this)
            .transition()
            .attr("width", bodyWidth)
            .attr("height", bodyHeight)
            .attr("x", 50)
            .attr("y", 50);
    });
    
    force.on("tick", function() {
        d3.selectAll(".showtime").transition().duration(100)
            .attr("x", function(d) { return d.x; })
            .attr("y", function(d) { return d.y; });
    });


    // var group = d3.select("body")
    //     .selectAll("svg")
    //     .data(d3.range(colorCount)
    //             .map(function(d, i){
    //                 return {width: blockWidth, c: color.member[i]}
    //             }))
    //     .enter().append("svg")
    //         .attr("width", blockWidth)
    //         .attr("height", blockWidth)
    //         .attr("id", function(d, i){ return "svg" + d.c.rgbValue.substr(1) });
    
    // group.append("rect")
    //     .attr("width", function(d) {return d.width;})
    //     .attr("height", function(d) {return d.width;})
    //     .style("fill", function(d) { return d.c.rgbValue; })

    // group.selectAll("rect")
    //     .on("click", function(d){
    //         var colorValue = "#" + d3.select("svg#svg" + d.c.rgbValue.substr(1)).attr("id").substr(3);

    //         d3.selectAll("svg").transition().style("opacity", 0).duration(1000).delay(100);

    //         d3.select("body").insert("svg", "svg")
    //                 .attr("id", "tmp")
    //                 .attr("width", bodyWidth)
    //                 .attr("height", bodyHeight)
    //                 .style("opacity", 0)
    //                 .append("rect")
    //                 .attr("width",bodyWidth)
    //                 .attr("height",bodyHeight)
    //                 .style("fill", colorValue);

    //         d3.select("svg#tmp").transition().style("opacity", 100).duration(1500).delay(100);
    //     })
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
    [
        {
        "rgbValue":"#ffb3a7",
        "description":"粉红，即浅红色。别称：妃色杨妃色湘妃色妃红色"
        },
        {
        "rgbValue":"#ed5736",
        "description":"妃色妃红色：古同“绯”，粉红色。杨妃色湘妃色粉红皆同义"
        },
        {
        "rgbValue":"#f00056",
        "description":"品红：比大红浅的红色（quester注：这里的“品红”估计是指的“一品红”，是基于大红色系的，和现在我们印刷用色的“品红M100”不是一个概念）"
        },
        {
        "rgbValue":"#f47983",
        "description":"桃红，桃花的颜色，比粉红略鲜润的颜色。(quester注：不大于M70的色彩，有时可加入适量黄色）"
        },
        {
        "rgbValue":"#db5a6b",
        "description":"海棠红，淡紫红色、较桃红色深一些，是非常妩媚娇艳的颜色。"
        },
        {
        "rgbValue":"#f20c00",
        "description":"石榴红：石榴花的颜色，高色度和纯度的红色。"
        },
        {
        "rgbValue":"#c93756",
        "description":"樱桃色：鲜红色"
        },
        {
        "rgbValue":"#f05654",
        "description":"银红：银朱和粉红色颜料配成的颜色。多用来形容有光泽的各种红色，尤指有光泽浅红。"
        },
        {
        "rgbValue":"#ff2121",
        "description":"大红：正红色，三原色中的红，传统的中国红，又称绛色（quester注：RGB色中的R255系列明度）"
        },
        {
        "rgbValue":"#8c4356",
        "description":"绛紫：紫中略带红的颜色"
        },
        {
        "rgbValue":"#c83c23",
        "description":"绯红：艳丽的深红"
        },
        {
        "rgbValue":"#9d2933",
        "description":"胭脂：1，女子装扮时用的胭脂的颜色。2，国画暗红色颜料"
        },
        {
        "rgbValue":"#ff4c00",
        "description":"朱红：朱砂的颜色，比大红活泼，也称铅朱朱色丹色。（quester注：在YM对等的情况下，适量减少红色的成分就是该色的色彩系列感觉）"
        },
        {
        "rgbValue":"#ff4e20",
        "description":"丹：丹砂的鲜艳红色"
        },
        {
        "rgbValue":"#f35336",
        "description":"彤：赤色"
        },
        {
        "rgbValue":"#cb3a56",
        "description":"茜色：茜草染的色彩，呈深红色"
        },
        {
        "rgbValue":"#ff2d51",
        "description":"火红：火焰的红色，赤色"
        },
        {
        "rgbValue":"#c91f37",
        "description":"赫赤：深红，火红。泛指赤色、火红色。"
        },
        {
        "rgbValue":"#ef7a82",
        "description":"嫣红：鲜艳的红色"
        },
        {
        "rgbValue":"#ff0097",
        "description":"洋红：色橘红。（quester注：这个色彩方向不太对，通常洋红指的是倾向于M100系列的红色，应该削弱黄色成分。）"
        },
        {
        "rgbValue":"#ff3300",
        "description":"炎：引申为红色。"
        },
        {
        "rgbValue":"#c3272b",
        "description":"赤：本义火的颜色，即红色"
        },
        {
        "rgbValue":"#a98175",
        "description":"绾：绛色；浅绛色。"
        },
        {
        "rgbValue":"#c32136",
        "description":"枣红：即深红（quester注：色相不变，是深浅变化）"
        },
        {
        "rgbValue":"#b36d61",
        "description":"檀：浅红色，浅绛色。"
        },
        {
        "rgbValue":"#be002f",
        "description":"殷红：发黑的红色。"
        },
        {
        "rgbValue":"#dc3023",
        "description":"酡红：像饮酒后脸上泛现的红色，泛指脸红"
        },
        {
        "rgbValue":"#f9906f",
        "description":"酡颜：饮酒脸红的样子。亦泛指脸红色"
        },
        {
        "rgbValue":"#fff143",
        "description":"鹅黄：淡黄色 （quester注：鹅嘴的颜色，高明度微偏红黄色）"
        },
        {
        "rgbValue":"#faff72",
        "description":"鸭黄：小鸭毛的黄色"
        },
        {
        "rgbValue":"#eaff56",
        "description":"樱草色：淡黄色"
        },
        {
        "rgbValue":"#ffa631",
        "description":"杏黄：成熟杏子的黄色（quester注：Y100M20~30感觉的色彩，比较常用且有浓郁中国味道）"
        },
        {
        "rgbValue":"#ff8c31",
        "description":"杏红：成熟杏子偏红色的一种颜色"
        },
        {
        "rgbValue":"#ff8936",
        "description":"橘黄：柑橘的黄色。"
        },
        {
        "rgbValue":"#ffa400",
        "description":"橙黄：柑橘的黄色。（quester注：Y100M50感觉的色彩，现代感比较强。广告上用得较多）"
        },
        {
        "rgbValue":"#ff7500",
        "description":"橘红：柑橘皮所呈现的红色。"
        },
        {
        "rgbValue":"#ffc773",
        "description":"姜黄：中药名。别名黄姜。为姜科植物姜黄的根茎。又指人脸色不正,呈黄白色"
        },
        {
        "rgbValue":"#f0c239",
        "description":"缃色：浅黄色。"
        },
        {
        "rgbValue":"#fa8c35",
        "description":"橙色：界于红色和黄色之间的混合色。"
        },
        {
        "rgbValue":"#b35c44",
        "description":"茶色：一种比栗色稍红的棕橙色至浅棕色"
        },
        {
        "rgbValue":"#a88462",
        "description":"驼色：一种比咔叽色稍红而微淡、比肉桂色黄而稍淡和比核桃棕色黄而暗的浅黄棕色"
        },
        {
        "rgbValue":"#c89b40",
        "description":"昏黄：形容天色、灯光等呈幽暗的黄色"
        },
        {
        "rgbValue":"#60281e",
        "description":"栗色：栗壳的颜色。即紫黑色"
        },
        {
        "rgbValue":"#b25d25",
        "description":"棕色：棕毛的颜色,即褐色。1，在红色和黄色之间的任何一种颜色 2，适中的暗淡和适度的浅黑。"
        },
        {
        "rgbValue":"#827100",
        "description":"棕绿：绿中泛棕色的一种颜色。"
        },
        {
        "rgbValue":"#7c4b00",
        "description":"棕黑：深棕色。"
        },
        {
        "rgbValue":"#9b4400",
        "description":"棕红：红褐色。"
        },
        {
        "rgbValue":"#ae7000",
        "description":"棕黄：浅褐色。"
        },
        {
        "rgbValue":"#9c5333",
        "description":"赭：赤红如赭土的颜料,古人用以饰面"
        },
        {
        "rgbValue":"#955539",
        "description":"赭色：红色、赤红色。"
        },
        {
        "rgbValue":"#ca6924",
        "description":"琥珀："
        },
        {
        "rgbValue":"#6e511e",
        "description":"褐色：黄黑色"
        },
        {
        "rgbValue":"#d3b17d",
        "description":"枯黄：干枯焦黄"
        },
        {
        "rgbValue":"#e29c45",
        "description":"黄栌：一种落叶灌木，花黄绿色,叶子秋天变成红色。木材黄色可做染料。"
        },
        {
        "rgbValue":"#896c39",
        "description":"秋色：1，中常橄榄棕色,它比一般橄榄棕色稍暗,且稍稍绿些。2，古以秋为金,其色白,故代指白色。"
        },
        {
        "rgbValue":"#d9b611",
        "description":"秋香色：浅橄榄色浅黄绿色。（quester注：直接在Y中掺入k10~30可得到不同浓淡的该类色彩）"
        },
        {
        "rgbValue":"#bddd22",
        "description":"嫩绿：像刚长出的嫩叶的浅绿色"
        },
        {
        "rgbValue":"#c9dd22",
        "description":"柳黄：像柳树芽那样的浅黄色"
        },
        {
        "rgbValue":"#afdd22",
        "description":"柳绿：柳叶的青绿色"
        },
        {
        "rgbValue":"#789262",
        "description":"竹青：竹子的绿色"
        },
        {
        "rgbValue":"#a3d900",
        "description":"葱黄：黄绿色，嫩黄色"
        },
        {
        "rgbValue":"#9ed900",
        "description":"葱绿：1，浅绿又略显微黄的颜色2，草木青翠的样子"
        },
        {
        "rgbValue":"#0eb83a",
        "description":"葱青：淡淡的青绿色"
        },
        {
        "rgbValue":"#0eb83a",
        "description":"葱倩：青绿色"
        },
        {
        "rgbValue":"#0aa344",
        "description":"青葱：翠绿色,形容植物浓绿"
        },
        {
        "rgbValue":"#00bc12",
        "description":"油绿：光润而浓绿的颜色。以上几种绿色都是明亮可爱的色彩。"
        },
        {
        "rgbValue":"#0c8918",
        "description":"绿沉：深绿"
        },
        {
        "rgbValue":"#1bd1a5",
        "description":"碧色：1，青绿色。2，青白色,浅蓝色。"
        },
        {
        "rgbValue":"#2add9c",
        "description":"碧绿：鲜艳的青绿色"
        },
        {
        "rgbValue":"#48c0a3",
        "description":"青碧：鲜艳的青蓝色"
        },
        {
        "rgbValue":"#3de1ad",
        "description":"翡翠色：1，翡翠鸟羽毛的青绿色。2，翡翠宝石的颜色。（quester注：C-Y≥30的系列色彩，多与白色配合以体现清新明丽感觉，与黑色配合效果不好：该色个性柔弱，会被黑色牵制）"
        },
        {
        "rgbValue":"#40de5a",
        "description":"草绿：绿而略黄的颜色。"
        },
        {
        "rgbValue":"#00e09e",
        "description":"青色：1，一类带绿的蓝色,中等深浅,高度饱和。3，本义是蓝色。4，一般指深绿色。5，也指黑色。6，四色印刷中的一色。2，特指三补色中的一色。"
        },
        {
        "rgbValue":"#00e079",
        "description":"青翠：鲜绿"
        },
        {
        "rgbValue":"#c0ebd7",
        "description":"青白：白而发青,尤指脸没有血色"
        },
        {
        "rgbValue":"#e0eee8",
        "description":"鸭卵青：淡青灰色，极淡的青绿色"
        },
        {
        "rgbValue":"#bbcdc5",
        "description":"蟹壳青：深灰绿色"
        },
        {
        "rgbValue":"#424c50",
        "description":"鸦青：鸦羽的颜色。即黑而带有紫绿光的颜色。"
        },
        {
        "rgbValue":"#00e500",
        "description":"绿色：1，在光谱中介于蓝与黄之间的那种颜色。2，本义：青中带黄的颜色。3，引申为黑色，如绿鬓：乌黑而光亮的鬓发。代指为青春年少的容颜。（quester注：现代色彩研究中，把绿色提高到了一个重要的位置，和其它红黄兰三原色并列研究，称做“心理原色”之一）"
        },
        {
        "rgbValue":"#9ed048",
        "description":"豆绿：浅黄绿色"
        },
        {
        "rgbValue":"#96ce54",
        "description":"豆青：浅青绿色"
        },
        {
        "rgbValue":"#7bcfa6",
        "description":"石青：淡灰绿色"
        },
        {
        "rgbValue":"#2edfa3",
        "description":"玉色:玉的颜色，高雅的淡绿、淡青色"
        },
        {
        "rgbValue":"#7fecad",
        "description":"缥：绿色而微白"
        },
        {
        "rgbValue":"#a4e2c6",
        "description":"艾绿：艾草的颜色。偏苍白的绿色。"
        },
        {
        "rgbValue":"#21a675",
        "description":"松柏绿：经冬松柏叶的深绿"
        },
        {
        "rgbValue":"#057748",
        "description":"松花绿：亦作“松花”、“松绿”。偏黑的深绿色,墨绿。"
        },
        {
        "rgbValue":"#bce672",
        "description":"松花色：浅黄绿色。（松树花粉的颜色）《红楼梦》中提及松花配桃红为娇艳"
        },
        {
        "rgbValue":"#44cef6",
        "description":"蓝：三原色的一种。像晴天天空的颜色（quester注：这里的蓝色指的不是RGB色彩中的B，而是CMY色彩中的C）"
        },
        {
        "rgbValue":"#177cb0",
        "description":"靛青：也叫“蓝靛”。用蓼蓝叶泡水调和与石灰沉淀所得的蓝色染料。呈深蓝绿色（quester注：靛，发音dian四声，有些地方将蓝墨水称为“靛水”或者“兰靛水”）"
        },
        {
        "rgbValue":"#065279",
        "description":"靛蓝：由植物(例如靛蓝或菘蓝属植物)得到的蓝色染料"
        },
        {
        "rgbValue":"#3eede7",
        "description":"碧蓝：青蓝色"
        },
        {
        "rgbValue":"#70f3ff",
        "description":"蔚蓝：类似晴朗天空的颜色的一种蓝色"
        },
        {
        "rgbValue":"#4b5cc4",
        "description":"宝蓝：鲜艳明亮的蓝色（quester注：英文中为RoyalBlue即皇家蓝色，是皇室选用的色彩，多和小面积纯黄色（金色）配合使用。）"
        },
        {
        "rgbValue":"#a1afc9",
        "description":"蓝灰色：一种近于灰略带蓝的深灰色"
        },
        {
        "rgbValue":"#2e4e7e",
        "description":"藏青：蓝而近黑"
        },
        {
        "rgbValue":"#3b2e7e",
        "description":"藏蓝：蓝里略透红色"
        },
        {
        "rgbValue":"#4a4266",
        "description":"黛：青黑色的颜料。古代女子用以画眉。"
        },
        {
        "rgbValue":"#4a4266",
        "description":"黛螺：绘画或画眉所使用的青黑色颜料，代指女子眉妩。"
        },
        {
        "rgbValue":"#4a4266",
        "description":"黛色：青黑色。"
        },
        {
        "rgbValue":"#426666",
        "description":"黛绿：墨绿。"
        },
        {
        "rgbValue":"#425066",
        "description":"黛蓝：深蓝色"
        },
        {
        "rgbValue":"#574266",
        "description":"黛紫：深紫色"
        },
        {
        "rgbValue":"#8d4bbb",
        "description":"紫色：蓝和红组成的颜色。古人以紫为祥瑞的颜色。代指与帝王、皇宫有关的事物。"
        },
        {
        "rgbValue":"#815463",
        "description":"紫酱：浑浊的紫色"
        },
        {
        "rgbValue":"#815476",
        "description":"酱紫：紫中略带红的颜色"
        },
        {
        "rgbValue":"#4c221b",
        "description":"紫檀：檀木的颜色，也称乌檀色乌木色"
        },
        {
        "rgbValue":"#003371",
        "description":"绀青绀紫：纯度较低的深紫色"
        },
        {
        "rgbValue":"#56004f",
        "description":"紫棠：黑红色"
        },
        {
        "rgbValue":"#801dae",
        "description":"青莲：偏蓝的紫色"
        },
        {
        "rgbValue":"#4c8dae",
        "description":"群青：深蓝色"
        },
        {
        "rgbValue":"#b0a4e3",
        "description":"雪青：浅蓝紫色"
        },
        {
        "rgbValue":"#cca4e3",
        "description":"丁香色：紫丁香的颜色，浅浅的紫色，很娇柔淡雅的色彩"
        },
        {
        "rgbValue":"#edd1d8",
        "description":"藕色：浅灰而略带红的颜色"
        },
        {
        "rgbValue":"#e4c6d0",
        "description":"藕荷色：浅紫而略带红的颜色"
        },
        {
        "rgbValue":"#75878a",
        "description":"苍色：即各种颜色掺入黑色后的颜色，如苍翠"
        },
        {
        "rgbValue":"#519a73",
        "description":"苍黄"
        },
        {
        "rgbValue":"#a29b7c",
        "description":"苍青"
        },
        {
        "rgbValue":"#7397ab",
        "description":"苍黑"
        },
        {
        "rgbValue":"#d1d9e0",
        "description":"(quester注：准确的说是掺入不同灰度级别的灰色）"
        },
        {
        "rgbValue":"#88ada6",
        "description":"水色：水红"
        },
        {
        "rgbValue":"#f3d3e7",
        "description":"水绿"
        },
        {
        "rgbValue":"#d4f2e7",
        "description":"水蓝"
        },
        {
        "rgbValue":"#d2f0f4",
        "description":"淡青"
        },
        {
        "rgbValue":"#d3e0f3",
        "description":"湖蓝"
        },
        {
        "rgbValue":"#30dff3",
        "description":"湖绿"
        },
        {
        "rgbValue":"#25f8cb",
        "description":"皆是浅色。"
        },
        {
        "rgbValue":"#ffffff",
        "description":"精白：纯白，洁白，净白，粉白。"
        },
        {
        "rgbValue":"#fffbf0",
        "description":"象牙白：乳白色"
        },
        {
        "rgbValue":"#f0fcff",
        "description":"雪白：如雪般洁白"
        },
        {
        "rgbValue":"#d6ecf0",
        "description":"月白：淡蓝色"
        },
        {
        "rgbValue":"#f2ecde",
        "description":"缟：白色"
        },
        {
        "rgbValue":"#e0f0e9",
        "description":"素：白色，无色"
        },
        {
        "rgbValue":"#f3f9f1",
        "description":"荼白：如荼之白色"
        },
        {
        "rgbValue":"#e9f1f6",
        "description":"霜色：白霜的颜色。"
        },
        {
        "rgbValue":"#c2ccd0",
        "description":"花白：白色和黑色混杂的。斑白的夹杂有灰色的白"
        },
        {
        "rgbValue":"#fcefe8",
        "description":"鱼肚白：似鱼腹部的颜色，多指黎明时东方的天色颜色（quester注：M5Y5）"
        },
        {
        "rgbValue":"#e3f9fd",
        "description":"莹白：晶莹洁白"
        },
        {
        "rgbValue":"#808080",
        "description":"灰色：黑色和白色混和成的一种颜色"
        },
        {
        "rgbValue":"#eedeb0",
        "description":"牙色：与象牙相似的淡黄色（quester注：暖白）"
        },
        {
        "rgbValue":"#f0f0f4",
        "description":"铅白：铅粉的白色。铅粉，国画颜料，日久易氧化“返铅”变黑。铅粉在古时用以搽脸的化妆品。（quester注：冷白）"
        },
        {
        "rgbValue":"#622a1d",
        "description":"玄色：赤黑色，黑中带红的颜色，又泛指黑色"
        },
        {
        "rgbValue":"#3d3b4f",
        "description":"玄青：深黑色"
        },
        {
        "rgbValue":"#725e82",
        "description":"乌色：暗而呈黑的颜色"
        },
        {
        "rgbValue":"#392f41",
        "description":"乌黑：深黑；"
        },
        {
        "rgbValue":"#161823",
        "description":"漆黑：非常黑的"
        },
        {
        "rgbValue":"#50616d",
        "description":"墨色：即黑色"
        },
        {
        "rgbValue":"#758a99",
        "description":"墨灰：即黑灰"
        },
        {
        "rgbValue":"#000000",
        "description":"黑色：亮度最低的非彩色的或消色差的物体的颜色；最暗的灰色；与白色截然不同的消色差的颜色；被认为特别属于那些既不能反射、又不能透过能使人感觉到的微小入射光的物体,任何亮度很低的物体颜色。"
        },
        {
        "rgbValue":"#493131",
        "description":"缁色：帛黑色"
        },
        {
        "rgbValue":"#312520",
        "description":"煤黑象牙黑：都是黑，不过有冷暖之分。"
        },
        {
        "rgbValue":"#5d513c",
        "description":"黧：黑中带黄的颜色"
        },
        {
        "rgbValue":"#75664d",
        "description":"黎：黑中带黄似黎草色"
        },
        {
        "rgbValue":"#6b6882",
        "description":"黝：本义为淡黑色或微青黑色。"
        },
        {
        "rgbValue":"#665757",
        "description":"黝黑"
        },
        {
        "rgbValue":"#726257",
        "description":"青黑色（皮肤暴露在太阳光下而晒成的）"
        },
        {
        "rgbValue":"#41555d",
        "description":"黯：深黑色、泛指黑色"
        },
        {
        "rgbValue":"#f2be45",
        "description":"赤金：足金的颜色"
        },
        {
        "rgbValue":"#eacd76",
        "description":"金色：平均为深黄色带光泽的颜色"
        },
        {
        "rgbValue":"#e9e7ef",
        "description":"银白：带银光的白色"
        },
        {
        "rgbValue":"#549688",
        "description":"铜绿"
        },
        {
        "rgbValue":"#a78e44",
        "description":"乌金"
        },
        {
        "rgbValue":"#bacac6",
        "description":"老银：金属氧化后的色彩"
        },
        {
        "rgbValue":"#bf242a",
        "description":"银朱：呈暗粉色。"
        },
        {
        "rgbValue":"#9d2933",
        "description":"胭脂：色暗红。用红蓝花、茜草、紫梗三种植物制成的颜料，年代久则有褪色的现象。"
        },
        {
        "rgbValue":"#ff461f",
        "description":"朱砂：色朱红。用以画花卉、禽鸟羽毛。（quester注：黄色成分微高于红色成分，色艳丽，需注意与背景色调和，多数情况下不大面积使用。）"
        },
        {
        "rgbValue":"#f36838",
        "description":"朱膘：色橘红。明度比朱砂高，彩度比朱砂低。用以画花卉。"
        },
        {
        "rgbValue":"#845a33",
        "description":"赭石：色红褐。用以画山石、树干、老枝叶。"
        },
        {
        "rgbValue":"#1685a9",
        "description":"石青：色青，依深浅分为－头青、二青、三青。用以画叶或山石。"
        },
        {
        "rgbValue":"#16a951",
        "description":"石绿：依深浅分为－头绿、二绿、三绿。用以画山石、树干、叶、点苔等。"
        },
        {
        "rgbValue":"#fff2df",
        "description":"白粉：亦称胡粉，色白，有蛤粉和铅粉两种。用以画白花、鸟，或调配其他颜料使用。"
        },
        {
        "rgbValue":"#003472",
        "description":"花青：色藏青。用以画枝叶、山石、水波等。用蓼蓝或大蓝的叶子制成蓝靛，再提炼出来的青色颜料，蓝绿色或藏蓝色。用途相当广，可调藤黄成草绿或嫩绿色。广花，颜料。即广东产的花青。（quester注：微含红色成分，故与黄色调和后生成的绿色较为沉着）"
        },
        {
        "rgbValue":"#ffb61e",
        "description":"藤黄：色明黄。用以画花卉、枝叶。藤黄：明黄色。南方热带林中的海藤树，常绿乔木，茎高达二十米，从其树皮凿孔，流出黄色树脂，以竹筒承接，干透可作国画颜料。（quester注：亦含微量红色成分，有毒。和黑色配合时甚为醒目，多为危险警示色彩）"
        },
        {
        "rgbValue":"#845a33",
        "description":"赭石色：暗棕色矿物，用做颜料"
        },
        {
        "rgbValue":"#ffc64b",
        "description":"雌黄：矿物名。成分是三硫化二砷(As2S3)橙黄色,半透明,可用来制颜料。古人用雌黄来涂改文字，因此称乱改文字、乱发议论为“妄下雌黄”，称不顾事实、随口乱说为“信口雌黄”。"
        },
        {
        "rgbValue":"#e9bb1d",
        "description":"雄黄：中药名。为含硫化砷的矿石。别名石黄、黄石。"
        },
        {
        "rgbValue":"#e9bb1d",
        "description":"石黄：国画颜料，即雄黄。"
        },
        {
        "rgbValue":"#ff4777",
        "description":"洋红：色橘红。用以画花卉。"}
    ]
};