import mongoose from 'mongoose'

const sponsorSchema = new mongoose.Schema(
  {
    tier: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: String,
      required: true,
      trim: true
    },
    companyName: {
      type: String,
      default: '',
      trim: true
    },
    logoUrl: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    benefits: {
      type: [String],
      default: []
    },
    displayOrder: {
      type: Number,
      default: 0
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

sponsorSchema.set('toJSON', {
  virtuals: true,
  transform: (_doc, ret) => {
    ret.id = ret._id
    delete ret.__v
    return ret
  }
})

export const Sponsor = mongoose.models.Sponsor || mongoose.model('Sponsor', sponsorSchema)
