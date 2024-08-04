"use client";
import { useState, useEffect } from 'react';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import { IoIosArrowForward } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { storage } from '@/app/firebase';

const Source = ({ onClose }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const imageFiles = await listFiles('images');
        const zipFiles = await listFiles('zips');

        // Combine image files and zip files along with their titles
        const combinedFiles = imageFiles.map((imageFile, index) => ({
          title: imageFile.name.split('.')[0], 
          image: imageFile,
          zip: zipFiles[index] || null,
        }));

        setFiles(combinedFiles);
      } catch (error) {
        console.error('Error fetching files:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const listFiles = async (folderName) => {
    const folderRef = ref(storage, folderName);
    const fileList = await listAll(folderRef);
    return await Promise.all(
      fileList.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { name: item.name, url };
      })
    );
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-lg text-gray-700">
        <div className="section-center">
          <div className="section-path">
            <div className="globe">
              <div className="wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between p-2 border-b sticky top-0 bg-white">
        <div className="text-center flex justify-center items-center">
          <p>Home</p>
          <IoIosArrowForward size={20} className="text-gray-500" />
          <p>Source Codes</p>
          <IoIosArrowForward size={20} className="text-gray-500" />
        </div>
        <button onClick={onClose}>
          <RiCloseFill size={25} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
  {files.length > 0 ? (
    files.map((file, index) => (
      <div key={index} className="border p-4 rounded shadow-lg">
        <h2 className="font-bold mb-2">{file.title}</h2>
        <img
          src={file.image.url}
          alt="Uploaded content"
          className="w-full h-40 object-cover mb-2"
        />
        {file.zip && (
          <button
            onClick={() => window.open(file.zip.url, '_blank')}
            className="bg-blue-500 text-white p-2 rounded w-full mt-2"
          >
            Download Zip
          </button>
        )}
      </div>
    ))
  ) : (
    <div className="text-center py-6">
      <h2>No Codes available at this time</h2>
    </div>
  )}
</div>
    </div>
  );
};

export default Source;
