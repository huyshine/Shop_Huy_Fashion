import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Fragment} from 'react'
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";

function App() {
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
