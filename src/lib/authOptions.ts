import mongoose from "mongoose";
import {connectionStr} from '../lib/db'
import {User} from '../lib/modal/scme'
import bcrypt from 'bcryptjs'
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'


export const authOptions: NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                  };
                
                try {
                    await mongoose.connect(connectionStr);
                    const user = await User.findOne({email});
                    if(!user){
                        return null;
                    }

                   const passwordsMatch = await bcrypt.compare(password, user.password)
                   if(!passwordsMatch){
                    return null;
                   }

                   return user;
                } catch (error) {
                    console.log(error);
                }

            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/",
    },
};
