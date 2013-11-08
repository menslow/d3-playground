var GroupSVGElements = function(){

  return {

    init: function() {

      // data for circles
      var circleData = [
        { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
        { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];

      // data for rectangles
      var rectangleData = [
        { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
        { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];

      // create the SVG
      var svgContainer = d3.select(".group").append("svg")
        .attr("width",200)
        .attr("height",200);

      // Create the circle group element
      // Move group to the right 80 px
      var circleGroup = svgContainer.append("g")
        .attr("transform", "translate(80,0)");

      // write our two circle elements
      // Add them to the circle group container
      var circles = circleGroup.selectAll("circle")
        .data(circleData)
        .enter()
        .append("circle");

      // "loop" through circles to assign x and y coordinates
      // assign radius size
      // assign fill color
      var circleAttributes = circles
        .attr("cx", function (d) { return d.cx; })
        .attr("cy", function (d) { return d.cy; })
        .attr("r", function (d) { return d.radius; })
        .style("fill", function (d) { return d.color; });

      // Create the rectangle group element
      var rectangleGroup = svgContainer.append("g");

      // write our two rectangle elements
      var rectangles = rectangleGroup.selectAll("rect")
        .data(rectangleData)
        .enter()
        .append("rect");

      // "loop" through rectangles to assign x and y coordinates
      // assign height and width
      // assign fill color
      var rectangleAttributes = rectangles
        .attr("x", function (d) { return d.rx; })
        .attr("y", function (d) { return d.ry; })
        .attr("height", function (d) { return d.height; })
        .attr("width", function (d) { return d.width; })
        .style("fill", function(d) { return d.color; });

    }

  };

}();

$(document).ready(function($){
  GroupSVGElements.init();
});