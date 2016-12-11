# Running PHP on AWS Lambda
[![Build Status](https://travis-ci.org/dannylinden/aws-lambda-php.svg?branch=master)](https://travis-ci.org/dannylinden/aws-lambda-php)
## Prerequisite
- [docker](https://www.docker.com/)

### Compile static standalone PHP 7 binary
In order to use PHP on AWS Lambda, the PHP binary, including the required libraries, has to be integrated into the app.
To do this, we have to compile the PHP 7.1.0RC5 with statically linked libraries:

```shell
sh build_php_7.sh
```

### PHP Version
We are using PHP 7.1.0RC5 to compile the PHP binary
To switch the PHP version you can set the Branch to checkout sources from a different branch
by editing the "PHP_VERSION_GIT_BRANCH param on `sh build_php_7.sh` at line 8

### Running local Unittest for the PHP Example Application
You can run the NodeJs Unittest with "lambda-tester" by building and running the specific docker container:

```shell
docker build -t lambda-php-unittest -f Dockerfile.TestLambdaApp .
```
```shell
docker run lambda-php-unittest
```

### Running Example Application on AWS
To get the example application running on AWS you have to zip the php example script file,
the NodeJS script file and the PHP binary together:

```shell
zip aws-lambda-php-example.zip index.js index.php php
```

### Create Example Lambda Function
Now you can create a new Lambda function on AWS and upload the ZIP package: 
![aws lambda php console settings](https://raw.githubusercontent.com/dannylinden/aws-lambda-php/master/img/aws-lambda.settings.png)
