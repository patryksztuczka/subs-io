export const getFileExtensionFromPath = (filePath: string) => {};

export const getFileNameFromPath = (filePath: string): string => {
  const parts = filePath.split("\\");
  return parts[parts.length - 1];
};
