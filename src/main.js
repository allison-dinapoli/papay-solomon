import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from './components/base';
import ImageView from './components/ImageView';
import Gallery from './components/gallery';
import PDFViewer from './components/cv';
import Sculptures from './components/sculptures';
import ImageViewSculptures from './components/ImageViewSculptures';
import './components/base.css';
import News from './components/news';
import About from './components/about';


const HomePage = () => (
  <Base content={<About />} doNotIncludeContentClassName={true} useLightNavbar={true} />
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
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/paintings/:id' component={ImageView}/>
                <Route path='/paintings' component={Gallery}/>
                <Route path='/sculptures/:id' component={ImageViewSculptures}/>
                <Route path='/sculptures' component={Sculptures}/>
                <Route path='/about' component={HomePage}/>
                <Route path='/news' component={News}/>
                <Route path='/cv' component={PDFViewer}/>
                <Route component={HomePage} />
            </Switch>
        </main>
    </div>
)

export default Main;