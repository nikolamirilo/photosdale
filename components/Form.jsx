import React from "react";

const Form = () => {
  return (
    <div className="form">
      <h2>Contribute to photosdale</h2>
      <form name="contribute" method="post" enctype="multipart/form-data">
        <input type="hidden" name="form-name" value="contribute" />
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="full-name">
            Full name:
          </label>
          <input type="text" name="full-name" className="form-control" />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label">Email address:</label>
          <input type="email" name="email-address" className="form-control" />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label">Instagram account:</label>
          <input
            type="text"
            name="instagram-account"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-3">
          <label className="form-label">Insert Image: </label> <br />
          <input type="file" accept="image/*" name="image" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Image caption:</label>
          <input type="text" name="image-caption" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4 p-0">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
