this is scalable backend project where you will find microservices architecture.


NOTE
1) while setting up node.js +typescript 
    package.json have "type":"module"

    "script":{
        "dev":tsx watch src/server.ts,  [in development server.ts]
        "build":"tsc",
        "start":"node dist/server.js"   [while starting server.js]
    }

    Development pacakges
    npm i -D typescript tsx @types/node @types/express @types/cookie-parser