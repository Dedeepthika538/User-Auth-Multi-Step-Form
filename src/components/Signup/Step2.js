import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep, setFormData, formData }) => {
    const [email, setEmail] = useState(formData.email || '');
    const [password, setPassword] = useState(formData.password || '');

    const handleNext = (e) => {
        e.preventDefault();
        // Update formData correctly by merging with existing formData
        setFormData({ ...formData, email, password });
        nextStep();
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Signup - Step 2</h3>
            <form onSubmit={handleNext} className="p-4 border rounded shadow">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={prevStep}
                    >
                        Back
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step2;
