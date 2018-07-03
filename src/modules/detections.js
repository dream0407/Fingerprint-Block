/****************************************************************/
/* -- Fingerprint Privacy --                                    */
/* Author: Christof Ferreira Torres                             */
/* Date: 16.09.2014                                             */
/* Update: 27.06.2018                                           */
/****************************************************************/
import Detection from '../classes/Detection.js';

let detections = {
    detections: [],

    /**
     * Load detections from browser local storage. 
     */
    loadDetections() {
        browser.storage.local.get("detections").then(function (result) {
            if (Object.getOwnPropertyNames(result).length != 0) {
                this.detections = result;
            }
        });
    },

    /**
     * Save detections to browser local storage.
     */
    saveDetections() {
        browser.storage.local.set({ "detections": this.detections });
    },

    /**
     * Removes detections.
     */
    clearDetections() {
        this.detections = [];
    },


    /**
     * Gets the detection for a domain.
     * If the detection for a domain does not exist, it returns 'undefined'.
     * @param {*} domain
     * @returns detection 
     */
    getDetection(domain) {
        return this.detections.find(
            h => h.domain.toLowerCase() === domain.toLowerCase()
        );
    },

    /**
     * Retunrs the index of the detection for a domain.
     * If the detection for a domain does not exist, it returns -1.
     * @param {*} domain 
     */
    getDetectionIndex(domain) {
        return detections.findIndex(
            h => h.domain.toLowerCase() === domain.toLowerCase()
        );
    },

    /**
     * Adds a detection to the array of detections.
     * @param {*} detection
     */
    addDetection(detection) {
        this.detections.push(detection);
    },

    /**
     * Removes detection for a domain from the array of detections.
     * @param {*} domain 
     */
    deleteDetection(domain) {
        let index = this.getDetectionIndex(domain);
        if (index != -1) {
            this.detections.slice(index, 1);
        }
    },

    /**
     * Gets an attribute with a name of the detection for a domain.
     * If the detection for a domain does not exist, it returns 'undefined'.
     * @param {*} domain 
     * @param {*} name
     * @returns attribute
     */
    getAttribute(domain, name) {
        let detection = this.getDetection(domain);
        if(detection) {
            return detection.getAttribute(name);
        }
        return undefined;
    },

    /**
     * Removes the attribule with a name from the detection 
     * with a domain from the array of detections.
     * @param {*} domain 
     * @param {*} name 
     */
    deleteAttribute(domain, name) {
        let detection = this.getDetection(domain);
        if(detection) {
            detection.removeAttribute(name);
        }
    },

    /**
     * Gets all detections.
     * @returns all detections
     */
    getAllDetections() {
        return this.detections;
    }
}
export default detections;