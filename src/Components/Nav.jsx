import React from 'react';

const Nav = () => {
    return (
        <div className='max-w-7xl mx-auto p-3 py-5 mb-4'>
            <div className='flex items-center justify-between'>
                <div className='text-left text-4xl font-bold text-gray-800'><h2>Knowledge Cafe</h2></div>
                <div><img  className=' w-12 h-12 object-cover rounded-full' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="model-pic"/></div>
            </div>
            <hr className='py-2 mt-6'/>
        </div>
    );
};

export default Nav;