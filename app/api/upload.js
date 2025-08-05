import nextConnect from "next-connect";
import multer from "multer";

// Use multer for file uploads
const upload = multer({ dest: "/tmp" });

const apiRoute = nextConnect();
apiRoute.use(upload.single("file"));

apiRoute.post((req, res) => {
  // Here, upload to S3, Cloudinary, etc.
  // For demo, just return a placeholder URL
  res.json({ url: "https://your-storage.com/" + req.file.filename });
});

export default apiRoute;
export const config = { api: { bodyParser: false } };