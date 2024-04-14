import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const Navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData');
        Navigate('/signin')
        console.log("logout succesfull")
    }
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    console.log("userData", userData)

    return (
        <div className="h-full w-full bg-gray-100">
            <button id='logout-link' onClick={logOut} className='underline text-xl top-0 right-2 absolute'>SignOut</button>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
            <div className="w-full ">
                <h3 className='flex'>Name:<p className='text-red-500'>{userData.name}</p></h3>
                <h3 className='flex'>Email:<p className='text-red-500'>{userData.email}</p></h3>
            </div>
        </div>
    );
}

export default Dashboard;