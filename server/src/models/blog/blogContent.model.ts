import { NextFunction } from "express";
import mongoose, { Document, Model, Query } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface blogContentAttr {
  title: string;
  description: string;
  created_at: Date;
  lang: string;
  blogText: string;
  blog_id: mongoose.Types.ObjectId;
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
  blog_id: mongoose.Types.ObjectId;
}

const BlogContentSchema = new mongoose.Schema<blogContentAttr>({
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
  },
  blogText: String,
  blog_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: [true, "Please, add a Blog id"],
  },
});

BlogContentSchema.pre(/^find/, function (next: NextFunction) {
  const query = this as Query<BlogContentDoc[], BlogContentDoc>;

  query.populate({
    path: "blog_id",
    select: "image",
  });

  next();
});

const BlogContent = mongoose.model<BlogContentDoc, BlogContentModel>(
  "BlogContent",
  BlogContentSchema
);

export default BlogContent;
