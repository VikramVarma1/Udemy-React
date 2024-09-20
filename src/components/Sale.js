// function sale

import saleimage from "../assets/img/sale image.jpg"


function Sale(){

    return(
      <div class="sale-image">
      <img src={saleimage}/>
      
      <div class="sale-image__offer">
       <h2>Udemy Flash Sale 24 Hours to save</h2>
       <p>Get the Top Courses for just 499. Just one day to save but a Lifetime to Learn</p>
      </div>
  </div>
    )
  }

  export default Sale