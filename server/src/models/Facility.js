import mongoose from 'mongoose'

const facilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'Venue Amenity',
      trim: true
    },
    icon: {
      type: String,
      default: 'sparkles'
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

facilitySchema.set('toJSON', {
  virtuals: true,
  transform: (_doc, ret) => {
    ret.id = ret._id
    delete ret.__v
    return ret
  }
})

export const Facility = mongoose.models.Facility || mongoose.model('Facility', facilitySchema)
