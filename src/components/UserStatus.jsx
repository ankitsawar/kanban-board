import React from 'react'
import { getColor } from './utils/constants';

function UserStatus({ userId, users }) {
   const getUser = () => {
      const index = users.findIndex((user) => user.id === userId);
      const initials = users[index]['name'].split(" ");
      return {
         initials: initials.length > 1 ? initials[0].charAt(0) + "" + initials[initials.length - 1].charAt(0) : initials[0].charAt(0),
         availability: users[index]['available']
      }
   }
   return (
      <div className="user-status-wrap">
         <div className="initials" style={{ backgroundColor: getColor() }}>{getUser().initials}</div>
         <div className={`availability ${getUser(userId).availability ? 'active' : ''} `}></div>
      </div>
   )
}

export default UserStatus