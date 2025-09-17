import "./Form.css";
import calculator_img from "../../assets/calculator-image.png";

function Form() {
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

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label>Your Reason</label>
                    <select className="form-select">
                      <option>Choose an Option</option>
                      <option>Online Banking</option>
                      <option>Financial Control</option>
                      <option>Yearly Profit</option>
                      <option>Crypto Investment</option>
                    </select>
                  </div>
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
