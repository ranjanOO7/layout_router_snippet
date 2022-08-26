export const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        sorter: (record1, record2) => {
            return record1.id + record2.id;
        },
    },
    {
        title: "First Name",
        dataIndex: "first_name",
        key: "first_name",
        sorter: (record1, record2) => {
            return record1.first_name.localeCompare(record2.first_name);
        },
    },
    {
        title: "Last Name",
        dataIndex: "last_name",
        key: "last_name",
        sorter: (record1, record2) => {
            return record1.last_name.localeCompare(record2.last_name);
        },
    },

    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        sorter: (record1, record2) => {
            return record1.email.localeCompare(record2.email);
        },
    },
];
