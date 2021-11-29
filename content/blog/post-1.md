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
<script src="/blog/post-1.js"></script>
<style src="/blog/post-1.css"></style>


<main>
  <section id="intro">
    <p class="intro__dek">
      <h3>What is a random walk?</h3>
      <p>A random walk is a tool from probability theory to simulate potential outcomes based on a series of independent events. For example, let's use the example of an actual walk where someone can take a step to th or either stay in place depending on the outcome of a coin flip. Heads for step 
      </p>
      <h3>How does this relate to FIRE?</h3>

Instead of taking steps, you may be interested in something that could follow a similar framework: investment returns over a number of years. This is relevant because you may be investing over a series of years and want to have some idea about how your investments might look after 10, 20, 30 years or more. 

Note about investment advice. It's important to keep in mind a common quote in forecasting: All models are wrong, some are useful. That is to say, there is no guarantee in these simulations. Rather, they 

The FIRE community has many rules of thumbs like the 4% rule or if you invest your entirety of annual expenses in an index fund, you'll likely reach FI (or 25x your annual expenses) in about 10 years.  
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




