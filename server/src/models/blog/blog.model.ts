import mongoose, { Document, Model } from "mongoose";

// An interface that describes the properties
// that are required to create a new Brand
interface blogAttr {
  title: string;
  image: {
    public_id: string;
    url: string;
  };
}

// An interface that describes the properties
// that a Brand Model has
interface BlogModel extends Model<BlogDoc> {
  build(attrs: blogAttr): BlogDoc;
}

// An interface that describes the properties
// that a Brand Document has
export interface BlogDoc extends Document {
  title: string;
  image: {
    public_id: string;
    url: string;
  };
}

const BlogSchema = new mongoose.Schema<blogAttr>({
  title: {
    type: String,
    required: [true, "A Attorney must have a title"],
    unique: true,
  },
  image: {
    public_id: String,
    url: String,
  },
});

const Blog = mongoose.model<BlogDoc, BlogModel>("Blog", BlogSchema);

export default Blog;
