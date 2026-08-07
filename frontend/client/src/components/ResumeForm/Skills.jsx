// Skills Component

function Skills({ formData, handleChange }) {

    return (

        <div className="form-section">

            <h2>🛠 Skills</h2>

            <p className="section-subtitle">
                Enter your technical and professional skills separated by commas.
            </p>

            <div className="form-group">

                <label>Technical Skills</label>

                <textarea
                    name="skills"
                    rows="5"
                    placeholder="HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Git, GitHub, REST API"
                    value={formData.skills}
                    onChange={handleChange}
                />

                <small className="input-hint">
                    Example: HTML, CSS, JavaScript, React.js, Node.js, MongoDB
                </small>

            </div>

        </div>

    );

}

export default Skills;