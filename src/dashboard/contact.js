import { Breadcrumb, Card, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { Divider, Radio, Table } from 'antd';
import { useState } from 'react';
const { Content } = Layout;

function Contact() {

    return (
        <>
            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <ContentContact />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}

export default Contact;

function ContentContact() {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'CONTACT',
            dataIndex: 'CONTACT',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            CONTACT: '9876543210',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            CONTACT: '9896986767',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            CONTACT: '9876543210',

        },
        {
            key: '1',
            name: 'John Brownc',
            age: 32,
            address: 'New York No. 1 Lake Park',
            CONTACT: '9896986767',
        },
        {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
            CONTACT: '9896986767',
        },
        {
            key: '4',
            name: 'lorem',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
            CONTACT: '9896986767',
        },
        {
            key: '5',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
            CONTACT: '9896986767',
        },
        {
            key: '6',
            name: 'lorem',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
            CONTACT: '9896986767',
        },
    ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <>
            <Content style={{ padding: '0 50px',minWidth:500 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Contact Details</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <Divider />
                    <Table style={{minWidth: 500}}
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </Content>
        </>
    )
}

