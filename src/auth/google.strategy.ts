import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy, VerifyCallback} from "passport-google-oauth20"
import { config } from "dotenv";
config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID: String(process.env.GOOGLE_CLIENT_ID),
            clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
            callbackURL: 'http://localhost:3000/auth/google/redirect',
            scope:['email', 'profile']
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback
    ):Promise<any> {
        const {name, emails, photos} = profile;
        const user = {
            email:emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        done(null,user);
    } 
        
    
}