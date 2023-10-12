import { userAPIPayload } from "../API-Helpers/payloads/userAPIPayload";
import genericFunctions from "../genericFunctions";

export default class userInit{
    static initUser(): userAPIPayload {
        return {
            user: {
                username: `Waleed${genericFunctions.genericRandomNumber()}`,
                email:`waleedzriqui${genericFunctions.genericRandomNumber()}@gmail.com`,
                password: '392000'
            }
        }
    }
}