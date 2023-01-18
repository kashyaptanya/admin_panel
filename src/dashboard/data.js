import { Breadcrumb, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const { Content } = Layout;

function Data() {

    return (
        <>

            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <Contentdata />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}

export default Data;

function Contentdata() {
    return (
        <>
            <Content style={{ padding: '0 50px',minWidth:500 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Data</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", minHeight: 432, padding: 24 }}>
                    <Row gutter={16} >
                        <Col span={12} >
                            <Card bordered={false} style={{ background: '#924b74'}}>
                                <Statistic
                                    title="Active"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{
                                        color: '#fff',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card bordered={false} style={{ background: '#4e5599' }}>
                                <Statistic
                                    title="Idle"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{
                                        color: '#fff',
                                    }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                    </Row></div>
            </Content>
        </>
    )
}

