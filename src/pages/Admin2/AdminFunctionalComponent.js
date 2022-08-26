import { Table, Space, Spin } from "antd";
import Title from "antd/lib/skeleton/Title";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminData } from "../../action/adminAction";
import { columns } from "./columns";

const AdminFunctional = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.getAdminData);
    console.log(data, loading);
    useEffect(() => {
        dispatch(getAdminData());
    }, [dispatch]);
    return (
        <>
            <Title>AdminFunctionalComponent</Title>
            {!loading ? (
                <Table dataSource={data} columns={columns} />
            ) : (
                <Space align="center">
                    <Spin size="large"></Spin>
                </Space>
            )}
        </>
    );
};

export default AdminFunctional;
