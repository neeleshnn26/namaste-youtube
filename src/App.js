import { Provider } from "react-redux";
import "./App.css"
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./Components/Maincontainer";
import WatchPage from "./Components/WatchPage";

const appRouter=createBrowserRouter([

  {
    path:"/",
    element:<Body/>,// This Body will wrap the nested routes
    children:[
      {
        path:"/",
        element:<Maincontainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
  ]

  }
]
  
)
function App() {
  return (
    <Provider store={store}>
       <div >
    <Header/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
   
  );
}

export default App;
