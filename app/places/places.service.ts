import {readFile, writeFile} from "jsonfile";
import {getSavedPlacesFilePath, ensureAppIntegrity} from "../common/utils.service";
import {Place} from "../search/search.state";

export function savePlaces(places: {[key: string]: Place}) {
    return new Promise(async(resolve, reject) => {
        if (!await ensureAppIntegrity()) {
            reject('Files are not as they should be :(');
        }

        writeFile(getSavedPlacesFilePath(), places, {spaces: 2}, err => {
            err ? reject(err) : resolve();
        });
    });
}

export function getSavedPlaces(): Promise<Place[]> {
    return new Promise(async(resolve, reject) => {
        if (!await ensureAppIntegrity()) {
            reject('Files are not as they should be :(');
        }

        readFile(getSavedPlacesFilePath(), (err, settings) => {
            err ? resolve({}) : resolve(settings);
        });
    });
}
