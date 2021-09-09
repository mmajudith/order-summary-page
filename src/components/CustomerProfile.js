import React from 'react'
import UserProfilePic from './icon-5404123_640.png'

function CustomerProfile({userData}) {

  //destructuring user from userData
  const { user } = userData

  return (
    <div className="profile-container">
     
      {
        userData.length === 0 ? <p  className="loading">Loading...</p> : (
          <div className="user-profile-wrapper">
              <img src={UserProfilePic} alt="user profile" width="150" height="150"/>
              <p><span style={{fontWeight: '600'}}>Name: </span>  {user.name}</p>
              <div>
                <p><span style={{fontWeight: '600'}}>About:</span> <br></br>{user.about}</p>
                <p><span style={{fontWeight: '600'}}>Address:</span> <br></br>{user.address}</p>

                <div className="food-items"><span style={{fontWeight: '600'}}>Likes:</span> {user.likes.map((el,id) => <ul key={id}> <li>{el}</li> </ul>)}</div>
                <div className="food-items"><span style={{fontWeight: '600'}}>Dislikes:</span> {user.dislikes.map((el,id) => <ul key={id} ><li>{el}</li> </ul>)}</div>

                <p><span style={{fontWeight: '600'}}>Phone Number: </span><br></br>{user.phone}</p>
              </div>
          </div>
        
        
        )
      }
    </div>
  )
}

export default CustomerProfile
