const mongoose = require('mongoose')
const url = 
"mongodb+srv://josejoy567:josejoy567@cluster0.llpaxc1.mongodb.net/quicknote-mern?retryWrites=true&w=majority&appName=Cluster0"

module.exports.connect = () =>{
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("MongoDB Connected Successfully")
    }).catch((error) => { console.log("Error: " , error) })
};

