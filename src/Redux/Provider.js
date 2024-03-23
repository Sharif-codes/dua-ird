"use client"
import { Provider } from "react-redux";
import store from "./Store";
const StorerPovider = ({children}) => {
    return (
        <div>
            <Provider store={store}>
            {children}
            </Provider>
        </div>
    );
};

export default StorerPovider;