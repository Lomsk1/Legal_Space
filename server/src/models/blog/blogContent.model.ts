import mongoose, { Document, Model } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface blogContentAttr {
  title: string;
  description: string;
  created_at: Date;
  lang: string;
  blogText: string;
}

// An interface that describes the properties
// that a Brand Model has
interface BlogContentModel extends Model<BlogContentDoc> {
  build(attrs: blogContentAttr): BlogContentDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface BlogContentDoc extends Document {
  title: string;
  description: string;
  created_at: Date;
  lang: string;
  blogText: string;
}

const BlogSchema = new mongoose.Schema<blogContentAttr>({
  title: {
    type: String,
    required: [true, "An Blog must have a title"],
  },
  description: {
    type: String,
    required: [true, "An Blog must have a description"],
  },
  lang: {
    type: String,
    required: [true, "An Blog must have a language"],
    enum: {
      values: ["eng", "geo"],
      message: "You have to choose only: English or Georgian",
    },
  },
  created_at: {
    type: Date,
    default: Date.now(),
  }
});

const BlogContent = mongoose.model<BlogContentDoc, BlogContentModel>(
  "BlogContent",
  BlogSchema
);

export default BlogContent;
