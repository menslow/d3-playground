var Axes = function(){

  return {

    init: function() {

      // create the SVG
      var svgContainer = d3.select(".axes").append("svg")
        .attr("width",400) // width is 400 "units"
        .attr("height",100);

      // Create the scale we will use for the axis
      var axisScale = d3.scale.linear()
        .domain([0,100]) // map numbers 0 to 100...
        .range([0,400]); // ...onto 400 width viewport

      // Generate a simple axis
      // And Add scale to asis
      var xAxis = d3.svg.axis()
        .scale(axisScale);

      // xAxis should be a function
      // because we have to call the axis function, passing in a current selection along with any optional arguments.
      //console.log( typeof(xAxis) );

      //Create a group Element for the Axis elements and call the xAxis function
      var xAxisGroup = svgContainer.append("g")
        .call(xAxis);

    }

  };

}();

$(document).ready(function($){
  Axes.init();
});