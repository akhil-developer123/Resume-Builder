// Projects Component

function Projects({ formData, handleChange }) {

    return (

        <div className="form-section">

            {/* Section Heading */}
            <h2>Projects</h2>

            {/* Project Title */}
            <div className="form-group">

                <label>Project Title</label>

                <input
                    type="text"
                    name="projectTitle"
                    placeholder="Enter Project Title"
                    value={formData.projectTitle}
                    onChange={handleChange}
                />

            </div>

            {/* Technologies */}
            <div className="form-group">

                <label>Technologies Used</label>

                <input
                    type="text"
                    name="technologies"
                    placeholder="React, Node.js, MongoDB..."
                    value={formData.technologies}
                    onChange={handleChange}
                />

            </div>

            {/* Description */}
            <div className="form-group">

                <label>Project Description</label>

                <textarea
                    name="projectDescription"
                    rows="5"
                    placeholder="Describe your project..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                />

            </div>

            {/* GitHub Link */}
            <div className="form-group">

                <label>GitHub Link</label>

                <input
                    type="url"
                    name="githubLink"
                    placeholder="https://github.com/username/project"
                    value={formData.githubLink}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Projects;