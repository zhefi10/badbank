import React from 'react';
const UserContext = React.createContext();

function useCtx() {
    const users = React.useContext(UserContext)
    if (users === undefined) {
      throw new Error('useContext used outside its Provider');
    }
    return users;
  };

  export default UserContext;
  export { useCtx };
