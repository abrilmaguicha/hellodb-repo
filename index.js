const express = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const app = express()

const router = require('./routes/api/user');
const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => {
console.log(`DB connected @ ${db}`);
})
.catch(err => console.error(`Connection error ${err}`));
app.use(cors());
app.use('/api', router);
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
