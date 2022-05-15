import React from 'react'
// import './table.css'

function OrderHistory() {
  return (
    <div className='flex-[0.8] overflow-y-scroll h-screen p-2 scrollbar-hide'>
        <div className="topTitle h-16 bg-[#F5F5F5] flex justify-center flex-col px-3 bg-opacity-100 shadow-xl sticky top-0 z-0">
            <p>Order History</p>
        </div>
        <div className="historyTable w-full">
            <table className='w-full border-collapse table-auto'>
                <thead>
                <tr className='border-b-2 h-[70px] text-left'>
                    <th>Order Number</th>
                    <th>Order Date</th>
                    <th>Total Items</th>
                    <th>Status</th>
                    <th>Total Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr className='border-b-2 h-[50px] text-left'>
                    <td>Order Number</td>
                    <td>Order Date</td>
                    <td>Total Items</td>
                    <td>Status</td>
                    <td>Total Price</td>
                    <td><button className='p-1 bg-orange-400 '>Re-order</button></td>
                </tr>
                <tr className='border-b-2 h-[50px] text-left'>
                    <td>Order Number</td>
                    <td>Order Date</td>
                    <td>Total Items</td>
                    <td>Status</td>
                    <td>Total Price</td>
                    <td><button className='p-1 bg-orange-400 '>Re-order</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderHistory