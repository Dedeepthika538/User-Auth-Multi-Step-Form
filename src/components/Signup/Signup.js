import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Review from './Review'; // Import the new Review component
import { useNavigate } from 'react-router-dom'; // For navigation

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        profession: '',
        education: '',
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Signup successful!');
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    dob: '',
                    gender: '',
                    profession: '',
                    education: '',
                });
                navigate('/login');
            } else {
                alert(data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 nextStep={nextStep} setFormData={setFormData} formData={formData} />;
            case 2:
                return <Step2 nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} formData={formData} />;
            case 3:
                return <Step3 nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} formData={formData} />;
            case 4:
                return <Review prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">User Registration - Step {step} of 4</h2>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${(step / 4) * 100}%` }}
                                    aria-valuenow={step}
                                    aria-valuemin="1"
                                    aria-valuemax="4"
                                >
                                    Step {step}
                                </div>
                            </div>
                            {renderStep()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
