---
title: "Bad Habits Calculator"
draft: no
image: images/blog/coffee.png
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>

<!-- Ezoic - under_page_title - under_page_title -->
<div id="ezoic-pub-ad-placeholder-105"> </div>
<!-- End Ezoic - under_page_title - under_page_title -->


<main>
Companion blog here: <a href="/blog/post-4" target="_blank">How much do your bad habits really cost?</a>
<form>
  <div class="container">
    <div class="row">
      <div class="form-group col-sm-4">
        <label for="bad_habit">Daily Cost of Bad Habit</label>
        <input type="number" class="form-control" id="bad_habit" aria-describedby="bad_habit_help" value="5" min="0" max="1000000000">
        <small id="bad_habit_help" class="form-text text-muted">For example, how much do you spend at Starbucks each day?</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="growth_rate">Growth Rate</label>
        <input type="number" class="form-control" id="growth_rate" aria-describedby="current_investments_help" value="8" min="0" max="100">
        <small id="current_investments_help" class="form-text text-muted">On average, the stock market has returned 8% (adjusted for inflation).</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="years_contributing">Years to Grow</label>
        <input type="number" class="form-control" id="years_contributing" aria-describedby="years_contributing" value="40" min="2" max="100">
        <small id="years_contributing_help" class="form-text text-muted">For how many years would you like to run this scenario?</small>
      </div>
    </div>
  </div>
</form>

<section id="scrolly3">
    <button class="btn btn-primary vis-btn" onclick="runfv()">Calculate</button>
    <figure>
      <div id="future_value"></div>
    </figure>
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
  
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function runfv() {
  
    d3.select(".future_value_line").remove();
    d3.select(".future_value").remove();
    d3.select(".badhabittext").remove();

    // Get variables from inputs
    var annual_contributions = 365*Number(document.getElementById('bad_habit').value);
      current_investments = 0;
      growth_rate = Number(document.getElementById('growth_rate').value);
      years_contributing = Number(document.getElementById('years_contributing').value);


    // Calculate FV Numbers
    var future_value_data = [{x: 0, y: current_investments}];
    
    for(let i=0; i < years_contributing; i++) {
    
      future_value_data[i+1] = {x: i+1, y: Number(((future_value_data[i].y + annual_contributions) * (1 + growth_rate/100)).toFixed(2))};
    
    }
    
      // Set axes
      // Create the X axis:
      x.domain([0, years_contributing]);
      svg.selectAll(".myXaxis")
        .call(xAxis);
      
      // create the Y axis
      y.domain([d3.min(future_value_data, d => d.y), d3.max(future_value_data, d => d.y) + 200000 ]);
      svg.selectAll(".myYaxis")
        .transition()
        .duration(1000)
        .call(yAxis);
      
      // Create scales
      const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([d3.min(future_value_data, d => d.y), d3.max(future_value_data, d => d.y) + 200000 ]);
        
      const xScale = d3
        .scaleLinear()
        .range([0, width])
        .domain([0, years_contributing]);
        
      const fire_number_line = d3
           .line()
           .x(d => xScale(d.x))
           .y(d => yScale(d.y));

      
      // Add path
      const fv_path = svg
        .append("path")
        .datum(future_value_data)
        .attr("class", "future_value_line")
        .attr("fill", "none")
        .attr("stroke", "#3CB371")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", fire_number_line);

      const fv_pathLength = fv_path.node().getTotalLength();

      svg.append("text")
        .attr("x", xScale(future_value_data.length-7))
        .attr("y", yScale(future_value_data[future_value_data.length-2].y))
        .attr("class", "future_value")
        .text("Future Value");
      
      const fv_transitionPath = d3
        .transition()
        .ease(d3.easeSin)
        .duration(2000);

      fv_path
        .attr("stroke-dashoffset", fv_pathLength)
        .attr("stroke-dasharray", fv_pathLength)
        .transition(fv_transitionPath)
        .attr("stroke-dashoffset", 0);
        
        
        var tooltip = d3
            .select("#future_value")
            .append("div")
            .attr("class", "tooltip")
            .style("display", "none");

        var focus = svg.append("g")
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

        svg.append("rect")
            .attr("class", "overlay")
            .attr("width", width)
            .attr("height", height)
            .on("mouseover", function() { focus.style("display", null); tooltip.style("display", null);  })
            .on("mouseout", function() { focus.style("display", "none"); tooltip.style("display", "none"); })
            .on("mousemove", mousemove);

        
        function mousemove() {
            var x0 = x.invert(d3.pointer(event,this)[0]),
                i = bisectX(future_value_data, x0, 1),
                d0 = future_value_data[i - 1],
                d1 = future_value_data[i],
                d = x0 - d0.x > d1.x - x0 ? d1 : d0;
            focus.attr("transform", "translate(" + x(d.x) + "," + y(d.y) + ")");
            tooltip.attr("style", "left:" + (x(d.x) + 64) + "px;top:" + y(d.y) + "px;");
            tooltip.select(".tooltip-date").text("$" +numberWithCommas(d.y));
            tooltip.select(".tooltip-likes").text(d.x);
        }
      
        svg.append("text")     
          .attr("class", "badhabittext")
          .attr("transform",
                "translate(" + (width/2) + " ," + 
                               (margin.top + 20) + ")")
          .style("text-anchor", "middle")
          .style("margin", "auto")
          .text("Your bad habit really costs $" + numberWithCommas(d3.max(future_value_data, d => d.y)) + ".");
        
    
    
    // Create a paragraph summary
    
    // Generate a table of the outputs

  }
  
  // parse the date / time
  var bisectX = d3.bisector(function(d) { return d.x; }).left;
  
  // Initialize graph
  // set the dimensions and margins of the graph
  const margin = {top: 10, right: 30, bottom: 30, left: 75},
    parentDivmd = document.getElementById("future_value");
    width = parentDivmd.clientWidth - margin.left - margin.right;
    height = 400;
  
  // append the svg object to the body of the page
  const svg = d3.select("#future_value")
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
  
  // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Value in Dollars");
  
  // text label for the x axis
  svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Years");
  
  // Have things run on load
  runfv();
  
</script>

<!-- Ezoic - bottom_of_page - bottom_of_page -->
<div id="ezoic-pub-ad-placeholder-101"> </div>
<!-- End Ezoic - bottom_of_page - bottom_of_page -->
