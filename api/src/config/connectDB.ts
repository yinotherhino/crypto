import mongoose from 'mongoose';
import ENV from './ENV';

mongoose.connect(ENV.URI).then(() => {
    console.log("Connected to db");
})
.catch((err) => {
    console.error(err);
    throw err;
});