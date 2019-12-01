import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beliefs',
  template: `
    <section>
      <h2>Design <small style="color: #999">noun</small></h2>
      <p>
        The process of optimizing the interface between a person and a solution or information. (my definition)
      </p>
    </section>
    <section>
      <h3>Design Should Apply the Scientific Method</h3>
      <br>
      <p>
        <img class="process" src="../../assets/process.png">
        Design is most effective as an interative process that applies the scientific method. Unlike the scientific method
        there is likely not a single answer because each our experiements test human perception. As individuals and
        cultures shift, so will the results. Therefore, design (optimizing the interface) must be an ongoing endeavor.
        <br><br>
        Unfortunately, this iteration can be time consuimng and costly. If the cost of iteration out weights the benefits,
        then design iteration stalls. That is why I believe that applications architects should create and oversee the
        design architecture; to ensure that design velocity can be optimized and maintained.
        <br><br>
        When applications architects specialize in design architecture, I call these professionals UX engineers or UX
        architects. Their skills align more closely with applications architects than designers. However, one cannot be
        a successful UX architect without a sound understanding of the design process.
      </p>
    </section>

    <section>
      <h3>Web Design is Evolving Rapidly</h3>
      <br>
      <div fxLayout="row" fxLayoutGap="20px">
        <p fxFlex="50%">
          Admittedly, I'm most interested in the architecture of web design. We're exiting an era of web development
          where IT infrustructure is a barrier to entry and frontend frameworks make rapid iteration possible. Quality
          design is already a differentiator, but I don't think the industry has even scratched the surface. Soon, design
          architecture will be as important of a differentiator as the underlying web features themselves.
        </p>
        <p fxFlex="50%">
          Leveraging the constructs used for A/B testing and machine learning, we can begin to offer truely indivdualized experiences.
          This can be used to better accomodate for the full spectum of users. Features can be released to account for the learning curve,
          one's cognative ability, or to cater to one's disablility such as unique palletes for the color blind. The variations are 
          limitless and can selected to better serve each customer individually.
        </p>
      </div>
    </section>

    <section>
      <h3>Design Creates Value</h3>
      <br>
      <div fxLayout="row" fxLayoutGap="20px">
        <p fxFlex="50%">
          The common perspective of design seems to be that it is a necessary task to compete for market share.
          However, from my perspective, by optimizing the interface between a person and a solution or information,
          design make a solution attainable, thereby creating utility and expanding markets.
          <br><br>
          My father had a severe stroke last year during a heart stent procedure. He regained his mobility,
          but not his full cognition. Now, my mother must manage their finances, something she had never done
          before. With my degree in finance, I can advise her, but I know first-hand that at Citi that we only
          offer features deemed to be "accessible" to all. Each of us would get the most value from a unique banking
          experience. One for my father with a cognitive disability, one for my mother with limited subject
          matter knowledge, and a feature-rich, though more complex, experience for myself.
        </p>
        <div fxFlex="50%">
          
          <div style="padding: 0 32px">
          <br>
            <q style="font-size: 24px">
              For companies that make it into the top quartile of [design], the prizes are as rich as doubling their
              revenue growth and shareholder returns over those of their industry counterparts.
            </q>
            <br><br>
            <a style="float:right" href="https://www.mckinsey.com/business-functions/mckinsey-design/our-insights/the-business-value-of-design" target="_blank"> - McKinsey & Company</a>
          </div>
          <br><br>
          <p>
            Indeed, the design process is as critical to a business's success as the products themselves. The first-mover advantage
            is lost, only when the second-mover inovates faster. Business models, like that of
            <a href="https://www.gocontigo.com/">Contigo</a>, soley endevor to improve the design of existing, everyday products.
            Design, therefore, also creates business value.
          </p>
        </div>
      </div>
      <br>

    </section>

    <section>
      <h3>Ethics of Design</h3>
      <br>
      <p>
        <img class="process" src="../../assets/ada-graphic.png">
        The internet has created so much utility for humanity. Instant and free information transactions driven
        by powerful computers has abruptly ended the industrial era and kicked off the digiatl era. The
        <a href="https://www.ada.gov/" target="_blank">Americans with Disablities Act</a> justifiably protects the
        physically disabled, but I think we should go further to ensure that this utility is maxmized for all, even
        those who are not considered disabled.
        <br><br>
        Last year, my father had a severe stroke during a heart stent procedure. He regained his mobility, but not
        his full cognition. Now, my mother must manage their finances, something she had never done before. With my
        degree in finance, I can advise her, but I know first-hand that at Citi that we only offer features deemed to
        be suitable for all. Each of us would benefit most from a unique banking experience: one for my father with
        a cognitive disability, one for my mother with limited subject matter knowledge, and a feature rich, though
        more complex, experience for myself.
        <br><br>
        The full spectrum of cognitive ability is consistently overlooked, even in an age when we have the ability
        to provide individualized experiences. The constructs which enable A/B testing should be leveraged beyond
        the scope of exploration to provide ongoing, individualized experiences which maximize overall usefulness.
      </p>
    </section>
  `,
  styleUrls: ['./beliefs.component.scss']
})
export class BeliefsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
