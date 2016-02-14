var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: "Title can't be blank"
	},
	comment: {
		type: String,
		default: '',
		trim: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	likes: {
		type: Number,
		default: 0
	}
	// completed: {
	// 	type: Boolean,
	// 	default: false
	// }
});
mongoose.model('Post', PostSchema);