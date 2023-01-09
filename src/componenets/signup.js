import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Image from '../componenets/pic.png'

function Signup() {
    const navigate = useNavigate()
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
        setPopup(true)

        setTimeout(() => {
            navigate("/user")
        }, "3000")

    }

    return (
        <>
            {popup ?
                <div class="toast show">
                    <div class="toast-body">
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
                            <img src={Image}></img>
                        </div>
                        <div className="col-md-8 bg-white p-5 rounded">
                            <h2 className="color text-center">
                                Create Account
                            </h2>
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
                                <div className="button pt-5 text-center">
                                    <button type="submit"
                                        className="bg_button  rounded-pill">
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