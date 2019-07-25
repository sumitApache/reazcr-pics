import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
    return (
        <div className="ui container" style={{marginTop: '10px' }}>
            <h1>Search Pics</h1>
            <SearchBar />
        </div>
    );
}

export default App;