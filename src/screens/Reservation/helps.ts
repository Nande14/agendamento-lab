export const formatDate = (dateString: string) => dateString.split("T")[0];

export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
