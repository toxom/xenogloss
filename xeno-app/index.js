const { Configuration, OpenAIApi } = require("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-XKvlMrdoOZHKG3c9w5jdAQiX",
    apiKey:"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",
});

const openai = new OpenAIApi(configuration);

const app = express()
const port =  3080

app.post('/', async (req, res) => {
    const {message} = req.body;
    console.log(message)

    // const response = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: "Say this is a test",
    //     max_tokens: 7,
    //     temperature: 0,
    // });
    // console.log(response.data.choices[0].text)
    res.json({
        data: message,
    })

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)



});