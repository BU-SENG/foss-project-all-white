export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'campus_hub'); // ← Create this preset in Cloudinary (unsigned)

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.secure_url; // Permanent, optimized, CDN-hosted
};