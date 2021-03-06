const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment'); 

var utc = new Date();
utc.setHours( utc.getHours() + 9);
const ContentsSchema = new Schema(
 {
  title: String,
  categories: Array,
  description: String,
  studyLocation: String,
  imageUrl: String,
  createdAt : { type: Date, default: Date.now },
  views : { type:Number, default : 0 },
  leader: Object,
  participants: Array,
});
autoIncrement.initialize(mongoose.connection);
ContentsSchema.plugin(autoIncrement.plugin, {model : 'contents' , field : 'id' , startAt : 1 })

module.exports = mongoose.model("contents", ContentsSchema);