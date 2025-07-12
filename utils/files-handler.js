import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

function scanAllDir(dir) {
    let result = [];
    console.log(dir)
    fs.readdirSync(dir).forEach((filename) => {
        if (filename.startsWith('.')) return;

        const filePath = path.join(dir, filename);

        if (fs.statSync(filePath).isDirectory()) {
            scanAllDir(filePath).forEach((child) => {
                result.push(`${filename}/${child}`);
            });
        } else {
            result.push(filename);
        }
    });

    return result;
}

function scanFolder(dir) {
    const result = [];

    fs.readdirSync(dir).forEach((filename) => {
        if (filename.startsWith('.') || filename === 'php') return;

        const filePath = path.join(dir, filename);
        if (fs.statSync(filePath).isDirectory()) {
            result.push(filename);
        }
    });

    return result;
}

function hashFileSha1(filePath) {
    const buffer = fs.readFileSync(filePath);
    return crypto.createHash('sha1').update(buffer).digest('hex');
}

function dirToArray(dir, req) {
    const res = [];
    const files = scanAllDir(dir);

    files.forEach((relativePath) => {
        const fullPath = path.join(dir, relativePath);
        const size = fs.statSync(fullPath).size;
        const hash = hashFileSha1(fullPath);
        
        const url = `${req.protocol}://${req.get('host')}/${fullPath}`;
        
        
        res.push({
            url,
            size,
            hash,
            path: relativePath
        });
    });

    return res
}

export default {
    scanAllDir,
    scanFolder,
    dirToArray
};