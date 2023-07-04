import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Fragment, useEffect} from 'react'
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
// import dotenv from "dotenv";
import {
  useQuery,
} from '@tanstack/react-query'

function App() {
  // useEffect(()=>{
  //   fetchAPI()

  // },[])

  // const fetchAPI = async () => {
    
  //   const res = await axios.get(`http://localhost:3001/api/product/get-all`)
  //   // console.log("process.env.REACT_API_URL_BACKEND", process.env.REACT_API_URL_KEY);
  //   console.log('res', res);
  //   return res.data
  // }

  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchAPI })

  // console.log("query", query);
  

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Page = route.page
          const Layout : any = route.isShowHeader ? DefaultComponent : Fragment;
          return (
            <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
            )
        })}

        {/* <Route index element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
