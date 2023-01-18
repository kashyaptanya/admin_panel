import { Breadcrumb, Layout } from 'antd';
import Header from './setUp/header';
import Footer from './setUp/footer';
import Menu from './setUp/menu';
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
const { Column, ColumnGroup } = Table;
const { Content } = Layout;

function Datalist() {

    return (
        <>

            <Layout>
                <Menu />
                <Layout>
                    <Header />
                    <Contentdatalist />
                    <Footer />
                </Layout>
            </Layout>
        </>
    )
}

export default Datalist;

function Contentdatalist() {
    const [data, setData] = useState([])
    const getdata = async () => {
        let token = localStorage.getItem("token")
        let result = await axios.get("https://frontlineapi.solidappmaker.ml/api/v1/vehicle_repair_category/get_all_vehicle_category_admin"
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        console.log("result", result.data.data)
        setData(result.data.data)
    }

    useEffect(() => {
        getdata()
    }, [])
const deleteItem =async(id)=>{
    console.log("id",id._id)
    let idmain = id._id
    let token = localStorage.getItem("token")
        let result = await axios.delete(`https://frontlineapi.solidappmaker.ml/api/v1/vehicle_repair_category/delete_vehicle_category/${idmain}`
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("result",result)
            if (result.data.status=== true){
                getdata()
            }
}

      
    return (
        <>
            <Content style={{ padding: '0 50px', minWidth: 500 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Salesa</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>Data list</Breadcrumb.Item>
                </Breadcrumb>
                <div  style={{background: "#fff",height:420, padding:24}}>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Last</th> */}
                            <th scope="col">Trash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((element) => {
                                return(
                                    <tr >
                                    <td>{element._id}</td>
                                    <td>{element.category_name}</td>
                                    <td><i class="fa-solid fa-trash text-danger"  onClick={(id) => deleteItem(element)}></i></td>
                                    {/* <td><button type="button" className="btn btn-danger but"onClick={(id) => deleteItem(element)} >Delete</button></td> */}

                                </tr>
                                )      
                            })
                        }
                    </tbody>
                </table>
                </div>
              

                {/* <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />

    <Column
      title="Action"
      key="action"
      render={(_, record) => (
          <a>Delete</a>
      )}
    />
    
  </Table>
   */}
            </Content>
        </>
    )
}

