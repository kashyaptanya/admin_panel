import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function ResetPassword() {

    const [popup, setPopup] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        pass: "",
        password: ""
    })
    const handlevalue = (e, key) => {
        setUser({ ...user, [key]: e.target.value })
    }

    const handle_button = async(e) => {
        e.preventDefault()
        let userData= localStorage.getItem("users_email")
        let userotp= localStorage.getItem("users_OTP")

        let payload = {
            otp : userotp,
            email: userData,
            password:user.password
        }
       
        if (user.password === user.pass) {
            let result = await axios.post("https://frontlineapi.solidappmaker.ml/api/v1/admin/reset_password",payload);
         console.log("result",result.data.status)
            if(result.data.status==true){
                localStorage.removeItem("users_OTP")
                navigate("/")
            }
            else{
                return
            }
           
        }
        else {
            setPopup(true)
            setTimeout(() => {
                setPopup(false)
            }, "2000")
        }
    }

    return (
        <>
            {popup ?
                <div className="toast show ">
                    <div className="toast-body toast_style">
                        Your password and confirmation password do not match.
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
                                    Reset Password
                                </h2>
                                <p className="text-center">Please create a new password </p>
                                <form className="p-2 " onSubmit={handle_button} >
                                    <div className="form-group p-2 mb-3  form">
                                        <input className="textbox"
                                            required
                                            type="text"
                                            value={user?.pass ?? ""}
                                            onChange={(e) => handlevalue(e, 'pass')}
                                            placeholder=""
                                        />
                                        <label className="form-label">Password</label>
                                    </div>
                                    <div className="form-group p-2 mb-3  form">
                                        <input className="textbox"
                                            required
                                            type="password"
                                            value={user.password}
                                            onChange={(e) => handlevalue(e, 'password')}
                                            placeholder=""
                                        />
                                        <label className="form-label">Confirm password</label>
                                    </div>
                                    <div className="pt-3 text-center">
                                        <button type="submit"
                                            className="rounded-pill">
                                            Next
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetPassword