// Education Component

function Education({ formData, handleChange }) {

    return (

        <div className="form-section">

            {/* Section Heading */}
            <h2>Education</h2>

            {/* College Name */}
            <div className="form-group">

                <label>College Name</label>

                <input
                    type="text"
                    name="college"
                    placeholder="Enter College Name"
                    value={formData.college}
                    onChange={handleChange}
                />

            </div>

            {/* Degree */}
            <div className="form-group">

                <label>Degree</label>

                <input
                    type="text"
                    name="degree"
                    placeholder="Enter Degree"
                    value={formData.degree}
                    onChange={handleChange}
                />

            </div>

            {/* Branch */}
            <div className="form-group">

                <label>Branch</label>

                <input
                    type="text"
                    name="branch"
                    placeholder="Enter Branch"
                    value={formData.branch}
                    onChange={handleChange}
                />

            </div>

            {/* University */}
            <div className="form-group">

                <label>University</label>

                <input
                    type="text"
                    name="university"
                    placeholder="Enter University"
                    value={formData.university}
                    onChange={handleChange}
                />

            </div>

            {/* Passing Year */}
            <div className="form-group">

                <label>Passing Year</label>

                <input
                    type="number"
                    name="passingYear"
                    placeholder="2026"
                    value={formData.passingYear}
                    onChange={handleChange}
                />

            </div>

            {/* Percentage */}
            <div className="form-group">

                <label>CGPA / Percentage</label>

                <input
                    type="text"
                    name="cgpa"
                    placeholder="8.5 CGPA or 85%"
                    value={formData.cgpa}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Education;