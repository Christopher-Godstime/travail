import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/header/Header";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Client from "./pages/Client";
import Header from "./components/header/Header";
import StatusModal from "./components/StatusModal";
import PageRender from "./customRouter/PageRender";
import Home from "./pages/home";
import Login from "./pages/login";
import Alert from "./components/alert/Alert";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";
import Services from "./pages/Services";
import Register from "./pages/Register";
import { getPosts } from "./redux/actions/postAction";
import { getSuggestions } from "./redux/actions/suggestionsAction";

import io from "socket.io-client";

import PrivateRouter from "./customRouter/PrivateRouter";
import { GLOBALTYPES } from "./redux/actions/globalTypes";
import SocketClient from "./SocketClient";

import { getNotifies } from "./redux/actions/notifyAction";
import CallModal from "./components/message/CallModal";
import Peer from "peerjs";

function App() {
  const { auth, status, modal, call } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
    }
  }, [dispatch, auth.token]);

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
        }
      });
    }
  }, []);

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: "/",
      secure: true,
    });
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer });
  }, [dispatch]);

  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/about_us" component={AboutUs} />
      <Alert />

      <div className={`App ${(status || modal) && "mode"}`}>
        <div className="main font-poppins">
          <div className={auth.token ? "visible" : "hidden"}>
            <Header />
          </div>
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}
          <Route exact path="/login" component={auth.token ? Home : Login} />
          <div style={{}}>
            <PrivateRouter exact path="/login/:page" component={PageRender} />
            <PrivateRouter
              exact
              path="/login/:page/:id"
              component={PageRender}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
