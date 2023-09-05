import { readFile } from 'fs/promises';
import { resolve } from 'path';

async function getPackage(path) {
    path = path || resolve(process.cwd(), 'package.json');
    const packages = await readFile(path, { encoding: 'utf-8' });
    return JSON.parse(packages);
}

export { getPackage };
