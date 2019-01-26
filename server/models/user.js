const { mongoose } = require("./../db/mongoose");

var User = mongoose.model("User", {
  text: {
    type: String,
    minlength: 1,
    required: true,
    trim:true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports={User};
