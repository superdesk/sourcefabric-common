export function getHumanReadableFileSize(fileSize: number): string {
    if (fileSize < 1024) {
        return fileSize + 'bytes';
    } else if (fileSize < 1048576) {
        return (fileSize / 1024).toFixed(1) + 'KB';
    } else {
        return (fileSize / 1048576).toFixed(1) + 'MB';
    }
}
