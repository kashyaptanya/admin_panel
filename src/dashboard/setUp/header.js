import { Avatar, Layout } from 'antd';
import { useSelector } from "react-redux"
import Style from '../../App.css'
import { Input,Tooltip } from 'antd';
const { Search } = Input;
const { Header } = Layout;

function HeaderCom() {
  let { user_data } = useSelector((state) => state.users)
  return (
    <>
      <Header style={{ background: '#50b996', padding: 22, height: 80 }}>
      {/* <Tooltip title={user_data.email}> */}
           <Avatar className= {Style.thestyle} style={{color: '#50b996' ,fontWeight : 'bold',backgroundColor: '#ffffff',float : 'right' }} >
        {/* {user_data.email[0].toUpperCase()} */}y
    </Avatar>
    {/* </Tooltip> */}
        <Search placeholder="input search text" allowClear style={{ width: 200, }} />
      </Header>
    </>
  )
}

export default HeaderCom