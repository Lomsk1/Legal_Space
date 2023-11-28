import mongoose, { Document, Model } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface attorneyAttr {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: {
    public_id: string;
    url: string;
  };
}

// An interface that describes the properties
// that a Brand Model has
interface AttorneyModel extends Model<AttorneyDoc> {
  build(attrs: attorneyAttr): AttorneyDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface AttorneyDoc extends Document {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: {
    public_id: string;
    url: string;
  };
}

const AttorneySchema = new mongoose.Schema<attorneyAttr>({
  name: {
    type: String,
    required: [true, "An Attorney must have a name"],
    unique: true,
  },
  instagram: String,
  facebook: String,
  linkedin: String,
  image: {
    public_id: String,
    url: String,
  },
});

const Attorney = mongoose.model<AttorneyDoc, AttorneyModel>(
  "Attorney",
  AttorneySchema
);

export default Attorney;
