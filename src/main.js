import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Base from './components/base';
import ImageView from './components/ImageView';
import Gallery from './components/gallery';

const HomePage = () => (
  <Base content={<div>
    <h2> Welcome! </h2>
    <Link to='/gallery'>Gallery</Link>
</div>} />
)

const Main = () => (
    <div>
        <main>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/gallery/:id' component={ImageView}/>
                <Route path='/gallery' component={Gallery}/>}/>
                <Route path='/about' component={HomePage}/>
                <Route path='/news' component={HomePage}/>
            </Switch>
        </main>
    </div>
)

export default Main;