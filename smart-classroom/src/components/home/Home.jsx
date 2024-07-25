import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const handleLoginNavigation = (event) => {
      event.preventDefault(); // Prevent the default link behavior
      navigate('/login'); // Navigate to the login page
    };

  return (
    <div><h1>This is the home menu</h1>
     <a href="#" className="link" onClick={handleLoginNavigation}>
            Log in
          </a>
    </div>
  )
}

export default Home