import mongoose from "mongoose";

interface IUser {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      maxlength: 10,
      minlength: 10,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
    },
    password: {
      type: String,
      required: true,
      trim: true,
      match:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      // meaning of that regex is that the password must contain at least one lowercase,one uppercase, one digit, one special charater and must be at least 8 char.
    },
  },

  {
    timestamps: true,
  },
);



const User = mongoose.model<IUser>("User",userSchema);


