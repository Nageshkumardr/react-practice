import React from 'react'
import STYLE from "./netflix.module.css"

const Netflix = () => {
  return (
    <>
    <div id={STYLE.main}> 
      <div>
        <img id={STYLE.image} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAByCAMAAADOFQWBAAAAaVBMVEUAAADjCRTmCRTwCRV5BQvpCRTeCRPtCRWZBg1qBAmzBw9JAwbXCBIqAQM8AwVyBQq9CBFaAwhUAwfMCBFlBAh+BQuGBQxAAwbSCBKnBg6TBg0yAgRfBAg3AgUKAAD3ChYkAQMdAQIXAQI+6XdqAAAEHklEQVR4nO2Z67aiIBSABUMtr2neyzq+/0MObLxXk417XLNm7e8Xegz4cLNBjmEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ/z3xQRJ2F+dUXfmqGEBxIM3lveNhQdgaxm3x4Fk+eIU//swayuGvN2OoJ+97ABWcN5s4NuecdfWU6sJyVTE0+RQzlfcSwed4Uvo4f9Au5YMn9aAXzBo6qLrNoypWqihKfb8t1MMmgolgjImq15IXnYkqjmgTPrvHeAEms3vQwZN88MlE/dgGkx9VN7f0O4Pf82KziDbhSYNuwt6bGJFq1DxAGSq1D0gmzHR3Nbno4YOirqjGMumC9slknCdq0PQ86SwUE5P5PPlg4usxUXOjhOh2tot0JsxrX5nYTviUu0LoRZH2uQtM7Cqc5q5PJt3slP2vQUk88Ez44aXJ9cUvIjWdkyHFgokZzx75aBJAeBUP3aI4IYj0Jjq8nkwub038uck8iX400VPOvBgeND4fh20m3PJ3MenXYKheRKG6yaMW0YSZ4S4m/TupC5gg8GpEaGDQm/BoVxOdsxjoWCgigwlj7haTtTN+GH53WJvsDNmEZ1/lroXJ5eEDzVoTo+hVrNxAYTSRiXVpwr1EUYz9fmPCbFNx76JsRXQNm4h+J4lnwuzg7RrPPpr0xKtNAku/FJwUPJhYenDe7busv2DSz/kISUSbeNA77wuTYrvJVUfCq6SywSSFWi9vokt8ji5hA2L9PDGOuMGlTSxX7RqE8zTji6RQfJzxwsk09XqT03QXjmdS2arfpVhk4VcDtmk9GU3cfklG2aoMJrGrv30422uNH5KmQFoYe5MmGtbcfUyavj2k/eNgYlRiX5NsGDmOucZLk5ztaqK/fznmnO9NJvugPUwu+qDIAh1kk9T+xqRYYTI/L5nvILuzIX0egXBENDW5vYou6GBTx+dwDOa178Q6lU6VpcdrXD+Z6FRptSnEGMpn/GjSnMSTCY8Sz1I7SH2a+p0JE4ILOFeyGmMRXSV8KzpG6415H81kyCaL3Yq++ScmI0uTXO+D424baVe4Jr71bDKAa5Lp8whZCqAZlO/f0USf1q4wUUEzmfF3uXO8L0zE703glYB9C40KjA3xxORiTk1EF11ChTs3x/xSJkkUlY/+0nWqqnLmGdcpPM+zFLIK+XswEYNJqLdGsLZnaHN+YuLDUHX/PzncTZszT3W6rGQK+n4hbv3AjS/hIasqZXL0GLfvKnfpnVG336ohpj2EdX5iYpS2TDXdO8nTOA9uvv/TbG8DaOtbkJ9VQo7Vu+LeQ9+HSMQ4X5Em8ktKh/m1dLLwfMPq+2+o47Bf7d07/ANse53SxErK4PODf4smKyMP49PRdbG+dLbQuCiLI0EQBEEQBEEQBEEQBEEQBEEQBEEQBPFv8wvrL0PK8tBEXAAAAABJRU5ErkJggg==" alt="" />
      </div>
  
      <div>
       
        <ul id={STYLE.menu}>
 
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Series</a>
            </li>
            <li>
                <a href="">Films</a>
            </li>
            <li>
               <a href="">Latest</a>
            </li>
            <li>
                 <a href="">Mylist</a>
            </li>
     
            
            <li>
                <a href=""></a>
            </li>
            <li>
                   <a href=""></a>
            </li>
            <li>
               <a href=""></a>
            </li>
            <li>
                <a href=""></a>
            </li>
            <li>
                <a href=""></a>
            </li>
            <li>
                <a href=""></a>
            </li>
            <li>
                a
            </li>
            <li>
                <a href="dff"><img id={STYLE.img} src="data:image/png;base64,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" alt="a" /></a>
            </li>
            <li>
              <a href=""><img id={STYLE.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJNRniF2XNnss-VYCNYtL4uvjv-wQzb4Lxw&usqp=CAU" alt="" /></a>
            </li>
            <li>
              <a href=""><img id={STYLE.img}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaadqu36gfdOZax5yT-X85ktS9rhOgTTHMCA&usqp=CAU" alt="" /></a>
            </li>
            <li>
              <a href=""><img src="data:image/png;base64,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" id={STYLE.img}  alt="" /></a>
            </li>
            <li>
              <a href=""><img id={STYLE.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwV6j4CuC7CXrhZWJjywT32krv3lgbSM4nkQ&usqp=CAU" alt="" /></a>
            </li>
         
        </ul>
    
        
       
        </div>
      </div>
    
    </>
  )
}

export default Netflix