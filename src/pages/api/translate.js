import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function translate(req, res) {
    const { prompt, maxTokens } = req.body;

    try {
        // const completion = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [{role: 'user', content:`${prompt}`}],
        //     max_tokens: maxTokens,
        //     temperature: 0.6,
        // });
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: maxTokens,
            temperature: 0,
        });
        res.status(200).json({ result: completion.data.choices[0].text });
        // res.status(200).json({ result: completion.data.choices[0].message.content });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                }
            });
        }
    }
}
