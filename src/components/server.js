// server.js
import express from "express"
import { HfInference } from "@huggingface/inference"
import dotenv from "dotenv"

dotenv.config()
const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

const app = express()
app.use(express.json())

app.post("/api/get-recipe", async (req, res) => {
  const { ingredients } = req.body
  const ingredientsString = ingredients.join(", ")

  try {
    const SYSTEM_PROMPT = `You are an assistant that receives a list...`
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 1024,
    })
    res.json({ recipe: response.choices[0].message.content })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(3000, () => console.log("Server running on port 3000"))
