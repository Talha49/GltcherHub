"use client";
import ProtectedRoute from '@/app/_componenents/ProtectedRoute/ProtectedRoute';
import { useState } from 'react';


const Upload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [zipFile, setZipFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile || !zipFile) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('zip', zipFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      alert('Files uploaded successfully.');
      setImageFile(null);
      setZipFile(null);
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-4 h-screen">
        <h1 className="text-2xl font-bold mb-4">Upload Files</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setImageFile)}
            accept="image/*"
            className="w-full p-2 border rounded"
          />
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setZipFile)}
            accept=".zip"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded w-full ${isLoading && 'animate-pulse'}`}
          >
            {isLoading ? 'Uploading...' : 'Upload Files'}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default Upload;