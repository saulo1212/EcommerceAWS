import * as lambda from 'aws-cdk-lib/aws-lambda'

import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs'

import * as cdk from 'aws-cdk-lib'

import {Construct} from 'constructs'

export class ProductsAppStack extends cdk.Stack {


    readonly productsFetchHandler : lambdaNodeJs.NodejsFunction

    constructor (scope: Construct, id: string, props?: cdk.StackProps){

        super(scope, id, props)

        const productsFetchFunction = "ProductsFetchFunction";

        this.productsFetchHandler = new lambdaNodeJs.NodejsFunction(this,
            productsFetchFunction, 
            {
                runtime: lambda.Runtime.NODEJS_20_X,
                memorySize: 512,
                functionName: productsFetchFunction,
                entry: 'lambda/products/productsFetchFunction.ts',
                handler: 'handler',
                bundling:{
                    minify: true,
                    sourceMap: false
                },
                timeout: cdk.Duration.seconds(10),
            }
        )
    }
}