import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setUserData } from '../action/user';
import {  Spin } from 'antd';

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [popup, setPopup] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "", 
        password: ""
    })
    const handlevalue = (e, key) => {
        setUser({ ...user, [key]: e.target.value })
    }

    const handle_button = (e) => {
        e.preventDefault()
        dispatch(setUserData(user))
      
        setPopup(true)


        setTimeout(() => {
            navigate("/user")
        }, "2000")
    }
    // const spin = () => {
    //     <Spin />;
    // }
    // spin()
    return (
        <>   
            {popup ?   
                <div className="toast show ">
                    <div className="toast-body toast_style">
                        Login Successfully
                    </div>
                </div> : null
            }
            {/* <div className="bg_color"> */}
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-6  ">
                            <div className=" bg ">
                                <img src="https://wallpaperaccess.com/full/271965.jpg"></img>
                            </div>
                            {/* <div className="text">
                                <h6 className="">"We have been using untitled to kick start every new project.." </h6><br></br>
                                <span >Lorem John</span><br></br><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>


                            </div> */}

                        </div>
                        <div className="col-md-6 bg-white  postion">
                            <div className="child">
                            <h2 className="color text-center font-effect-shadow-multiple">
                                Welcome back
                            </h2>
                            <p className="text-center">Welcome back ! please enter your details</p>

                            <form className="p-4 " onSubmit={handle_button} >
{/* 
                                <div className="form-group form p-2 mb-3 ">
                                    <input className=" textbox"
                                        required
                                        type="text"
                                        value={user?.name ?? ""}
                                        onChange={(e) => handlevalue(e, 'name')}
                                        placeholder=""
                                    />
                                    <label className="form-label">Name</label>
                                </div> */}
                                <div className="form-group p-2 mb-3  form">

                                    <input className="textbox"
                                        required
                                        type="text"
                                        value={user?.email ?? ""}
                                        onChange={(e) => handlevalue(e, 'email')}
                                        placeholder=""
                                    />
                                    <label className="form-label">Email</label>
                                </div>
                                <div className="form-group p-2 mb-3  form">
                                    <input className="textbox"
                                        required
                                        type="password"
                                        value={user.password}
                                        onChange={(e) => handlevalue(e, 'password')}
                                        placeholder=""
                                    />
                                    <label className="form-label">password</label>
                                </div>
                                <div className="pt-3 text-center">
                                    <button type="submit"
                                        className="rounded-pill">
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
export default Signup