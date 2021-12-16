---
title: "Random Walk FIRE Calculator"
date: '2021-01-01'
draft: no
image: images/blog/random_walk_with_fire.png
author_info:
  name: Daniel Woodie
  image: images/daniel.jpg
---

<script src="https://unpkg.com/intersection-observer"></script>
<script src="https://unpkg.com/scrollama"></script>
<script src="https://d3js.org/d3.v6.js"></script>
<script>
!function(a,b,c,d,e,f,g,h,i){function j(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=s&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=s&f+1],c=c*d+h[s&(h[f]=h[g=s&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function k(a,b){var c,d=[],e=typeof a;if(b&&"object"==e)for(c in a)try{d.push(k(a[c],b-1))}catch(f){}return d.length?d:"string"==e?a:a+"\0"}function l(a,b){for(var c,d=a+"",e=0;e<d.length;)b[s&e]=s&(c^=19*b[s&e])+d.charCodeAt(e++);return n(b)}function m(c){try{return o?n(o.randomBytes(d)):(a.crypto.getRandomValues(c=new Uint8Array(d)),n(c))}catch(e){return[+new Date,a,(c=a.navigator)&&c.plugins,a.screen,n(b)]}}function n(a){return String.fromCharCode.apply(0,a)}var o,p=c.pow(d,e),q=c.pow(2,f),r=2*q,s=d-1,t=c["seed"+i]=function(a,f,g){var h=[];f=1==f?{entropy:!0}:f||{};var o=l(k(f.entropy?[a,n(b)]:null==a?m():a,3),h),s=new j(h);return l(n(s.S),b),(f.pass||g||function(a,b,d){return d?(c[i]=a,b):a})(function(){for(var a=s.g(e),b=p,c=0;q>a;)a=(a+c)*d,b*=d,c=s.g(1);for(;a>=r;)a/=2,b/=2,c>>>=1;return(a+c)/b},o,"global"in f?f.global:this==c)};if(l(c[i](),b),g&&g.exports){g.exports=t;try{o=require("crypto")}catch(u){}}else h&&h.amd&&h(function(){return t})}(this,[],Math,256,6,52,"object"==typeof module&&module,"function"==typeof define&&define,"random");
</script>

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
        <input type="number" class="form-control" id="goal_fire_age" aria-describedby="goal_fire_age_help" value="45" min="0" max="100">
        <small id="goal_fire_age_help" class="form-text text-muted">What age would you like to be FI or RE?</small>
      </div>
    </div>
  </div>
</form>

<section id="scrolly3">
    <button class="btn btn-primary vis-btn" onclick="runrwfv()">Simulate 1000x</button>
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
  
  function getRandomInt(min, max, seed) {
      Math.seedrandom(seed)
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max + -min + 1)) + min;
  };
  


function runrwfv() {
  
    // Get variables from inputs
    var annual_expenses = Number(document.getElementById('annual_expenses').value);
      annual_contributions = Number(document.getElementById('annual_contributions').value);
      current_investments = Number(document.getElementById('current_investments').value);
      current_age = Number(document.getElementById('current_age').value);
      goal_fire_age = Number(document.getElementById('goal_fire_age').value);
      years_contributing = goal_fire_age - current_age;
      fire_number = [25*annual_expenses];

    // Plot FIRE Number
    var fire_number_data = [
      {x: current_age, y: fire_number},
      {x: goal_fire_age, y: fire_number}
    ];
    
    var future_value_data_full = [];
    
    for(let j=0; j < 1000; j++) {
    
      // Plot FV Value Number
      var future_value_data = [{x: current_age, y: current_investments, sim: j}];
      
      for(let i=0; i < years_contributing; i++) {
        
        seed = (i+j)/(years_contributing+1000);
        index = getRandomInt(0, real_returns.length-1, seed);
      
        future_value_data[i+1] = {x: current_age + i, y: Number(((future_value_data[i].y + annual_contributions) * (1 + real_returns[index]/100)).toFixed(2)), sim: j};
      
      }
    
      future_value_data_full[j] = future_value_data;
    
    }
    

    // If FV > Fire Number, plot time to FIRE
    if (d3.max(future_value_data, d => d.y) < fire_number) {
    
      console.log(d3.max(future_value_data) + " is less than " + fire_number + ". You never reached FIRE.");
    
    } else {
    
      console.log(d3.max(future_value_data, d => d.y) + " is greater than " + fire_number + ". You made it.");

    };
    
    // Remove past visualization
    
    // Create x and y axis
    
    // Draw FIRE Line
    
    // Draw Future Value Lines
    
    // Draw FIRE age line
    
    // Create a paragraph summary for the average
    
    // Create a paragraph summary for the 75th percentile
    
    // Create a paragraph summary for the 25th percentile
    
    // Generate a table of the outputs

  }
  
  // Have things run on load
  runrwfv();



  

</script>

