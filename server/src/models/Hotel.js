import mongoose from 'mongoose'

const hotelSchema = new mongoose.Schema(
  {
    hotelId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    contact: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    rating: {
      type: Number,
      default: 5.0,
      min: 1,
      max: 5
    },
    distance: {
      type: String,
      default: 'Close to Festival Venue'
    },
    amenities: {
      type: [String],
      default: ['Luxury Suites', 'High-Speed Wi-Fi', '24/7 Security', 'Valet Parking', 'Fine Dining']
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

hotelSchema.set('toJSON', {
  virtuals: true,
  transform: (_doc, ret) => {
    ret.id = ret._id
    delete ret.__v
    return ret
  }
})

export const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', hotelSchema)
