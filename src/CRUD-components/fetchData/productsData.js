import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProductsData=createAsyncThunk("users-data",async()=>{


try{
    const response=await fetch("https://fakestoreapi.com/products")
    const data=await response.json()
    return data
}
catch(error){
   
    throw(error)
    
}

})


export default fetchProductsData