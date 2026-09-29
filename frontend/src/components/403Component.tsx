import React from 'react';

type 403ComponentProps = {
    data?: Record<string, any>;
};

export const 403Component: React.FC<403ComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div className="container">
                <h1>403 - Forbidden</h1>
                <p>Sorry, you do not have permission to access this page.</p>
            </div>
            </div>
        </div>
    );
};

export default 403Component;
