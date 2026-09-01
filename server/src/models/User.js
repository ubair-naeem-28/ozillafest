import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    name: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true, sparse: true, unique: true },
    googleId: { type: String, trim: true, sparse: true },
    avatar: { type: String, trim: true },
    passwordHash: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    otpCode: { type: String },
    otpExpiresAt: { type: Date },
    emailVerified: { type: Boolean, default: false },
    passwordResetTokenHash: { type: String },
    passwordResetExpiresAt: { type: Date }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
        delete ret.passwordHash
        delete ret.otpCode
        delete ret.otpExpiresAt
        delete ret.passwordResetTokenHash
        delete ret.passwordResetExpiresAt
        return ret
      }
    }
  }
)

export const User = mongoose.model('User', userSchema)
