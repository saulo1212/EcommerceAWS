import * as cdk from 'aws-cdk-lib'
import {Construct} from 'constructs'
import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs'
import * as apiGataway from 'aws-cdk-lib/aws-apigateway'
import * as cwlogs from 'aws-cdk-lib/aws-logs'

interface  ECommerceApiStackProps extends cdk.StackProps {

    productsFetchHandler: lambdaNodeJs.NodejsFunction
}

export class ECommerceApiStack extends cdk.Stack {

    constructor (scope: Construct, id: string, props: ECommerceApiStackProps){

        super(scope, id, props)

        const logGroup = new cwlogs.LogGroup(this,'ECommerceApiLogs1')

        const restApiName = 'ECommerceApi1'

        const api = new apiGataway.RestApi(this, restApiName,{
            restApiName: restApiName,
            cloudWatchRole: true,
            deployOptions:{
                accessLogDestination: new apiGataway.LogGroupLogDestination(logGroup),
                accessLogFormat: apiGataway.AccessLogFormat.jsonWithStandardFields({
                    httpMethod: true,
                    ip: true,
                    protocol: true,
                    requestTime: true,
                    resourcePath: true,
                    responseLength: true,
                    status: true,
                    caller: true,
                    user: true
                })
            }
        })

        const productsFetchIntegration = new apiGataway.LambdaIntegration(props.productsFetchHandler)

        // '/products'
        const productsResource = api.root.addResource('products1')

        productsResource.addMethod('GET', productsFetchIntegration)
    }
}