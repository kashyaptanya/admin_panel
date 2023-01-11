import { UserOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import logo from './logo.png'
import { LogoutOutlined, ContactsOutlined, PhoneOutlined,DatabaseOutlined, SlackOutlined,ProfileOutlined, CalendarOutlined, ChromeOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { Typography } from 'antd';
import { Image } from 'antd';
const { Title } = Typography;
const { Sider } = Layout;

function MenuCom() {
    
    const navigate = useNavigate()

    return (
        
        <Sider style={{ background: 'white' }}>
 {/* <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }}  */}
 <div style = {{display : "flex"}}> <div style = {{paddingTop :10, paddingLeft : 10}} >
 <Image width={50}src={logo}
  /></div>
            <div style = {{padding :20}}>
           <Title style={{ color: 'black'  }} level={3}>SALESA</Title></div></div>

            <Menu style={{ color: "#0c2e02"  }}

                onClick={({ key }) => {
                    if (key === "logout") {
                        setTimeout(() => {
                            navigate("/")
                        }, 1000);

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
                    else if (key === "profile") {
                        navigate("/profile")
                    }
                    else if (key === "data") {
                        navigate("/data")
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
                        label: "Terms & Conditions", key: "term", icon: <ExclamationCircleOutlined />
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