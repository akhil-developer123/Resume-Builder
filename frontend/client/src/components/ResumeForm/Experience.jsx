// Experience Component

function Experience({ formData, handleChange }) {

    return (

        <div className="form-section">

            {/* Section Heading */}
            <h2>Experience</h2>

            {/* Company Name */}
            <div className="form-group">

                <label>Company Name</label>

                <input
                    type="text"
                    name="company"
                    placeholder="Enter Company Name"
                    value={formData.company}
                    onChange={handleChange}
                />

            </div>

            {/* Job Title */}
            <div className="form-group">

                <label>Job Title</label>

                <input
                    type="text"
                    name="jobTitle"
                    placeholder="Enter Job Title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                />

            </div>

            {/* Location */}
            <div className="form-group">

                <label>Location</label>

                <input
                    type="text"
                    name="jobLocation"
                    placeholder="Enter Job Location"
                    value={formData.jobLocation}
                    onChange={handleChange}
                />

            </div>

            {/* Start Date */}
            <div className="form-group">

                <label>Start Date</label>

                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />

            </div>

            {/* End Date */}
            <div className="form-group">

                <label>End Date</label>

                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />

            </div>

            {/* Job Description */}
            <div className="form-group">

                <label>Job Description</label>

                <textarea
                    name="jobDescription"
                    rows="5"
                    placeholder="Describe your work..."
                    value={formData.jobDescription}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Experience;