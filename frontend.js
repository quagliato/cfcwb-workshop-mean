frontendApp = new express();
frontendApp.use(express.static(__dirname + '/public'));
frontendApp.get("*", function(request, response){
  response.sendFile(__dirname + "/public/index.html");
});
frontendApp.listen(9000);