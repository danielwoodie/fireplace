---
title: "Safe Withdrawal Calculator"
draft: no
---
<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>

<!-- Ezoic - under_page_title - under_page_title -->
<div id="ezoic-pub-ad-placeholder-105"> </div>
<!-- End Ezoic - under_page_title - under_page_title -->


<main>
<form>
  <div class="container">
    <div class="row">
      <div class="form-group col-sm-3">
        <label for="annual_expenses">Annual Expenses</label>
        <input type="number" class="form-control" id="annual_expenses" aria-describedby="annual_expenses_help" value="100000" min="0" max="1000000000">
        <small id="annual_expenses_help" class="form-text text-muted">In today's dollars, how much do you plan to spend each year in retirement?</small>
      </div>
      <div class="form-group col-sm-3">
        <label for="current_investments">Investments</label>
        <input type="number" class="form-control" id="current_investments" aria-describedby="current_investments_help" value="2500000" min="0" max="1000000000">
        <small id="current_investments_help" class="form-text text-muted">How much do you currently have invested in the stock market?</small>
      </div>
      <div class="form-group col-sm-3">
        <label for="growth_rate">Growth Rate</label>
        <input type="number" class="form-control" id="growth_rate" aria-describedby="current_investments_help" value="8" min="0" max="100">
        <small id="growth_rate_help" class="form-text text-muted">On average, the stock market has returned 8% (adjusted for inflation).</small>
      </div>
      <div class="form-group col-sm-3">
        <label for="uncertainty">Uncertainty</label>
        <input type="number" class="form-control" id="uncertainty" aria-describedby="uncertainty_help" value="4" min="0" max="20">
        <small id="uncertainty_help" class="form-text text-muted">How many % points above and below would you like to explore?</small>
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
<section>
  <figure>
    <div class="container">
        <div class="row">
          <div class="col-sm counter-header">FIRE Number
            <div id="fire_number"></div>
          </div>
          <div class="col-sm counter-header">Withdrawal Rate
            <div id="withdrawal_rate"></div>
          </div>
          <div class="col-sm counter-header">Final Amount of Money
            <div id="final_amount"></div>
          </div>
        </div>
      </div>
  </figure>
</section>

## So what's happening?

The safe withdrawal calculator starts with an initial amount of annual expenses, investments, an interest rate, uncertainty, and the duration of withdrawals. The initial values are $100,000, $2,500,000, 8%, 4%, and 35 years, respectively. 

Using this information, the calculator then iterates through each withdrawal and growth rate for each year and returns the future value.

One thing to note is that when you go below zero, the higher end of your growth will now have a larger impact on negative values than the lower end of the growth spectrum. As such, you may see these areas shrink or even cross because of this inverse impact on negative values.

## How is the uncertainty used?

Some people prefer looking at a range of outcomes. Instead of looking at 8% they'd like to look at 8% +/- 2% (6% to 10%). That's all the uncertainty parameter is doing. If you'd like to include more uncertainty, bump up this number to account for that to see the range of possible outcomes.

## What is your FIRE number?

This is simply 25x your annual expenses. If you spend $100,000/year, then your FIRE number is $2.5M (or 25 * $1,000,000). This is the number you need invested in low-cost index funds to be considered financially independent and retire early.

## Note on how to use this calculator

This calculator is purely for educational purposes. This tool is put together to help educate and inform those developing a strategy for building wealth.
  
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
      fill: #3CB371;
  }

  .tooltip {
      width: 150px;
      padding: 4px 10px;
      border: 1px solid #3CB371;
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
  .tooltip-date, .tooltip-likes, .tooltip-lower, .tooltip-upper {
      font-weight: bold;
  }
  
  .btn-secondary {
    background-color: #3CB371;
    font-size : clamp(.5rem, 1vw, .75rem);
    border-radius: 100px;
  }
  
  .counter-header {
    text-align:center;
  }
  
  #fire_number, #withdrawal_rate, #final_amount {
    font-size: 40px;
  }

</style>



<script>

  function runfv() {
  
    d3.select(".fire_number_line").remove();
    d3.select(".fire_number").remove();
    d3.select(".future_value_line").remove();
    d3.select(".future_value").remove();
    d3.select(".error_bar_area").remove();
    
    var annual_expenses = Number(document.getElementById('annual_expenses').value);
      fire_number = 25*annual_expenses;
      years_contributing = 40;
      growth_rate = Number(document.getElementById('growth_rate').value) / 100;
      uncertainty = Number(document.getElementById('uncertainty').value) / 100;
      current_investments = Number(document.getElementById('current_investments').value);
      withdrawal_rate = Math.round(annual_expenses / current_investments * 100 * 100) / 100;
    

    // Calculate FIRE Numbers
    var fire_number_data = [
      {x: 0, y: 0, y1: 0},
      {x: years_contributing, y: 0, y1: 0}
    ];
    
    var no_periods = years_contributing;
        periodic_growth_rate = growth_rate;
        periodic_uncertainty = uncertainty;
    
    // Calculate FV Numbers
    var future_value_data = [{x: 0, y: current_investments, y0: current_investments, y1: current_investments}];
    
    for(let i=0; i < no_periods; i++) {
    
      future_value_data[i+1] = {x: Math.round( ((i+1)) * 100) / 100, 
                                y: Math.round( (Number(((future_value_data[i].y - annual_expenses) * (1 + periodic_growth_rate)))) * 100) / 100,
                                y0: Math.round( (Number(((future_value_data[i].y0 - annual_expenses) * (1 + periodic_growth_rate - periodic_uncertainty)))) * 100) / 100,
                                y1: Math.round( (Number(((future_value_data[i].y1 - annual_expenses) * (1 + periodic_growth_rate + periodic_uncertainty)))) * 100) / 100};
    
    }
    
    update_counts("withdrawal_rate", withdrawal_rate - 5, withdrawal_rate, false, true);
    update_counts("fire_number", fire_number-100, fire_number, true, false);
    update_counts("final_amount", future_value_data[future_value_data.length -1].y - 100, future_value_data[future_value_data.length -1].y, true, false);
    
    // Set axes
    // Create the X axis:
    x.domain([0, years_contributing]);
    svg.selectAll(".myXaxis")
      .call(xAxis);
    
    const xScale = d3
      .scaleLinear()
      .range([0, width])
      .domain([0, years_contributing]);
    
    var ymax = d3.max(future_value_data.concat(fire_number_data), function(d){
        return (d.y0 < d.y1) ? d.y1 : d.y0;
    });
    
    var ymin = d3.min(future_value_data.concat(fire_number_data), function(d){
        return (d.y0 < d.y1) ? d.y0 : d.y1;
    });
    
    // create the Y axis
    y.domain([ymin, ymax]);
    
    svg.selectAll(".myYaxis")
      .transition()
      .duration(1000)
      .call(yAxis);
    
    // Create scales
    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([ymin, ymax]);   
      
 
    var error_bar_area = function(datum, boolean) {
      return d3.area()
        .x(function(d) {return xScale(d.x); })
        .y0(function(d) {return boolean ? yScale(d.y0) : yScale(d.y); })
        .y1(function(d) {return boolean ? yScale(d.y1) : yScale(d.y); })
        (datum);
    }
        
    
    // Add path
    svg
      .append("path")
      .datum(future_value_data)
      .attr("d", d => error_bar_area(d, false))
      .transition()
      .duration(2000)
      .delay(2000)
      .attr("class", "error_bar_area")
      .attr("fill", "#CCE5DF")
      .attr("stroke", "none")
      .attr("d", d => error_bar_area(d, true));
      
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
      .attr("stroke", "#000000")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", fire_number_line);
      
    const pathLength = path.node().getTotalLength();
    
    const transitionPath = d3
      .transition()
      .ease(d3.easeSin)
      .duration(1000);
      
    path
      .attr("stroke-dashoffset", pathLength)
      .attr("stroke-dasharray", pathLength)
      .transition(transitionPath)
      .attr("stroke-dashoffset", 0);
  
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
    
    const fv_transitionPath = d3
      .transition()
      .delay(1000)
      .ease(d3.easeSin)
      .duration(1000);
      
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
      .text("Future Value: ");
        
    var tooltipDateValue = tooltipDate.append("span")
      .attr("class", "tooltip-date");
    
    var tooltipLower = tooltip.append("div");
    
    tooltipLower.append("span")
      .attr("class", "tooltip-title")
      .text("Lower Bounds: ");
        
    var tooltipLowerValue = tooltipLower.append("span")
      .attr("class", "tooltip-lower");
      
    var tooltipUpper = tooltip.append("div");
    
    tooltipUpper.append("span")
      .attr("class", "tooltip-title")
      .text("Upper Bounds: ");
        
    var tooltipUpperValue = tooltipUpper.append("span")
      .attr("class", "tooltip-upper");
    
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
        tooltip.attr("style", "left:" + (x(d.x) + 64) + "px;top:" + (y(d.y) - 100) + "px;");
        tooltip.select(".tooltip-date").text("$" + numberWithCommas(d.y));
        tooltip.select(".tooltip-lower").text("$" + numberWithCommas(d.y0));
        tooltip.select(".tooltip-upper").text("$" + numberWithCommas(d.y1));
        tooltip.select(".tooltip-likes").text(d.x);
    }
    
    svg.selectAll(".lineLegend").raise();
    
  }
  
  // parse the date / time
  var bisectX = d3.bisector(function(d) { return d.x; }).left;
  
  function update_counts(id, startamount, uptoamount, dollar, perc) {
    var counts=setInterval(updated);
    var upto=startamount;
    function updated(){
        var count= document.getElementById(id);
        if (dollar) {
          count.innerHTML="$" + numberWithCommas(++upto);
        } else if (perc) {
          count.innerHTML=numberWithCommas(++upto) + "%";
        } else {
          count.innerHTML=numberWithCommas(++upto);
        }
        if(upto>=uptoamount) {
            clearInterval(counts);
        }
    }
  }
  
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  
  
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
  
  var legend_keys = ["Future Value", "+/- Uncertainty", "Go Broke"];
    graph_colors = ["#3CB371", "#CCE5DF", "#000000"];

  var lineLegend = svg.selectAll(".lineLegend").data(legend_keys)
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
  
  
  // Have things run on load
  runfv();
  
</script>

<!-- Ezoic - bottom_of_page - bottom_of_page -->
<div id="ezoic-pub-ad-placeholder-101"> </div>
<!-- End Ezoic - bottom_of_page - bottom_of_page -->
