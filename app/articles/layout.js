import React from 'react'
export const metadata ={
  title:'articles'
};
function layout({children}) {
  return (
    <div>
        <h1>layout</h1>

        <div style={{marginTop:"50px",backgroundColor:"blue",padding:"20px",borderRadius:"10px"}}>
          {children}
        </div>
        </div>
  )
}

export default layout