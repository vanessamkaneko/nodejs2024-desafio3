import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { Org as OrgEntity } from 'src/core/org/entity/org.entity';

export const OrgSchema = new Schema<OrgEntity>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  whatsapp: { type: String, required: true },

  // userId: {
  //   type: String,
  //   ref: 'User',
  //   required: true,
  // },
});

OrgSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.password;
    return ret;
  },
});

export const OrgModel = mongoose.model('Org', OrgSchema);
