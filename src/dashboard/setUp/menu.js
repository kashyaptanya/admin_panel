import { UserOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import logo from './logo.png'
import { LogoutOutlined, ContactsOutlined, PhoneOutlined,LockOutlined,SolutionOutlined, DatabaseOutlined, SlackOutlined, ProfileOutlined, CalendarOutlined, ChromeOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { Typography } from 'antd';
import { Image } from 'antd';
import axios from 'axios';
const { Title } = Typography;
const { Sider } = Layout;

function MenuCom() {

    const navigate = useNavigate()
    let payload = {
        device_id:"6D0FA124-00D2-4217-8730-59F1102F1353",
        admin_id:"6384a9abe84dfb95611d012d"
    }
    const data =async ()=>{
        let result = await axios.post("https://frontlineapi.solidappmaker.ml/api/v1/admin/logout", payload);
        console.log("result", result.data.status)
        if(result.data.status){
            navigate("/")
        }
    }

    return (

        <Sider style={{ background: 'white' }}>
            {/* <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }}  */}
            <div style={{ display: "flex" }}>
                <div style={{ paddingTop: 10, paddingLeft: 10  }} >
                    <Image width={50} src={logo}
                    /></div>
                <div style={{ padding: 20 }}>
                    <Title style={{ color: 'black' }} level={3}>SALESA</Title></div>
            </div>
            <Menu style={{ color: "#0c2e02" }}

                onClick={({ key }) => {
   
                    if (key === "logout") {
                        data()
               
        

                        // setTimeout(() => {
                        //     navigate("/")
                        // }, 1000);
                    }
                    else if (key === "mobile") {
                        navigate("/contact")
                    }
                    else if (key === "landline") {
                        navigate("/contact")
                    }
                    else if (key === "about") {
                        navigate("/about")
                    }
                    else if (key === "term") {
                        navigate("/term")
                    }
                    else if (key === "gallery") {
                        navigate("/gallery")
                    }
                    else if (key === "calender") {
                        navigate("/calender")
                    }
                    else if (key === "list") {
                        navigate("/list")
                    }
                    else if (key === "profile") {
                        navigate("/profile")
                    }
                    else if (key === "data") {
                        navigate("/data")
                    }
                    else if (key === "policy") {
                        navigate("/policy")
                    }
                    else {
                        navigate("/user")
                    }
                }}
                mode="inline"
                items={[
                    {
                        label: "User", key: "/user", icon: <UserOutlined />,
                    },
                    {
                        label: "Profile Details", key: "profile", icon: <ProfileOutlined />,
                    },
                    {
                        label: "Contact us", key: "/contact", icon: <ContactsOutlined />,
                        children: [
                            {
                                label: "Mobile no.", key: "mobile", icon: <PhoneOutlined />
                            },
                            {
                                label: "Landline", key: "landline", icon: <PhoneOutlined />
                            }
                        ]
                    },
                    {
                        label: "About us", key: "about", icon: <ChromeOutlined />
                    },
                    {
                        label: "Gallery", key: "gallery", icon: <SlackOutlined />
                    },
                    {
                        label: "Data", key: "data", icon: <DatabaseOutlined />
                    },
                    {
                        label: "Calender", key: "calender", icon: <CalendarOutlined />
                    },
                    {
                        label: "Data list", key: "list", icon: <SolutionOutlined />
                    },
                    {
                        label: "Terms & Conditions", key: "term", icon: <ExclamationCircleOutlined />
                    },
                    {
                        label: "Privacy & Policy", key: "policy", icon: <LockOutlined />
                    },
                    {
                        label: "Logout", key: "logout", danger: true, icon: <LogoutOutlined />
                    }
                ]}>
            </Menu>
        </Sider>
    )
}
export default MenuCom