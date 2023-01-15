import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Context, ContextProvider} from "./context/Context";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ContextProvider>
              <Context.Consumer>
                  {({user, posts}) => <App user={user} posts={posts} />}
              </Context.Consumer>
          </ContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);
