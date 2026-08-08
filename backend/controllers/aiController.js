const { GoogleGenAI } = require("@google/genai");

console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const improveResume = async (req, res) => {

    try {

        const resumeData = req.body;

        const prompt = `
You are an expert ATS Resume Reviewer.

Analyze this resume and return ONLY valid JSON.

Resume Data:
${JSON.stringify(resumeData, null, 2)}

Return JSON in exactly this format:

{
  "improvedSummary": "string",
  "atsScore": 0,
  "strengths": [],
  "weaknesses": [],
  "skills": [],
  "suggestions": [],
  "missingKeywords": []
}

Do not write markdown.
Do not write explanation.
Only return JSON.
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        let text = response.text;

        text = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const result = JSON.parse(text);

        res.status(200).json({
            success: true,
            message: "Resume Improved Successfully",
            result,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    improveResume,
};