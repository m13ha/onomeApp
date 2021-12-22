import avatar from "../assets/images/UserReg/Beautiful-Black-Woman-2.svg";
import { useState } from "react";

const UserReg = () => {

    const [formType, setFormType] = useState(null);

    const resetForm = () => {
        setFormType(null)
    }

    const loadStudentForm = (e) => {

        setFormType (
            <div className="form-field">
                <button onClick={resetForm} className="closeForm">X</button>
                <div className="row form-title">
                    <div className="field-mobile">
                        <h1>Hi, Am here to help.</h1>
                    </div>
                </div>
                <form className="form" action="" method="post">
                    <div className="row">
                        <div className="field-mobile">
                            <label htmlFor="firstName">First name</label>
                            <br />
                            <input id="firstName" type="text" />
                        </div>
                        <div className="field-mobile">
                            <label htmlFor="lastName">Last name</label>
                            <br />
                            <input id="lastName" type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field-mobile">
                            <label htmlFor="userName">Username</label>
                            <br />
                            <input id="userName" type="text" />
                        </div>
                        <div className="field-mobile">
                            <label htmlFor="password">Password</label>
                            <br />
                            <input id="password" type="password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field-mobile">
                            <label htmlFor="faculty">Faculty</label>
                            <br />
                            <select name="Faculty" id="faculty"></select>
                        </div>
                        <div className="field-mobile">
                            <label htmlFor="department">Department</label>
                            <br />
                            <select name="Department" id="department"></select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="field-mobile">
                            <label htmlFor="level">Level</label>
                            <br />
                            <select name="Level" id="level"></select>
                        </div>
                        <div className="field-mobile">
                            <label htmlFor="Age">Age</label>
                            <br />
                            <input id="age" type="date" />
                        </div>
                    </div>
                    <div className="row check">
                        <div className="field-mobile">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">By checking this box you Agree to our terms of service</label>
                        </div>
                    </div>
                    <div className="field-mobile btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="container fit-screen">
            <div className="field avatar-loca">
                <img src={avatar} alt="" width="100%" height="100%" />
            </div>
            <div className="field">
                {
                    (() => {
                        if (formType === null) {
                            return (
                                <div className="userType">
                                    <button>Professor</button>
                                    <button onClick={loadStudentForm}>Undergraduate</button>
                                    <button>Alumni</button>
                                    <button>Postgraduate</button>
                                    <button>Guest</button>
                                    <button>Business</button>
                                </div>)
                        }else {
                            return formType;
                        }
                    })()
                }
            </div>
        </div>
    );
};

export default UserReg;
