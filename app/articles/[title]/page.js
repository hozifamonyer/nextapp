import React from "react";

function ShowArticlepage(props) {
  console.log(props);
  return (
    <div>
      <h1>ShowArticlepage</h1>
      <h1>{props.params.title}</h1>
   
    </div>
  );
}

export default ShowArticlepage;
