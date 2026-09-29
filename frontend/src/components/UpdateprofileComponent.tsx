import React, { useState } from 'react';

type UpdateprofileComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const UpdateprofileComponent: React.FC<UpdateprofileComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'parameterName': '',
        'userid': '',
        'username': '',
        'email ': '',
        'password': '',
        'address': '',
    });
    const { _csrf, address, email, userid, username } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="auth-card-container">
            <div className="modern-card auth-card">
                <br>
        <div className="container">
            <div className="col-sm-6">
                <h3 style="margin-top: 10px">User Profile</h3>
                <br>
                <form onSubmit={handleSubmit} action="updateuser" method="post">
                    <input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
                    <div className="form-group">
                        <label htmlFor="firstName">User Name</label>
                        <input type="hidden" name="userid" value={userid } />
                        <input type="text" name="username" id="firstName" required placeholder="Your Username*" value={username } required className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control form-control-lg" required minlength="6" placeholder="Email*" value={email } required name="email" id="email" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control form-control-lg" placeholder="Leave blank to keep existing password" name="password" id="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Address">Address</label>
                        <textarea className="form-control form-control-lg" rows="3" placeholder="Enter Your Address" name="address">{address }</textarea>
                    </div>
        
                    <input type="submit" value="Update Profile" className="btn btn-primary btn-block" /><br>
                    
                </form>
            </div>
        </div>
        
        
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            </div>
        </div>
    );
};

export default UpdateprofileComponent;
