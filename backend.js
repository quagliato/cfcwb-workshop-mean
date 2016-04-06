require("./backend-config.js");
require('./db.js');

// GET é o método padrão para uma requisição HTML
backendApp.get("/api/status", function(request, response){
  response.send({"status":"OK"});
});

backendApp.post("/api/comment", function(request, response){
  var requestBody = parseBodyToJSON(request);
  var newComment = new Comment({
    "user_name": requestBody.user_name,
    "content": requestBody.content,
    "dt_creation": new Date()
  });

  newComment.save(function(err){
    if (err) response.send({"status": "ERROR"});
    else response.send({"status": "OK"});
  });
});

backendApp.get("/api/comment", function(request, response){
  var requestBody = request.body;
  Comment.find({})
  .sort({"dt_creation": -1 })
  .exec(function(err, comments){
    if (err) response.send({"status": "ERROR"});
    else response.send({"status":"OK", "comments":comments});
  });
});

backendApp.listen(1234);