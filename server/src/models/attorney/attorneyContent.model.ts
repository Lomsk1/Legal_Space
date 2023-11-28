import { NextFunction } from "express";
import mongoose, { Document, Model, Query } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface attorneyContentAttr {
  name: string;
  title: string;
  description: string;
  lang: string;
  attorney_id: mongoose.Types.ObjectId;
}

// An interface that describes the properties
// that a Brand Model has
interface AttorneyContentModel extends Model<AttorneyContentDoc> {
  build(attrs: attorneyContentAttr): AttorneyContentDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface AttorneyContentDoc extends Document {
  name: string;
  title: string;
  description: string;
  lang: string;
  attorney_id: mongoose.Types.ObjectId;
}

const AttorneyContentSchema = new mongoose.Schema<attorneyContentAttr>({
  name: {
    type: String,
    required: [true, "An Attorney must have a name"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "An Attorney must have a title"],
  },
  description: {
    type: String,
    required: [true, "An Attorney must have a description"],
  },
  lang: {
    type: String,
    required: [true, "An Attorney must have a language"],
    enum: {
      values: ["eng", "geo"],
      message: "You have to choose only: English or Georgian",
    },
  },
  attorney_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attorney",
    required: [true, "Please, add Attorney id"],
  },
});

AttorneyContentSchema.pre(/^find/, function (next: NextFunction) {
  const query = this as Query<AttorneyContentDoc[], AttorneyContentDoc>;

  query.populate({
    path: "attorney_id",
    select: "instagram facebook linkedin image",
  });

  next();
});

const AttorneyContent = mongoose.model<
  AttorneyContentDoc,
  AttorneyContentModel
>("AttorneyContent", AttorneyContentSchema);

export default AttorneyContent;
