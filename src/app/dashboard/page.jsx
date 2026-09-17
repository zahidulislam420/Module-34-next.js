import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log('Dashboard page rendered')

    return (
        <div>
            <h2>Dashboard page</h2>

             <Counter></Counter>

            <ul>
                <li>Dashboard 1</li>
                <li>Dashboard 2</li>
                <li>Dashboard 3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;