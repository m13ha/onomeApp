const UserReg = () => {
    return (
        <div className="container fit-screen">
            <div className="form-field">
                <form className="form" action="" method="post">
                    <div className="row">
                        <div className="field">
                            <label htmlFor="firstName">First name</label>
                            <input id="firstName" type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="lastName">Last name</label>
                            <input id="lastName" type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="userName">Username</label>
                            <input id="userName" type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="faculty">Faculty</label>
                            <select name="Faculty" id="faculty"></select>
                        </div>
                        <div className="field">
                            <label htmlFor="department">Department</label>
                            <select name="Department" id="department"></select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="level">Level</label>
                            <select name="Level" id="level"></select>
                        </div>
                        <div className="field">
                            <label htmlFor="Age">Age</label>
                            <input id="age" type="date" />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="field btn">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReg;
