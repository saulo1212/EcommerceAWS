import * as cdk from 'aws-cdk-lib'
import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs'
import * as apiGatway from 'aws-cdk-lib/aws-apigateway'
import * as cwlogs from 'aws-cdk-lib/aws-logs'
import {Construct} from 'constructs'


interface EcommerceApiStackProps extends cdk.StackProps{

    productsFetchHandler: lambdaNodeJs.NodejsFunction
}

export class EcommerceApiStack extends cdk.Stack {

    constructor(scope: Construct, id:string, props: EcommerceApiStackProps){
        super(scope, id, props)

        const logGroup = new cwlogs.LogGroup(this, "ECommerceApiLogs")

        const api = new apiGatway.RestApi(this, "EcommerceApi",{
            restApiName: "EcommerceApi",
            cloudWatchRole: true,
            deployOptions:{
                accessLogDestination: new apiGatway.LogGroupLogDestination(logGroup),
                accessLogFormat: apiGatway.AccessLogFormat.jsonWithStandardFields({
                    httpMethod:true,
                    ip:true,
                    protocol: true,
                    requestTime: true,
                    resourcePath:true,
                    responseLength: true,
                    status:true,
                    caller: true,
                    user:true,
                    
                })
            }
        })

        

        const  productsFetchIntegration =  new apiGatway.LambdaIntegration(props.productsFetchHandler)

        const productsResource = api.root.addResource("products")

        productsResource.addMethod("GET", productsFetchIntegration)
    }
}