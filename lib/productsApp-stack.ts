import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs'
import * as cdk from 'aws-cdk-lib'
import {Construct} from 'constructs'
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'


export class ProductsAppStack extends cdk.Stack {


    readonly productsFetchHandler : lambdaNodeJs.NodejsFunction
    readonly productsAdminHandler: lambdaNodeJs.NodejsFunction
    readonly productsDdb: dynamodb.Table

    constructor (scope: Construct, id: string, props?: cdk.StackProps){

        super(scope, id, props)

        this.productsDdb = new dynamodb.Table(this, 'ProductsDdb',{
            tableName: 'products',
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            partitionKey: {
                name: "id",
                type: dynamodb.AttributeType.STRING
            },
            billingMode: dynamodb.BillingMode.PROVISIONED,
            readCapacity:1,
            writeCapacity:1
        })

        const productsFetchFunction = "ProductsFetchFunction1";
        const productsAdminFunction = "productsAdminFunction"

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
                environment:{
                    PRODUCTS_DDB: this.productsDdb.tableName
                }
            }
        )

        this.productsDdb.grantReadData(this.productsFetchHandler)

        this.productsAdminHandler = new lambdaNodeJs.NodejsFunction(this,
            productsAdminFunction, 
            {
                runtime: lambda.Runtime.NODEJS_20_X,
                memorySize: 512,
                functionName: productsAdminFunction,
                entry: 'lambda/products/productsAdminFunction.ts',
                handler: 'handler',
                bundling:{
                    minify: true,
                    sourceMap: false
                },
                timeout: cdk.Duration.seconds(10),
                environment:{
                    PRODUCTS_DDB: this.productsDdb.tableName
                }
            }
        )

        this.productsDdb.grantWriteData(this.productsAdminHandler)

    }
}