import './Footer.css'
function Footer() {
    return (
        <footer className="single_column ">
        <nav>
          <div className="join">
            <img src="/logo.png" alt="Motionmovie" width="130" height="50"/>
        
              <a className="rounded logged_in" >Motionmovie!</a>
          </div>
        
          <div>
            <h3>The Basics</h3>
            <ul>
              <li>About Motionmovie</li>
              <li>Contact Us</li>
              {/* <li>Support Forums</li> */}
                {/* <li><a href="" target="_blank">API</li>
              <li><a href="" target="_blank" rel="noopener">System Status</li> */}
            </ul>
          </div>
          <div>
            <h3>Get Involved</h3>
            <ul>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>Guidelines</li>
              <li>Discussions</li>
              <li><a href="https://www.facebook.com">Facebook </a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>Terms of Use</li>
              {/* <li>API Terms of Use</li> */}
              <li>Privacy Policy</li>
            </ul>
          </div>
        </nav>
        
        <section>© 2023. All rights reserved Sumit.| Design by Sumit   | <span ><a href="https://www.themoviedb.org/" target="_blank" rel="noopener"> |    API CREDIT:TMDB </a> </span></section>
        </footer>
        
    );
  }
  
  export default Footer;