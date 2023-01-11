import { Breadcrumb, Card, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { Form, Input } from 'antd';
import { useSelector } from "react-redux"
const { Content } = Layout;

function Profile() {
    return (
        <>

            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <Contentprofile />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}

export default Profile;

function Contentprofile() {

    let { user_data } = useSelector((state) => state.users)


    return (
        <>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Profile Details</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", minHeight: 432, padding:24 }} >
                <Card title="Profile Details" bordered={false}>
                <Form.Item label="Name" >
                        <Input style={{ color: '#0c2e02' }} value={user_data.name}/>
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input style={{ color: '#0c2e02' }} value={user_data.email}/>
                    </Form.Item>
                    <Form.Item label="Password" >
                        <Input style={{ color: '#0c2e02' }} value={user_data.password}/>
                    </Form.Item>
                    </Card>
                   
                </div>
            </Content>
        </>
    )
}

