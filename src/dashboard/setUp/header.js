import { Avatar, Layout } from 'antd';
import { useSelector } from "react-redux"
import { Input } from 'antd';

const { Search } = Input;
const { Header } = Layout;

function HeaderCom() {
  let { user_data } = useSelector((state) => state.users)
  return (
    <>
      <Header style={{ background: 'aquamarine', padding: 22, height: 80 }}>
        {/* <Avatar style={{ float: 'right' }}
          src={ <Image src={pic} style={{ width: 32, }} />}/> */}
           <Avatar style={{color: '#50b996',backgroundColor: '#ffffff',float : 'right' }} >
        {user_data.email[0].toUpperCase()}
    </Avatar>

        <Search placeholder="input search text" allowClear style={{ width: 200, }} />
      </Header>
    </>
  )
}

export default HeaderCom