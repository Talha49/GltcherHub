import { storage } from '@/app/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image');
    const zipFile = formData.get('zip');
    const pdfFile = formData.get('pdf');
    const docFile = formData.get('doc');

    // Ensure at least one file is present
    if (!imageFile && !zipFile && !pdfFile && !docFile) {
      return NextResponse.json({ error: 'Files are missing' }, { status: 400 });
    }

    const uploadFile = async (file, folder) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const storageRef = ref(storage, `${folder}/${file.name}`);
      const metadata = { contentType: file.type };

      const uploadTask = uploadBytesResumable(storageRef, buffer, metadata);

      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error('Upload error:', error);
            reject('Error uploading file');
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          }
        );
      });
    };

    // Upload files based on their type
    const uploadResults = {};

    if (imageFile) {
      uploadResults.imageUploadUrl = await uploadFile(imageFile, 'images');
    }
    if (zipFile) {
      uploadResults.zipUploadUrl = await uploadFile(zipFile, 'zips');
    }
    if (pdfFile) {
      uploadResults.pdfUploadUrl = await uploadFile(pdfFile, 'pdfs');
    }
    if (docFile) {
      uploadResults.docUploadUrl = await uploadFile(docFile, 'docs');
    }

    return NextResponse.json(uploadResults);
  } catch (error) {
    console.error('Error handling upload:', error);
    return NextResponse.json({ error: 'Error handling upload' }, { status: 500 });
  }
}
