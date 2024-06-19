import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({region: 'us-east-1'})

const titanConfig = {
    inputText: 'Tell me a story about a dragon',
    textGenerationConfig: {
        maxTokenCount:4096,
        stopSequences: [],
        temperature: 0, 
        topP:1,
    }
}

const titanModelId = 'amazon.titan-text-express-v1'

async function invokeModel(){
    const response = await client.send(new InvokeModelCommand({
            body: JSON.stringify(titanConfig),
            modelId: titanModelId,
            contentType : "application/json",
            accept: "application/json"
    }))

    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    console.log(responseBody);
}

invokeModel();