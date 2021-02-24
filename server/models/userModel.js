import validator from 'validator'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true,'Your firstName Please'],
        
    },
    lastName:{
        type:String,
        required:[true,'Your lastName Please']
    },
    email:{
        type:String,
        required:[true,'Your email please'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,' Provide Valid email Please']
    },
   password:{
   type:String,
   required:[true,'password is required'],
   minlength:8,
   select:false
      
   },
   confirmPassword:{
    type:String,
    required:[true,'please confirm your password'],

    validate:{
     validator:function(el){
         return el === this.password
     },
     message:'password not matching'
    }  
   },
   gender:{
       type:String,
       required:[true,'gender Please!']
   }
  

   })

   userSchema.pre('save', async function(next){

    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12);
    this.confirmPassword = undefined;

    next();
})

userSchema.methods.checkPassword = async function(currentPassword,userPasword){

    return await bcrypt.compare(currentPassword,userPasword);
}

const User = mongoose.model('User',userSchema);

export default User;