import React from "react";
import Header from "./Header";
import Main from "./Main";

function App(){

  var appStyle={
    font: '"Trebuchet MS", Helvetica, sans-serif'
  }
  //
  // <style global jsx>{`
  //     p, h1, {
  //       font: "Trebuchet MS", Helvetica, sans-serif;
  //     }
  // `}</style>
  return(
    <div>
      <Header />
      <div>
         <Main/>
      </div>
    </div>
  );
}

export default App;
