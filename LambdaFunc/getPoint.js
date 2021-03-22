
const AWS = require("aws-sdk");

// Use built-in module to get current date & time
 let date = new Date();
 
     AWS.config.update({
      region: "us-east-1"
    });

// Store date and time in human-readable format in a variable
 let now = date.toISOString();
 
 // Instantiate a DynamoDB document client with the SDK
 let dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (e, tx, callback) => {

   
    // TODO implement
   // TableName:'HelloWorldDatabase',
   
   let p = e.point;
   
   console.log(typeof e.point)
    let params = {
        TableName:'userPool',
        Key: {
            '_user': e.username
        },
        UpdateExpression: "set old_point = :op, new_point=:np",
        ExpressionAttributeValues:{
            ":op":100,
            ":np":33
    },
    
    ReturnValues:"UPDATED_NEW"
    };
    
    
    console.log("Updating the item...");
    dynamodb.update(params, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
    });

}
    
