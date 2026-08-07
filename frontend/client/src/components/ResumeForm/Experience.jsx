// Experience Component

function Experience({ formData, handleChange }) {

    return (

        <div className="form-section">

            <h2>💼 Work Experience</h2>

            <p className="section-subtitle">
                Add your internship or job experience.
            </p>

            <div className="form-grid">

                {/* Company */}
                <div className="form-group">

                    <label>Company Name</label>

                    <input
                        type="text"
                        name="company"
                        placeholder="Google Pvt. Ltd."
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
                        placeholder="Frontend Developer Intern"
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
                        placeholder="Indore, MP"
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

            </div>

            {/* Description */}
            <div className="form-group">

                <label>Job Description</label>

                <textarea
                    name="jobDescription"
                    rows="5"
                    placeholder="• Developed responsive web applications using React.js&#10;• Collaborated with backend developers&#10;• Fixed bugs and improved UI performance"
                    value={formData.jobDescription}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Experience;