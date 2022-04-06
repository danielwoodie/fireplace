---
title: "Revisiting: Mr. Money Mustache's Shockingly Simple Math"
date: '2022-03-29'
draft: no
image: images/blog/simple_mathematics.png
author_info:
  name: Daniel Woodie
  image: images/daniel.jpg
---

<!-- Bring in any external libraries -->
<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>
<script src=//cdnjs.cloudflare.com/ajax/libs/seedrandom/2.3.10/seedrandom.min.js></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.4/css/jquery.dataTables.css">
<script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js" defer></script>


<!-- Ezoic - under_page_title - under_page_title -->
<div id="ezoic-pub-ad-placeholder-105"> </div>
<!-- End Ezoic - under_page_title - under_page_title -->

  
### Mr. Money Mustache

It may come as no surprise but I am a fan of [Mr. Money Mustache](https://www.mrmoneymustache.com/) (referred to as MMM hereafter). He wasn't my introduction to personal finance but his content fundamentally changed my approach to personal finance and, more than anything, encouraged me to not be afraid to develop my own plan, as opposed to just accepting some very rough cookie cutter solution (cough Dave Ramsey cough). 

One thing that MMM does great is, with a few assumptions, he reduces complex investing strategies into simple rules of thumb. For example, there's the detailed analysis on [killing your $1,000 grocery bill](https://www.mrmoneymustache.com/2012/03/29/killing-your-1000-grocery-bill/) or how [investing about half your take-home pay will allow you to retire in about 17 years](https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/). This leads me to the topic of this article.


<!-- Ezoic - in_content1 - mid_content -->
<div id="ezoic-pub-ad-placeholder-113"> </div>
<!-- End Ezoic - in_content1 - mid_content -->

### The Shockingly Simple Math Behind Early Retirement

I do not want to cause any confusion. This idea purely comes from the Mr. Money Mustache [blog on this same topic](https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/). In this article, he details how the most important number in your financial independence journey is: "Your savings rate, as a percentage of your take-home pay".

To expand on this, your savings rate is simply the amount of money you save each month divided by the amount of money you save month plus the amount of money you spend. Sounds easy enough but this is probably where the simplicity ends. If you try to calculate your savings rate, you may start to wonder things like "Does my mortgage count for savings or spending?" (Ans. Neither) or "What about a college fund for my kids?" (Again, Ans. Neither). Your home is an investment but it's also something you need to live in; you can't use the equity for retirement but not having a mortgage payment in retirement will lower your monthly bills. As such, I treat my mortgage payment as neither an expense or money saved -- it's in it's own bucket ("Neither") as it's not going towards money I can use in retirement and it's not a recurring expense I expect to have in retirement (i.e. I plan to be mortgage free before retirement.). The same goes for my kid's college fund, it's money that I contribute each month but is a gift I plan to give at a later date -- this money will have no impact on my living in retirement. There are many more grey areas in a monthly budget and ultimately you'll have to come up with what makes the most sense for you. To share my thinking, I've put together a mock scenario below and how I might view someone's monthly budget.

### A Real-World Breakdown

Let's say, after taxes you take home $5,000/month -- here is a breakdown of how someone might divide up their take home.

<div class="container">
  <div class="row">
    <div class="form-group col-sm-6 offset-sm-3">
      <table id="budget_table"></table>
    </div>
  </div>
</div>




Adding all of this up we get the following values for each category:

**Savings: $850**

**Expenses: $2100**

**Neither: $1950**


This makes our savings rate: 

**Savings / (Savings + Expenses) * 100 =  850 / (850 + 2100) * 100 = 28.81%.**

Using an expected 5% return on investments, this would put you on track to retire in about 25-28 years. Ouch. That hurts. This person is contributing to their retirement account, investing in a brokerage, paying off our mortgage, saving for their kid's college, living on roughly half of their take-home. Still, with allowing for some error in the estimates, we're likely still going to retire to in a common amount of time for retirement (perhaps a little early in our 50s).

If you'd like to expedite your route to retirement, there's two options here. First, you can look into decreasing your expenses. The three expense items I'd look at are groceries, phone/internet/utilities, and monthly incidentals. Honestly, these look pretty low to me already but if you were looking to lower your expenses, these items probably have the most opportunity. Alternatively, you could look into getting a new job or a higher income. This would also increase your savings rate if you contributed that extra money to your savings. Or the best option, you could try for both. By increasing your savings rate, you can vastly shorten your time til retirement. For example, getting your expenses to match your savings (i.e. 50% savings rate, can just about cut your time to retirement to about 17 years).


<!-- Ezoic - in_content2 - long_content -->
<div id="ezoic-pub-ad-placeholder-114"> </div>
<!-- End Ezoic - in_content2 - long_content -->

### The Limitation of the Shockingly Simple Math

As you read this you might start to think that all of these projections depend on a lot of what-ifs. How can you say it will cut the time in half if you don't know what the stock market is going to do? Or how do you know this will be enough money to get you through retirement? These projections are assuming 1) a 5% return from investments (after inflation) and 2) a 4% safe withdrawal rate. 

To expand on how these assumptions are used, the 5% return from investments is primarily used when contributing to your investments. That is, after each year your money will grow 5% using this assumption. Historically, this is a very conservative estimate because the S&P 500 has returned an average closer to 8% (adjusted for inflation) over the last 150 years. That said, something arbitrarily lower like 5% is often preferred for people making these forecasts as it provides conservative estimates. Additionally, using a 5% growth rate with a 4% safe withdrawal rate, your investments will last through retirement without ever having to pull from the principal (leaving 1% growth each year). Furthermore, the 4% safewithdrawal rate comes with the added property of needing 25x your annual expenses in investments to reach your FIRE goal (Annual Expenses = Investments * .04, Annual Expenses / .04 = Annual Expenses * 25 = Investments).

<!-- Ezoic - in_content3 - longer_content -->
<div id="ezoic-pub-ad-placeholder-115"> </div>
<!-- End Ezoic - in_content3 - longer_content -->

### Shockingly Simple Savings Rate Calculator

<main>
<form>
  <div class="container">
    <div class="row">
      <div class="form-group col-sm-4">
        <label for="growth_rate">Growth Rate</label>
        <input type="number" class="form-control" id="growth_rate" aria-describedby="growth_rate_help" value="5" min="0" max="100">
        <small id="growth_rate_help" class="form-text text-muted">The S&P 500 has returned an average of 8% per year (adjusted for inflation) for the last 150 years.</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="uncertainty">Uncertainty</label>
        <input type="number" class="form-control" id="uncertainty" aria-describedby="uncertainty_help" value="2" min="0" max="100">
        <small id="uncertainty_help" class="form-text text-muted">How many % points above and below the growth rate would you like to explore?</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="withdrawal_rate">Withdrawal Rate</label>
        <input type="number" class="form-control" id="withdrawal_rate" aria-describedby="withdrawal_rate_help" value="4" min="0" max="100">
        <small id="withdrawal_rate_help" class="form-text text-muted">Generally, people consider 4% as a safe withdrawal rate (25x your annual expenses). More conservatively, you can use 3% (33x your annual expenses).</small>
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


<div class="container">
  <div class="row">
    <div class="form-group col-sm-6 offset-sm-3">
      <table id="table_id"></table>
    </div>
  </div>
</div>

</main>

<!-- Ezoic - in_content4 - longest_content -->
<div id="ezoic-pub-ad-placeholder-116"> </div>
<!-- End Ezoic - in_content4 - longest_content -->

### The Take-Home

The sweet spot for an early retirement is to have a savings rate in the 40-60% range. Using the default assumptions in the calculator, this puts you at a 10-20 year working career where after you could choose to continue working or retire as you would have the financial freedom to walk away if you wanted. 

Adjusting the growth rate 


### Few Things to Note

Running these numbers a few things stand out. First, I truncated a life to 100 years (or 120 years if you start saving for retirement at 20). As such, if it took longer than 100 years to reach a goal with a given savings rate, then I just set it to 100. This frequently happens when your savings rate is between 0-10% which is why I removed this from the range on the Savings Rate axis -- it really just made the graph appear strange.


<!-- Ezoic - in_content5 - incontent_5 -->
<div id="ezoic-pub-ad-placeholder-117"> </div>
<!-- End Ezoic - in_content5 - incontent_5 -->




<!-- Ezoic - bottom_of_page - bottom_of_page -->
<div id="ezoic-pub-ad-placeholder-101"> </div>
<!-- End Ezoic - bottom_of_page - bottom_of_page -->






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
  
    // Come back here when you have the lines etc.
    // Remove any previously drawn lines.
    d3.select(".fire_number_line").remove();
    d3.select(".going_broke_line").remove();
    d3.select(".fire_number").remove();
    d3.select(".future_value_line").remove();
    d3.select(".future_value").remove();
    d3.select(".error_bar_area").remove();
    
    // Initiate variables
    var growth_rate = Number(document.getElementById('growth_rate').value) / (100);
      uncertainty = Number(document.getElementById('uncertainty').value) / (100);
      withdrawal_rate = Number(document.getElementById('withdrawal_rate').value) / (100);
      fire_multiplier = 1 / withdrawal_rate;
      growth_rate_frac = growth_rate / 12;
      uncertainty_frac = uncertainty / 12;
    
    // Initiate data structures for the graph and table
    var future_value_data = [{x: 100, 
                              y: 0, 
                              y0: 0, 
                              y1: 0,
                              contribution: 0,
                              growth_rate: growth_rate,
                              uncertainty: uncertainty}];
    
    var future_value_data_table = [[100, 0, 0, 0]];

    for (let i = 1; i <= 100; i++) {
    
      var savings_rate = 100 - i;
        contributions_frac = savings_rate / 100 / 12;
        fire_number = fire_multiplier * i / 100;
        y_tmp = 0;
        y0_tmp = 0;
        y1_tmp = 0;
        y_years = [100];
        y0_years = [100];
        y1_years = [100];
        age = "";
        age_lower = "";
        age_upper = "";
        fv_tmp = [{y: 0, y0: 0, y1: 0}];
      
      
      if (i > 0) {
        
        // Loop through til you hit your FIRE number
        for (let j = 0; j < 1200; j++) {
        
          // Calculate FV numbers
          fv_tmp[j+1] = {y: Math.round( (Number(((fv_tmp[j].y + contributions_frac) * (1 + growth_rate_frac)))) * 100) / 100,
                       y0: Math.round( (Number(((fv_tmp[j].y0 + contributions_frac) * (1 + growth_rate_frac - uncertainty_frac)))) * 100) / 100,
                       y1: Math.round( (Number(((fv_tmp[j].y1 + contributions_frac) * (1 + growth_rate_frac + uncertainty_frac)))) * 100) / 100};
          
          // If any number passes criteria, store it
          if (fv_tmp[j+1].y > fire_number) {
            
            y_years.push(Math.round(j/12 * 100) / 100);
          
          }
          
          if (fv_tmp[j+1].y0 > fire_number) {
          
            y0_years.push(Math.round(j/12 * 100) / 100);
          
          }
          
          if (fv_tmp[j+1].y1 > fire_number) {
          
            y1_years.push(Math.round(j/12 * 100) / 100);
          
          }
        
        }
      
      }
        
      future_value_data[i] = {x: savings_rate, 
                              y: d3.min(y_years),
                              y0: d3.min(y0_years),
                              y1: d3.min(y1_years)};
      
      if (i%5 == 0) {
      
        future_value_data_table[i/5] = [savings_rate, d3.min(y_years), d3.min(y1_years), d3.min(y0_years)];
      
      }
      
      
    }
    
    var future_value_data = future_value_data.sort(function(a) { return -a.x });
      future_value_data = future_value_data.filter(function(d){ return d.x >= 10 });
    
    // Set axes
    // Create the X axis:
    x.domain([10, 100]);
    svg.selectAll(".myXaxis")
      .call(xAxis);
    
    const xScale = d3
      .scaleLinear()
      .range([0, width])
      .domain([10, 100]);
    
    // create the Y axis
    y.domain([0, 100])
    svg.selectAll(".myYaxis")
      .transition()
      .duration(1000)
      .call(yAxis);
    
    // Create scales
    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, 100]);
    
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
      .text("Years to Retire: ");
        
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
      .text("Savings Rate: ");
        
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
        tooltip.select(".tooltip-date").text(numberWithCommas(d.y));
        tooltip.select(".tooltip-lower").text(numberWithCommas(d.y1));
        tooltip.select(".tooltip-upper").text(numberWithCommas(d.y0));
        tooltip.select(".tooltip-likes").text(d.x + "%");
    };
    
    
    


    
    // Add the data table
    $(document).ready(function() {
      $('#table_id').DataTable( {
          data: future_value_data_table,
          destroy: true,
          searching: false,
          paging: false,
          bInfo: false,
          // ordering: false,
          // "order": [[0, "asc"]],
          columns: [
            { title: "Savings Rate" },
            { title: "Years to Retirement" },
            { title: "Years to Retirement <br> Lower" },
            { title: "Years to Retirement <br> Upper" }
        ],
        columnDefs: [
          {
              targets: [0, 1, 2, 3],
              className: 'dt-body-center'
          },
          {
              targets: [0, 1, 2, 3],
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
    .text("Years to Retirement");
  
  // text label for the x axis
  svg.append("text")             
    .attr("transform",
          "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("Savings Rate");
  
  var legend_keys = ["Future Value", "+/- Uncertainty"];
    graph_colors = ["#3CB371", "#CCE5DF"];

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
  
  var budget_data_table = [
      ['401k Contribution', 'Savings', '$600'],
      ['Employer 401k Match', 'Savings', '$150'],
      ['Brokerage Contributions', 'Savings', '$100'],
      ['Property Taxes', 'Expense', '$250'],
      ['Health Insurance Premiums', 'Expense', '$300'],
      ['Phone, Internet, Utilities', 'Expense', '$300'],
      ['Groceries', 'Expense', '$800'],
      ['Travel', 'Expense', '$150'],
      ['Home Improvements', 'Expense', '$100'],
      ['Other Incidentals', 'Expense', '$200'],
      ['Day Care', 'Neither', '$900'],
      ['Mortgage', 'Neither', '$900'],
      ['Emergency Fund Contributions', 'Neither', '$50'],
      ['529 Contribution', 'Neither', '$100']
    ];
    // Add the data table
    $(document).ready(function() {
      $('#budget_table').DataTable( {
          data: budget_data_table,
          ordering: false,
          destroy: true,
          searching: false,
          paging: false,
          bInfo: false,
          columns: [
            { title: "Item" },
            { title: "Category" },
            { title: "Amount" }
        ],
        columnDefs: [
          {
              targets: [0, 1, 2],
              className: 'dt-body-right'
          },
          {
              targets: [0, 1, 2],
              className: 'dt-head-right'
          }
          
        ]
      } );
    });
  
</script>

