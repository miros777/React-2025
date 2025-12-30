import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routs} from "../router/routs.tsx";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({

    reducer: {},


})
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routs} />
    </Provider>
  ,
)
