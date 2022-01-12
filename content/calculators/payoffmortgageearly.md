---
title: "Payoff Mortgage Early Calculator"
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
      <div class="form-group col-sm-3">
        <label for="original_loan_amount">Original Loan Amount</label>
        <input type="number" class="form-control" id="original_loan_amount" aria-describedby="original_loan_amount_help" value="300000" min="0" max="1000000000">
        <small id="original_loan_amount_help" class="form-text text-muted">After your down payment, how much did you owe on the house?</small>
      </div>
      <div class="form-group col-sm-2">
        <label for="interest_rate">Interest Rate</label>
        <input type="number" class="form-control" id="interest_rate" aria-describedby="annual_expenses_help" value="5" min="0" max="100" step=".01">
      </div>
      <div class="form-group col-sm-2">
        <label for="loan_duration">Loan Duration</label>
        <input type="number" class="form-control" id="loan_duration" aria-describedby="loan_duration" value="30" min="2" max="100">
        <small id="loan_duration_help" class="form-text text-muted">Typically a mortgage is for 15 or 30 years.</small>
      </div>
      <div class="form-group col-sm-3">
        <label for="extra_payments">Extra Monthly Payments</label>
        <input type="number" class="form-control" id="extra_payments" aria-describedby="extra_payments" value="2000" min="0" max="1000000000">
        <small id="extra_payments_help" class="form-text text-muted">How much extra do you want to put towards the mortgage?</small>
      </div>
      <div class="form-group col-sm-2">
        <label for="inflation_rate">Inflation</label>
        <input type="number" class="form-control" id="inflation_rate" aria-describedby="inflation_rate_help" value="3" min="0" max="100" step=".01">
        <small id="inflation_rate_help" class="form-text text-muted">Average CPI for the last 100 years has been 3%.</small>
      </div>
    </div>
  </div>
</form>

<section id="scrolly3">
    <div class="btn-holder">
    <button class="btn btn-primary vis-btn" onclick="runmortgagepayoff()">Calculate</button>
    </div>
    <figure>
      <div id="random_walk"></div>
    </figure>
</section>
<section>
<h2>Without Considering Inflation</h2>
  <figure>
    <div class="container">
        <div class="row">
          <div class="col-sm counter-header">Original Mortgage Payment
            <div id="original_mortgage_payment"></div>
          </div>
          <div class="col-sm counter-header">Original Mortgage Payment + Extra
            <div id="total_mortgage_payment"></div>
          </div>
          <div class="col-sm counter-header">Years til' Mortgage Free
            <div id="no_years_to_payoff"></div>
          </div>
          <div class="col-sm counter-header">Interest Saved
            <div id="amt_of_interest_saved"></div>
          </div>
        </div>
      </div>
  </figure>
<h2>Considering Inflation</h2>
  <figure>
    <div class="container">
        <div class="row">
          <div class="col-sm counter-header">Inflation Adj. Interest Saved
            <div id="infl_adj_amt_of_interest_saved"></div>
          </div>
        </div>
      </div>
  </figure>

</section>



## So what's happening?

The mortgage paydown calculator is pretty standard. You have to start with a loan amount, interest rate, and the duration of the loan. The initial values are $300,000, 5%, and 30 years, respectively.

Using this information you can then calculate the minimum payment using the following formula:Payment = P x (r / n) x (1 + r / n)^n(t)] / (1 + r / n)^n(t) - 1.

- P = the initial loan amount
- r = interest rate
- n = number of payments in a year (e.g. 12)
- n(t) = total number of payments (e.g. 12*30)

After you have the payment amount, you can then loop through each month, subtracting the payment, and multiplying the remaining value by the interest rate divided by 12 (for each month). 

When adjusting for inflation, the key to understanding what's happening is succession. Basically, each amount builds off the previous amount -- this goes for the remaining principal and the inflation adjusted contribution. For a single month, I am subtracting the corresponding inflation rate (e.g. 3%/12) from the interest rate (e.g. 3.5%/12) for that year and multiplying the remaining value by this (i.e. .5%/12). I am doing the same thing for contributions and reducing these each year and subtracting against the inflation adjusted remaining principal.

When looking at extra payments, these are just applied as above -- instead of using the minimum payment, we're now using the minimum payment plus the extra payment ($2,000 as a default value).

<section>


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
    
    .counter-header {
      text-align:center;
    }
    
    #original_mortgage_payment, #total_mortgage_payment, #no_years_to_payoff, #amt_of_interest_saved, #infl_adj_amt_of_interest_saved {
      font-size: 40px;
    }

</style>



<script>

  
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
      .text("Remaining Loan Amount in Dollars");
  
  // text label for the x axis
  svg_rw.append("text")             
      .attr("transform",
            "translate(" + (width_rw/2) + " ," + 
                           (height_rw + margin_rw.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Years");
  
  var legend_keys = ["Standard Paydown", "Inflation Adj. Standard", "With Extra Payments", "Inflation Adj. With Extra"];
    graph_colors = ["#003f5c", "#3CB371", "#a5a5a5", "#d5d5d5"];

  var lineLegend = svg_rw.selectAll(".lineLegend").data(legend_keys)
      .enter().append("g")
      .attr("class","lineLegend")
      .attr("transform", function (d,i) {
              return "translate(" + (width_rw/1.2 - margin_rw.right - margin_rw.left) + "," + (i*20)+")";
          });
  
  lineLegend.append("text").text(function (d) {return d;})
      .attr("transform", "translate(15,9)"); //align texts with boxes
  
  lineLegend.append("rect")
      .attr("fill", function (d, i) {return graph_colors[i]; })
      .attr("width", 10).attr("height", 10);
  

    
  
  function runmortgagepayoff(numsims) {
    
    // Remove everything from the last run
    svg_rw
      .selectAll(".loan_amount_paydown_line")
      .remove();
    svg_rw
      .selectAll(".extra_loan_amount_paydown_line")
      .remove();
    svg_rw
      .selectAll(".infl_loan_amount_paydown_line")
      .remove();
    svg_rw
      .selectAll(".infl_extra_loan_amount_paydown_line")
      .remove();
      
    // Instantiate inputs
    // ids: original_loan_amount, interest_rate, loan_duration, extra_payments
    var original_loan_amount = Number(document.getElementById('original_loan_amount').value);
      interest_rate = Math.round( (Number(document.getElementById('interest_rate').value) / 100) * 10000) / 10000;
      inflation_rate = Math.round( (Number(document.getElementById('inflation_rate').value) / 100) * 10000) / 10000;
      monthly_interest_rate = interest_rate / 12;
      monthly_inflation_rate = inflation_rate / 12;
      loan_duration = Number(document.getElementById('loan_duration').value);
      no_of_payments = loan_duration * 12;
      monthly_payment = Math.round(((original_loan_amount*monthly_interest_rate) * ((1+monthly_interest_rate) ** no_of_payments) ) / ( ((1+monthly_interest_rate) ** (no_of_payments))-1)*100) / 100;
      extra_payment = Number(document.getElementById('extra_payments').value);
      total_mortgage_payment = Math.round( (monthly_payment + extra_payment) * 100) / 100;
      standard_payoff = [];
      extra_payoff = [];
      new_no_years_to_payoff = [];
      amt_of_interest_saved = [];

    loan_amount_paydown = [{ser1: 0, ser2: original_loan_amount, ser3: 0}];
    extra_loan_amount_paydown = [{ser1: 0, ser2: original_loan_amount, ser3: 0}];
    infl_loan_amount_paydown = [{ser1: 0, ser2: original_loan_amount, ser3: 0, ser4: monthly_payment}];
    infl_extra_loan_amount_paydown = [{ser1: 0, ser2: original_loan_amount, ser3: 0, ser4: total_mortgage_payment}];
    
    for (let i = 1; i <= no_of_payments; i++) {
      
      // if it's the last iteration do something different
      if (i == (no_of_payments)) {

        infl_adj_payment = Math.round( (infl_loan_amount_paydown[i-1].ser2) * 100) / 100;
        
        loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                ser2: Math.round( ((loan_amount_paydown[i-1].ser2 * (1 + monthly_interest_rate) ) - monthly_payment) * 100) / 100, 
                                ser3: Math.round( (loan_amount_paydown[i-1].ser3 + monthly_payment) * 100) / 100};
                                
        infl_loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                     ser2: Math.round(((infl_loan_amount_paydown[i-1].ser2 * (1 + monthly_interest_rate - monthly_inflation_rate)) - (infl_adj_payment)) * 100) / 100, 
                                     ser3: Math.round( (infl_loan_amount_paydown[i-1].ser3 + (infl_adj_payment)) * 100) / 100,
                                     ser4: infl_adj_payment};

      } else {
      
        infl_adj_payment = Math.round( (infl_loan_amount_paydown[i-1].ser4 * (1 - monthly_inflation_rate)) * 100) / 100;

        loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                ser2: Math.round( ((loan_amount_paydown[i-1].ser2 * (1 + monthly_interest_rate) ) - monthly_payment) * 100) / 100, 
                                ser3: Math.round( (loan_amount_paydown[i-1].ser3 + monthly_payment) * 100) / 100};
                                
        infl_loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                     ser2: Math.round(((infl_loan_amount_paydown[i-1].ser2 * (1 + monthly_interest_rate - monthly_inflation_rate)) - (infl_adj_payment)) * 100) / 100, 
                                     ser3: Math.round( (infl_loan_amount_paydown[i-1].ser3 + (infl_adj_payment)) * 100) / 100,
                                     ser4: infl_adj_payment};
      
      }
      
      
                                
      if (extra_loan_amount_paydown[extra_loan_amount_paydown.length - 1].ser2 > 0) {
      
        extra_new_amount = Math.round( ((extra_loan_amount_paydown[i-1].ser2 * (1 + monthly_interest_rate) ) - (total_mortgage_payment)) * 100) / 100;
        infl_total_payment = Math.round( (infl_extra_loan_amount_paydown[i-1].ser4 * (1 - monthly_inflation_rate)) * 100) / 100;
        infl_extra_new_amount = Math.round( ((infl_extra_loan_amount_paydown[i-1].ser2 * (1 + monthly_interest_rate - monthly_inflation_rate)) - (infl_total_payment)) * 100) / 100;
        
        if (extra_new_amount > 0) {
        
          extra_loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                          ser2: extra_new_amount, 
                                          ser3: Math.round((extra_loan_amount_paydown[i-1].ser3 + total_mortgage_payment)*100) / 100};
                                          
          infl_extra_loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                               ser2: infl_extra_new_amount, 
                                               ser3: Math.round((infl_extra_loan_amount_paydown[i-1].ser3 + infl_total_payment)*100) / 100,
                                               ser4: infl_total_payment};
        
        } else {
        
          extra_loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                          ser2: 0, 
                                          ser3: Math.round( (extra_loan_amount_paydown[i-1].ser3 + extra_loan_amount_paydown[i-1].ser2) * 100) / 100};
          
          infl_extra_loan_amount_paydown[i] = {ser1: Math.round(i/12 * 100) / 100, 
                                               ser2: 0, 
                                               ser3: Math.round((infl_extra_loan_amount_paydown[i-1].ser3 + infl_extra_loan_amount_paydown[i-1].ser2)*100) / 100,
                                               ser4: infl_total_payment}
        
        }
      }
    
    };
    
    var amount_saved = Math.round( (d3.max(loan_amount_paydown, d => d.ser3) - d3.max(extra_loan_amount_paydown, d => d.ser3)) * 100)/100;
      infl_amount_saved = Math.round( (infl_loan_amount_paydown[infl_loan_amount_paydown.length - 1].ser3 - infl_extra_loan_amount_paydown[infl_extra_loan_amount_paydown.length - 1].ser3) * 100)/100;
      new_years = Math.round( (d3.max(extra_loan_amount_paydown, d => d.ser1)) * 10) / 10;
      

      
    update_counts("original_mortgage_payment", monthly_payment - 100, monthly_payment, false);
    update_counts("total_mortgage_payment", total_mortgage_payment - 100, total_mortgage_payment, false);
    update_counts("no_years_to_payoff", 0, new_years, true);
    update_counts("amt_of_interest_saved", amount_saved - 100, amount_saved, false);
    if (infl_amount_saved > 1) {
    
      update_counts("infl_adj_amt_of_interest_saved", infl_amount_saved - 1, infl_amount_saved, false);
    
    } else {
      update_counts("infl_adj_amt_of_interest_saved", infl_amount_saved + 1, infl_amount_saved, false);
    
    }
    

    // Draw the outline of the graph
    // Initialise a X axis:
    svg_rw.append("g")
      .attr("transform", `translate(0, ${height_rw})`)
      .attr("class","myXaxis_rw");
      
    // Create the X axis:
    x_rw.domain([0, loan_duration + 1]);
    svg_rw.selectAll(".myXaxis_rw")
      .call(xAxis_rw);
    
    const xScale_rw = d3
      .scaleLinear()
      .range([0, width_rw])
      .domain([0, loan_duration + 1]);
    
    // Initialize an Y axis
    svg_rw.append("g")
      .attr("class","myYaxis_rw");

    // create the Y axis
    y_rw.domain([0, original_loan_amount*1.1]);
    svg_rw.selectAll(".myYaxis_rw")
      .transition()
      .duration(1000)
      .call(yAxis_rw);
      
    // Create scales
    const yScale_rw = d3
      .scaleLinear()
      .range([height_rw, 0])
      .domain([0, original_loan_amount*1.1]);

    const line_rw = d3
               .line()
               .x(d => xScale_rw(d.ser1))
               .y(d => yScale_rw(d.ser2));

    // Add path
    const fire_number_rw = svg_rw
      .append("path")
      .datum(loan_amount_paydown)
      .attr("class", "loan_amount_paydown_line")
      .attr("fill", "none")
      .attr("stroke", "#003f5c")
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
      
      
    const infl_fire_number_rw = svg_rw
      .append("path")
      .datum(infl_loan_amount_paydown)
      .attr("class", "infl_loan_amount_paydown_line")
      .attr("fill", "none")
      .attr("stroke", "#3CB371")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", line_rw);
      
    const infl_fire_numberLength_rw = infl_fire_number_rw.node().getTotalLength();
    
    const infl_fire_numberPath_rw = d3
      .transition()
      .delay(2000)
      .ease(d3.easeSin)
      .duration(2000);
      
    infl_fire_number_rw
      .attr("stroke-dashoffset", infl_fire_numberLength_rw)
      .attr("stroke-dasharray", infl_fire_numberLength_rw)
      .transition(infl_fire_numberPath_rw)
      .attr("stroke-dashoffset", 0);
      
      
    
    // Add path
    const extra_fire_number_rw = svg_rw
      .append("path")
      .datum(extra_loan_amount_paydown)
      .attr("class", "extra_loan_amount_paydown_line")
      .attr("fill", "none")
      .attr("stroke", "#a5a5a5")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", line_rw);
      
    const extra_fire_numberLength_rw = extra_fire_number_rw.node().getTotalLength();
    
    const extra_fire_numberPath_rw = d3
      .transition()
      .delay(4000)
      .ease(d3.easeSin)
      .duration(2000);
      
    extra_fire_number_rw
      .attr("stroke-dashoffset", extra_fire_numberLength_rw)
      .attr("stroke-dasharray", extra_fire_numberLength_rw)
      .transition(extra_fire_numberPath_rw)
      .attr("stroke-dashoffset", 0);
      
    const infl_extra_fire_number_rw = svg_rw
      .append("path")
      .datum(infl_extra_loan_amount_paydown)
      .attr("class", "infl_extra_loan_amount_paydown_line")
      .attr("fill", "none")
      .attr("stroke", "#d5d5d5")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .attr("d", line_rw);
      
    const infl_extra_fire_numberLength_rw = infl_extra_fire_number_rw.node().getTotalLength();
    
    const infl_extra_fire_numberPath_rw = d3
      .transition()
      .delay(6000)
      .ease(d3.easeSin)
      .duration(2000);
      
    infl_extra_fire_number_rw
      .attr("stroke-dashoffset", infl_extra_fire_numberLength_rw)
      .attr("stroke-dasharray", infl_extra_fire_numberLength_rw)
      .transition(infl_extra_fire_numberPath_rw)
      .attr("stroke-dashoffset", 0);
  
  };
  
  // parse the date / time
  var bisectX = d3.bisector(function(d) { return d.ser1; }).left;
  
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function update_counts(id, startamount, uptoamount, digits) {
    if (digits == true) {
      if (uptoamount > 0) {
        var counts=setInterval(updated);
        var upto=startamount;
        function updated(){
            var count= document.getElementById(id);
            upto += 1;
            count.innerHTML=numberWithCommas(upto/10);
            if(upto>=uptoamount*10)
            {
                clearInterval(counts);
            }
        }
      } else {
        // var count= document.getElementById(id);
        // count.innerHTML=numberWithCommas(uptoamount);
        var counts=setInterval(updated);
        var upto=100;
        function updated(){
            var count= document.getElementById(id);
            upto -= 1;
            count.innerHTML=numberWithCommas(upto/10);
            if(upto>=uptoamount*10)
            {
                clearInterval(counts);
            }
        }
      }
    } else {
      if (uptoamount > 0) {
        var counts=setInterval(updated);
        var upto=startamount;
        function updated(){
            var count= document.getElementById(id);
            count.innerHTML=numberWithCommas(++upto);
            if(upto===uptoamount)
            {
                clearInterval(counts);
            }
        }
      } else {
        // var count= document.getElementById(id);
        // count.innerHTML=numberWithCommas(uptoamount);
        var counts=setInterval(updated);
        var upto=startamount;
        function updated(){
            var count= document.getElementById(id);
            count.innerHTML=numberWithCommas(--upto);
            if(upto===uptoamount)
            {
                clearInterval(counts);
            }
        }
      }
    
    }
  }
  
  runmortgagepayoff();


</script>

