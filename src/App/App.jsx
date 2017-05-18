import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {Router, Route, Link, hashHistory} from 'react-router';
import Accueil from '../components/Accueil/Accueil.jsx';
import Commentaire from '../components/Commentaire/Commentaire.jsx';

export default class App extends React.Component{




  render (){
    return (
      <section>

        <Router history={hashHistory}>
          <Route path="/" component={Accueil} />
          <Route path="/commentaire" component={Commentaire} />
          <Route path="*" component={Accueil} />
        </Router>
      </section>
    );
  }
}
