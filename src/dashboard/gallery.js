import { Breadcrumb, Card, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { Image } from 'antd';
const { Content } = Layout;

function Gallery() {

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

export default Gallery;

function Contentgallery() {

    return (
        <>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Gallery</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", padding: 24 }} >
                    <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </div>
                <div style={{ background: "#fff", padding: 24 }} >
                    <Image width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                </div>
                <div style={{ background: "#fff", padding: 24 }} >
                    <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </div>

                <div style={{ background: "#fff", padding: 24 }} >
                    <Image width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                </div>
            </Content>
        </>
    )
}

