import c1 from "../assets/img/c1.jpg"
import c2 from "../assets/img/c2.jpg"
import c3 from "../assets/img/c3.jpg"
import c4 from "../assets/img/c4.jpg"
import c5 from "../assets/img/c5.jpg"
import c6 from "../assets/img/c6.jpg"
import c7 from "../assets/img/c7.jpg"
import c8 from "../assets/img/c8.jpg"

//  function popular
  
function Popular(){
  
    return(
      <div class="popular">
  
      <div class="popular-title">
        <h1>Most Popular</h1>
        <p class="popular-subtitle">Pick the Best Fit</p>
        <div class="popular-container">
  
          <div class="course-card">
            <img src={c5}/>
          <h3>2023 Python Data Visualization Masterclass</h3>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c6}/>
          <h3>Web DEvelopment 2024</h3>
          <p>Col Steele</p>
          <p>3.0 ⭐⭐⭐</p>
          <p>999 <del>5999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c7}/>
          <h3>Master UI/UX Desigming with Figma</h3>
          <p>Col Steele</p>
          <p>4.3 ⭐⭐⭐⭐</p>
          <p>699 <del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c8}/>
          <h3>Basic to Advance Programming</h3>
          <p>Col Steele</p>
          <p>2.9 ⭐⭐</p>
          <p>2499 <del>2999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c1}/>
          <h3>2023 Python Data Visualization Masterclass</h3>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c2}/>
          <h3>Web DEvelopment 2024</h3>
          <p>Col Steele</p>
          <p>3.0 ⭐⭐⭐</p>
          <p>999 <del>5999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c3}/>
          <h3>Master UI/UX Desigming with Figma</h3>
          <p>Col Steele</p>
          <p>4.3 ⭐⭐⭐⭐</p>
          <p>699 <del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c4}/>
          <h3>Basic to Advance Programming</h3>
          <p>Col Steele</p>
          <p>2.9 ⭐⭐</p>
          <p>2499 <del>2999</del></p>
          </div>
        </div>
      </div>
    </div>
  
    )
  }

  export default Popular