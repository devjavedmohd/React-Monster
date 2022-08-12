import { Component } from "react";

class SearchBox extends Component {
    render() {
        // const {onSearchChange} = this.props
        return (            
            <input 
                className='search-box' 
                type='serach' 
                placeholder='Type to search for monster'
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox;