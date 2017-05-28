import {settings} from 'cluster';
import {ensureDir, ensureFile} from 'fs-extra';
import {join} from 'path';

const homeDirectory = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
const homeDir = join(homeDirectory, '.electro-weather');
const settingsFilePath = join(homeDir, 'settings.json');
const savedPlacesFilePath = join(homeDir, 'places.json');

export function getSettingsFilePath() {
    return settingsFilePath;
}

export function getSavedPlacesFilePath() {
    return savedPlacesFilePath;
}

async function ensureSettingsDirectoryExists() {
    return new Promise((resolve, reject) => {
        ensureDir(homeDir, (err) => err ? reject(err) : resolve());
    });
}

async function ensurePlacesFileExists() {
    return new Promise((resolve, reject) => {
        ensureFile(savedPlacesFilePath, (err) => err ? reject(err) : resolve());
    });
}

export async function ensureAppIntegrity() {
    try {
        await ensureSettingsDirectoryExists();
        await ensurePlacesFileExists();
        return true;
    } catch (err) {
        return false;
    }
}
