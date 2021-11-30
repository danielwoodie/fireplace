---
title: "A Random Walk with FIRE"
date: '2021-01-01'
draft: no
image: images/blog/random_walk_with_fire.png
author_info:
  name: Daniel Woodie
  image: images/denise.jpeg
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>

<main>
  <section id="intro">
    <p class="intro__dek">
      <h3>What is a random walk?</h3>
      <p>A random walk is a tool from probability theory to simulate potential outcomes based on a series of independent events. For example, let's use the example of an actual walk where someone can take a step to th or either stay in place depending on the outcome of a coin flip. Heads for step 
      </p>
      <h3>How does this relate to FIRE?</h3>
      <p>Instead of taking steps, you may be interested in something that could follow a similar framework: investment returns over a number of years. This is relevant because you may be investing over a series of years and want to have some idea about how your investments might look after 10, 20, 30 years or more. 
      </p>
      <p>Note about investment advice. It's important to keep in mind a common quote in forecasting: All models are wrong, some are useful. That is to say, there is no guarantee in these simulations. Rather, they 
      </p>
      <p>The FIRE community has many rules of thumbs like the 4% rule or if you invest your entirety of annual expenses in an index fund, you'll likely reach FI (or 25x your annual expenses) in about 10 years.  
    </p>
  </section>
  <section id="scrolly1">
    <figure>
      <p>0</p>
      <div id="my_bootstrap_dataviz"></div>
    </figure>
    <article>
      <div class="step" data-step="1">
        <p>Average Returns</p>
        <div>Your FIRE number is 25 times your annual expenses. For example, if you annually spend $100,000 then your FIRE number is $2,500,000 (25 x $100k).</div>
      </div>
      <div class="step" data-step="2">
        <p>All Returns</p>
        <div>This number is based on some assumptions from the S&P 500. Specifically, the assumption is that the S&P 500, on average, will return about 7% per year over most 10 year time periods. This holds fairly true when looking over the last 100 years -- which includes periods global warfare, hyperinflation, and a few economic crashes. That is to say, it's not cherry-picked to include especially good runs of the stock market.</div>
      </div>
      <div class="step" data-step="3">
        <p>World Wars</p>
        <div>This number is based on some assumptions from the S&P 500. Specifically, the assumption is that the S&P 500, on average, will return about 7% per year over most 10 year time periods. This holds fairly true when looking over the last 100 years -- which includes periods global warfare, hyperinflation, and a few economic crashes. That is to say, it's not cherry-picked to include especially good runs of the stock market.</div>
      </div>
    <div class="step" data-step="4">
      <p>Recessions</p>
        <div>This number is based on some assumptions from the S&P 500. Specifically, the assumption is that the S&P 500, on average, will return about 7% per year over most 10 year time periods. This holds fairly true when looking over the last 100 years -- which includes periods global warfare, hyperinflation, and a few economic crashes. That is to say, it's not cherry-picked to include especially good runs of the stock market.</div>
      </div>
    <div class="step" data-step="5">
      <p>Hyper Inflation</p>
        <div>This number is based on some assumptions from the S&P 500. Specifically, the assumption is that the S&P 500, on average, will return about 7% per year over most 10 year time periods. This holds fairly true when looking over the last 100 years -- which includes periods global warfare, hyperinflation, and a few economic crashes. That is to say, it's not cherry-picked to include especially good runs of the stock market.</div>
      </div>
    <div class="step" data-step="6">
      <p>The Bootstrap</p>
        <div>This number is based on some assumptions from the S&P 500. Specifically, the assumption is that the S&P 500, on average, will return about 7% per year over most 10 year time periods. This holds fairly true when looking over the last 100 years -- which includes periods global warfare, hyperinflation, and a few economic crashes. That is to say, it's not cherry-picked to include especially good runs of the stock market.</div>
      </div>
      <div class="step" data-step="7">
        <p>Bootstrap Returns</p>
        <div>As you might imagine, using a single value to model market returns can provide a less than precise idea about the range of possibilities when investing. To get an understanding of the distribution, you can instead run a bootstrap simulation. A bootstrap simulation takes actual returns (minus CPI for the corresponding year) and randomly samples them over say a 30 year period. This process gets repeated say 1,000 times and you begin to get an idea about the range of possible outcomes.</div>
      </div>
      <div class="step" data-step="8">
        <p>Bootstrap Returns</p>
      </div>
    </article>
  </section>
  
  <section>
  
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
  
  
  </section>
  <section id="scrolly2">
    <figure>
      <p>0</p>
      <div id="my_dataviz"></div>
    </figure>
    <article>
      <div class="step" data-step="1">
        <p>FIRE Number</p>
        <div>Your FIRE number is 25 times your annual expenses. For example, if you annually spend $100,000 then your FIRE number is $2,500,000 (25 x $100k).</div>
      </div>
      <div class="step" data-step="2">
        <p>Average Returns</p>
        <div>This number is based on some assumptions from the S&P 500. Specifically, the assumption is that the S&P 500, on average, will return about 7% per year over most 10 year time periods. This holds fairly true when looking over the last 100 years -- which includes periods global warfare, hyperinflation, and a few economic crashes. That is to say, it's not cherry-picked to include especially good runs of the stock market.</div>
      </div>
      <div class="step" data-step="3">
        <p>Bootstrap Returns</p>
        <div>As you might imagine, using a single value to model market returns can provide a less than precise idea about the range of possibilities when investing. To get an understanding of the distribution, you can instead run a bootstrap simulation. A bootstrap simulation takes actual returns (minus CPI for the corresponding year) and randomly samples them over say a 30 year period. This process gets repeated say 1,000 times and you begin to get an idea about the range of possible outcomes.</div>
      </div>
      <div class="step" data-step="4">
        <p>Bootstrap Returns</p>
      </div>
    </article>
  </section>
  
  
  <section id="outro">
  
  
  </section>
</main>


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


<style>

  #scrolly1, #scrolly2 {
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
    background-color: #fff;
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
    color: #8a8a8a;
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



<script>


  /* How this script is organized as follows
  1. Everything for the first visualization is defined in the following order:
  1.a. Constants
  1.b. Functions
  1.c. Calls
  2. This same format is followed for the second visualization.
  */
  
  // Constants for the first visualization
  // Constants for the second visualization
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
  
  
  
  
  // Functions for the first visualization
  // generic window resize listener event
  function dodger(radius) {
      const radius2 = radius ** 2;
      const bisect = d3.bisector(d => d.x);
      const circles = [];
      return function(x) {
        const l = bisect.left(circles, x - radius);
        const r = bisect.right(circles, x + radius);
        let y = 0;
        for (let i = l; i < r; ++i) {
          const { x: xi, y: yi } = circles[i];
          const x2 = (xi - x) ** 2;
          const y2 = (yi - y) ** 2;
          if (radius2 > x2 + y2) {
            y = yi + Math.sqrt(radius2 - x2) + 1e-6;
            i = l - 1;
            continue;
          }
        }
        circles.splice(bisect.left(circles, x, l, r), 0, { x, y }); //what is this?
        return y;
      };
    }
  
  
  
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
  
  // Create a function that takes a dataset as input and update the plot:
  function update_bs(myindex) {
  
    svg_bs
      .append("g")
      .attr("transform", `translate(0,${height_bs - margin_bs.bottom})`)
      .call(d3.axisBottom(x_bs));
          
    if (myindex == 0) {
    
        var cx = x_bs(d3.mean(values));
        var cy = height_bs - margin_bs.bottom - dodge_bs(cx) - radius_bs - 1;
      
        svg_bs
          .append("circle")
          .attr("cx", cx)
          .attr("cy", -400)
          .attr("r", radius_bs)
          .attr("fill", "#3CB371")
          .transition()
          .duration(1000)
          .ease(d3.easeBounce)
          .attr("cy", cy);
    
        
      
    } else if (myindex == 1) {

        for (let i = 0; i < values.length; ++i) {
          var cx = x_bs(values[i]);
          var cy = height_bs - margin_bs.bottom - dodge_bs(cx) - radius_bs - 1;
      
          svg_bs
            .append("circle")
            .attr("cx", cx)
            .attr("cy", -400)
            .attr("r", radius_bs)
            .attr("fill", "#3CB371")
            .transition()
            .duration(1000)
            .ease(d3.easeBounce)
            .attr("cy", cy);
        };
    
    /*
    
      var genratorAnimation = gen(200); 
  
      let result = genratorAnimation.next();

      let interval = setInterval(function(){
         if(!result.done) {
           genratorAnimation.next();
         }
         else {
          clearInterval(interval)
         }
      }, 50);
      */
    
    } else if (myindex == 2) {
        
    } else if (myindex == 3) {
    
    } else if (myindex == 4) {
    
    }
  };
  
  
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
    update_bs(response.index);
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
  
  /*
  function* gen(n) {

    var parentDiv = document.getElementById("my_bootstrap_dataviz");
    const width = parentDiv.clientWidth;
    const height = 400;
    const radius = 5;
    const dodge = dodger(radius * 2 + 1);
    const margin = { top: 0, right: 10, bottom: 20, left: 10 };
  
    // Set real returns to the value of S&P minus 
    const values = real_returns;

  
    const x = d3.scaleLinear(d3.extent(values), [
      margin.left,
      width - margin.right
    ]);
    const svg = d3
      .select("#my_bootstrap_dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");
  
    // var fillScale = d3.scaleSequentialLog(chroma.interpolateSinebow)
  
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));
  
    function dodger(radius) {
      const radius2 = radius ** 2;
      const bisect = d3.bisector(d => d.x);
      const circles = [];
  
      return function(x) {
        const l = bisect.left(circles, x - radius);
        const r = bisect.right(circles, x + radius);
        let y = 0;
        for (let i = l; i < r; ++i) {
          const { x: xi, y: yi } = circles[i];
          const x2 = (xi - x) ** 2;
          const y2 = (yi - y) ** 2;
          if (radius2 > x2 + y2) {
            y = yi + Math.sqrt(radius2 - x2) + 1e-6;
            i = l - 1;
            continue;
          }
        }
        circles.splice(bisect.left(circles, x, l, r), 0, { x, y }); //what is this?
        return y;
      };
    }
  
    for (let i = 0; i < n; ++i) {
      if (i % 5 === 0) yield svg.node();
      const cx = x(values[i]); // x(values[i]);->what is this?
      const cy = height - margin.bottom - dodge(cx) - radius - 1;
  
      svg
        .append("circle")
        .attr("cx", cx)
        .attr("cy", -400)
        .attr("r", radius)
        .attr("fill", "#3CB371") //purple
        .transition()
        .duration(650)
        .ease(d3.easeBounce)
        .attr("cy", cy);
    }
  
    yield svg.node();
  }
  
  */
  
  
  // Calls for the first visualization
  // kick things off
  // using d3 for convenience
  var main_bs = d3.select("main");
    scrolly_bs = main_bs.select("#scrolly1");
    figure_bs = scrolly_bs.select("figure");
    article_bs = scrolly_bs.select("article");
    step_bs = article_bs.selectAll(".step");
    scroller_bs = scrollama();
  
  
  var parentDiv = document.getElementById("my_bootstrap_dataviz");
  const width_bs = parentDiv.clientWidth;
  const height_bs = 400;
  const radius_bs = 5;
  const dodge_bs = dodger(radius_bs * 2 + 1);
  const margin_bs = { top: 0, right: 10, bottom: 20, left: 10 };
  const values = real_returns;
  
  const x_bs = d3.scaleLinear(d3.extent(values), [
    margin_bs.left,
    width_bs - margin_bs.right
  ]);
  
  const svg_bs = d3
    .select("#my_bootstrap_dataviz")
    .append("svg")
    .attr("width", width_bs)
    .attr("height", height_bs)
    .style("overflow", "visible");
  
  
  
  
  init_bs();
  
  
  
  
  // Set initial parameter values
  const age = 20;
   goal_coast_fire_age = 50;
   goal_fire_age = 50;
   annual_expenses = 100000;
   current_investments = 100000;
   annual_contributions = 75000;
  
  // Get years contributing, years coasting, and full years contributing
  const coast_years_contributing = goal_coast_fire_age - age;
   years_coasting = goal_fire_age - goal_coast_fire_age;
   full_years_contributing = goal_fire_age - age;
   
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
    .attr("class","myYaxis");
  
  // using d3 for convenience
  var main = d3.select("main");
  var scrolly = main.select("#scrolly2");
  var figure = scrolly.select("figure");
  var article = scrolly.select("article");
  var step = article.selectAll(".step");
  
  // initialize the scrollama
  var scroller = scrollama();
   
   
  // Functions for the second visualization
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
        yearly_value.push( Math.round((yearly_value[i-1] + annual_contributions) * ( 1 +   returns[getRandomInt(0, returns.length-1)]/100))   );
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
  };
  
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
  
  
  // Calls for the second visualization
  // kick things off
  init();



</script>

