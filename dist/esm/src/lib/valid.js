import { stat } from 'fs/promises';

async function isFile(path) {
    const file = await stat(path);
    return file.isFile();
}
async function isDirectory(path) {
    const file = await stat(path);
    return file.isDirectory();
}

export { isDirectory, isFile };
