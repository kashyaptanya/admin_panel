import { Breadcrumb, Card, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { Form, Input ,Button} from 'antd';
import { useSelector } from "react-redux"
import { useState } from 'react';
import axios from 'axios';
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
    const [pass, setPass] = useState("")

    const edit = ()=>{
      editt("")
    }
  
    const editt = (e)=>{

    }
    const save= async() =>{
        let token = localStorage.getItem("token")
        // let userspassword = localStorage.getItem("users_password")
        const payload = {
            old_password:userspassword,
            new_password :pass
        }

       
        // console.log("payload", payload)
        let result = await axios.post("https://frontlineapi.solidappmaker.ml/api/v1/admin/change_password",payload
         ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("result", result.data.status)
        if(result.data.status===true){
            localStorage.setItem("users_password",pass)
          setPass("")
        }
    }

    // let { user_data } = useSelector((state) => state.users)
    let userData = localStorage.getItem("users_email")
    let userspassword= localStorage.getItem("users_password")
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
                    <Form.Item label="Email" >

                            <Input style={{ color: '#0c2e02' }} value={userData} id="html" />
                            {/* <i class="fa-solid fa-pen-to-square"  htmlFor='html'></i> */}
                            {/* <Button style={{ width: 50 ,background: '#50b996' , color:"#fff" }}  onClick={edit}>edit</Button> */}
                    </Form.Item>
                    <Form.Item label="Password" >
                    <Input style={{ color: '#0c2e02' }} value={userspassword}/>
                    </Form.Item>
                    <Form.Item label=" New Password" >
                    <Input style={{ color: '#0c2e02' }} value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    </Form.Item>
                    <Button style={{ width: 100 ,background: '#50b996' , color:"#fff" }} onClick={save}>save</Button>
                    </Card>
                </div>
            </Content>
        </>
    )
}

