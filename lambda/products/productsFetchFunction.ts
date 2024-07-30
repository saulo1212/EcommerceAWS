import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Context
} from 'aws-lambda'


export async function handler (event: APIGatewayProxyEvent, context:Context): Promise<APIGatewayProxyResult> {


    const method = event.httpMethod

    const lambdaRequestId = context.awsRequestId

    const apiRequestId = event.requestContext.requestId

    console.log(`API gataway RequestID: ${apiRequestId} - Lambda requestID: ${lambdaRequestId}`)

    if(event.resource === '/products'){

        if(method === 'GET') {

            console.log('GET')

            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Get products - OK'
                })
            }
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: 'Bad request'
        })
    }
}