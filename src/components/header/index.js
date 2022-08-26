import React from "react";
import { Menu, Button, PageHeader, Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
// import AnchorLink from "antd/lib/anchor/AnchorLink";
import { Link, Redirect, withRouter } from "react-router-dom";
// import Title from "antd/lib/skeleton/Title";

const index = () => {
    const items = [
        {
            label: (
                <Link to="/home">
                    {/* <Button type="primary"> */}
                    Home
                    {/* </Button> */}
                </Link>
            ),
            key: "home",
        },
        {
            label: (
                <Button type="primary">
                    <Link to="/admin">Admin</Link>
                </Button>
            ),
            key: "admins",
        },
        {
            label: (
                <Link to="/home">
                    <Button type="primary">Logout</Button>
                </Link>
            ),
            key: "logout",
        },
    ];

    const handleRedirection = (e) => {
        console.log(e);
        <Redirect to="/home" />;
    };

    return (
        // <>
        <Header>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/home">Home 2</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/admin">Admin</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

const index1 = () => {
    return (
        <>
            <button>
                <Link to="/home">Home</Link>
            </button>
            <button>
                <Link to="/admin">Admin</Link>
            </button>
            {/* <button>
                <Link to="/home" />
            </button> */}
        </>
    );
};

export default withRouter(index);
