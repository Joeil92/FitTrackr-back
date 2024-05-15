import UserRepository from "../repositories/user/userRepository";
import AuthService from "../services/authService";
import { Credentials } from "../shared/types/credentials.interface";

export default class AuthCase {
    constructor(
        private repository = new UserRepository(),
        private authService = new AuthService()
    ) { }

    public async auth(credentials: Credentials): Promise<string> {
        if (!credentials.email || !credentials.password) throw new Error('email or password cannot be empty');

        return await this.repository.findByEmail(credentials.email)
            .then(users => {
                const user = users[0]

                if (!user) throw new Error('Incorrect email or password');

                const comparePassword = this.authService.comparePassword(credentials.password, user.password);

                if (!comparePassword) {
                    throw new Error('Incorrect email or password');
                }

                const payload = {
                    id: user.id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    roles: user.roles
                };

                return this.authService.generateToken(payload);
            })
    }
}