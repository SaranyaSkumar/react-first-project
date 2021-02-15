const mongoose= require('mongoose');

const task= new mongoose.Schema({
      task: {
        type: String,
      },
      description: {
        type: String,
      },
      timeline: {
        type: String,
      },
      status: {
        type: Boolean,
      },
      priority: {
        type: String,
      }
});

module.exports = Task = mongoose.model('task', task);