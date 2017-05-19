import {join} from "path";
import {settings} from "cluster";
import {ensureDir, ensureFile} from "fs-extra";

let homeDirectory = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
let homeDir = join(homeDirectory, '.electro-weather');
let settingsFilePath = join(homeDir, 'settings.json');
let savedPlacesFilePath = join(homeDir, 'places.json');

export function getSettingsFilePath() {
    return settingsFilePath;
}

export function getSavedPlacesFilePath() {
    return savedPlacesFilePath;
}

async function ensureSettingsDirectoryExists() {
    return new Promise((resolve, reject) => {
        ensureDir(homeDir, err => err ? reject(err) : resolve());
    });
}

async function ensurePlacesFileExists() {
    return new Promise((resolve, reject) => {
        ensureFile(savedPlacesFilePath, err => err ? reject(err) : resolve());
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