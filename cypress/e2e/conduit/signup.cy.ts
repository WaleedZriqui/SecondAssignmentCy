import addUser from "./support/signupHelper"

describe('Signup testing', () => {
    it('User should be able to create a new account', () => {
        addUser.addNewUserViaAPI();
    })
})