

export class CustomMediaStore {
  async persist(files, options) {
    // Upload files to your backend or storage provider
    // Return an array of Media objects with { id, type, filename, directory, previewSrc }
    // Example: upload to /api/upload and get back URLs
    const uploaded = await Promise.all(
      files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const { url } = await res.json();
        return {
          id: url,
          type: "file",
          filename: file.name,
          directory: "",
          previewSrc: url,
        };
      })
    );
    return uploaded;
  }

  async list(options) {
    // Fetch media from your backend API
    const res = await fetch("/api/list-media");
    if (!res.ok) throw new Error("Failed to fetch media");
    const files = await res.json();
    // files should be an array of objects: { id, type, filename, directory, previewSrc }
    return files;
  }

  async delete(media) {
    // Delete file from your backend or storage provider
    // Return nothing
  }
}