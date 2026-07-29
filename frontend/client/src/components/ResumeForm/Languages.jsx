function Languages({ formData, handleChange }) {

    return (

        <div className="form-section">

            <h2>Languages</h2>

            <div className="form-group">

                <label>Languages Known</label>

                <input
                    type="text"
                    name="languages"
                    placeholder="Hindi, English"
                    value={formData.languages}
                    onChange={handleChange}
                />

            </div>

        </div>

    );

}

export default Languages;