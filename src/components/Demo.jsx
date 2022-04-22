

  import {  useAppBridge } from "@shopify/app-bridge-react";
import { Page, TextContainer } from "@shopify/polaris";
 
  import {useEffect,useState} from "react"
  import { userLoggedInFetch } from "../App";
  
  
   
  
  export function Demo() {
      const[prc,getprc]=useState([])
    
    const app = useAppBridge();
    const fetch = userLoggedInFetch(app);
    async function updateProductCount() {
      const  count  = await fetch("/products-all").then((res) => res.json());
     getprc(count);

    
    }
    
  
    // useEffect(() => {
    //   updateProductCount();
    // }, []);
  
   
    
  
    return (
     
    
     <Page>
    <div>{prc.map((info,index)=>{
        return (
           
         <TextContainer>  {info.title}</TextContainer>
        )
    })}</div>
    <button onClick={updateProductCount}>click</button>
    </Page>
    
    )
  }
  