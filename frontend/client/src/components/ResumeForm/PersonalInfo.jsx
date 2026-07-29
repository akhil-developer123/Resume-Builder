// Personal Information Component

function PersonalInfo({ formData, handleChange }) {

    return (

        <div className="form-section">

            {/* Section Heading */}
            <h2>Personal Information</h2>

            {/* Full Name */}
            <div className="form-group">

                <label>Full Name</label>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

            </div>

            {/* Email */}
            <div className="form-group">

                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />

            </div>

            {/* Phone */}
            <div className="form-group">

                <label>Phone Number</label>

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />

            </div>

            {/* Address */}
            <div className="form-group">

                <label>Address</label>

                <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    value={formData.address}
                    onChange={handleChange}
                />

            </div>

            {/* Career Objective */}
            <div className="form-group">

                <label>Career Objective</label>

                <textarea
                    name="objective"
                    rows="5"
                    placeholder="Write Your Career Objective"
                    value={formData.objective}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default PersonalInfo;