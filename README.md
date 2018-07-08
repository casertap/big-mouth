
```
nvm use 6
```

# CI CD CodePipeline

## Create CodePipeline

- Github
  - run when changes 
  - AWS CodeBuild
  - buildspec.yml

- create IAM role
  
add those policies to the service role: service-role/code-build-big-mouth-service-role
```
AWSLambdaFullAccess
CodeBuildTrustPolicy-big-mouth-1530962089130
AmazonS3FullAccess
AmazonAPIGatewayInvokeFullAccess
CloudWatchFullAccess
AmazonDynamoDBFullAccess
AmazonAPIGatewayAdministrator
AmazonCognitoPowerUser
AWSCloudFormationReadOnlyAccess
AWSCloudFormationAllAccess
```

OR 

```
AdministratorAccess
```

- timeout 10m

- No deployment because serverless framework will deploy already

- CodePipeline Role

