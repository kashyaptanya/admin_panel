import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Verify() {
    const [popup, setPopup] = useState(false)
    const navigate = useNavigate()
    const [OTP, setOTP] = useState({
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
    })
   
    const handlevalue = (e, key) => {
        setOTP({ ...OTP, [key]: e.target.value })
    }
   
    const handle_button = async(e) => {
        e.preventDefault()
        const otp = {
            otp:OTP.otp1 + OTP.otp2 + OTP.otp3 + OTP.otp4
        }
        localStorage.setItem("users_OTP", otp.otp)
       let userData= localStorage.getItem("users_email")
    
       
        let payload = {
            otp : parseInt(OTP.otp1 + OTP.otp2 + OTP.otp3 + OTP.otp4),
            email: userData
        }
        console.log("payload",payload)
        let result = await axios.post("https://frontlineapi.solidappmaker.ml/api/v1/admin/verify_otp",payload);
        console.log("result",result.data.status)
       
        if(result.data.status==true){
            setPopup(true)
 setTimeout(() => {
    navigate("/ResetPassword")
 },2000);         
            
        }
      
    }

    return (
        <>
            {popup ?
                <div className="toast show ">
                    <div className="toast-body toast_style">
                        To reset password OTP sent on your email address!!
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
                                    Verification
                                </h2>
                                <p className="text-center">Please enter the 4-digit verification code sent on your  email ID</p>
                                <form className="p-2 " onSubmit={handle_button} >
                                    <div className="form-group p-2 mb-3  form">
                                        <div className="row">
                                            <div className="col-md-3 ">
                                                <input className=" form-control text-center"
                                                    placeholder="*"
                                                    required
                                                    onChange={(e) => handlevalue(e, 'otp1')}
                                                    value={OTP.otp1}></input>
                                            </div>
                                            <div className="col-md-3">
                                                <input className=" form-control text-center"
                                                    placeholder="*"
                                                    required
                                                    onChange={(e) => handlevalue(e, 'otp2')}
                                                    value={OTP.otp2}></input>
                                            </div>
                                            <div className="col-md-3">
                                                <input className=" form-control text-center"
                                                    placeholder="*"
                                                    required
                                                    onChange={(e) => handlevalue(e, 'otp3')}
                                                    value={OTP.otp3}></input>
                                            </div>
                                            <div className="col-md-3">
                                                <input className=" form-control text-center"
                                                    placeholder="*"
                                                    required
                                                    onChange={(e) => handlevalue(e, 'otp4')}
                                                    value={OTP.otp4}>
                                                </input>
                                            </div>
                                        </div>
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
export default Verify