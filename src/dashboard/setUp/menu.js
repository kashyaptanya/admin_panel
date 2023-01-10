import { UserOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { LogoutOutlined, ContactsOutlined, PhoneOutlined, SlackOutlined,ProfileOutlined, CalendarOutlined, ChromeOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { Typography } from 'antd';

const { Title } = Typography;
const { Sider } = Layout;

function MenuCom() {
    
    const navigate = useNavigate()

    return (
        <Sider style={{ background: 'white' }}>
            <Menu style={{ color: "#092b00" }}

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
                    else {
                        navigate("/user")
                    }
                }}
                mode="inline"


                items={[
                    <Title style={{ color: 'black' }} level={1}>SALESA</Title>,
                    
                    {
                        label: "SALESA"  
                    },
                    {
                        label: "User", key: "/user", icon: <UserOutlined />,
                    },
                    {
                        label: "Profile", key: "profile", icon: <ProfileOutlined />,
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