import React from 'react';

class SearchBar extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" name="first-name" />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;
