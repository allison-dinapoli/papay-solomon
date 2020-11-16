import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from './components/base';
import ImageViewChapter1 from './pages/ImageViewChapter1';
import PDFViewer from './pages/cv';
import AfricanForTheFirstTimeExhibition from './pages/ExhibitionAFTFT';
import PhoenixArtMuseumExhibition from './pages/Exhibition2018Award';
import './css/base.css';
import News from './pages/InTheNews';
import About from './pages/about';
import HomePageComponent from './pages/homepage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import imageLoadReducer from './reducers/imageLoadReducers';
import { BrowserRouter } from 'react-router-dom';
import { navbarTypes } from './enums/navbarTypes';
import UpcomingEvents from './pages/UpcomingEvents';


const store = createStore(imageLoadReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const HomePageOld = () => (
  <Base content={<About />} doNotIncludeNavBar={true} doNotIncludeContentClassName={true} />
)

const HomePage = () => (
  <Base content={<HomePageComponent />} navbarType={navbarTypes.NO_HEADER} noTopMargin={true} doNotIncludeFooter={true} />
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
                <Route path='/work/:id' component={ImageViewChapter1}/>
                <Route path='/work' component={ImageViewChapter1}/>
                <Route exact path='/exhibitions/2018friendsofcontemporaryartawards' component={PhoenixArtMuseumExhibition} />
                <Route exact path='/exhibitions/africanforthefirsttime' component={AfricanForTheFirstTimeExhibition} />
                <Route path='/about' component={About}/>
                <Route path='/exhibitions' component={PhoenixArtMuseumExhibition}/>
                <Route path='/news' component={News}/>
                <Route path="/upcomingexhibitions" component={UpcomingEvents}/>
                <Route path='/cv' component={PDFViewer}/>
                <Route component={HomePage} />
            </Switch>
            </BrowserRouter>
          </Provider>
        </main>
    </div>
)

export default Main;