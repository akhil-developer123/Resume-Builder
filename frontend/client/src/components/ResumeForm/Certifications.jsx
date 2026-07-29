function Certifications({ formData, handleChange }) {

    return (

        <div className="form-section">

            <h2>Certifications</h2>

            <div className="form-group">

                <label>Certification Name</label>

                <input
                    type="text"
                    name="certification"
                    placeholder="AWS, Cisco, Udemy..."
                    value={formData.certification}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Certifications;