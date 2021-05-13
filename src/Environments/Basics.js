import {
  PerspectiveCamera,
  Scene
} from 'three';

/* ============================================================= */

// -------- GENERAL PARAMETERS -------- //

// None

// -------- GENERAL METHODS -------- //

var DefaultCamera = (function () {

  return new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

});

var DefaultScene = (function () {

  return new Scene();

});

/* ============================================================= */

class Basics {

  constructor(params) {

    // -------- PARAMETERS -------- //

    this.camera = params.camera !== undefined ? params.camera : DefaultCamera();
    this.scene = params.scene !== undefined ? params.scene : DefaultScene();

  }

  // -------- METHODS -------- //

  // Object
  addObject(object_name, object) {

    object.name = object_name;
    this.scene.add(object);

  }

  getObject(object_name) {

    return this.scene.getObjectByName(object_name);

  }

  // -------- GETTERS -------- //

  get camera() {

    return this._camera;

  }

  get scene() {

    return this._scene;

  }

  // -------- SETTERS -------- //

  set camera(value) {

    this._camera = value;

  }

  set scene(value) {

    this._scene = value;

  }

}

/* ============================================================= */

/**
 * Exports
 */
export {
  Basics,
}