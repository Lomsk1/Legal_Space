import mongoose, { Document, Model } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface serviceAttr {
  title: string;
}

// An interface that describes the properties
// that a Brand Model has
interface ServiceModel extends Model<ServiceDoc> {
  build(attrs: serviceAttr): ServiceDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface ServiceDoc extends Document {
  title: string;
}

const serviceSchema = new mongoose.Schema<serviceAttr>({
  title: {
    type: String,
    required: [true, "A Service must have a title"],
    unique: true,
  },
});

const Service = mongoose.model<ServiceDoc, ServiceModel>("Service", serviceSchema);

export default Service;
