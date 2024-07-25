import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Home = () => {

    const navigate = useNavigate();

    const handleLoginNavigation = (event) => {
      event.preventDefault(); // Prevent the default link behavior
      toast.success('Logout successful');
      navigate('/'); // Navigate to the login page
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