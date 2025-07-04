import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { storage } from "./firebase"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function uploadImage(file: File, path: string): Promise<string> {
  try {
    const storageRef = ref(storage, path)
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    return downloadURL
  } catch (error) {
    console.error("Error uploading image:", error)
    throw error
  }
}

export async function deleteImage(path: string): Promise<void> {
  try {
    const storageRef = ref(storage, path)
    await deleteObject(storageRef)
  } catch (error) {
    console.error("Error deleting image:", error)
    throw error
  }
}

export function generateUniqueFileName(file: File): string {
  const extension = file.name.split('.').pop()
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 8)
  return `${timestamp}-${randomString}.${extension}`
}
