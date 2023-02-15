const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-XKvlMrdoOZHKG3c9w5jdAQiX",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log(response.data.choices[0].text)
}

callApi()