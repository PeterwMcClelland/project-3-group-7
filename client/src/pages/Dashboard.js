import React from "react";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

const Dashboard = () => {

    return (
        <main>
        <Header />
        <Link to="/explore"> EXPLORE</Link> 
        <button type='submit' id='logout' className=''>LOGOUT</button>

        
        </main>
    );
};

export default Dashboard;