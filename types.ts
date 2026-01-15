export interface Track {
    id: number | string; // Changed to support String IDs from Drive
    title: string;
    subtitle: string;
    img: string; // Will use a default image or thumbnail Link
    duration: string;
    category?: string;
    hz?: string; // Can be parsed from filename
    audioUrl: string; // Google Drive direct link
    driveId?: string; // New: ID from Drive
    mimeType?: string; // New: MimeType
}

export interface CategoryData {
    id: string; // Drive Folder ID
    title: string;
    items: Track[];
}

export interface FrequenciesData {
    [key: string]: Track[]; // Changed to index signature to support dynamic keys
}

export interface AudioContextType {
    currentTrack: Track | null;
    isPlaying: boolean;
    progress: number; // 0 to 100
    currentTime: number; // in seconds
    duration: number; // in seconds
    categories: CategoryData[]; // New: Dynamic categories from Drive
    isLoading: boolean; // New: Loading state
    playTrack: (track: Track) => void;
    togglePlay: () => void;
    seek: (time: number) => void;
    playNext: () => void;
    playPrev: () => void;
}