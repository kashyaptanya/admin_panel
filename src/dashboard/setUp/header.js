
import { UserOutlined } from '@ant-design/icons';
import {  Avatar, Layout } from 'antd';
import pic from './pic.png'
import { Input} from 'antd';
import { Image } from 'antd';
const { Search } = Input;

const { Header} = Layout;

 
 function HeaderCom() {
   
    return (
        <>

            <Header style={{ background: 'aquamarine', padding: 22 , height:80}}>
            <Avatar style={{ float: 'right' }}
      src={
        <Image src={pic} style={{width: 32, }}/>
      }
    />
                {/* <Avatar style={{ float: 'right' }} icon={<UserOutlined />} /> */}
                <Search  placeholder="input search text" allowClear style={{ width: 200,}} />
            </Header>
        </>
    )
}

export default HeaderCom