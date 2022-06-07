import {useEffect, useState} from 'react'
import axios from 'axios';

const useGetProducts = (API) => {
const [products, setProducts] = useState([]);

useEffect( () => {
  async function fetchData(){
    const response = await axios(API);
  setProducts(response.data);
  }
 fetchData() 
}, []);
return products;
}

export {useGetProducts}

/*react_devtools_backend.js:4026 Warning: useEffect must not return anything besides a function, which is used for clean-up.

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state */
