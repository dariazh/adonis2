class AuthController {

    async login({response}) {
        return [
            {
                login: "login"
            }
        ]
    }

}

module.exports = AuthController;