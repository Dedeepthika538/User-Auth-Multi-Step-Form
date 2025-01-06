import React from 'react';

const Review = ({ prevStep, formData, handleSubmit }) => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Review Your Information</h2>
            <div className="card p-4">
                <div className="mb-3">
                    <p><strong>First Name:</strong> {formData.firstname}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Last Name:</strong> {formData.lastname}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Email:</strong> {formData.email}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Profession:</strong> {formData.profession}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Education:</strong> {formData.education}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Date of Birth:</strong> {formData.dob}</p>
                </div>
                <div className="mb-3">
                    <p><strong>Gender:</strong> {formData.gender}</p>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-outline-secondary" onClick={prevStep}>
                    Back
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Review;
