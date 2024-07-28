# Welcome to your CDK TypeScript Project

This project is a starting point for developing with the AWS Cloud Development Kit (CDK) using TypeScript.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CDK](https://aws.amazon.com/cdk/)

## AWS CLI Installation

1. Download the AWS CLI package:
    ```bash
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    ```

2. Unzip the package:
    ```bash
    unzip awscliv2.zip
    ```

3. Run the installer:
    ```bash
    sudo ./aws/install
    ```

4. Verify the installation:
    ```bash
    aws --version
    ```

5. Configure your AWS credentials:
    ```bash
    aws configure
    ```

## CDK Installation

1. Install the AWS CDK globally:
    ```bash
    npm install -g aws-cdk
    ```

2. Verify the installation:
    ```bash
    cdk --version
    ```

## Project Initialization

To start a new CDK project with TypeScript:

1. Initialize a new CDK project:
    ```bash
    cdk init app --language typescript
    ```

2. Install project dependencies:
    ```bash
    npm install
    ```

## CDK Commands

Here are some useful commands for working with the CDK project:

- `cdk list`: View all stacks in the CDK project.
- `cdk deploy --all`: Deploy all resources defined in the project.
- `cdk diff`: Compare the deployed stack with your current local state.
- `cdk destroy --all`: Destroy all stacks and resources in the project.

## Project Structure

This project contains the following files and folders:

- `bin/`: Contains the entry point of your CDK application.
- `lib/`: Contains the stack definition.
- `cdk.json`: Configuration file for the CDK Toolkit.

## Useful npm Scripts

- `npm run build`: Compile TypeScript to JavaScript.
- `npm run watch`: Watch for changes and compile.
- `npm run test`: Run unit tests with Jest.
- `npx cdk deploy`: Deploy this stack to your default AWS account/region.
- `npx cdk diff`: Compare deployed stack with current state.
- `npx cdk synth`: Emit the synthesized CloudFormation template.

## Getting Started

1. Build your project:
    ```bash
    npm run build
    ```

2. Deploy the stack:
    ```bash
    npx cdk deploy
    ```

3. Make changes to your stack in the `lib/` directory, and repeat the build and deploy steps to update your resources.

## Learn More

For more information about the AWS CDK, visit the [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/latest/guide/).

## License

This project is licensed under the MIT License. See the LICENSE file for details.
