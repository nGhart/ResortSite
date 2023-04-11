import React from 'react';
import Servicetypes from './Servicetypes';

function Services() {
  return (
    <div class="container">
        <h1 class="text-center activities">SERVICES</h1> 
        <div class="container services">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1">
                    <Servicetypes source="images/A1.jpg" title="ROOMS" description="Spend the night in our hotel suites or wake up to the sound of the waves in our ocean-front chalets." />
                    <Servicetypes source="images/A2.jpg" title="CAPN SMITH" description="Indulge in delicacies at our signature seafood restaurants, made with fresh local ingredients." />
                    <Servicetypes source="images/A3.jpg" title="EVENTS" description="Our space is available for your rentals - from weddings to corporate events." /> 
                    <Servicetypes source="images/A4.jpg"title="TO DO" description="Get the team together to partake in one of the numerous games we have available." />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;