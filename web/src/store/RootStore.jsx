import AboutStore from "./AboutStore";

export default class RootStore {
    constructor() {
        this.FileStore = new AboutStore();
    }
}
