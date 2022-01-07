---
title: "Future Value Simulator"
date: '2021-01-01'
draft: no
author_info:
  name: Daniel Woodie
  image: images/daniel.jpg
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>
<script src=//cdnjs.cloudflare.com/ajax/libs/seedrandom/2.3.10/seedrandom.min.js></script>



<main>
<form>
  <div class="container">
    <div class="row">
      <div class="form-group col-sm-6">
        <label for="annual_expenses">Annual Expenses</label>
        <input type="number" class="form-control" id="annual_expenses" aria-describedby="annual_expenses_help" value="100000" min="0" max="1000000000">
        <small id="annual_expenses_help" class="form-text text-muted">How much do you plan to spend in retirement?</small>
      </div>
      <div class="form-group col-sm-6">
        <label for="annual_contributions">Annual Contributions</label>
        <input type="number" class="form-control" id="annual_contributions" aria-describedby="annual_contributions_help" value="100000" min="0" max="1000000000">
        <small id="annual_contributions_help" class="form-text text-muted">How much do you invest in the stock market annually?</small>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-4">
        <label for="current_investments">Current investments</label>
        <input type="number" class="form-control" id="current_investments" aria-describedby="current_investments_help" value="100000" min="0" max="1000000000">
        <small id="current_investments_help" class="form-text text-muted">How much do you currently have invested in the stock market?</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="current_age">Current Age</label>
        <input type="number" class="form-control" id="current_age" aria-describedby="current_age_help" value="30" min="0" max="100">
        <small id="current_age_help" class="form-text text-muted">How old are you?</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="goal_fire_age">Goal FIRE Age</label>
        <input type="number" class="form-control" id="goal_fire_age" aria-describedby="goal_fire_age_help" value="50" min="0" max="100">
        <small id="goal_fire_age_help" class="form-text text-muted">What age would you like to be FI or RE?</small>
      </div>
    </div>
  </div>
</form>


<section id="scrolly3">
    <div class="btn-holder">
    <button class="btn btn-primary vis-btn" onclick="runsim(1)">Run Once</button>
    <button class="btn btn-primary vis-btn" onclick="runsim(100)">Run 100x</button>
    <button class="btn btn-primary vis-btn" onclick="runsim(0)">Reset</button>
    </div>
    <figure>
      <div id="random_walk"></div>
    </figure>
</section>

## What is a single run?

This is a pretty simple simulation that really doesn't assume too much about future returns except that they will likely come from the returns of the last 100 years. Below is what happens for a single run.

1. Add your annual contribution.
2. Multiply by 1 + randomly sampled growth rate.
3. Repeat steps 1 and 2 for each year (Goal FIRE Age - Current Age). 

The growth rates come from taken from the last 100 years of S&P returns minus the corresponding year's CPI (inflation). You can see the full table <a href="/blog/post-2/" target="_blank">here</a>. 

<section>

## Note about randomness

Each growth rate is sampled uniformly at random. I am actually using what's called a pseudo-random number generator which allows for the simulations to be replicated. For example, if you run a single simulation, reset things, and run a single simulation again, the outcome will be the same. To extend, if you run things 1,000 times, reset, and then rerun things 1,000 times -- again, the outcome will be the same. 

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
    // background-color: rgba(0, 0, 0, .1);
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
  
  .overlay {
        fill: none;
        pointer-events: all;
    }

    .focus circle {
        fill: steelblue;
    }

    .tooltip {
        width: 150px;
        padding: 4px 10px;
        border: 1px solid #aaa;
        border-radius: 4px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        position: absolute;
        background-color: white;
        font-size: 14px;
        pointer-events: none;
        -webkit-transition: all 0.25s;
        -moz-transition: all 0.25s;
        -ms-transition: all 0.25s;
        -o-transition: all 0.25s;
        transition: all 0.25s;
        opacity: 1 !important;
    }

    .tooltip div {
        margin: 3px 0;
    }

    .tooltip-date, .tooltip-likes {
        font-weight: bold;
    }

</style>



<script>


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
  
  // Set the real returns
  const real_returns = sp.map(function(item, index) {
    // Subtract inflation from S&P returns
    return +(Math.round(item - cpi[index] + "e+2") + "e-2");
  });
  
  Math.seedrandom('hello.')
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max + -min + 1)) + min;
  }
  
  
  // Run a single bootstrapped scenario
  function get_bootstrap(returns, years_contributing, starting_amount, annual_contributions) {
      var yearly_value = [starting_amount];
      for (var i = 1; i <= years_contributing; i++) {
        yearly_value.push(Math.round((yearly_value[i-1] + annual_contributions) * ( 1 + returns[getRandomInt(0, returns.length-1)]/100)));
      }
      return yearly_value;
  }
  
  // Repeat the scenario
  function repeat_bootstrap(returns, years_contributing, starting_amount, annual_contributions, num_repeats) {
    var tmp = [];
    for (var i = 0; i < num_repeats; i++) {
      tmp.push(get_bootstrap(real_returns, years_contributing, current_investments,   annual_contributions));
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
  
  // Calls for the final visualization
  // kick things off
  // set the dimensions and margins of the graph
  const margin_rw = {top: 10, right: 30, bottom: 30, left: 75},
    parentDivmd_rw = document.getElementById("random_walk");
    width_rw = parentDivmd_rw.clientWidth - margin_rw.left - margin_rw.right;
    height_rw = 400;
  
  const x_rw = d3.scaleLinear().range([0,width_rw]);
  const xAxis_rw = d3.axisBottom().scale(x_rw);
  
  const y_rw = d3.scaleLinear().range([height_rw, 0]);
    const yAxis_rw = d3.axisLeft().scale(y_rw);
  
  // append the svg object to the body of the page
  const svg_rw = d3.select("#random_walk")
    .append("svg")
      .attr("width", width_rw + margin_rw.left + margin_rw.right)
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
                           (height_rw + margin_rw.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Years");
  
  var legend_keys = ["Single Run", "Average", "FIRE Number"];
    graph_colors = ["#d5d5d5", "#3CB371", "#000000"];

  var lineLegend = svg_rw.selectAll(".lineLegend").data(legend_keys)
      .enter().append("g")
      .attr("class","lineLegend")
      .attr("transform", function (d,i) {
              return "translate(" + 20 + "," + (i*20)+")";
          });
  
  lineLegend.append("text").text(function (d) {return d;})
      .attr("transform", "translate(15,9)"); //align texts with boxes
  
  lineLegend.append("rect")
      .attr("fill", function (d, i) {return graph_colors[i]; })
      .attr("width", 10).attr("height", 10);
  
  // Create object outside of function
  var all_data = [];
    this_runs_data = [];
    annual_expenses = [];
    annual_contributions = [];
    current_investments = [];
    years_contributing = [];
    fire_number = [];
    
  
  function runsim(numsims) {
    
    // If any of the inputs have changed, reset the graph and the simulation
    if (annual_expenses != Number(document.getElementById('annual_expenses').value) || annual_contributions != Number(document.getElementById('annual_contributions').value) || current_investments != Number(document.getElementById('current_investments').value) || years_contributing != Number(document.getElementById('goal_fire_age').value) - Number(document.getElementById('current_age').value)) {
    
      // Reset the simulations
      all_data = [];
      this_runs_data = [];
      average_data = [];
    
      // Reset seed
      Math.seedrandom('hello.');
      
      svg_rw
        .selectAll(".line_rw")
        .remove();

      svg_rw
        .selectAll(".future_value_line")
        .remove();
      
      svg_rw
        .selectAll(".average_data_line")
        .remove();
      
    };
    
    // Capture inputs
    annual_expenses = Number(document.getElementById('annual_expenses').value);
    annual_contributions = Number(document.getElementById('annual_contributions').value);
    current_investments = Number(document.getElementById('current_investments').value);
    years_contributing = Number(document.getElementById('goal_fire_age').value) - Number(document.getElementById('current_age').value);
    fire_number = 25*annual_expenses;
    growth_rate = .0863;
    
    var fire_number_data = [
        {ser1: 0, ser2: fire_number},
        {ser1: years_contributing, ser2: fire_number}
      ];
    
    // Calculate FV Numbers
    var future_value_data = [{ser1: 0, ser2: current_investments}];
    
    for(let i=0; i < years_contributing; i++) {
    
      future_value_data[i+1] = {ser1: i+1, ser2: Number(((future_value_data[i].y + annual_contributions) * (1 + growth_rate/100)).toFixed(2))};
    
    }
    
    // Draw the outline of the graph
    // Initialise a X axis:
    svg_rw.append("g")
      .attr("transform", `translate(0, ${height_rw})`)
      .attr("class","myXaxis_rw");
      
    // Create the X axis:
    x_rw.domain([0, d3.max(fire_number_data, function(d) { return d.ser1 }) ]);
    svg_rw.selectAll(".myXaxis_rw")
      .call(xAxis_rw);
    
    const xScale_rw = d3
      .scaleLinear()
      .range([0, width_rw])
      .domain([0, years_contributing]);
    
    // Initialize an Y axis
    svg_rw.append("g")
      .attr("class","myYaxis_rw");

    // create the Y axis
    y_rw.domain([0, d3.max(fire_number_data.concat(future_value_data), function(d) { return d.ser2  })*3.5]);
    svg_rw.selectAll(".myYaxis_rw")
      .transition()
      .duration(1000)
      .call(yAxis_rw);
      
    // Create scales
    const yScale_rw = d3
      .scaleLinear()
      .range([height_rw, 0])
      .domain([0, d3.max(fire_number_data.concat(future_value_data), function(d) { return d.ser2  })*3.5]);
    
    const line_rw = d3
               .line()
               .x(d => xScale_rw(d.ser1))
               .y(d => yScale_rw(d.ser2));
    
    // Add path
    svg_rw
      .append("path")
      .datum(fire_number_data)
      .attr("class", "fire_number_line_rw")
      .attr("fill", "none")
      .attr("stroke", "#000000")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", line_rw);
    
    // Recalculate numbers
    if (numsims == 1) {
      
      var tmp_test = repeat_bootstrap(real_returns, years_contributing, current_investments, annual_contributions, 1)[0];
      
      for (var i = 0; i < tmp_test.length; i++) {
        this_runs_data[i] = {ser1: i, ser2: tmp_test[i]}
      };
      
      // Append data together
      all_data = all_data.concat(this_runs_data);
  
      // Take the average
      var average_data = [];
      for (var i=0; i <= years_contributing; i++) {
        var tmp_data = [];
        for (var j=0; j < all_data.length; j++) {
          if (all_data[j].ser1 == i) {tmp_data.push(all_data[j].ser2)}
        }
        average_data[i] = {ser1: i, ser2: Math.round(d3.mean(tmp_data) * 100) / 100};
      };
      
      // Add path
      const fire_number_rw = svg_rw
        .append("path")
        .datum(fire_number_data)
        .attr("class", "fire_number_line_rw")
        .attr("fill", "none")
        .attr("stroke", "#000000")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", line_rw);
        
      const fire_numberLength_rw = fire_number_rw.node().getTotalLength();
      
      const fire_numberPath_rw = d3
        .transition()
        .ease(d3.easeSin)
        .duration(2000);
        
      fire_number_rw
        .attr("stroke-dashoffset", fire_numberLength_rw)
        .attr("stroke-dasharray", fire_numberLength_rw)
        .transition(fire_numberPath_rw)
        .attr("stroke-dashoffset", 0);
        
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
    
      // Create the average line
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
          d3.selectAll(".fire_number_line_rw").raise();
          d3.selectAll(".average_data_line").raise();
        
          // Select paths
          const path_rw_avg = svg_rw
            .selectAll(".average_data_line")
            .datum(average_data);
    
          path_rw_avg
            .join("path")
            .transition()
            .delay(2000)
            .duration(2000)
            .attr("fill", "none")
            .attr("stroke", "#3CB371")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 3)
            .attr("d", line_rw);
        };
        
        var tooltip = d3
            .select("#random_walk")
            .append("div")
            .attr("class", "tooltip")
            .style("display", "none");

        var focus = svg_rw.append("g")
            .attr("class", "focus")
            .style("display", "none");

        focus.append("circle")
            .attr("r", 5);

        var tooltipDate = tooltip.append("div");
        tooltipDate.append("span")
            .attr("class", "tooltip-title")
            .text("Value: ");

        var tooltipDateValue = tooltipDate.append("span")
            .attr("class", "tooltip-date");
            
        var tooltipLikes = tooltip.append("div");
        tooltipLikes.append("span")
            .attr("class", "tooltip-title")
            .text("Year: ");

        var tooltipLikesValue = tooltipLikes.append("span")
            .attr("class", "tooltip-likes");

        svg_rw.append("rect")
            .attr("class", "overlay")
            .attr("width", width_rw)
            .attr("height", height_rw)
            .on("mouseover", function() { focus.style("display", null); tooltip.style("display", null);  })
            .on("mouseout", function() { focus.style("display", "none"); tooltip.style("display", "none"); })
            .on("mousemove", mousemove);

        
        function mousemove() {
            var x0 = x_rw.invert(d3.pointer(event,this)[0]),
                i = bisectX(average_data, x0, 1),
                d0 = average_data[i - 1],
                d1 = average_data[i],
                d = x0 - d0.ser1 > d1.ser1 - x0 ? d1 : d0;
            focus.attr("transform", "translate(" + x_rw(d.ser1) + "," + y_rw(d.ser2) + ")");
            tooltip.attr("style", "left:" + (x_rw(d.ser1) + 64) + "px;top:" + y_rw(d.ser2) + "px;");
            tooltip.select(".tooltip-date").text("$" +numberWithCommas(d.ser2));
            tooltip.select(".tooltip-likes").text(d.ser1);
        }

    } else if (numsims == 100) {
    
      for (var k = 0; k < 100; k++) {
        
        var tmp_test = repeat_bootstrap(real_returns, years_contributing, current_investments,   annual_contributions, 1)[0];
      
        for (var i = 0; i < tmp_test.length; i++) {
          this_runs_data[i] = {ser1: i, ser2: tmp_test[i]}
        }
        
        // Append data together
        all_data = all_data.concat(this_runs_data);
        
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
        
      }
        

      // Take the average
      var average_data = [];
      for (var i=0; i <= years_contributing; i++) {
        var tmp_data = [];
        for (var j=0; j < all_data.length; j++) {
          if (all_data[j].ser1 == i) {tmp_data.push(all_data[j].ser2)}
        }
        average_data[i] = {ser1: i, ser2: Math.round(d3.mean(tmp_data)*100) / 100};
      };
        
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
            d3.selectAll(".fire_number_line_rw").raise();
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
          
          };
          
          var tooltip = d3
            .select("#random_walk")
            .append("div")
            .attr("class", "tooltip")
            .style("display", "none");

          var focus = svg_rw.append("g")
              .attr("class", "focus")
              .style("display", "none");
  
          focus.append("circle")
              .attr("r", 5);
  
          var tooltipDate = tooltip.append("div");
          tooltipDate.append("span")
              .attr("class", "tooltip-title")
              .text("Value: ");
  
          var tooltipDateValue = tooltipDate.append("span")
              .attr("class", "tooltip-date");
              
          var tooltipLikes = tooltip.append("div");
          tooltipLikes.append("span")
              .attr("class", "tooltip-title")
              .text("Year: ");
  
          var tooltipLikesValue = tooltipLikes.append("span")
              .attr("class", "tooltip-likes");

          svg_rw.append("rect")
              .attr("class", "overlay")
              .attr("width", width_rw)
              .attr("height", height_rw)
              .on("mouseover", function() { focus.style("display", null); tooltip.style("display", null);  })
              .on("mouseout", function() { focus.style("display", "none"); tooltip.style("display", "none"); })
              .on("mousemove", mousemove);
  
          
          function mousemove() {
              var x0 = x_rw.invert(d3.pointer(event,this)[0]),
                  i = bisectX(average_data, x0, 1),
                  d0 = average_data[i - 1],
                  d1 = average_data[i],
                  d = x0 - d0.ser1 > d1.ser1 - x0 ? d1 : d0;
              focus.attr("transform", "translate(" + x_rw(d.ser1) + "," + y_rw(d.ser2) + ")");
              tooltip.attr("style", "left:" + (x_rw(d.ser1) + 64) + "px;top:" + y_rw(d.ser2) + "px;");
              tooltip.select(".tooltip-date").text("$" +numberWithCommas(d.ser2));
              tooltip.select(".tooltip-likes").text(d.ser1);
          }
      
    } else if (numsims == 0) {
    
      // Reset the simulations
      all_data = [];
      this_runs_data = [];
      average_data = [];
    
      // Reset seed
      Math.seedrandom('hello.');

      svg_rw
        .selectAll(".future_value_line")
        .remove();
      
      svg_rw
        .selectAll(".average_data_line")
        .remove();
      
    };
  
  };
  
  // parse the date / time
  var bisectX = d3.bisector(function(d) { return d.ser1; }).left;
  
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  runsim();


</script>

