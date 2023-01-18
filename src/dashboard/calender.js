import { Calendar } from 'antd';
import { Breadcrumb, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
const { Content } = Layout;
function Calender() {

    return (
        <>
            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <ContentCalender />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}
export default Calender

function ContentCalender() {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <>
            <Content style={{ padding: '0 50px',minWidth:500 }}>
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