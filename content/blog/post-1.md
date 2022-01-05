---
title: "A Random Walk with FIRE"
date: '2022-01-01'
draft: no
image: images/blog/random_walk_with_fire.png
author_info:
  name: Daniel Woodie
  image: images/daniel.jpg
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>
<script src=//cdnjs.cloudflare.com/ajax/libs/seedrandom/2.3.10/seedrandom.min.js></script>

<main>
  <section id="intro">
    <p class="intro__dek">
      <h3>What is FIRE?</h3>
      <p>FIRE stands for Financial Independence Retire Early and is a personal finance philosophy focused on investing aggressively when you're young and living off the gains well before typical retirement years. These principles have been around for quite some time but only recently have they become mainstream.</p>
      <p>The FIRE community (and it's various sub-communities) have their nuances but there's a few core beliefs that most people can agree on. For example, the 25x rule states that when you have 25 times your annual expenses invested in a low-cost index fund then you have reached the financial independence part of FIRE.</p>
  </section>
  
  <section id="scrolly2">
    <figure>
      <div id="my_dataviz"></div>
    </figure>
    <article>
      <div class="step" data-step="1">
        <p>FIRE Number</p>
        <div>Your FIRE number is 25 times your annual expenses.</div>
      </div>
      <div class="step" data-step="2">
        <p>Wait, what?</p>
        <div>For example, if you annually spend $100,000 then your FIRE number is $2.5M (25 x $100k).</div>
      </div>
      <div class="step" data-step="3">
        <p>Then what?</p>
        <div>This is your target. Now it's time to come up with a savings plan to reach your target.</div>
      </div>
      <div class="step" data-step="4">
        <p>Getting There</p>
        <div>Starting from $0, if you're able to invest $75,000/year then you'd be able to reach your goal within 20 years.</div>
      </div>
      <div class="step" data-step="5">
        <p>Using 8%</p>
        <div>This scenario uses a flat 8% annual return. Where these lines cross is where you hit  your number and are able to retire early.</div>
      </div>
      <div class="step" data-step="6">
        <p>FIRE Age</p>
        <div>We can also get an idea of how long it will take you to reach your goal. In this case, about 17 years.</div>
      </div>
      <div class="step" data-step="7">
        <p>The Problem</p>
        <div>This only provides a single estimate but in reality there's a lot of potential ways this can go.</div>
      </div>
    </article>
  </section>
  
<section>
<p>To explore further, visit the <a href="/calculators/futurevalue/" target="_blank">future value calculator</a>.</p>

<h3>What is a random walk?</h3>
      <p>A random walk is a tool from probability theory to simulate potential outcomes based on a series of unrelated events. A common example is flipping a coin repeatedly until you can get a stable estimate for the average number of heads. You can repeat the random walk to not only get an idea of where the average lies but also to get a distribution of estimates.
      </p>
      <p>Instead of flipping a coin, you may be interested in something that could follow a similar framework: investment returns over multiple years. One year you may get 8% return, another year 10%, and another 7%, and so on. This is relevant because you may be investing over a series of years and want to have some idea about how your investments might look after 10, 20, 30 years or more. 
      </p>
      <p>Note about investment advice. It's important to keep in mind a common quote in forecasting: All models are wrong, some are useful.
      </p>

>All models are wrong but some are useful.
>
> <cite>George Box</cite>
  
  
  </section>  
  
  <section id="scrolly1">
    <figure>
      <div id="my_bootstrap_dataviz"></div>
    </figure>
    <article>
      <div class="step" data-step="1">
        <p>Average Returns</p>
        <div>As presented earlier, the stock market has returned 8% each year for the last 100 years.</div>
      </div>
      <div class="step" data-step="2">
        <p>How is this used?</p>
        <div>People use this one number to calculate the future value of their investments.</div>
      </div>
      <div class="step" data-step="3">
        <p>What about inflation?</p>
        <div>This number is corrected for inflation. As such, any future value estimate will be in today's dollars.</div>
      </div>
      <div class="step" data-step="4">
        <p>Really? 8%?</p>
        <div>I don't make the rules. This is just what people use. If you want to be more conservative, you can use 5% or 6%.</div>
      </div>
      <div class="step" data-step="5">
        <p>Seriously?</p>
        <div>If you want to go higher, you could use 10% but people generally don't go much higher than that.</div>
      </div>
      <div class="step" data-step="6">
        <p>The Reality</p>
        <div>The reality is that the stock market has had many ups and downs.</div>
      </div>
      <div class="step" data-step="7">
        <p>Actual Returns</p>
        <div>These are actual returns from the last 100 years (again corrected for inflation).
        </div>
      </div>
      <div class="step" data-step="8">
        <p>Multiple Wars</p>
        <div>These numbers include World War II, Korean War, Vietnam War, Desert Storm, and America's war on terror.</div>
      </div>
    <div class="step" data-step="9">
      <p>Recessions</p>
        <div>The great depression, dot com bubble, sub-prime mortgage crisis, and the COVID-19 pandemic.
        </div>
      </div>
    <div class="step" data-step="10">
      <p>High Inflation</p>
        <div>There's also multiple years of greater than 5% inflation, some years even over 10%.
        </div>
      </div>
      <div class="step" data-step="11">
      <p>So What?</p>
        <div>These real returns could be used to provide not just single estimates but a distribution of possible outcomes.
        </div>
      </div>
    </article>
  </section>

  
  <section>
  
### The Random Walk with FIRE

Using a bootstrap simulation we can get an idea of not just how things will pan out on average but also a distribution of potential outcomes. Using actual returns, we can get a potentially more realistic idea of what can happen over a longer time period. By repeating this 10 or 100 times we can get an idea of the variety of ways things may go.
  
That is, this data provides a rich set of return values to sample from to not only get estimates for future values but to also get a range of possible outcomes. A bootstrap simulation takes actual returns and randomly samples them over say a 30 year period. This process gets repeated say 1,000 times and you begin to get an idea about the range of possible outcomes. Using the same strategy as before with spending $100,000/year, starting with $0 invested, and then investing $75,000/year after that we get the following scenario:


</section>


<section id="scrolly3">
    <div class="btn-holder">
    <button class="btn btn-primary vis-btn" onclick="runsim(1)">Run Once</button>
    <button class="btn btn-primary vis-btn" onclick="runsim(10)">Run 10x</button>
    <button class="btn btn-primary vis-btn" onclick="runsim(0)">Reset</button>
    </div>
    <figure>
      <div id="random_walk"></div>
    </figure>
</section>
  
<section>

The solid green line is the average of all runs and eventually converges to match an 8% growth rate. The lighter grey lines are the random walks or bootstrap simulations of real returns applied to this investing strategy.  

**Note about randomness: each draw will be different from the previous draw but proceed in the same sequence from the first draw or when the simulation is reset. For example, if you run 50x you will get the same results, regardless of whether you ran 1 at a time or 10.**

<!-- 
<p>To explore further, visit the <a href="/calculators/rwfirecalculator/" target="_blank">random walk future value calculator</a>.</p>
-->

### So what?

You might actually prefer the simpler method of using a flat 8% return and that's totally fine. In fact, if you run these bootstrap simulations enough time they average out to that. In addition to the average convering, you will also get better estimates on upper and lower boundaries of the distribution for possible outcomes. For example, using the 8% average you hit your FI number about 50% of the time. Instead you may want to aim to hit your target with a higher probability and these simulations can let you know what that might look like.

Source data can be <a href="/blog/post-2/" target="_blank">found here</a>.

  </section>
</main>





<style>

  #scrolly1, #scrolly2 {
    position: relative;
    background-color: #ffffff;
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
    -webkit-transform:translateZ(0px);
    -moz-transform:translateZ(0px);
    -o-transform:translateZ(0px);
    transform:translateZ(0px);
    z-index:0;
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
    -webkit-transform:translateZ(0px);
    -moz-transform:translateZ(0px);
    -o-transform:translateZ(0px);
    transform:translateZ(0px);
    z-index:0;
    font-size: 8rem;
    font-weight: 900;
    color: #fff;
  }
  .step {
    position: relative;
    margin: 0 auto 2rem auto;
    color: #000000;
    background-color: #fff;
    border: 1px solid;
    box-shadow: 2px 5px 2px 2px #888888;
    text-align: center;
    -webkit-transform:translateZ(0px);
    -moz-transform:translateZ(1000px);
    -o-transform:translateZ(1000px);
    transform:translateZ(1000px);
    z-index:1000;
  }
  .step:last-child {
    margin-bottom: 80vh;
  }
  .step.is-active p {
    background-color: #3CB371;
    color: #fff;
  }
  .step p {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #d5d5d5;
    color: #fff;
  }
  .step div {
    padding-left: .5rem;
    padding-right: .5rem;
  }
  .btn-holder {
    text-align: center;
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
      1.20, 1.80, 2.4, 2.1, 1.3, 0.1, 1.6, 1.5, 2.1, 3.2,
      1.6, -.4, 3.8, 2.9, 3.2, 3.4, 2.7, 2.3, 1.6, 2.8,
      3.4, 2.2, 1.6, 2.3, 2.9, 2.8, 2.6, 3, 3, 4.2, 
      5.4, 4.8, 4.1, 3.7, 1.9, 3.5, 4.3, 3.2, 6.1, 10.3, 
      13.5, 11.3, 7.6, 6.5, 5.7, 9.1, 11.1, 6.2, 3.3, 4.3,
      5.8, 5.5, 4.3, 2.8, 3.0, 1.6, 1.3, 1.2, 1.2, 1.1,
      1.5, 1.08, 2.7, 3.3, 1.5, -0.3, 0.3, 0.8, 2.3, 7.9, 
      1.1, -1, 7.7, 14.4, 8.5, 2.3, 1.6, 6, 10.9, 5.1,
      0.7, -1.3, -2, 3.7, 1, 2.6, 3.5, -5.2, -10.3, -8.9,
      -2.7, 0, -1.2
  ];
  
  const year = [
      2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 
      2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
      2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991,
      1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981,
      1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971,
      1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961,
      1960, 1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951,
      1950, 1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941,
      1940, 1939, 1938, 1937, 1936, 1935, 1934, 1933, 1932, 1931,
      1930, 1929, 1928
  ];
  
  const war = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
      1, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0
  ];
  
  const recessions = [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
      1, 0, 0, 0, 0, 1, 1, 1, 0, 0,
      1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 0, 0, 1, 1, 0, 0,
      0, 1, 1, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 1, 1, 0, 0, 0, 1, 1, 1,
      1, 1, 0
  
  ];
  
  const high_inflation = [];
  for (let i = 0; i < cpi.length; i++) {
    if (cpi[i] > 5) {
      high_inflation.push(1);
    } else {
      high_inflation.push(0);
    }
  }
  
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
      step_bs.style("margin-top", stepH*2 + "px");
      figureHeight = window.innerHeight / 2;
      figureMarginTop = (window.innerHeight - figureHeight) / 2;
      
    figure_bs
      .style("height", figureHeight + "px")
      .style("top", figureMarginTop + "px");
      
    // 3. tell scrollama to update new element dimensions
    scroller_bs.resize();
  }
  
  // Create a function that takes a dataset as input and update the plot:
  function update_bs(myindex, direction) {
          
    if (myindex == 1 && direction == "down") {
    
        svg_bs
          .append("circle")
          .attr("cx", cx_avg)
          .attr("cy", -400)
          .attr("r", radius_bs)
          .attr("fill", "#3CB371")
          .attr("class", "avg_return")
          .transition()
          .duration(500)
          .ease(d3.easeBounce)
          .attr("cy", cy_avg);
    
    } else if (myindex == 0 && direction == "up") {
    
      svg_bs
        .selectAll(".avg_return")
        .remove();
    
   } else if (myindex == 1 && direction == "up") {
    
      svg_bs
        .selectAll(".avg_return")
        .remove();
      
    } else if (myindex == 6 && direction == "down") {
    
        svg_bs
        .selectAll(".avg_return")
        .transition()
        .duration(500)
        .attr("fill", "#fff");
    
        for (let i = 0; i < values.length; ++i) {
          var cx_tmp = cx_all[i];
          var cy_tmp = cy_all[i];
      
          svg_bs
            .append("circle")
            .attr("cx", cx_tmp)
            .attr("cy", -400)
            .attr("r", radius_bs)
            .attr("fill", "#3CB371")
            .attr("class", "real_returns")
            .transition()
            .duration(500)
            .ease(d3.easeBounce)
            .attr("cy", cy_tmp);
        };
        
    } else if (myindex == 6 && direction == "up") {
    
      svg_bs
        .selectAll(".real_returns")
        .remove();

      svg_bs
        .select(".avg_return")
        .transition()
        .duration(500)
        .attr("fill", "#3CB371")

    } else if (myindex == 7) {
    
        svg_bs
          .selectAll("circle")
          .transition()
          .duration(1000)
          .attr("fill", function(d,i) {return war[i]==1?"#3CB371":"#f5f5f5";})
          .selectAll(".avg_return")
          .attr("fill", "#fff");
          
    } else if (myindex == 8) {
    
        svg_bs
          .selectAll("circle")
          .transition()
          .duration(700)
          .attr("fill", function(d,i) {return recessions[i]==1?"#3CB371":"#f5f5f5";});
          
        svg_bs
          .selectAll(".avg_return")
          .attr("fill", "#fff");
    
    } else if (myindex == 9) {
    
        svg_bs
          .selectAll("circle")
          .transition()
          .duration(700)
          .attr("fill", function(d,i) {return high_inflation[i]==1?"#3CB371":"#f5f5f5";});
          
        svg_bs
          .selectAll(".avg_return")
          .attr("fill", "#fff");
    
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
    // figure_bs
    //   .select("p").text(response.index + 1);
    update_bs(response.index, response.direction);
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
        offset: 0.66,
        debug: false
      })
      .onStepEnter(handleStepEnter_bs);
    // setup resize event
    window.addEventListener("resize", handleResize_bs);
  }
  
  
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
  const radius_bs = 10;
  const dodge_bs = dodger(radius_bs * 2 + 1);
  const margin_bs = { top: 0, right: 10, bottom: 20, left: 10 };
  const values = real_returns;
  
  const x_bs = d3.scaleLinear(d3.extent(values), [
    margin_bs.left,
    width_bs - margin_bs.right
  ]);
  
  const cx_avg = x_bs(d3.mean(values));
  const cy_avg = height_bs - margin_bs.bottom - dodge_bs(cx_avg) - radius_bs - 1;
  
  const cx_all = [];
  const cy_all = [];
  for (let i = 0; i < values.length; ++i) {
          cx_all.push(x_bs(values[i]));
          cy_all.push(height_bs - margin_bs.bottom - dodge_bs(cx_all[i]) - radius_bs - 1);
          };

  var svg_bs = d3
    .select("#my_bootstrap_dataviz")
    .append("svg")
    .attr("width", width_bs)
    .attr("height", height_bs)
    .style("overflow", "visible");

  svg_bs
    .append("g")
    .attr("transform", `translate(0,${height_bs - margin_bs.bottom})`)
    .call(d3.axisBottom(x_bs));
  
  init_bs();
  
  
  // Set initial parameter values
  const age = 0;
   goal_coast_fire_age = 21;
   goal_fire_age = 21;
   annual_expenses = 100000;
   current_investments = 0;
   annual_contributions = 75000;
  
  // Get years contributing, years coasting, and full years contributing
  const coast_years_contributing = goal_coast_fire_age - age;
   years_coasting = goal_fire_age - goal_coast_fire_age;
   full_years_contributing = goal_fire_age - age;
   
   
  // Functions for the second visualization
  // Define random number generator
  // Set seed
  Math.seedrandom('hello.')
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max + -min + 1)) + min;
  }
  
  // Run a single bootstrapped scenario
  function get_bootstrap(returns, years_contributing, starting_amount, annual_contributions) {
      var yearly_value = [starting_amount];
      for (var i = 1; i < years_contributing; i++) {
        yearly_value.push(Math.round((yearly_value[i-1] + annual_contributions) * ( 1 + returns[getRandomInt(0, returns.length-1)]/100)));
      }
      return yearly_value;
  }
  
  // Repeat the scenario
  function repeat_bootstrap(returns, years_contributing, starting_amount, annual_contributions, num_repeats) {
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
  
    if (myindex == 1) {
    
      // Create scales
      const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, 3432147.32 + 200000 ]);
        
      const xScale = d3
        .scaleLinear()
        .range([0, width])
        .domain(d3.extent(fire_number_data, dataPoint => dataPoint.x));
        
      const fire_number_line = d3
           .line()
           .x(d => xScale(d.x))
           .y(d => yScale(d.y));

      // Add path
      const path = svg
        .append("path")
        .datum(fire_number_data)
        .attr("class", "fire_number_line")
        .attr("fill", "none")
        .attr("stroke", "#3CB371")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", fire_number_line);

      const pathLength = path.node().getTotalLength();
      
      svg.append("text")
        .attr("x", xScale(2))
        .attr("y", yScale(2700000))
        .attr("class", "firenumber")
        .text("FIRE Number $2.5M");
      
      const transitionPath = d3
        .transition()
        .ease(d3.easeSin)
        .duration(2000);

      path
        .attr("stroke-dashoffset", pathLength)
        .attr("stroke-dasharray", pathLength)
        .transition(transitionPath)
        .attr("stroke-dashoffset", 0);
      
      
    } else if (myindex == 3) {
    
      var data = [
        {ser1: 0, ser2: 0},
        {ser1: 1, ser2: 75000},
        {ser1: 2, ser2: 156000},
        {ser1: 3, ser2: 243480},
        {ser1: 4, ser2: 337958.40},
        {ser1: 5, ser2: 439995.07},
        {ser1: 6, ser2: 550194.68},
        {ser1: 7, ser2: 669210.25},
        {ser1: 8, ser2: 797747.07},
        {ser1: 9, ser2: 936566.84},
        {ser1: 10, ser2: 1086492.18},
        {ser1: 11, ser2: 1248411.56},
        {ser1: 12, ser2: 1423284.48},
        {ser1: 13, ser2: 1612147.24},
        {ser1: 14, ser2: 1816119.02},
        {ser1: 15, ser2: 2036408.54},
        {ser1: 16, ser2: 2274321.23},
        {ser1: 17, ser2: 2531266.93},
        {ser1: 18, ser2: 2808768.28},
        {ser1: 19, ser2: 3108469.74},
        {ser1: 20, ser2: 3432147.32}
      ];
      
      // Create scales
      const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, function(d) { return d.ser2  }) + 200000 ]);
        
      const xScale = d3
        .scaleLinear()
        .range([0, width])
        .domain(d3.extent(data, dataPoint => dataPoint.ser1));
        
      const line = d3
           .line()
           .x(d => xScale(d.ser1))
           .y(d => yScale(d.ser2));
      
      // Create the X axis:
      x.domain([0, d3.max(data, function(d) { return d.ser1 }) ]);
        
      // create the Y axis
      y.domain([0, d3.max(data, function(d) { return d.ser2  }) + 200000 ]);
      
      // Add path
      const path = svg
        .append("path")
        .datum(data)
        .attr("class", "future_value_line")
        .attr("fill", "none")
        .attr("stroke", "#3CB371")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", line);

      const pathLength = path.node().getTotalLength();
      
      svg.selectAll(".myYaxis")
        .transition()
        .duration(1000)
        .call(yAxis);
      
      const transitionPath = d3
        .transition()
        .ease(d3.easeSin)
        .duration(2000);

      path
        .attr("stroke-dashoffset", pathLength)
        .attr("stroke-dasharray", pathLength)
        .transition(transitionPath)
        .attr("stroke-dashoffset", 0);
        
      svg.append("text")
        .attr("x", xScale(2))
        .attr("y", yScale(1000000))
        .attr("class", "investments")
        .text("Value of Investments");

      svg.select(".fire_number_line")
         .transition()
         .duration(1000)
         .attr("stroke", "#d5d5d5");
      
    } else if (myindex == 5) {
    
      var fire_age = [
        {ser1: 16.85, ser2: 0},
        {ser1: 16.85, ser2:3500000}
      ];
      
      var data = [
        {ser1: 0, ser2: 0},
        {ser1: 1, ser2: 75000},
        {ser1: 2, ser2: 156000},
        {ser1: 3, ser2: 243480},
        {ser1: 4, ser2: 337958.40},
        {ser1: 5, ser2: 439995.07},
        {ser1: 6, ser2: 550194.68},
        {ser1: 7, ser2: 669210.25},
        {ser1: 8, ser2: 797747.07},
        {ser1: 9, ser2: 936566.84},
        {ser1: 10, ser2: 1086492.18},
        {ser1: 11, ser2: 1248411.56},
        {ser1: 12, ser2: 1423284.48},
        {ser1: 13, ser2: 1612147.24},
        {ser1: 14, ser2: 1816119.02},
        {ser1: 15, ser2: 2036408.54},
        {ser1: 16, ser2: 2274321.23},
        {ser1: 17, ser2: 2531266.93},
        {ser1: 18, ser2: 2808768.28},
        {ser1: 19, ser2: 3108469.74},
        {ser1: 20, ser2: 3432147.32}
      ];
      
      
      // Create scales
      const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, function(d) { return d.ser2  }) + 200000 ]);
        
      const xScale = d3
        .scaleLinear()
        .range([0, width])
        .domain(d3.extent(data, dataPoint => dataPoint.ser1));
       
      const fire_age_line = d3
           .line()
           .x(d => xScale(d.ser1))
           .y(d => yScale(d.ser2));
      
      // Add path
      const fire_age_path = svg
        .append("path")
        .datum(fire_age)
        .attr("class", "fire_age_line")
        .attr("fill", "none")
        .attr("stroke", "#3CB371")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", fire_age_line);

      const fire_age_path_length = fire_age_path.node().getTotalLength();
      
      const fire_age_transition_path = d3
        .transition()
        .ease(d3.easeSin)
        .duration(1500);

      fire_age_path
        .attr("stroke-dashoffset", fire_age_path_length)
        .attr("stroke-dasharray", fire_age_path_length)
        .transition(fire_age_transition_path)
        .attr("stroke-dashoffset", 0);
      
      svg.append("text")
        .attr("x", xScale(12))
        .attr("y", yScale(500000))
        .attr("class", "fire_age")
        .text("Years to FIRE");
      
      svg.select(".future_value_line")
         .transition()
         .duration(1000)
         .attr("stroke", "#d5d5d5");
      
/*
      
      var tmp_test = repeat_bootstrap(real_returns, coast_years_contributing, current_investments,   annual_contributions, 10);
      var average_tmp_test = get_average(tmp_test);
      var data_sim = []
      
      for (var i = 0; i <= average_tmp_test.length; i++) {
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
          
*/
        
    } else if (myindex == 5) {
    
    } else if (myindex == 6) {
    
    }
  };
  
  // generic window resize listener event
  function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.25);
    step.style("height", stepH + "px");
    step.style("margin-top", stepH*2 + "px");
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
    // figure.select("p").text(response.index + 1);
    update(response.index);
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
        offset: 0.75,
        debug: false
      })
      .onStepEnter(handleStepEnter);
    // setup resize event
    window.addEventListener("resize", handleResize);
  }
  
  
  // Calls for the second visualization
  // kick things off
  // set the dimensions and margins of the graph
  const margin = {top: 10, right: 30, bottom: 30, left: 75},
    parentDivmd = document.getElementById("my_dataviz");
    width = parentDivmd.clientWidth - margin.left - margin.right;
    height = 400;
  
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
    .attr("class","myXaxis");
    
  // Initialize an Y axis
  const y = d3.scaleLinear().range([height, 0]);
  const yAxis = d3.axisLeft().scale(y);
  svg.append("g")
    .attr("class","myYaxis");
    
  var fire_number_data = [
        {x: 0, y: 2500000},
        {x: 20, y:2500000}
      ];
  
  // Create the X axis:
  x.domain([0, d3.max(fire_number_data, function(d) { return d.x }) ]);
  svg.selectAll(".myXaxis")
    .call(xAxis);
  
  // create the Y axis
  y.domain([0, 3432147.32 + 200000 ]);
  svg.selectAll(".myYaxis")
    .transition()
    .duration(1000)
    .call(yAxis);
  
  // using d3 for convenience
  var main = d3.select("main");
  var scrolly = main.select("#scrolly2");
  var figure = scrolly.select("figure");
  var article = scrolly.select("article");
  var step = article.selectAll(".step");
  
  // initialize the scrollama
  var scroller = scrollama();
  
  init();
  
  
  
  
  
  
  
  
  
  
  // Calls for the final visualization
  // kick things off
  // set the dimensions and margins of the graph
  const margin_rw = {top: 10, right: 30, bottom: 30, left: 75},
    parentDivmd_rw = document.getElementById("random_walk");
    width_rw = parentDivmd_rw.clientWidth - margin_rw.left - margin_rw.right;
    height_rw = 400;
  
  // append the svg object to the body of the page
  const svg_rw = d3.select("#random_walk")
    .append("svg")
      .attr("width", width_rw + margin_rw.left + margin.right)
      .attr("height", height_rw + margin_rw.top + margin_rw.bottom)
    .append("g")
      .attr("transform", `translate(${margin_rw.left},${margin_rw.top})`);
  
  // text label for the y axis
  svg_rw.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin_rw.left)
      .attr("x",0 - (height_rw / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Value in Dollars");
  
  // text label for the x axis
  svg_rw.append("text")             
      .attr("transform",
            "translate(" + (width_rw/2) + " ," + 
                           (height + margin_rw.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Years");
  
  // Initialise a X axis:
  const x_rw = d3.scaleLinear().range([0,width_rw]);
  const xAxis_rw = d3.axisBottom().scale(x_rw);
  svg_rw.append("g")
    .attr("transform", `translate(0, ${height})`)
    .attr("class","myXaxis_rw");
    
  // Initialize an Y axis
  const y_rw = d3.scaleLinear().range([height_rw, 0]);
  const yAxis_rw = d3.axisLeft().scale(y_rw);
  svg_rw.append("g")
    .attr("class","myYaxis_rw");
    
  var fire_number_data = [
        {x: 0, y: 2500000},
        {x: 20, y:2500000}
      ];
  
  // Create the X axis:
  x_rw.domain([0, d3.max(fire_number_data, function(d) { return d.x }) ]);
  svg_rw.selectAll(".myXaxis_rw")
    .call(xAxis_rw);
  
  // create the Y axis
  y_rw.domain([0, 5000000 ]);
  svg_rw.selectAll(".myYaxis_rw")
    .transition()
    .duration(1000)
    .call(yAxis_rw);
    
  // Create scales
  const yScale_rw = d3
    .scaleLinear()
    .range([height_rw, 0])
    .domain([0, 5000000]);
        
  const xScale_rw = d3
    .scaleLinear()
    .range([0, width_rw])
    .domain([0, 20]);
    
  const fire_number_line_rw = d3
           .line()
           .x(d => xScale_rw(d.x))
           .y(d => yScale_rw(d.y));

  // Add path
  const path_rw = svg_rw
    .append("path")
    .datum(fire_number_data)
    .attr("class", "fire_number_line_rw")
    .attr("fill", "none")
    .attr("stroke", "#d5d5d5")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 3)
    .attr("d", fire_number_line_rw)
    
  const pathLength_rw = path_rw.node().getTotalLength();
  
  svg_rw.append("text")
    .attr("x", xScale_rw(2))
    .attr("y", yScale_rw(2700000))
    .attr("z-index", 1000)
    .attr("class", "firenumber_rw")
    .text("FIRE Number");
  
  const transitionPath_rw = d3
    .transition()
    .ease(d3.easeSin)
    .duration(2000);
    
  path_rw
    .attr("stroke-dashoffset", pathLength_rw)
    .attr("stroke-dasharray", pathLength_rw)
    .transition(transitionPath_rw)
    .attr("stroke-dashoffset", 0);
        
  // using d3 for convenience
  var main = d3.select("main");
  var scrolly = main.select("#scrolly2");
  var figure = scrolly.select("figure");
  var article = scrolly.select("article");
  var step = article.selectAll(".step");
  
  const line_rw = d3
             .line()
             .x(d => xScale_rw(d.ser1))
             .y(d => yScale_rw(d.ser2));
  
  // Create object outside of function
  var all_data = [];
  var this_runs_data = [];
  
  function runsim(numsims) {
    
    if (numsims == 1) {
      
      var tmp_test = repeat_bootstrap(real_returns, coast_years_contributing, current_investments,   annual_contributions, 1)[0];
      
      for (var i = 0; i < tmp_test.length; i++) {
        this_runs_data[i] = {ser1: i, ser2: tmp_test[i]}
      }
      
      // Append data together
      all_data = all_data.concat(this_runs_data);

      // Take the average
      var average_data = [];
      for (var i=0; i < coast_years_contributing; i++) {
        var tmp_data = [];
        for (var j=0; j < all_data.length; j++) {
          if (all_data[j].ser1 == i) {tmp_data.push(all_data[j].ser2)}
        }
        average_data[i] = {ser1: i, ser2: d3.mean(tmp_data)};
      }
      
      // Add path
      const path_rw = svg_rw
        .append("path")
        .datum(this_runs_data)
        .attr("class", "future_value_line")
        .attr("fill", "none")
        .attr("stroke", "#d5d5d5")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", line_rw);

      const pathLength_rw = path_rw.node().getTotalLength();
      
      const transitionPath_rw = d3
        .transition()
        .ease(d3.easeSin)
        .duration(2000);

      path_rw
        .attr("stroke-dashoffset", pathLength_rw)
        .attr("stroke-dasharray", pathLength_rw)
        .transition(transitionPath_rw)
        .attr("stroke-dashoffset", 0);
        
      if (document.getElementsByClassName('average_data_line').length == 0) {
      
        svg_rw
        .append("path")
        .datum(average_data)
        .transition()
        .delay(2000)
        .attr("class", "average_data_line")
        .attr("fill", "none")
        .attr("stroke", "#3CB371")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", line_rw);
      
      } else {
      
        // Move average line up
        d3.selectAll(".average_data_line").raise();
      
        // Add path
        const path_rw_avg = svg_rw
          .selectAll(".average_data_line")
          .datum(average_data);
  
        path_rw_avg
          .join("path")
          .attr("class", "average_data_line")
          .transition()
          .delay(2000)
          .duration(2000)
          .attr("fill", "none")
          .attr("stroke", "#3CB371")
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("stroke-width", 3)
          .attr("d", line_rw);
      
      }
      

    } else if (numsims == 10) {
    
      for (var j = 0; j < 10; j++) {
    
        var tmp_test = repeat_bootstrap(real_returns, coast_years_contributing, current_investments,   annual_contributions, 1)[0];
      
        for (var i = 0; i < tmp_test.length; i++) {
          this_runs_data[i] = {ser1: i, ser2: tmp_test[i]}
        }
        
        // Append data together
        all_data = all_data.concat(this_runs_data);
        
        // Add path
        var path_rw = svg_rw
          .append("path")
          .datum(this_runs_data)
          .attr("class", "future_value_line")
          .attr("fill", "none")
          .attr("stroke", "#d5d5d5")
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("stroke-width", 3)
          .attr("d", line_rw);
  
        var pathLength_rw = path_rw.node().getTotalLength();
        
        var transitionPath_rw = d3
          .transition()
          .ease(d3.easeSin)
          .duration(2000);
  
        path_rw
          .attr("stroke-dashoffset", pathLength_rw)
          .attr("stroke-dasharray", pathLength_rw)
          .transition(transitionPath_rw)
          .attr("stroke-dashoffset", 0);
        
      };
      
      // Take the average
      var average_data = [];
      for (var i=0; i < coast_years_contributing; i++) {
        var tmp_data = [];
        for (var j=0; j < all_data.length; j++) {
          if (all_data[j].ser1 == i) {tmp_data.push(all_data[j].ser2)}
        }
        average_data[i] = {ser1: i, ser2: d3.mean(tmp_data)};
      }
      
            if (document.getElementsByClassName('average_data_line').length == 0) {
      
        svg_rw
        .append("path")
        .datum(average_data)
        .transition()
        .delay(2000)
        .attr("class", "average_data_line")
        .attr("fill", "none")
        .attr("stroke", "#3CB371")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", line_rw);
      
      } else {
      
        // Move average line up
        d3.selectAll(".average_data_line").raise();
      
        // Add path
        const path_rw_avg = svg_rw
          .selectAll(".average_data_line")
          .datum(average_data);
  
        path_rw_avg
          .join("path")
          .attr("class", "average_data_line")
          .transition()
          .delay(2000)
          .duration(2000)
          .attr("fill", "none")
          .attr("stroke", "#3CB371")
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("stroke-width", 3)
          .attr("d", line_rw);
      
      }
    
    } else if (numsims == 0) {
    
      // Reset the simulations
      all_data = [];
      this_runs_data = [];
      average_data = [];
    
      // Reset seed
      Math.seedrandom('hello.')
    
      svg_rw
        .selectAll(".future_value_line")
        .remove();
      
      svg_rw
        .selectAll(".average_data_line")
        .remove();
    }
  
  };
  
  
  
  

</script>

