<!--
title: 'AWS Proxy API requests to your legacy endpoints with Serverless'
description: 'Create AWS API Gateway AWS Lambda Proxy'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework

This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ sls deploy
```

After running deploy, you should see output similar to:

```bash
Deploying apiproxy-dev to stage dev (us-east-1)

✔ Service deployed to stack apiproxy-dev (112s)

functions:
  proxy (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the legacy API : http://api.icndb.com/jokes/random?firstName=John&lastName=Doe

```powershell
PS C:\Users\romuloigor> wget                                                                                                 
cmdlet Invoke-WebRequest na posição de comando 1 do pipeline
Forneça valores para os seguintes parâmetros:
Uri: http://api.icndb.com/jokes/random?firstName=John&lastName=Doe
>
```

Which should result in response similar to the following:

```code
StatusCode        : 200
StatusDescription : OK
Content           : { "type": "success", "value": { "id": 84, "joke": "When John Doe talks, everybody listens. And
                    dies.", "categories": [] } }
RawContent        : HTTP/1.1 200 OK
                    Access-Control-Allow-Origin: *
                    Access-Control-Allow-Methods: GET
                    Vary: User-Agent
                    Keep-Alive: timeout=5, max=100
                    Connection: Keep-Alive
                    Transfer-Encoding: chunked
                    Cache-Control:...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Access-Control-Allow-Methods, GET], [Vary, User-Agent],
                    [Keep-Alive, timeout=5, max=100]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 123



PS C:\Users\romuloigor
```


And now AWS API Proxy https://8zbuq28p0j.execute-api.us-east-1.amazonaws.com/dev/route/jokes/random?firstName=John&lastName=Doe

```powershell
PS C:\Users\romuloigor> wget                                                                                                 
cmdlet Invoke-WebRequest na posição de comando 1 do pipeline
Forneça valores para os seguintes parâmetros:
Uri: https://8zbuq28p0j.execute-api.us-east-1.amazonaws.com/dev/route/jokes/random?firstName=John&lastName=Doe
>
```

Which should result in response similar to the following:

```code
StatusCode        : 200
StatusDescription : OK
Content           : { "type": "success", "value": { "id": 527, "joke": "No one has ever spoken during review of John
                    Doe's code and lived to tell about it.", "categories": ["nerdy"] } }
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    x-amzn-RequestId: 6f47802c-eee2-41dd-a23b-0a53122cf8f3
                    Access-Control-Allow-Origin: *
                    x-amzn-Remapped-Connection: Keep-Alive
                    x-amz-apigw-id: U2mGcESeIAMFXsQ...
Forms             : {}
Headers           : {[Connection, keep-alive], [x-amzn-RequestId, 6f47802c-eee2-41dd-a23b-0a53122cf8f3],
                    [Access-Control-Allow-Origin, *], [x-amzn-Remapped-Connection, Keep-Alive]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 165



PS C:\Users\romuloigor>
```

### Credits the Youtube Channel
Complete Coding
Saarland, Germany
https://www.youtube.com/CompleteCoding

Specifically this video
https://youtu.be/YI3E-7F6D14

Specifically this GitHub
https://github.com/SamWSoftware/serverless-templates
 
By Sam Williams
https://github.com/SamWSoftware