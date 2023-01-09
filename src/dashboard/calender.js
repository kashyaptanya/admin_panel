import { Calendar } from 'antd';
import { Breadcrumb, Card, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { Image } from 'antd';
const { Content } = Layout;
function Calender() {

    return (
        <>

            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <ContentCallender />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}
export default Calender

function ContentCallender() {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Calender</Breadcrumb.Item>
                </Breadcrumb>

                <Calendar onPanelChange={onPanelChange} />
            </Content>
        </>
    )
}