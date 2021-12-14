---
title: "Future Value Calculator"
draft: no
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>

<main>
<form>
  <div class="container">
    <div class="row">
      <div class="form-group col-sm-6">
        <label for="annual_expenses">Annual Expenses</label>
        <input type="numeric" class="form-control" id="annual_expenses" aria-describedby="annual_expenses_help" placeholder="100000">
        <small id="annual_expenses_help" class="form-text text-muted">How much do you plan to spend in retirement?</small>
      </div>
      <div class="form-group col-sm-6">
        <label for="annual_contributions">Annual Contributions</label>
        <input type="numeric" class="form-control" id="annual_contributions" aria-describedby="annual_contributions_help" placeholder="100000">
        <small id="annual_contributions_help" class="form-text text-muted">How much do you invest in the stock market annually?</small>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-4">
        <label for="current_investments">Current investments</label>
        <input type="numeric" class="form-control" id="current_investments" aria-describedby="current_investments_help" placeholder="100000">
        <small id="current_investments_help" class="form-text text-muted">How much do you currently have invested in the stock market?</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="growth_rate">Growth Rate</label>
        <input type="numeric" class="form-control" id="current_investments" aria-describedby="current_investments_help" placeholder="8">
        <small id="current_investments_help" class="form-text text-muted">On average, the stock market has returned 8% (adjusted for inflation).</small>
      </div>
      <div class="form-group col-sm-4">
        <label for="years_contributing">Years Contributing</label>
        <input type="numeric" class="form-control" id="years_contributing" aria-describedby="years_contributing" placeholder="20">
        <small id="years_contributing_help" class="form-text text-muted">For how many years would you like to run this scenario?</small>
      </div>
    </div>
    <button class="btn btn-primary vis-btn" onclick="runfv()">Calculate</button>
  </div>
</form>
<section id="scrolly3">
    <figure>
      <div id="random_walk"></div>
    </figure>
</section>
  
<section>

### So what?
As you might imagine, using a single value to model market returns can provide a less than precise idea about the range of possibilities when investing. To get an understanding of the distribution, you can instead run a bootstrap simulation. A bootstrap simulation takes actual returns (minus CPI for the corresponding year) and randomly samples them over say a 30 year period. This process gets repeated say 1,000 times and you begin to get an idea about the range of possible outcomes.
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

</style>



<script>



  

</script>

