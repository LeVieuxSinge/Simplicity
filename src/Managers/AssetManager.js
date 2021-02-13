import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

/* ============================================================= */

// -------- GENERAL PARAMETERS -------- //

var LoaderGTLF = new GLTFLoader();

// -------- GENERAL METHODS -------- //

var LoadGLTF = (function (asset) {

  return new Promise(resolve => {
    try {
      // Load using GLTF loader
      LoaderGTLF.load(asset.url, (gltf) => {
        // Store value
        asset.value = gltf;
        // Set as loaded
        asset.loaded = true;
        // Ouput
        resolve(gltf);
      });
    } catch (error) {
      console.error(error);
    }
  });

})

/* ============================================================= */

class AssetManagerClass {

  constructor(params) {

    // -------- PARAMETERS -------- //

    this.assets = [];

  }

  // -------- METHODS -------- //

  add(label, url, type) {

    // Push new asset in array
    this.assets.push({
      label: label,
      url: url,
      type: type,
      loaded: false,
      value: null,
    });

  }

  get(label) {

    // Return asset value with corresponding label
    var output = this.assets.find(e => e.label === label);
    return output.value;

  }

  async load() {

    // Execute load function on each object
    if (this.assets.length) {
      for (let i = 0; i < this.assets.length; i++) {
        const e = this.assets[i];
        // Call load function according to type
        if (e.type === 'GLTF') {
          await LoadGLTF(e);
        }
      }
    }

  }

  // -------- GETTERS -------- //

  get ratio() {

    // Count loaded assets
    if (this.assets.length) {
      var count = 0;
      this.assets.forEach(e => {
        if (e.loaded) {
          count++;
        }
      });
      // Output ratio from 0 to 1
      return count / this.assets.length;
    } else {
      return 0;
    }

  }

  // -------- SETTERS -------- //

  // None

}

/* ============================================================= */

/**
 * Exports
 */
export {
  AssetManagerClass as AssetManager,
}