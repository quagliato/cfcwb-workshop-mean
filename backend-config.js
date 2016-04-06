// Cria a aplicação Express
backendApp = new express();

// Configurar o Express para usar os body-parsers
backendApp.use(bodyParser.json());
backendApp.use(bodyParser.urlencoded({
  extended: true
}));

// Essa função faz com que essa aplicação possa ser requisitada de outros endereços
allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
};
backendApp.use(allowCrossDomain);

parseBodyToJSON = function(request){
  // Tenta fazer o parse do conteúdo para JSON
  if (request.headers.hasOwnProperty("content-type") && request.headers["content-type"].indexOf("application/json") == -1) {
    try {
      return JSON.parse(Object.keys(request.body)[0]);
    } catch (parseError) {
      return false;
    }
  }

  return request.body;
};