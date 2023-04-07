import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setUserData } from '../action/user';
import axios from "axios";

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [popup, setPopup] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handlevalue = (e, key) => {
        setUser({ ...user, [key]: e.target.value })
    }

    const handle_button = async (e) => {
        console.log("user", user)
        const passwordObj = {
            password: user.password
        }
        const email = {
            email :user.email
        }
      
        e.preventDefault()
        localStorage.removeItem("users_OTP")
        let payload = {
            email: user.email,
            password: user.password,
            fcm_token: "fcm_5000",
            device_id: "device_1234",
            os: "android"
        }
        // let result = await axios.post("https://frontlineapi.solidappmaker.ml/api/v1/admin/login", payload);
        // console.log("result", result.data)
        // dispatch(setUserData(user))
        setPopup(true)
       
        // if (result.data.status === true) {
            // localStorage.setItem("users_email", email.email)
            // localStorage.setItem("users_password", passwordObj.password)
            // localStorage.setItem("token",result.data.data.token)
            setTimeout(() => {
                navigate("/user")
            }, "2000")
        // }
    }

    return (
        <>
            {popup ?
                <div className="toast show ">
                    <div className="toast-body toast_style">
                        Login Successfully
                    </div>
                </div> : null
            }
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-6  ">
                        <div className=" bg ">
                            <img src="https://wallpaperaccess.com/full/271965.jpg"></img>
                        </div>
                    </div>
                    <div className="col-md-6 bg-white ">
                        <div className="postion">
                            <div className="child">
                                <h2 className="color text-center font-effect-shadow-multiple">
                                    Welcome back
                                </h2>
                                <p className="text-center">Welcome back ! please enter your details</p>
                                <form className="p-2 " onSubmit={handle_button} >
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
                                <div className="text-center ">
                                    <Link className="link" to="/ForgotPassword">Forgot Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup