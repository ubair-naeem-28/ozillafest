import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ticketId: { type: String, required: true, unique: true, index: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    idCardNumber: { type: String, required: true, trim: true },
    festivalDay: { type: String, enum: ['day1', 'day2'], default: 'day1', required: true },
    eventId: { type: String, required: true },
    eventName: { type: String, required: true },
    eventDate: { type: String, required: true },
    eventTime: { type: String, required: true },
    location: { type: String, required: true },
    ticketType: { type: String, enum: ['regular', 'vip', 'premium'], required: true },
    quantity: { type: Number, default: 1, min: 1, max: 10 },
    passwordSnapshot: { type: String },
    status: { type: String, enum: ['pending', 'payment_submitted', 'approved', 'rejected', 'cancelled'], default: 'pending' },
    paymentProofPath: { type: String },
    paymentProofUploadedAt: { type: Date },
    generatedAt: { type: Date },
    verifiedAt: { type: Date }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        ret.id = ret._id.toString()
        ret.uniqueTicketId = ret.ticketId
        delete ret._id
        delete ret.__v
        delete ret.userId
        delete ret.passwordSnapshot
        return ret
      }
    }
  }
)

export const Ticket = mongoose.model('Ticket', ticketSchema)
