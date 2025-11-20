import { useState } from 'react';
import { uploadToCloudinary } from '../lib/cloudinary';
import api from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function CreateListingScreen() {
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    if (!imageFile) return toast.error("Add an image");

    setUploading(true);
    try {
      const imageUrl = await uploadToCloudinary(imageFile);
      await api.post('/products', {
        title: e.target.title.value,
        price: e.target.price.value,
        category: e.target.category.value,
        condition: e.target.condition.value,
        hall: e.target.hall.value,
        description: e.target.description.value,
        image_url: imageUrl,
      });
      toast.success("Posted!");
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error("Failed to post");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handlePost} className="p-6">
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} required />
      <input name="title" placeholder="Title" required />
      <input name="price" placeholder="₦ Price" required />
      {/* ... other fields */}
      <button disabled={uploading}>
        {uploading ? 'Uploading...' : 'Post Item'}
      </button>
    </form>
  );
}