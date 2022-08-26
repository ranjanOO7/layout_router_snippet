import React, { Component } from "react";
import { connect } from "react-redux";
import { getAdminData } from "../../action/adminAction";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getAdminData();
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                Admin
                {/* <h1>{!this.props.data}</h1> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
        data: state.getAdminData,
    };
}

export default connect(mapStateToProps, { getAdminData })(Admin);
