import React from 'react'

function Contact() {

  return (
    <div
      className="modal fade"
      id="contactSellerModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">
              Contact with the Seller
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <form>
              <label>Name</label>
              <input
                type="text"
                className="form-control my-2"
                placeholder="Enter your name"
              />

              <label>Email</label>
              <input
                type="email"
                className="form-control my-2"
                placeholder="Enter your email"
              />

              {/* Contact Seller Button */}
              <button
                type="submit"
                className="btn btn-danger w-100 mt-3"
              >
                Contact Seller
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact