class AuthController {

    async login() {
        return [
            {
                authController: "login",
            }
        ]
    }

    async logout() {
        return [
            {
                authController: "logout",
            }
        ]
    }

    async register() {
        return [
            {
                authController: "register",
            }
        ]
    }

}

module.exports = AuthController;