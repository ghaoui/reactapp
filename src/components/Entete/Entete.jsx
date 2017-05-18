import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import s from './Entete.scss';

export default class Entete extends React.Component {
  render() {
    return (
      <header className="">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/commentaire">Commentaire</Link>
        </nav>
      </header>
    );
  }
}
