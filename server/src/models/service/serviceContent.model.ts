import mongoose, { Document, Model } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface serviceContentAttr {
  title: string;
  description: string;
  lang: string;
  service_id: mongoose.Types.ObjectId;
}

// An interface that describes the properties
// that a Brand Model has
interface ServiceContentModel extends Model<ServiceContentDoc> {
  build(attrs: serviceContentAttr): ServiceContentDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface ServiceContentDoc extends Document {
  title: string;
  description: string;
  lang: string;
  service_id: mongoose.Types.ObjectId;
}

const serviceContentSchema = new mongoose.Schema<serviceContentAttr>({
  title: {
    type: String,
    required: [true, "A Service Content must have a description"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "A Service Content must have a description"],
  },
  lang: {
    type: String,
    required: [true, "A Service Content must have a language"],
    enum: {
      values: ["eng", "geo"],
      message: "You have to choose only: English or Georgian",
    },
  },
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: [true, "Please, choose a Service"],
  },
});

const ServiceContent = mongoose.model<ServiceContentDoc, ServiceContentModel>(
  "ServiceContent",
  serviceContentSchema
);

export default ServiceContent;
