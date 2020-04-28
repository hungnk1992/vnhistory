import { action, observable, runInAction, configure } from "mobx";
import { user_info } from "../utils/data/about"

configure({ enforceActions: "observed" });
class AboutStore {
    @observable userInfo = [];

    @action
    async getAdminInfo() {
        // for temp when BE avaiable, remove it to use BE information.
        let temp = user_info;
        console.log ("ST is done: ", temp);
        if (temp) {
            runInAction(() => {
                this.userInfo = temp;
            })
        }
    }
}

export default AboutStore;
