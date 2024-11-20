import React from 'react';
import { Link } from 'react-router-dom'; // Caso você use o React Router
import imgError from '../assets/images/error-404.png';
import '../assets/css/pages/error.css';


const NotFound = () => {
  return (
    <div id="error">


        <div class="error-page container">
            <div class="col-md-8 col-12 offset-md-2">
                <img class="img-error" src={imgError} alt="Not Found"/>
                <div class="text-center">
                    <p class='fs-5 text-gray-600'>The page you are looking not found.</p>
                    <Link to="/" class="btn btn-lg btn-outline-primary mt-3">Go Home</Link>
                </div>
            </div>
        </div>


    </div>
  );
}

export default NotFound;
