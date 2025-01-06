import React, { useState } from 'react';

const Step1 = ({ nextStep, setFormData, formData }) => {
    const [firstname, setFirstname] = useState(formData.firstname || '');
    const [lastname, setLastname] = useState(formData.lastname || '');

    const handleNext = (e) => {
        e.preventDefault();
        // Update formData correctly by merging with existing formData
        setFormData({ ...formData, firstname, lastname });
        nextStep();
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Signup - Step 1</h3>
            <form onSubmit={handleNext} className="p-4 border rounded shadow">
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="Enter your first name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="Enter your last name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step1;
