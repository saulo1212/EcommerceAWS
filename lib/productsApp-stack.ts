import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs'
import * as cdk from 'aws-cdk-lib'
import {Construct} from 'constructs'

export class ProductsAppStack extends cdk.Stack {

    readonly productsFetchHandler: lambdaNodeJs.NodejsFunction

    constructor(scope: Construct, id:string, props?: cdk.StackProps){

        super(scope, id, props)

        const duration =  cdk.Duration.seconds(5)

        this.productsFetchHandler = new lambdaNodeJs.NodejsFunction(this,
            "ProductsFetchFunction",{
                functionName: "ProductsFetchFunction",
                entry: "lambda/products/productsFetchFunction.ts",
                handler:"handler",
                runtime: lambda.Runtime.NODEJS_20_X,
                memorySize: 512,
                timeout: duration,
                bundling:{
                    minify: true,
                    sourceMap: false
                }
            }
        )
    }
}

