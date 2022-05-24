import React from 'react'
import ShowInvoice from './ShowInvoice'

function OrderHistory() {
  return (
    <div className='flex-[0.8] overflow-y-scroll h-screen p-2 scrollbar-hide'>
        <div className="topTitle h-[50px] rounded-md border-2 bg-[#F5F5F5] flex justify-center flex-col px-3 sticky top-0 z-0">
            <p className='font-semibold'>Order History</p>
        </div>
        <div className="historyTable w-full">
            <table className='w-full border-collapse table-fixed'>
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
                    <td className='text-center font-bold'><button className='bg-orange-400'>{<ShowInvoice />}</button></td>
                </tr>
                <tr className='border-b-2 h-[50px] text-left'>
                    <td>Order Number</td>
                    <td>Order Date</td>
                    <td>Total Items</td>
                    <td>Status</td>
                    <td>Total Price</td>
                    <td className='text-center'><button className='bg-orange-400'>{<ShowInvoice />}</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderHistory