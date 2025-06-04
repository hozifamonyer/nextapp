import React from 'react'
export const metadata ={
  title:'posts_page'
};
function layout({children}) {
  return (
    <div>
        <div style={{marginTop:"50px",backgroundColor:"black",padding:"20px",borderRadius:"10px"}}>
          {children}
        </div>
        </div>
  )
}

export default layout