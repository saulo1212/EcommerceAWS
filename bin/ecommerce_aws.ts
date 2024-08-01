#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import {ProductsAppStack} from '../lib/productsApp-stack'
import {ECommerceApiStack} from '../lib/ecommerceApi-stack';

const app = new cdk.App()


const env: cdk.Environment ={
    account: '533724754206',
    region: 'us-east-1'
}


const tags = {
    cost: 'ECommerce',
    team: 'SiecolaCode'
}

const  productsAppStack = new ProductsAppStack(app, 'ProductsApp',{
    tags:tags,
    env:env
})


const eCommerceApiStack = new ECommerceApiStack(app, 'ECommerceApi', {
    productsFetchHandler: productsAppStack.productsFetchHandler,
    tags: tags,
    env: env
})

eCommerceApiStack.addDependency(productsAppStack)