import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadAttorneyPhoto = upload.single("image");
export const uploadBlogPhoto = upload.single("image");
