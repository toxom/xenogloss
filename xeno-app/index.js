const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-XKvlMrdoOZHKG3c9w5jdAQiX",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);

// add body parser and corrs to express


const app 

// app.use(express.json())
// app.use(express.urlencoded({ extended: true}))
const app = express()
app.use(bodyParser.json())
app.use(cors())


const port =  3080

app.post('/', async (req, res) => {
    // console.log(message)
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`${message},
        max_tokens: 7,
        temperature: 0.5,
    });
    res.json({
        message: response.data.choices[0].text,
    })

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)



});