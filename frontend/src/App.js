import React, { Component } from 'react';
import {BrowserRouter, Route, } from 'react-router-dom';
import SignUpPage from './components/Signup/SignUpPage';
import SignInPage from './components/SignIn/SignInPage';
import MyMessagePage from './components/MyMessage/MyMessagePage';
import MyPage from './components/MyPage/MyPage';
import Template from './components/UIElements/Template';
import TopAppBar from './components/UIElements/TopAppBar/TopAppBar';
import ContentsController from './components/contents/ContentsController';
import ContentsListView from './components/contents/ContentsListView';
import NearContentsListView from './components/contents/NearContentsListView';
import Footer from './components/UIElements/Footer';
import CateGory from './components/category/CateGory';
import Detail from './components/contents/Detail';
import AppContextProvider from './contexts/appContext';
import Login from './components/UIElements/Login';
import AllContent from './components/UIElements/AllContent';
import CustomSnackbar from './components/UIElements/CustomSnackbar';
class App extends Component {
  render() {
    
    return (
      <>
        <AppContextProvider>
          <BrowserRouter>
            <div className="App">
            <div className="app-wrapper">
            {
              window.location.pathname!=='/' ? <TopAppBar/>:''
            }
            <Route exact path="/" component={Login} />
              {/* <TopAppBar /> */}
              <CustomSnackbar/>
              <Route path="/templates" component={Template} />
              <Route path="/write" component={ContentsController} />
              <Route path="/contents" component={ContentsListView} />
              <Route path="/near" component={NearContentsListView} />
              <Route path="/signup" component = {SignUpPage}/>
              <Route path="/signin" component = {SignInPage}/>
              <Route path="/mypage" component = {MyPage}/>
              <Route path="/mymessagepage" component = {MyMessagePage}/>
              <Route path="/category/:id" component={CateGory} />
              <Route path="/category//" component={Error}/>
              <Route path="/detail/:id" component={Detail} />
              <Route path="/detail//" component={Error}/>
              <Route path="/AllContent/" component = {AllContent}/>
              {
              window.location.pathname!=='/' ? <Footer/>:''
              }
              {/* <Footer/> */}
              </div>
            </div>
          </BrowserRouter>
        </AppContextProvider>
      </>
    );
  }
}

export default App;
