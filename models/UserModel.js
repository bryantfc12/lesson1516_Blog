import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false,
        default:'Jl.Merdeka 321'
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dateOfBirth:{
        type:String,
        required:false,
        default:'11/07/2026'
    }
})

const User = mongoose.model('User', UserSchema)
export default User