var Circles = function(){

  return {

    init: function() {

      // Set width and height 1st (before data loads) so to prevent reflow of page
      var width = 420,
          barHeight = 20;

      var x = d3.scale.linear()
          .range([0, width]);

      var chart = d3.select(".chart")
          .attr("width", width);

      // Then call for the data asynchronously
      d3.tsv("/assets/js/components/data/bar-chart-svg.tsv", type, function(error, data) {
        x.domain([0, d3.max(data, function(d) { return d.value; })]);

        // Chart height is set on callback because we don't know the domain of the data until we get it.
        chart.attr("height", barHeight * data.length);

        var bar = chart.selectAll("g")
            .data(data)
          .enter().append("g")
            .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

        bar.append("rect")
            .attr("width", function(d) { return x(d.value); })
            .attr("height", barHeight - 1);

        bar.append("text")
            .attr("x", function(d) { return x(d.value) - 3; })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return d.value; });
      });

      // Add function to convert numbers that are returned in data to numbers
      function type(d) {
        d.value = +d.value; // coerce to number
        return d;
      }

    }

  };
}();

$(document).ready(function($){
  Circles.init();
});