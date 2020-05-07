import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from './components/base';
import ImageViewChapter1 from './components/ImageViewChapter1';
import PDFViewer from './components/cv';
import ImageViewChapter2 from './components/ImageViewChapter2';
import Exhibitions from './components/Exhibitions';
import './components/base.css';
import News from './components/news';
import About from './components/about';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import imageLoadReducer from './reducers/imageLoadReducers';
import { BrowserRouter } from 'react-router-dom';
import devToolsEnhancer from 'remote-redux-devtools';


const store = createStore(imageLoadReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const HomePage = () => (
  <Base content={<About />} doNotIncludeNavBar={true} doNotIncludeContentClassName={true} />
)

const Main = () => (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"
      />
        <main>
          <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/chapter1/:id' component={ImageViewChapter1}/>
                <Route path='/chapter1' component={ImageViewChapter1}/>
                <Route path='/chapter2/:id' component={ImageViewChapter2}/>
                <Route path='/chapter2' component={ImageViewChapter2}/>
                <Route path='/about' component={HomePage}/>
                <Route path='/exhibitions' component={Exhibitions}/>
                <Route path='/news' component={News}/>
                <Route path='/cv' component={PDFViewer}/>
                <Route component={HomePage} />
            </Switch>
            </BrowserRouter>
          </Provider>
        </main>
    </div>
)

export default Main;