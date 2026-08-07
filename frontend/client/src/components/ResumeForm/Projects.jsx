// Projects Component

function Projects({ formData, handleChange }) {

    return (

        <div className="form-section">

            <h2>🚀 Projects</h2>

            <p className="section-subtitle">
                Showcase your best projects and technical skills.
            </p>

            <div className="form-grid">

                {/* Project Title */}
                <div className="form-group">

                    <label>Project Title</label>

                    <input
                        type="text"
                        name="projectTitle"
                        placeholder="AI Resume Builder"
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
                        placeholder="React, Node.js, Express, MongoDB"
                        value={formData.technologies}
                        onChange={handleChange}
                    />

                </div>

            </div>

            {/* Project Description */}
            <div className="form-group">

                <label>Project Description</label>

                <textarea
                    name="projectDescription"
                    rows="5"
                    placeholder="Built a full-stack AI Resume Builder using the MERN Stack with authentication, PDF export, AI suggestions and ATS score analysis."
                    value={formData.projectDescription}
                    onChange={handleChange}
                />

            </div>

            {/* GitHub Link */}
            <div className="form-group">

                <label>GitHub Repository</label>

                <input
                    type="url"
                    name="githubLink"
                    placeholder="https://github.com/yourusername/project-name"
                    value={formData.githubLink}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Projects;