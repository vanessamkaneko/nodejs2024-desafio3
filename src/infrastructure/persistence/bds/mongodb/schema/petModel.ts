import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { PetSex, PetSpecie } from 'src/core/pet/dto/register-pet.dto';
import { Pet as PetEntity } from 'src/core/pet/entity/pet.entity';

export const PetSchema = new Schema<PetEntity>({
  name: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: String, enum: Object.values(PetSex), required: true },
  specie: { type: String, enum: Object.values(PetSpecie), required: true },
  city: { type: String, required: true },

  // userId: {
  //   type: String,
  //   ref: 'User',
  //   required: true,
  // },
});

export const PetModel = mongoose.model('Pet', PetSchema);
