import {createContext} from "react";
import UserStore from "../store/UserStore";
import PostStore from "../store/PostStore";

export const Context = createContext();

export function ContextProvider({ children }) {

    return (
        <Context.Provider
            value={{
                user: new UserStore(),
                posts: new PostStore()
            }}
        >
            {children}
        </Context.Provider>
    );
}