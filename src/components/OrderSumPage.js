import React from 'react'

function OrderSumPage({data}) {
  console.log(data)

  //destructuring items, restuarant and user from data
  const {items, restaurant, user} = data
  
  
  return (
    <div className="order-sum-container">
      
      {
        data.length === 0 ? <p className="loading">Loading...</p>:(
          <div className="wrapper">
            <div className="rest-wrapper">
              <h1>{restaurant.name}</h1>
                <div className="rest-details">
                  <p><span style={{fontWeight: '600'}}>City: </span>{restaurant.city}</p>
                  <p><span style={{fontWeight: '600'}}>Street: </span>{restaurant.street}</p>
                  <p><span style={{fontWeight: '600'}}>State: </span>{restaurant.state}</p>
                  <p><span style={{fontWeight: '600'}}>ZipCode: </span>{restaurant.zipcode}</p>
                </div>
            </div>
            <div className="customer-wrapper">
              <p className="cus-details">Customer Details</p>
              <div className="user">
                <p><span style={{fontWeight: '600'}}>Name: </span>  {user.name}</p>
                <p><span style={{fontWeight: '600'}}>About:</span> <br></br>{user.about}</p>
                <p><span style={{fontWeight: '600'}}>Address:</span> <br></br>{user.address}</p>
                <p><span style={{fontWeight: '600'}}>Phone Number: </span><br></br>{user.phone}</p>
              </div>
            </div> 
            <div className="items-wrapper">
              <h2>Items Ordered</h2>
              {
                items.map((el,id) => (
                  <div key={id} className="items"> 
                    <p style={{ width: '20%'}}>{el.name}</p>
                    <p style={{textAlign: 'justify', width: '20%'}}>{el.category}</p>
                    <p style={{textAlign: 'right', width: '15%'}}>{el.currency}</p>
                    <p style={{textAlign: 'right', width: '15%'}}>{el.quantity}</p>
                    <p style={{textAlign: 'right', width: '15%'}}>{el.price}</p>
                    <p style={{textAlign: 'right', width: '15%'}}>{el.tax_pct}%</p>
                  </div>
                ))
              }
            </div> 
          </div>
        )
      }
        
    </div>
  )
}

export default OrderSumPage