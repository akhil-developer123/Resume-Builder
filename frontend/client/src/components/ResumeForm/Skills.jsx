// Skills Component

function Skills({ formData, handleChange }) {

    return (

        <div className="form-section">

            {/* Section Heading */}
            <h2>Skills</h2>

            {/* Technical Skills */}
            <div className="form-group">

                <label>Technical Skills</label>

                <textarea
                    name="skills"
                    rows="5"
                    placeholder="HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB"
                    value={formData.skills}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Skills;