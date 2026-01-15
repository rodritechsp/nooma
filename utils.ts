/**
 * Converts a Google Drive share link to a direct download/stream link
 * @param url The shareable link from Google Drive
 * @returns A direct link suitable for <audio> or <img> tags
 */
export const getGoogleDriveDirectLink = (url: string): string => {
    // If it's already a direct google user content link, return it
    if (url.includes('googleusercontent.com') || url.includes('drive.google.com/uc')) {
        return url;
    }

    // Handle standard drive file links: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    const fileIdMatch = url.match(/\/d\/(.+?)\//);
    if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }

    return url;
};

export const formatTime = (seconds: number): string => {
    if (!seconds) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};