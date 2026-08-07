// Languages Component

function Languages({ formData, handleChange }) {

    return (

        <div className="form-section">

            <h2>🌍 Languages</h2>

            <p className="section-subtitle">
                Mention the languages you can read, write, or speak.
            </p>

            <div className="form-group">

                <label>Languages Known</label>

                <input
                    type="text"
                    name="languages"
                    placeholder="English, Hindi, French"
                    value={formData.languages}
                    onChange={handleChange}
                />

                <small className="input-hint">
                    Separate multiple languages using commas.
                </small>

            </div>

        </div>

    );

}

export default Languages;