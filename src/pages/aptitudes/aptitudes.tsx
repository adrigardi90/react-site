import * as React from 'react';
//import * as d3 from 'd3';

// var csv = require('./../../static/flare.csv');

// const bubble = () => {
//     var svg = d3.select("svg"),
//         width = +svg.attr("width"),
//         height = +svg.attr("height");

//     var format = d3.format(",d");

//     var color = d3.scaleOrdinal(d3.schemeCategory20c);

//     var pack = d3.pack()
//         .size([width, height])
//         .padding(1.5);

    // d3.json('./static/data.json', function (d) {
    //     d.value = +d.value;
    //     console.log(d)
    //     if (d.value) return d;
    // }, function (error, classes) {
    //     if (error) throw error;

//     console.log(classes)
//     var classes = [
//         { id: "flare.analytics.cluster.AgglomerativeCluster", value: 3938 },
//         { id: "flare.analytics.cluster.CommunityStructure", value: 3812 },
//         { id: "flare.analytics.cluster.HierarchicalCluster", value: 6714 },
//         { id: "flare.analytics.cluster.MergeEdge", value: 743 },
//         { id: "flare.analytics.graph", value: 0 },
//         { id: "flare.analytics.graph.BetweennessCentrality", value: 3534 },
//         { id: "flare.analytics.graph.LinkDistance", value: 5731 },
//         { id: "flare.analytics.graph.MaxFlowMinCut", value: 7840 },
//         { id: "flare.analytics.graph.ShortestPaths", value: 5914 },
//         { id: "flare.analytics.graph.SpanningTree", value: 3416 },
//         { id: "flare.analytics.optimization", value: 0 },
//         { id: "flare.analytics.optimization.AspectRatioBanker", value: 7074 },
//         { id: "flare.animate", value: 0 },
//         { id: "flare.animate.Easing", value: 17010 },
//         { id: "flare.animate.FunctionSequence", value: 5842 },
//         { id: "flare.animate.interpolate", value: 0 },
//         { id: "flare.animate.interpolate.ArrayInterpolator", value: 1983 },
//         { id: "flare.animate.interpolate.ColorInterpolator", value: 2047 },
//         { id: "flare.animate.interpolate.DateInterpolator", value: 1375 },
//         { id: "flare.animate.interpolate.Interpolator", value: 8746 },
//         { id: "flare.animate.interpolate.MatrixInterpolator", value: 2202 },
//         { id: "flare.animate.interpolate.NumberInterpolator", value: 1382 },
//         { id: "flare.animate.interpolate.ObjectInterpolator", value: 1629 },
//         { id: "flare.animate.interpolate.PointInterpolator", value: 1675 },
//         { id: "flare.animate.interpolate.RectangleInterpolator", value: 2042 },
//         { id: "flare.animate.ISchedulable", value: 1041 },
//         { id: "flare.animate.Parallel", value: 5176 },
//         { id: "flare.animate.Pause", value: 449 },
//         { id: "flare.animate.Scheduler", value: 5593 },
//         { id: "flare.animate.Sequence", value: 5534 },
//         { id: "flare.animate.Transition", value: 9201 },
//         { id: "flare.animate.Transitioner", value: 19975 },
//         { id: "flare.animate.TransitionEvent", value: 1116 },
//         { id: "flare.animate.Tween", value: 6006 }
//     ]
//     var root = d3.hierarchy({ children: classes })
//         .sum(function (d) { return d.value; })
//         .each(function (d) {
//             if (id = d.data.id) {
//                 var id, i = id.lastIndexOf(".");
//                 d.id = id;
//                 d.package = id.slice(0, i);
//                 d.class = id.slice(i + 1);
//             }
//             console.log(d.x)
//         });

//     var node = svg.selectAll(".node")
//         .data(pack(root).leaves())
//         .enter().append("g")
//         .attr("class", "node")
//         .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

//     node.append("circle")
//         .attr("id", function (d) { return d.id; })
//         .attr("r", function (d) { return d.r; })
//         .style("fill", function (d) { return 'rgb(198, 219, 239)';});

//     node.append("clipPath")
//         .attr("id", function (d) { return "clip-" + d.id; })
//         .append("use")
//         .attr("xlink:href", function (d) { return "#" + d.id; });

//     node.append("text")
//         .attr("clip-path", function (d) { return "url(#clip-" + d.id + ")"; })
//         .selectAll("tspan")
//         .data(function (d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
//         .enter().append("tspan")
//         .attr("x", 0)
//         .attr("y", function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
//         .text(function (d) { return d; });

//     node.append("title")
//         .text(function (d) { return d.id + "\n" + format(d.value); });


// }


export class Aptitudes extends React.Component {

    componentDidMount() {
       // bubble();
    }

    render() {
        return (
            <svg width="960" height="960" fontFamily="sans-serif" fontSize="10" textAnchor="middle"></svg>
        )
    }
}

