import AboutStore from "./AboutStore";

export default class RootStore {
    constructor() {
        this.aboutStore = new AboutStore();
    }
}
