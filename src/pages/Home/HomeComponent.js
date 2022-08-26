import React from "react";
import { Table } from "antd";
import { data } from "./data";
import { columns } from "./columns";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Table dataSource={data} columns={columns} bordered={true} />
        </>
    );
};

export default Home;
