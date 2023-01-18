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
    const [file, setFile] = useState("");
    const [imgShoUrl, setImgShoUrl] = useState("")

    const sendimg = (e) => {
        let  fileimg = e.target.files[0]
        if (fileimg) {

          setFile(fileimg)
          setImgShoUrl(URL.createObjectURL(fileimg ))
        }
      }
      console.log("img",imgShoUrl)
      const handle = async(e)=>{
        let token = localStorage.getItem("token")
        var formData = new FormData();
        formData.append("admin_profile", file);
        let apiHit = await axios.post("https://frontlineapi.solidappmaker.ml/api/v1/admin/add_profile_pic", formData
        ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        
        )
       console.log("api",apiHit)
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
            <Content style={{ padding: '0 50px' ,minWidth:500}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Profile Details</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", minHeight: 432, padding:24 }} >
                <Card title="Profile Details" bordered={false}>
                  
                <div className='right '>
                      <label className='label' htmlFor='file'>choose Profile : </label>
                      <input
                        style={{ display: "none" }}
                        type="file"
                        id='file'
                        onChange={sendimg}
                      />
                      
                      <div><img style={{ height: 100}} src={imgShoUrl}></img></div>
                      <div > <button onClick={handle} style={{ width: 100 ,background: '#50b996' , color:"#fff" }}
                        className="btn btn-outline-secondary"
                      >save</button></div>
                     
                      
                      </div><br></br>
                    <Form.Item label="Email" >
            <Input style={{ color: '#0c2e02' }} value={userData} id="html" />
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

