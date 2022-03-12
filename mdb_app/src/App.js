import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='bg' style={{backgroundImage:"linear-gradient(113.49deg, #53ACB7 -110%, #07072B 58.12%)"}}>
      <MDBFooter className='text-center text-lg-start text-muted' style={{backgroundColor: "rgba(255, 255, 255, 0.03)"}}>      
        <section className='d-flex justify-content-center justify-content-lg-between p-4'>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='fw-bold mb-4'style={{color: "#1A77E4", fontSize: "28px", fontFamily: "'Poppins', sans-serif", fontWeight:"700"}}>
                  Blue<span style={{color: "white"}}>Venus</span>
                </h6>
                <p className='fw-medium mb-4' style={{color: "rgba(255, 255, 255, 0.5)",fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                  The best NFT marketplace website in the world and feel your experience in selling or buy our work
                </p>
              </div>

              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4' style={{color: "rgba(255, 255, 255, 0.5)"}}>
                <h6 className='fw-bold mb-4 text-light' style={{fontSize: "20px", fontFamily: "'Poppins', sans-serif", fontWeight:"700"}}>About</h6>
                <p>
                  <a href='#!' className='text-reset fw-medium' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    Product
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset fw-medium' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    Resources
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset fw-medium' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset fw-medium' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    FAQ
                  </a>
                </p>
              </div>

              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4' style={{color: "rgba(255, 255, 255, 0.5)"}}>
                <h6 className='fw-bold mb-4 text-light' style={{fontSize: "20px", fontFamily: "'Poppins', sans-serif", fontWeight:"700"}}>Company</h6>
                <p>
                  <a href='#!' className='text-reset' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    Our Team
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    Partner With Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    Privacy & Policy
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset' style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                    Features
                  </a>
                </p>
              </div>

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4' style={{color: "rgba(255, 255, 255, 0.5)"}}>
                <h6 className='fw-bold mb-4 text-light' style={{fontSize: "20px", fontFamily: "'Poppins', sans-serif", fontWeight:"700"}}>Contact</h6>
                <p style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                  <i className='fas fa-phone me-3'></i> +94 777  387 643
                </p>
                <p style={{fontSize: "15px", fontFamily: "'Poppins', sans-serif", fontWeight:"500"}}>
                  <i className='fas fa-envelope me-3'></i>
                  dasun@nirvanaclouds.com
                </p>  
                <div>          
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-youtube' style={{width:"23.7px", height:"16.67px"}}></i>
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-discord'></i>
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </div>          
              </div>
            </div>
          </div>
        </section>

        <div className='text-center fw-bold p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0)',fontSize: "20px", fontFamily: "'Poppins', sans-serif", fontWeight:"700"}}>
          <p> Created by &nbsp;
            <a className=' fw-bold text-light' href='https://mdbootstrap.com/'>
            NirvanaClouds &nbsp;
            </a>
          | All Right Reserved!
          </p>
          
        </div>
      </MDBFooter>
    </div>
  );
}