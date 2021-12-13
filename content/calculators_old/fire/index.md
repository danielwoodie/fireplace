---
author_info:
  image: images/denise.jpeg
  name: Daniel Woodie
date: "2022-01-01"
draft: FALSE
image: images/blog/random_walk_with_fire.png
title: A Random Walk with FIRE
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>


<style>
  #scrolly {
    position: relative;
    background-color: #f3f3f3;
    padding: 1rem;
  }
  article {
    position: relative;
    padding: 0;
    max-width: 20rem;
    margin: 0 auto;
  }
  figure {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    width: 100%;
    margin: 0;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    background-color: #8a8a8a;
    z-index: 0;
  }
  figure p {
    text-align: center;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 8rem;
    font-weight: 900;
    color: #fff;
  }
  .step {
    margin: 0 auto 2rem auto;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .step:last-child {
    margin-bottom: 0;
  }
  .step.is-active p {
    background-color: goldenrod;
    color: #3b3b3b;
  }
  .step p {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #3b3b3b;
  }
</style>





<main>
  <section id="intro">
    <!-- <h1 class="intro__hed">Sticky Overlay Example</h1> -->
    <p class="intro__dek">
      <h3>What is a random walk?</h3>
      <p>A random walk is a tool from probability theory to simulate potential outcomes based on a series of independent events. For example, let's use the example of an actual walk where someone can take a step to th or either stay in place depending on the outcome of a coin flip. Heads for step 
      </p>
      <h3>How does this relate to FIRE?</h3>

The FIRE community has many rules of thumbs like the 4% rule or if you invest your entirety of annual expenses in an index fund, you'll likely reach FI (or 25x your annual expenses) in about 10 years.  
    </p>
  </section>
  <section id="scrolly">
    <figure>
      <p>0</p>
      <div id="my_dataviz"></div>
    </figure>
    <article>
      <div class="step" data-step="1">
        <p>Average Returns</p>
        <div>Hello</div>
      </div>
      <div class="step" data-step="2">
        <p>Actual Returns</p>
      </div>
      <div class="step" data-step="3">
        <p>Bootstrap Returns</p>
      </div>
      <div class="step" data-step="4">
        <p>Bootstrap Returns</p>
      </div>
    </article>
  </section>
  <section id="outro"></section>
</main>


<script>
  // using d3 for convenience
  var main = d3.select("main");
  var scrolly = main.select("#scrolly");
  var figure = scrolly.select("figure");
  var article = scrolly.select("article");
  var step = article.selectAll(".step");

  // initialize the scrollama
  var scroller = scrollama();

  // generic window resize listener event
  function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");
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
      
    // At the beginning, I run the update function on the first dataset:
    update(data1);
      
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
        step: "#scrolly article .step",
        offset: 0.33,
        debug: false
      })
      .onStepEnter(handleStepEnter);
    // setup resize event
    window.addEventListener("resize", handleResize);
  }

  // kick things off
  init();


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
var age = 30;
 goal_coast_fire_age = 40;
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
      yearly_value.push( Math.round((yearly_value[i-1] + annual_contributions) * ( 1 + returns[getRandomInt(0, returns.length-1)]/100)) );
    }
    return yearly_value;
}

// Repeat the scenario
function repeat_bootstrap(returns, years_contributing, starting_amount, annual_contributions, num_repeats) {
  var tmp = [];
  for (var i = 0; i < num_repeats; i++) {
    tmp.push(get_bootstrap(real_returns, coast_years_contributing, current_investments, annual_contributions));
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

var tmp_test = repeat_bootstrap(real_returns, coast_years_contributing, current_investments, annual_contributions, 10);
var average_tmp_test = get_average(tmp_test);

var data1 = []
for (var i = 0; i < average_tmp_test.length; i++) {
  data1[i] = {ser1: i, ser2: average_tmp_test[i]}
}

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
function update(data) {

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
      .attr("stroke", "#3CB371")
      .attr("stroke-width", 3.5)
}

// At the beginning, I run the update function on the first dataset:
update(data1)
</script>






















### Before We Get Too Far Along

I need to mention something about modeling. 


>All models are wrong but some are useful.
>
> <cite>George Box</cite>


### Distribution of Returns


### What does this impact?




Laoreet mauris odio ut nec. Nisl, sed adipiscing dignissim arcu placerat ornare pharetra nec in. Ultrices in nisl potenti vitae tempus. Auctor consectetur luctus eu in amet sagittis. Dis urna, vel hendrerit convallis Senectus feugiat faucibus commodo egestas leo vitae in morbi. Enim arcu dignissim mauris, eu, eget

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec et ipsum ullamcorper venenatis fringilla. Pretium, purus eu nec vulputate vel habitant egestas. Congue ornare at ipsum, viverra. Vitae magna faucibus eros, lectus sociis. Etiam nunc amet id dignissim. Feugiat id tempor vel sit in ornare turpis posuere. Eu quisque integer non rhoncus elementum vel. Quis nec viverra lectus augue nec praesent

Pharetra odio amet pellentesque. Egestas nisi adipiscing sed in lectus. Vitae ultrices malesuada aliquet Faucibus consectetur tempus adipiscing vitae. Nec blandit tincidunt nibh nisi, quam volutpat. In lacus laoreet diam risus. Mauris, risus faucibus sagittis sagittis tincidunt id justo. Diam massa pretium consequat mauris viverra. Sagittis eu libero

Laoreet mauris odio ut nec. Nisl, sed adipiscing dignissim arcu placerat ornare pharetra nec in. Ultrices in nisl potenti vitae tempus. Auctor consectetur luctus eu in amet sagittis. Dis urna, vel hendrerit convallis cursus id.

Senectus feugiat faucibus commodo egestas leo vitae in morbi. Enim arcu dignissim mauris, eu, eget pharetra odio amet pellentesque. Egestas nisi adipiscing sed in lectus. Vitae ultrices malesuada aliquet dignissim. Faucibus non tristique eu.
