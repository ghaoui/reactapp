import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Entete from '../Entete/Entete.jsx';
export default class Commentaire extends React.Component{

  render() {
    return (
      <section>
        <Entete />
        <h1>Vous etes dans Commentaire</h1>
      </section>
    );
  }

};
