import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { Org as OrgEntity } from 'src/core/org/entity/org.entity';

export const OrgSchema = new Schema<OrgEntity>({
  address: { type: String, required: true },
  whatsapp: { type: String, required: true },

  // userId: {
  //   type: String,
  //   ref: 'User',
  //   required: true,
  // },
});

export const OrgModel = mongoose.model('Org', OrgSchema);
