---
title: "Future Value Calculator +"
draft: no
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.css">
<script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js" defer></script>

<!-- Ezoic - under_page_title - under_page_title -->
<div id="ezoic-pub-ad-placeholder-105"> </div>
<!-- End Ezoic - under_page_title - under_page_title -->


<main>
<form>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h3><u>FIRE Strategy</u></h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <h4><u>Starting Point</u></h3>
      </div>
      <div class="col-sm-9">
        <h4><u>Period 1</u></h3>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-3">
        <label for="current_investments">Current investments</label>
        <input type="number" class="form-control" id="current_investments" aria-describedby="current_investments_help" value="100000" min="0" max="1000000000">
        <small id="current_investments_help" class="form-text text-muted">How much do you currently have invested in the stock market?</small>
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="form-group col-sm-3">
            <label for="years_contributing1">Years Contributing</label>
            <input type="number" class="form-control" id="years_contributing1" aria-describedby="years_contributing1" value="10" min="2" max="100">
            <small id="years_contributing1_help" class="form-text text-muted">For how many years would you like to run this scenario?</small>
          </div>
          <div class="form-group col-sm-3">
            <label for="contributions1">Monthly Contributions</label>
            <input type="number" class="form-control" id="contributions1" aria-describedby="contributions1_help" value="5000" min="-1000000000" max="1000000000">
            <small id="contributions1_help" class="form-text text-muted">How much do you add to your investments each month?</small>
          </div>
          <div class="form-group col-sm-3">
            <label for="growth_rate1">Growth Rate</label>
            <input type="number" class="form-control" id="growth_rate1" aria-describedby="growth_rate1_help" value="8" min="-1000000000" max="1000000000">
            <small id="growth_rate1_help" class="form-text text-muted">On average, the stock market has returned 8% (adjusted for inflation).</small>
          </div>
          <div class="form-group col-sm-3">
            <label for="uncertainty1">Uncertainty</label>
            <input type="number" class="form-control" id="uncertainty1" aria-describedby="uncertainty1_help" value="3" min="-1000000000" max="1000000000">
            <small id="uncertainty1_help" class="form-text text-muted">How many % points above and below would you like to explore?</small>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-3">
        <label for="current_investments">Proposal for Additional Periods</label>
        <small class="form-text text-muted">
          <ol>
            <li>Explore what it might look like to pay off your mortgage early and up your investment contributions.</li>
            <li>Explore CoastFIRE by setting contributions to $0 for Period 2.</li>
            <li>Simulate retirement and set the "Monthly Contributions" to a negative value matching your monthly expenses in today's dollars.</li>
          </ol>
        </small>
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-12">
            <h4><u>Period 2</u></h3>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-3">
            <label for="years_contributing2">Years Contributing</label>
            <input type="number" class="form-control" id="years_contributing2" aria-describedby="years_contributing2" value="10" min="2" max="100">
          </div>
          <div class="form-group col-sm-3">
            <label for="contributions2">Monthly Contributions</label>
            <input type="number" class="form-control" id="contributions2" aria-describedby="contributions2_help" value="7000" min="-1000000000" max="1000000000">
          </div>
          <div class="form-group col-sm-3">
            <label for="growth_rate2">Growth Rate</label>
            <input type="number" class="form-control" id="growth_rate2" aria-describedby="growth_rate2_help" value="8" min="-1000000000" max="1000000000">
          </div>
          <div class="form-group col-sm-3">
            <label for="uncertainty2">Uncertainty</label>
            <input type="number" class="form-control" id="uncertainty2" aria-describedby="uncertainty2_help" value="3" min="-1000000000" max="1000000000">
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <h4><u>Period 3</u></h3>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-3">
            <label for="years_contributing3">Years Contributing</label>
            <input type="number" class="form-control" id="years_contributing3" aria-describedby="years_contributing3" value="30" min="2" max="100">
          </div>
          <div class="form-group col-sm-3">
            <label for="contributions3">Monthly Contributions</label>
            <input type="number" class="form-control" id="contributions3" aria-describedby="contributions3_help" value="-10000" min="-1000000000" max="1000000000">
          </div>
          <div class="form-group col-sm-3">
            <label for="growth_rate3">Growth Rate</label>
            <input type="number" class="form-control" id="growth_rate3" aria-describedby="growth_rate3_help" value="8" min="-1000000000" max="1000000000">
          </div>
          <div class="form-group col-sm-3">
            <label for="uncertainty3">Uncertainty</label>
            <input type="number" class="form-control" id="uncertainty3" aria-describedby="uncertainty3_help" value="3" min="-1000000000" max="1000000000">
          </div>
        </div>
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
          <div class="col-sm counter-header">Final Amount of Money at Period 1
            <div id="period1_final_amount"></div>
          </div>
          <div class="col-sm counter-header">Final Amount of Money at Period 2
            <div id="period2_final_amount"></div>
          </div>
          <div class="col-sm counter-header">Final Amount of Money at Period 3
            <div id="period3_final_amount"></div>
          </div>
        </div>
      </div>
  </figure>
</section>

<table id="table_id">
</table>

## So what's happening?

The future value calculator starts with an initial amount of investments and the parameters set for Period 1, including years contributing, amount of monthly contributions, growth rate, and uncertainty. Using this information, the calculator then iterates through each contribution and growth rate for each month and returns the future value.

## How are the periods used?

The periods are used to emulate different periods you're likely to go through on your journey to and through FIRE. Period 1 begins right after the starting amount and the default duration is 10 years. After Period 1 is over, Period 2 begins but using the parameters set in period 2. This same pattern carries for Period 3.

## Why have the periods?

The periods are included because savings and spending may change on your path to financial independence and retiring early. For example, you may decide to "coast" or not contribute to your investments for some time before fully retiring, this can be emulated by setting the contributions for Period 2 to $0. Additionally, you may want to see what a "bad start" to your retirement might look like by setting Period 2 to both negative contributions and negative returns. 

## How is the uncertainty used?

Some people prefer looking at a range of outcomes. Instead of looking at 8% they'd like to look at 8% +/- 2% (6% to 10%). That's all the uncertainty parameter is doing. If you'd like to include more uncertainty, bump up this number to account for that to see the range of possible outcomes.

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
  
  #period1_final_amount, #period2_final_amount, #period3_final_amount {
    font-size: 40px;
  }

</style>



<script>
  

  function runfv() {
  
    d3.select(".fire_number_line").remove();
    d3.select(".going_broke_line").remove();
    d3.select(".fire_number").remove();
    d3.select(".future_value_line").remove();
    d3.select(".future_value").remove();
    d3.select(".error_bar_area").remove();
    
    var current_investments = Number(document.getElementById('current_investments').value);
      div_mult = 12;
      years_contributing1 = Number(document.getElementById('years_contributing1').value);
      contributions1 = Number(document.getElementById('contributions1').value);
      growth_rate1 = Number(document.getElementById('growth_rate1').value) / (100);
      uncertainty1 = Number(document.getElementById('uncertainty1').value) / (100);
      years_contributing2 = Number(document.getElementById('years_contributing2').value);
      contributions2 = Number(document.getElementById('contributions2').value);
      growth_rate2 = Number(document.getElementById('growth_rate2').value) / (100);
      uncertainty2 = Number(document.getElementById('uncertainty2').value) / (100);
      years_contributing3 = Number(document.getElementById('years_contributing3').value);
      contributions3 = Number(document.getElementById('contributions3').value);
      growth_rate3 = Number(document.getElementById('growth_rate3').value) / (100);
      uncertainty3 = Number(document.getElementById('uncertainty3').value) / (100);
      years_contributing = years_contributing1 + years_contributing2 + years_contributing3;
      no_periods1 = years_contributing1 * div_mult;
      no_periods2 = years_contributing2 * div_mult;
      no_periods3 = years_contributing3 * div_mult;
      no_periods = no_periods1 + no_periods2 + no_periods3;
      periodic_growth_rate1 = growth_rate1 / div_mult;
      periodic_uncertainty1 = uncertainty1 / div_mult;
      periodic_growth_rate2 = growth_rate2 / div_mult;
      periodic_uncertainty2 = uncertainty2 / div_mult;
      periodic_growth_rate3 = growth_rate3 / div_mult;
      periodic_uncertainty3 = uncertainty3 / div_mult;
    
    // Calculate FV Numbers
    var future_value_data = [{x: 0, 
                              y: current_investments, 
                              y0: current_investments, 
                              y1: current_investments,
                              contribution: 0,
                              growth_rate: periodic_growth_rate1,
                              uncertainty: periodic_uncertainty1}];
    
    var future_value_data_table = [[0, 0, numberWithCommas(current_investments), numberWithCommas(current_investments), numberWithCommas(current_investments), 0, 1, periodic_growth_rate1*12, periodic_uncertainty1*12]];
    
    var total_contributions = [0];
    
    for(let i=0; i < no_periods; i++) {
      
      if (i < no_periods1) {
      
        var contributions = contributions1;
          periodic_growth_rate = periodic_growth_rate1;
          periodic_uncertainty = periodic_uncertainty1;
          period = 1;
      
      } else if (i >= no_periods1 & i < (no_periods1 + no_periods2)) {
      
        var contributions = contributions2;
          periodic_growth_rate = periodic_growth_rate2;
          periodic_uncertainty = periodic_uncertainty2;
          period = 2;
      
      } else if (i >= (no_periods1 + no_periods2) & i < no_periods) {
      
        var contributions = contributions3;
          periodic_growth_rate = periodic_growth_rate3;
          periodic_uncertainty = periodic_uncertainty3;
          period = 3;
      
      }
      
      total_contributions.push(contributions);

      
      var month = Math.round( ((i+1) % div_mult) * 100) / 100;
        year = numberWithCommas(Math.floor( ((i+1)/div_mult)) + 1);
        sum_total_contributions = d3.sum(total_contributions);
        
      
      if (month == 0) {
        
        var month = 12;
          year = year - 1;
  
      } 

      future_value_data[i+1] = {x: Math.round( ((i+1)/div_mult) * 100) / 100, 
                                y: Math.round( (Number(((future_value_data[i].y + contributions) * (1 + periodic_growth_rate)))) * 100) / 100,
                                y0: Math.round( (Number(((future_value_data[i].y0 + contributions) * (1 + periodic_growth_rate - periodic_uncertainty)))) * 100) / 100,
                                y1: Math.round( (Number(((future_value_data[i].y1 + contributions) * (1 + periodic_growth_rate + periodic_uncertainty)))) * 100) / 100,
                                contribution: contributions,
                                growth_rate: periodic_growth_rate * 12,
                                uncertainty: periodic_uncertainty * 12};
      
      future_value_data_table[i+1] = [year, 
                                      month, 
                                      numberWithCommas(Math.round( (Number(((future_value_data[i].y + contributions) * (1 + periodic_growth_rate)))) * 100) / 100), 
                                      numberWithCommas(Math.round( (Number(((future_value_data[i].y0 + contributions) * (1 + periodic_growth_rate - periodic_uncertainty)))) * 100) / 100),
                                      numberWithCommas(Math.round( (Number(((future_value_data[i].y1 + contributions) * (1 + periodic_growth_rate + periodic_uncertainty)))) * 100) / 100),
                                      numberWithCommas(sum_total_contributions), 
                                      numberWithCommas(period),
                                      numberWithCommas(periodic_growth_rate * 12), 
                                      numberWithCommas(periodic_uncertainty * 12)];
    
    }
    
    update_counts("period1_final_amount", future_value_data[no_periods1].y - 100, future_value_data[no_periods1].y, true);
    update_counts("period2_final_amount", future_value_data[(no_periods1 + no_periods2)].y - 100, future_value_data[(no_periods1 + no_periods2)].y, true);
    update_counts("period3_final_amount", future_value_data[future_value_data.length -1].y - 100, future_value_data[future_value_data.length -1].y, true);
    
    var going_broke_data = [
      {x: 0, y: 0, y0: 0, y1: 0},
      {x: years_contributing, y: 0, y0: 0, y1: 0}
    ];
    
    // Set axes
    // Create the X axis:
    x.domain([0, years_contributing]);
    svg.selectAll(".myXaxis")
      .call(xAxis);
    
    const xScale = d3
      .scaleLinear()
      .range([0, width])
      .domain([0, years_contributing]);
    
    // create the Y axis
    y.domain([d3.min(future_value_data.concat(going_broke_data), d => d.y0), d3.max(future_value_data, d => d.y1)])
    svg.selectAll(".myYaxis")
      .transition()
      .duration(1000)
      .call(yAxis);
    
    // Create scales
    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([d3.min(future_value_data.concat(going_broke_data), d => d.y0), d3.max(future_value_data, d => d.y1)]);
    
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
    
    // Add path
    const gb_path = svg
      .append("path")
      .datum(going_broke_data)
      .attr("class", "going_broke_line")
      .attr("fill", "none")
      .attr("stroke", "#000000")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", fire_number_line);
      
    const gb_pathLength = gb_path.node().getTotalLength();
    
    const gb_transitionPath = d3
      .transition()
      .delay(2000)
      .ease(d3.easeSin)
      .duration(1000);
      
    gb_path
      .attr("stroke-dashoffset", gb_pathLength)
      .attr("stroke-dasharray", gb_pathLength)
      .transition(gb_transitionPath)
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
        focus.attr("transform", "translate(" + xScale(d.x) + "," + yScale(d.y) + ")");
        tooltip.attr("style", "left:" + (xScale(d.x) + 64) + "px;top:" + (yScale(d.y) - 100) + "px;");
        tooltip.select(".tooltip-date").text("$" + numberWithCommas(d.y));
        tooltip.select(".tooltip-lower").text("$" + numberWithCommas(d.y0));
        tooltip.select(".tooltip-upper").text("$" + numberWithCommas(d.y1));
        tooltip.select(".tooltip-likes").text(d.x);
    };
    
    // Add the data table
    $(document).ready(function() {
      $('#table_id').DataTable( {
          data: future_value_data_table,
          destroy: true,
          searching: false,
          columns: [
            { title: "Year" },
            { title: "Month" },
            { title: "Future Value" },
            { title: "Lower Bound FV" },
            { title: "Upper Bound FV" },
            { title: "Total Contributions" },
            { title: "Period" },
            { title: "Growth Rate" },
            { title: "Uncertainty" }
        ],
        columnDefs: [
          {
              targets: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              className: 'dt-body-center'
          },
          {
              targets: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              className: 'dt-head-center'
          }
          
        ]
      } );
    });
    
  }
  
  // parse the date / time
  var bisectX = d3.bisector(function(d) { return d.x; }).left;
  
  function update_counts(id, startamount, uptoamount, dollar) {
    var counts=setInterval(updated);
    var upto=startamount;
    function updated(){
        var count= document.getElementById(id);
        if (dollar) {
          count.innerHTML="$" + numberWithCommas(++upto);
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
  
  var legend_keys = ["Future Value", "+/- Uncertainty", "Going Broke"];
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
