import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { dbUsers } from '@/database';
 
declare module "next-auth" {
    interface Session {
      accessToken?: string;
    }
    interface User {
        id?: string
        _id: string
    }
};
 
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    Credentials({
        name: 'Custom Login',
        credentials: {
            email:{ label:'Correo:', type:'email', placeholder:'correo@google.com' },
            password: { label:'Contraseña:', type:'password', placeholder:'Contraseña' }
        },
        async authorize(credentials) {
            // console.log({credentials});
            
            //TODO: validar contra base de datos
            const user = { _id: "1", name: "J Smith", email: "jsmith@example.com" };
            return await dbUsers.checkUserEmailPassword( credentials!.email, credentials!.password );
            // return user;
        },
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
       allowDangerousEmailAccountLinking: true,
  }),
  ],

  // Custom Pages
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register'
  },

  session: {
    maxAge: 2592000, // 30d
    strategy: 'jwt',
    updateAge: 86400, // cada día
  },
 
  //Callbacks
  callbacks: {
    async jwt({ token, account, user }) {
        //console.log({ token, account, user });
        if( account ){
            token.accessToken = account.access_token;
 
            switch ( account.type ) {
                case 'oauth':
                    //TODO: Crear usuario o verificar en Base de datos
                    token.user = await dbUsers.oAUthToDbUser( user?.email || '', user?.name || '' );
                    break;
 
                case 'credentials':
                    token.user = user;
                    break;
            }
 
        }
        return token;
    },
 
    async session({ session, token, user }){
        //console.log({ session, token, user });
        
        session.accessToken = token.accessToken as any;
        session.user = token.user as any;
 
        return session;
    }
  }
};

 
export default NextAuth(authOptions);