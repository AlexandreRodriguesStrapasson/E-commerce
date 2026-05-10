import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IContact extends Document {
  name: string
  phone: string
  message: string
  createdAt: Date
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
)

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema)

export default Contact
