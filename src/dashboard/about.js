import { Breadcrumb, Card, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
const { Content } = Layout;

function About() {

    return (
        <>
            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <Contentgallery />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}

export default About;

function Contentgallery() {

    return (
        <>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>About</Breadcrumb.Item>
                </Breadcrumb>

                <div className="site-layout-content" style={{ background: "#fff", padding: 24, minHeight: 450 }}>
                    <Card title="About us" bordered={false}>
                        <p>   Every business has a story to tell. Even if you’re running a startup with a brief history, you’ll want to share your company’s progress. Talk about how you got to where you are today on your about page.
                        </p>
                        <span style={{ fontWeight: "bold" }}>
                            Pro tip : </span>
                        Isolate the milestones before your company’s founding, and use them to give readers some backstory on your current venture.
                    </Card>
                </div>
            </Content>
        </>
    )
}

