// creating Navbar

function Navbar(){

    return(
  
      <div class="navbar">
      <div class="navbar-s1">
        <h1 class="navbar-s1__title">Udemy</h1>
      </div>
  
      <div class="navbar-s2">
        <i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
        <input type="text" placeholder="Search for anythinh here. Tech, Business, Art..."/>
      </div>
  
      <div class="navbar-s3">
        <p>Courses</p>
        <p>My Learning</p>
         <div class="mylearning">
          <p>My Learning</p>
          <div class="mylearning__popup">
            <p>You did not purchased anything yet</p>
          </div>
         </div>
        <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
        <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
        <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
      </div>
  
      <div class="navbar-s4">
        <i class="fa-solid fa-bars" style={{color: "#000000"}}></i>
      </div>
      
    </div>
    )
  }

  export default Navbar