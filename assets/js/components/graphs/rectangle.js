var Rectangle = function(){

  return {

    init: function() {
      Rectangle.simpleRectangle();
      Rectangle.verticalBarChart();
    },

    simpleRectangle: function() {
      var rectDemo = d3.select(".simple").
        append("svg:svg").
        attr("width", 400).
        attr("height", 300);

      rectDemo.append("svg:rect").
        attr("x", 100).
        attr("y", 100).
        attr("height", 100).
        attr("width", 200);
    },

    verticalBarChart: function() {
      var data = [{year: 2006, books: 54},
                  {year: 2007, books: 43},
                  {year: 2008, books: 41},
                  {year: 2009, books: 44},
                  {year: 2010, books: 35}];

      var barWidth = 40;
      var width = (barWidth + 10) * data.length;
      var height = 200;

      var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
      var y = d3.scale.linear().domain([0, d3.max(data, function(datum) { return datum.books; })]).
        rangeRound([0, height]);

      // add the canvas to the DOM
      var barDemo = d3.select(".vertical-bar").
        append("svg:svg").
        attr("width", width).
        attr("height", height);

      // add the bars
      barDemo.selectAll("rect").
        data(data).
        enter().
        append("svg:rect").
        attr("x", function(datum, index) { return x(index); }).
        attr("y", function(datum) { return height - y(datum.books); }).
        attr("height", function(datum) { return y(datum.books); }).
        attr("width", barWidth).
        attr("fill", "#2d578b");

      // add white numbers to bars
      barDemo.selectAll("text").
        data(data).
        enter().
        append("svg:text").
        attr("x", function(datum, index) { return x(index) + barWidth; }).
        attr("y", function(datum) { return height - y(datum.books); }).
        attr("dx", -barWidth/2).
        attr("dy", "1.2em").
        attr("text-anchor", "middle").
        text(function(datum) { return datum.books;}).
        attr("fill", "white");

      barDemo.selectAll("text.yAxis").
        data(data).
        enter().
        append("svg:text").
        attr("x", function(datum, index) { return x(index) + barWidth; }).
        attr("y", height).
        attr("dx", -barWidth/2).
        attr("text-anchor", "middle").
        attr("style", "font-size: 12; font-family: Helvetica, sans-serif;").
        text(function(datum) { return datum.year;}).
        attr("transform", "translate(0, 18)").
        attr("class", "yAxis");
    }

  };

}();

$(document).ready(function($){
  Rectangle.init();
});