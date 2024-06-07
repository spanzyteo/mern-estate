import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://th.bing.com/th/id/R.3c9078971c3cf1045a00337c516c55e0?rik=3mPdeP%2fJBO3NxA&pid=ImgRaw&r=0',
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
