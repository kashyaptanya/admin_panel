import { Breadcrumb, Card, Layout,Button } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
const { TextArea } = Input;
const { Content } = Layout;

function Term() {

    return (
        <>
            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <Contentterm />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}

export default Term;

function Contentterm() {
    const[value,setvalue]= useState("")
 
    const getdata= async()=>{
        let apiHit = await axios.get("https://frontlineapi.solidappmaker.ml/api/v1/admin_setting/get_terms_and_condition")
       console.log("api",apiHit.data.data.terms_and_condition)
       setvalue(apiHit.data.data.terms_and_condition)
       if (apiHit.data.status===true){
        localStorage.setItem("terms",apiHit.data.data.terms_and_condition)

       }
    }  
    const update= async()=>{
        let token = localStorage.getItem("token")
        let policy = localStorage.getItem("policy")
        let terms  = localStorage.getItem("terms")
        const payload = {
            privacy_policy:policy,
            terms_and_condition: value

        }

        let result = await axios.post("https://frontlineapi.solidappmaker.ml/api/v1/admin_setting/update_common_settings",payload
        ,{
           headers:{
               Authorization: `Bearer ${token}`
           }
       });
        
    }
    // const update=()=>{

    // }

    useEffect(()=>{
getdata()
    },[])
    return (
        <>
            <Content style={{ padding: '0 50px' ,minWidth:500}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Term</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content" style={{ background: "#fff", padding: 24, minHeight: 430 }}>
                
                    <Card title="Terms & Conditions" bordered={false}>
                    <TextArea  style ={{height:200 , background:"rgba(206, 204, 204, 0.986)"}}rows={4} value={value}  onChange={(e) =>setvalue(e.target.value)}/>
                 
                   <Button style={{ width: 100 ,background: '#50b996' , color:"#fff" ,marginTop:10 }} onClick={update}>Update</Button>
                    </Card>
                </div>
            </Content>
        </>
    )
}

