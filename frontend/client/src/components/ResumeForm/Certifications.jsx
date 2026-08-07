// Certifications Component

function Certifications({ formData, handleChange }) {

    return (

        <div className="form-section">

            <h2>🏆 Certifications</h2>

            <p className="section-subtitle">
                Add certifications that strengthen your resume.
            </p>

            <div className="form-group">

                <label>Certification Name</label>

                <input
                    type="text"
                    name="certification"
                    placeholder="AWS Cloud Practitioner, Cisco CCNA, Google Data Analytics, Udemy MERN Stack"
                    value={formData.certification}
                    onChange={handleChange}
                />

                <small className="input-hint">
                    Separate multiple certifications using commas.
                </small>

            </div>

        </div>

    );

}

export default Certifications;