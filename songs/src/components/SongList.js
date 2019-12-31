import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
}

const mapStateToProps = state => {
    // This shows up as props inside our Component
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
