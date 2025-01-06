import React, { useState } from 'react';

const Step3 = ({ prevStep, setFormData, formData, nextStep }) => {
    const [dob, setDob] = useState(formData.dob || '');
    const [gender, setGender] = useState(formData.gender || '');
    const [profession, setProfession] = useState(formData.profession || '');
    const [education, setEducation] = useState(formData.education || '');

    const handleNext = (e) => {
        e.preventDefault();
        // Update formData correctly by merging with existing formData
        setFormData({ ...formData, dob, gender, profession, education });
        nextStep();
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Signup - Step 3</h3>
            <form onSubmit={handleNext} className="p-4 border rounded shadow">
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select
                        className="form-select"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="profession" className="form-label">Profession</label>
                    <input
                        type="text"
                        className="form-control"
                        id="profession"
                        placeholder="Enter your profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="education" className="form-label">Education</label>
                    <input
                        type="text"
                        className="form-control"
                        id="education"
                        placeholder="Enter your education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
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

export default Step3;
