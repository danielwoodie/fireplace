// Set the S&P Returns
const sp = [
    18.40, 31.49, -4.38, 21.83, 11.96, 1.36, 13.52, 32.15, 15.89,
    2.10, 14.82, 25.94, -36.55, 5.48, 15.61, 4.83, 10.74, 28.36,
    -21.97, -11.85, -9.03, 20.89, 28.34, 33.10, 22.68, 37.20, 1.33,
    9.97, 7.49, 30.23, -3.06, 31.48, 16.54, 5.81, 18.49, 31.24,
    6.15, 22.34, 20.42, -4.70, 31.74, 18.52, 6.51, -6.98, 23.83,
    37.00, -25.90, -14.31, 18.76, 14.22, 3.56, -8.24, 10.81, 23.80,
    -9.97, 12.40, 16.42, 22.61, -8.81, 26.64, 0.34, 12.06, 43.72,
    -10.46, 7.44, 32.60, 52.56, -1.21, 18.15, 23.68, 30.81, 18.30,
    5.70, 5.20, -8.43, 35.82, 19.03, 25.06, 19.17, -12.77, -10.67,
    -1.10, 29.28, -35.34, 31.94, 46.74, -1.19, 49.98, -8.64, -43.84,
    -25.12, -8.30, 43.81
];

// Set the CPI Inflation
const cpi = [
    -1.20, 0.00, -2.70, -8.90, -10.30, -5.20, 3.50, 2.60, 1.00, 3.70,
    -2.00, -1.30, 0.70, 5.10, 10.90, 6.00, 1.60, 2.30, 8.50, 14.40, 7.70,
    -1.00, 1.10, 7.90, 2.30, 0.80, 0.30, -0.30, 1.50, 3.30, 2.70, 1.08,
    1.50, 1.10, 1.20, 1.20, 1.30, 1.60, 3.00, 2.80, 4.30, 5.50, 5.80,
    4.30, 3.30, 6.20, 11.10, 9.10, 5.70, 6.50, 7.60, 11.30, 13.50, 10.30,
    6.10, 3.20, 4.30, 3.50, 1.90, 3.70, 4.10, 4.80, 5.40, 4.20, 3.00, 3.00,
    2.60, 2.80, 2.90, 2.30, 1.60, 2.20, 3.40, 2.80, 1.60, 2.30, 2.70, 3.40,
    3.20, 2.90, 3.80, 0.40, 1.60, 3.20, 2.10, 1.50, 1.60, 0.10, 1.30,
    2.10, 2.40, 1.80, 1.20
];

// Set the real returns
const real_returns = sp.map(function(item, index) {
  // Subtract inflation from S&P returns
  return +(Math.round(item - cpi[index] + "e+2") + "e-2");
});

// Set initial parameter values
var age = 20;
 goal_coast_fire_age = 50;
 goal_fire_age = 50;
 annual_expenses = 100000;
 current_investments = 100000;
 annual_contributions = 75000;

// Get years contributing, years coasting, and full years contributing
var coast_years_contributing = goal_coast_fire_age - age;
 years_coasting = goal_fire_age - goal_coast_fire_age;
 full_years_contributing = goal_fire_age - age;

// Define random number generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + -min + 1)) + min;
}

// Run a single bootstrapped scenario
function get_bootstrap(returns, years_contributing, starting_amount, annual_contributions) {
    var yearly_value = [starting_amount];
    for (var i = 1; i < years_contributing; i++) {
      yearly_value.push( Math.round((yearly_value[i-1] + annual_contributions) * ( 1 +   returns[getRandomInt(0, returns.length-1)]/100)) );
    }
    return yearly_value;
}

// Repeat the scenario
function repeat_bootstrap(returns, years_contributing, starting_amount, annual_contributions,   num_repeats) {
  var tmp = [];
  for (var i = 0; i < num_repeats; i++) {
    tmp.push(get_bootstrap(real_returns, coast_years_contributing, current_investments,   annual_contributions));
  }
  return tmp;
}

// Get the average value for each step
function get_average(bootstrap_repeats) {
  var tmp = [];
  for (var i = 0; i < bootstrap_repeats[0].length; i++) {
    var tmp2 = 0;
    //still assuming all arrays have the same amount of numbers
    for(var i2 = 0; i2 < bootstrap_repeats.length; i2++){
      tmp2 += bootstrap_repeats[i2][i];
    }
    tmp.push(Math.round(tmp2 / bootstrap_repeats.length));
  }
  return tmp;
};

// using d3 for convenience
var main_bs = d3.select("main");
var scrolly_bs = main_bs.select("#scrolly1");
var figure_bs = scrolly_bs.select("figure");
var article_bs = scrolly_bs.select("article");
var step_bs = article_bs.selectAll(".step");

// initialize the scrollama
var scroller_bs = scrollama();

// generic window resize listener event
function handleResize_bs() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.25);
  step_bs.style("height", stepH + "px");
  step_bs.style("margin-top", stepH + "px");
  var figureHeight = window.innerHeight / 2;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  figure_bs
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");
  // 3. tell scrollama to update new element dimensions
  scroller_bs.resize();
}

// scrollama event handlers
function handleStepEnter_bs(response) {
  console.log(response);
  // response = { element, direction, index }
  // add color to current step only
  step_bs.classed("is-active", function(d, i) {
    return i === response.index;
  });
  // update graphic based on step
  figure_bs
    .select("p").text(response.index + 1);
}

function setupStickyfill_bs() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}

function init_bs() {
  setupStickyfill_bs();
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize_bs();
  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller_bs
    .setup({
      step: "#scrolly1 article .step",
      offset: 0.33,
      debug: false
    })
    .onStepEnter(handleStepEnter_bs);
  // setup resize event
  window.addEventListener("resize", handleResize_bs);
}

// kick things off
init_bs();

// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 50},
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
// Initialise a X axis:
const x = d3.scaleLinear().range([0,width]);
const xAxis = d3.axisBottom().scale(x);
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .attr("class","myXaxis")
// Initialize an Y axis
const y = d3.scaleLinear().range([height, 0]);
const yAxis = d3.axisLeft().scale(y);
svg.append("g")
  .attr("class","myYaxis")
// Create a function that takes a dataset as input and update the plot:
function update(myindex) {
  if (myindex == 0) {
  var data = [
    {ser1: 0, ser2: 0},
    {ser1: 30, ser2:3000000}
  ];
  // Create the X axis:
  x.domain([0, d3.max(data, function(d) { return d.ser1 }) ]);
  svg.selectAll(".myXaxis").transition()
    .duration(3000)
    .call(xAxis);
  // create the Y axis
  y.domain([0, d3.max(data, function(d) { return d.ser2  }) ]);
  svg.selectAll(".myYaxis")
    .transition()
    .duration(3000)
    .call(yAxis);
  // Create a update selection: bind to the new data
  const u = svg.selectAll(".lineTest")
    .data([data], function(d){ return d.ser1 });
  } else if (myindex == 1) {
  var data = [
    {ser1: 0, ser2: 2500000},
    {ser1: 30, ser2:2500000}
  ];
  // Create the X axis:
  x.domain([0, d3.max(data, function(d) { return d.ser1 }) ]);
  svg.selectAll(".myXaxis").transition()
    .duration(3000)
    .call(xAxis);
  // create the Y axis
  y.domain([0, d3.max(data, function(d) { return d.ser2  }) + 200000 ]);
  svg.selectAll(".myYaxis")
    .transition()
    .duration(3000)
    .call(yAxis);
  // Create a update selection: bind to the new data
  const u = svg.selectAll(".lineTest")
    .data([data], function(d){return d.ser1 });
  // Updata the line
  u
    .join("path")
    .attr("class","lineTest")
    .transition()
    .duration(3000)
    .attr("d", d3.line()
      .x(function(d) { return x(d.ser1); })
      .y(function(d) { return y(d.ser2); }))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 3.5)
  } else if (myindex == 2) {
  var data = [
    {ser1: 0, ser2: 2500000},
    {ser1: 30, ser2:2500000}
  ];
  var tmp_test = repeat_bootstrap(real_returns, coast_years_contributing, current_investments,   annual_contributions, 10);
  var average_tmp_test = get_average(tmp_test);
  var data_sim = []
  for (var i = 0; i < average_tmp_test.length; i++) {
    data_sim[i] = {ser1: i, ser2: average_tmp_test[i]}
  }
  // Create the X axis:
  x.domain([0, d3.max(data_sim, function(d) { return d.ser1 }) ]);
  svg.selectAll(".myXaxis").transition()
    .duration(3000)
    .call(xAxis);
  // create the Y axis
  y.domain([0, d3.max(data_sim, function(d) { return d.ser2  }) ]);
  svg.selectAll(".myYaxis")
    .transition()
    .duration(3000)
    .call(yAxis);
  // Create a update selection: bind to the new data
  const u = svg.selectAll(".lineTest")
  u
    .data([data], function(d){ return d.ser1 })
    .join("path")
    .attr("class","lineTest")
    .transition()
    .duration(3000)
    .attr("d", d3.line()
      .x(function(d) { return x(d.ser1); })
      .y(function(d) { return y(d.ser2); }))
      .attr("fill", "none")
      .attr("stroke", "#3CB371")
      .attr("stroke-width", 3.5);
  } else if (myindex == 3) {
  } else if (myindex == 4) {
  }
}
// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly2");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");
// initialize the scrollama
var scroller = scrollama();
// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.25);
  step.style("height", stepH + "px");
  step.style("margin-top", stepH + "px");
  var figureHeight = window.innerHeight / 2;
  var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");
  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}
// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  // response = { element, direction, index }
  // add color to current step only
  step.classed("is-active", function(d, i) {
    return i === response.index;
  });
  // update graphic based on step
  figure
    .select("p").text(response.index + 1);
  update(response.index + 1);
}
function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}
function init() {
  setupStickyfill();
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();
  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly2 article .step",
      offset: 0.33,
      debug: false
    })
    .onStepEnter(handleStepEnter);
  // setup resize event
  window.addEventListener("resize", handleResize);
}
// kick things off
init();
