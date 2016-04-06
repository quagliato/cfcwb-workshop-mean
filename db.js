// Conecta no banco
mongoose.connect('mongodb://127.0.0.1/cfcwb-workshop-mean');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  user_name: { type: String, required: true },
  content: { type: String, required: true },
  dt_creation: Date,
});

// the schema is useless so far
// we need to create a model using it
Comment = mongoose.model('Comment', commentSchema);