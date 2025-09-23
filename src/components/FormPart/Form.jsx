import { useState } from "react";
import "./Form.css";
import calculator_img from "../../assets/calculator-image.png";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully ✅");
      console.log("Form Data:", formData);

      // Reset
      setFormData({
        name: "",
        email: "",
        subject: "",
        reason: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="background_img">
      <div className="overlay">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            {/* Left Image */}
            <div className="col-lg-6 d-none d-md-block text-center">
              <img
                src={calculator_img}
                alt="calculator"
                className="img-fluid lady-img"
              />
            </div>

            {/* Right Form */}
            <div className="col-lg-6 form-page">
              <h5 className="text-orange">YOUR FREEDOM</h5>
              <h1>Get a Financial Plan</h1>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  {/* Name */}
                  <div className="col-md-6 mb-3">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter name"
                    />
                    {errors.name && (
                      <small className="text-danger">{errors.name}</small>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="col-12 mb-3">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-control ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      placeholder="Enter subject"
                    />
                    {errors.subject && (
                      <small className="text-danger">{errors.subject}</small>
                    )}
                  </div>

                  {/* Reason */}
                  <div className="col-12 mb-3">
                    <label>Your Reason</label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className={`form-select ${
                        errors.reason ? "is-invalid" : ""
                      }`}
                    >
                      <option value="">Choose an Option</option>
                      <option>Online Banking</option>
                      <option>Financial Control</option>
                      <option>Yearly Profit</option>
                      <option>Crypto Investment</option>
                    </select>
                    {errors.reason && (
                      <small className="text-danger">{errors.reason}</small>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-orange">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
