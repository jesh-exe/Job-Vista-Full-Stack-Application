import React, { Component } from 'react';
// import MainPage from '../css/MainPage';
import imagee from '../assets/man-image.png';
import '../css/MainPage.css';

export default class MainPage extends Component {

  render() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
                {/* Trupti */}
                <div>

                </div>

                {/* Mandeep */}
                <div class="container-fluid text-center">
                    <div className='row'>
                      <div class='col-sm-12 col-md-4 col-lg-4 left'>
                        <img src={imagee} alt="man image"  />

                      </div>

                      <div class='col-sm-12 col-md-8 col-lg-8 right'>
                        <div className='firstheading'><h6 className='text-start'>WHAT WE ARE DOING</h6></div>
                        <div><h2 className='text-start'>24K Talented people are <br/> getting jobs</h2></div>
                        <div><p className="text-start">Mollit anim laborum duis ou dolor in voluptate velit esss cillium doore eu lore dsu quality mallit anim laborumuis au dolor in valuptate velit cillum.</p></div>

                        <div className='text-start text-secondary'><p >Mollit anim laborum duis ou dolor in voluptate velit esss cillium doore eu lore dsu quality mallit anim laborumuis au dolor in valuptate velit cillum.</p></div>

                        <button className='text-start'>Post a Job</button>

                        
                        
                      </div>
                    </div>
                </div>

                {/* Vaishnavi */}
                <div>

                </div>
            </div>
        </div>    
      </div>
    )
  }
}
