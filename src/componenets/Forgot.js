import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setUserData } from '../action/user';

function ForgotPassword() {

    const [popup, setPopup] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: ""
    })
    const handlevalue = (e, key) => {
        setUser({ ...user, [key]: e.target.value })
    }

    const handle_button = (e) => {
        e.preventDefault()
        dispatch(setUserData(user))
        setPopup(true)
        setTimeout(() => {
            navigate("/Verify")
        }, "2000")
    }

    return (
        <>
            {popup ?
                <div className="toast show ">
                    <div className="toast-body toast_style">
                        Processing....!
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
                                    Forgot Password
                                </h2>
                                <p className="text-center">Enter the email associated with your account</p>
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
export default ForgotPassword