import React, { useEffect } from 'react'


export const Investment = () => {
    useEffect(() => {
        window.location.href = 'https://bitorigin.ltd/';
    }, []);
  return (
    <div>
      <p>Loading</p>
    </div>
  )
}


export default Investment;
