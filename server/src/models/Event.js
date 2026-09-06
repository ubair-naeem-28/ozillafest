import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: String,
      required: true,
      trim: true
    },
    time: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    venue: {
      type: String,
      default: 'Karachi, Pakistan',
      trim: true
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    capacity: {
      type: Number,
      default: 5000
    },
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed'],
      default: 'upcoming'
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

eventSchema.set('toJSON', {
  virtuals: true,
  transform: (_doc, ret) => {
    ret.id = ret.eventId || ret._id
    delete ret.__v
    return ret
  }
})

export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)
