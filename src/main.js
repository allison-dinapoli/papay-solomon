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
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/chapter1/:id' component={ImageViewChapter1}/>
                <Route path='/chapter1' component={ImageViewChapter1}/>
                <Route path='/about' component={HomePage}/>
                <Route path='/exhibitions' component={Exhibitions}/>
                <Route path='/news' component={News}/>
                <Route path='/cv' component={PDFViewer}/>
                <Route component={HomePage} />
            </Switch>
        </main>
    </div>
)

export default Main;