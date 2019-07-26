import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component {

    constructor(props) {
        super(props);        
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit (value) {
        console.log(value);
        //get unplash images from api
    }


    render () {
        return (
            <div className="ui container" style={{marginTop: '10px' }}>
                <SearchBar onSubmit={this.onFormSubmit} />
            </div>
        );
    } 
}



export default App;