const Update = () => {
    return (
        <div className="updateContainer">
            <div className="row form-title">
                <div className="field-mobile">
                    <h3>Changing Your Information Will Unverify Your Account And It Can Only Be done Once</h3>
                </div>
            </div>
            <form className="form">
                <div className="row">
                    <div className="field-mobile">
                        <label htmlFor="firstName">First name</label>
                        <br />
                        <input id="firstName" type="text" required/>
                    </div>
                    <div className="field-mobile">
                        <label htmlFor="lastName">Last name</label>
                        <br />
                        <input id="lastName" type="text" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="field-mobile">
                        <label htmlFor="faculty">Faculty</label>
                        <br />
                        <select name="Faculty" id="faculty" required></select>
                    </div>
                    <div className="field-mobile">
                        <label htmlFor="department">Department</label>
                        <br />
                        <select name="Department" id="department" required></select>
                    </div>
                </div>
                <div className="row">
                    <div className="field-mobile">
                        <label htmlFor="level">Level</label>
                        <br />
                        <select name="Level" id="level" required></select>
                    </div>
                    <div className="field-mobile">
                        <label htmlFor="Age">Age</label>
                        <br />
                        <input id="age" type="date" required value="2018-07-22" />
                    </div>
                </div>
                <div className="field-mobile btn ">
                    <button className="updateBtn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Update;