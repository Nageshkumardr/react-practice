import React from  "react"
import Nav from   "./components/Nav"
import STYLE from "./app.module.css"
import Hotstar from "./Hotstar"
import Jspider from "./Jspider"

import W3schools from "./W3schools"
import Apple from "./Apple"
import Linkedin from "./Linkedin"

const App =()=>{
    return(
<div>
   <W3schools/>
   <br></br>
   < Hotstar/>
   <br />
  < Jspider/>
  <br />
  <Apple/>
  <br />
  <Linkedin/>

</div>


    )
}
export default App