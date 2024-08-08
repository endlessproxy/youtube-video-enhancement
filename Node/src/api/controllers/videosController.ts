import { Request, Response } from "express";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("GEMINI API KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const aiTraining =
    `Melhore os títulos abaixo para que chamem mais atenção na home do YouTube e despertem o desejo das pessoas de assistir ao vídeo. Utilize métodos como: criar títulos apelativos e perguntas intrigantes (por exemplo, "Será que deu certo?" ou "Ganhei?"). use os melhores métodos disponíveis na internet para otimizar os títulos melhorados. 

Se o titulo estiver em ingles responda tudo em ingles, faça isso com todos os idiomas.

Quero as respostas SEMPRE com esse exato modelo de resposta:

"- Títulos Melhorados:

- Título: ABRI CAIXA DE POKÉMON JAPONESA! VOU FICAR RICO? (NOVA COLEÇÃO) \n
- Explicação: o titulo chama a atenção e transmite emoção, além de gerar curiosidade e expectativa sobre o conteúdo do vídeo.
A frase "VOU FICAR RICO?" é um gancho que instiga o espectador a clicar, e a inclusão de "(NOVA COLEÇÃO)" no final dá mais contexto ao vídeo.
\n --- \n"

Quero todas as respostas exatamente assim nesse modelo sem mudar nada, deixe (Títulos Melhorados) apenas na primeira linha e separe cade titulo com um numero. Não utilize asteriscos e nem hashtags e nenhuma parte da resposta.
`;

export async function analyzeVideos(req: Request, res: Response) {

    const response = await axios.get("http://localhost:8023/api/videos");
    const titles = response.data;

    const prompt = aiTraining + titles.join("\n");

    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    res.send(text);
}