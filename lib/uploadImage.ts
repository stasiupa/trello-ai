import { ID, storage } from "@/appwrite"

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    "64e37ddec6fe91aa6df6",
    ID.unique(),
    file
  );
  return fileUploaded
}

export default uploadImage;