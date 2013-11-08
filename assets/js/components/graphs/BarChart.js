var BarChart = function(){

  return {

    init: function() {

      var data = [4, 8, 15, 16, 23, 42];

      // var section = d3.selectAll("section");
      // var div = section.append("div");
      // div.html("Hello, world!");

      var body = d3.select("body")
        .style("color", "blue")
        .style("background-color", "grey");

      // D3 Linear scale
      var x = d3.scale.linear()
          .domain([0, d3.max(data)])
          .range([0, 420]);

      d3.select(".chart")
        .selectAll("div")
          .data(data)
        .enter().append("div")
          .style("width", function(d) { return x(d) + "px"; })
          .text(function(d) { return d; });

    }

  };
}();

$(document).ready(function($){
  BarChart.init();
});