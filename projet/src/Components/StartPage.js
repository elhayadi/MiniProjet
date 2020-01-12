
import React, { Component } from 'react';
import "../App.css"
import { CardDeck } from 'reactstrap'
export default class StartPage extends Component {
    componentWillMount() {
        this.props.Disactivate();
    }
    render() {

        return (

            <CardDeck style={{ margin: '100px', textAlign: 'center' }} >
                <div className='space' onClick={() => window.location = '/student'}>Etudiant</div>
                <div className='space' onClick={() => window.location = '/professor'} >Professeur</div>
                <div className='space' onClick={() => window.location = '/admin'} >Administrateur</div>
            </CardDeck>

        );
    }
}
