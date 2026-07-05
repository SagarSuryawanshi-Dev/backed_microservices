zod validate global level ,zod can do validation to a global level.It is typescript schema validation .it detect the types also parse them.
first defin certain rules

after writing validation zod export from the and import to the contrtller parser it after exracting from the req.body.for login controller 
const data = userLoginSchema.parse({email,password})
there two types of parse i) parse and ii) safeParse 
parse throw an error and safeParse doesn't throw am error ,it will just say success false 


we can also create validation middlewareso that we can use it in any route that we want. we can give certain types that it has to parse and based on those types it will just validates and it will decide wheather to hrow an error or not.Based on the input parameter. 
