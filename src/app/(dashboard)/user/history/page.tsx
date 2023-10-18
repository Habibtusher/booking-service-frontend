import OrderHistory from '@/components/History';
import React from 'react';

const History = () => {
    return (
        <div>
              <h1 className='text-3xl -mt-8 pb-4'>Order History</h1>  
            <OrderHistory/>
        </div>
    );
};

export default History;