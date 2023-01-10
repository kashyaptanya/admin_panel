import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Image from '../componenets/pic.png'
import { useDispatch } from 'react-redux';
import {setUserData} from '../action/user';

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

    return (
        <>
            {popup ?
                <div className="toast show ">
                    <div className="toast-body toast_style">
                        sign up successfully
                    </div>
                </div> : null
            }
            <div className="bg_color">
                <div className="container">
                    <div className="row p-5 ">
                        <div className="col-md-4 bg p-5 rounded  ">
                            <h2 className="pt-5"> Welcome back!</h2>
                            <p>login with your personal info..</p>
                            <div className='image'>
                            <img src={Image}></img>
                            </div>
                        </div>
                        <div className="col-md-8 bg-white p-5 rounded postion">
                            <h2 className="color text-center">
                                Create Account
                            </h2>
                            <i class="fa-brands fa-facebook rotate"></i>
                            <i class="fa-brands fa-github rotate2"></i>
                            <i class="fa-brands fa-linkedin rotate3"></i>
                            {/* <p className="rotate">login with your personal info..</p> */}
                            <form className="p-5" onSubmit={handle_button} >
                                
                                <div className="form-group p-2 text-secondary">
                                    <input className="form-control "
                                        required
                                        type="text"
                                        value={user?.name ?? ""}
                                        onChange={(e) => handlevalue(e, 'name')}
                                        placeholder="Type your Username"
                                    />
                                </div>
                                <div className="form-group p-2 text-secondary">

                                    <input className="form-control"
                                        required
                                        type="email"
                                        value={user?.email ?? ""}
                                        onChange={(e) => handlevalue(e, 'email')}
                                        placeholder="Type your Email"
                                    />
                                </div>
                                <div className="form-group p-2 text-secondary">
                                    <input className="form-control"
                                        required
                                        type="password"
                                        value={user.password}
                                        onChange={(e) => handlevalue(e, 'password')}
                                        placeholder="Type your Password"
                                    />
                                </div>
                                <div className="pt-5 text-center">
                                    <button type="submit"
                                        className="rounded-pill">
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup