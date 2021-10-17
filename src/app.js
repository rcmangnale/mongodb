const mongoose = require('mongoose');



//connection creation and createin newdb
mongoose.connect("mongodb://localhost:27017/jsdata",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>console.log("connection Successfull.."))
.catch((err) => console.log(err));

//schema 

const playListSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    ctype :String,
    videos :Number,
    author:String,
    active :Boolean,
    data:{
        type:Date,
        default:Date.now
    }
})

//collection creation

const Playlist = new mongoose.model("Playlist",playListSchema);

//create or insert document


const nodePlaylist  =new Playlist({
    name:"node Js",
    ctype :"backend",
    videos :80,
    author:"Rameshwwar",
    active :true
})

nodePlaylist.save();