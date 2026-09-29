import React, { useState } from 'react';

type AdminloginComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AdminloginComponent: React.FC<AdminloginComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'parameterName': '',
        'username': '',
        'password': '',
    });
    const { _csrf, msg } = data;

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
                <div className="login-container p-4">
            <div className="jumbotron border p-4">
                <h2 className="text-center">Admin Login</h2>
                <form onSubmit={handleSubmit} action="/admin/loginvalidate" method="post">
                    <input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" name="username" id="username" placeholder="Admin username" required className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-lock"></i></span>
                            </div>
                            <input type="password" className="form-control form-control-lg" placeholder="Admin Password" required name="password" id="password" />
                        </div>
                    </div>
                    <input type="submit" value="Login" className="btn btn-primary btn-block mt-4" />
                    <h3 className="text-center text-danger mt-3">{msg}</h3>
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

export default AdminloginComponent;
