import CredentialsProvider  from "next-auth/providers/credentials";
export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Email'} ,
                password: { label: 'Password', type: 'password', placeholder: 'Password'} ,
            },
            async authorize(credentials: any) {
                // const username = credentials.username;
                // const password = credentials.password;
                // const user = await prisma.user.findOne({
                //     where: {
                //         email: username,
                //         password: password
                //     }
                // })
                // return {
                //     id: user.id,
                //     email: user.email
                // }
                console.log(credentials);
                return { 
                    id: "1",
                    name: "yash",
                    email: "bansal@gmail.com"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // signIn: ({user}) => {
        //     if(user.email == "randomperson@gmail.com"){
        //         return false
        //     }
        //     return true;
        // }
        // jwt: ({token, user}) => {
        //     token.userId = token.sub;
        //     return token;
        // },
        session: ({session, token, user}: any) => {
            if(session && session.user){
                session.user.id = token.userId; // token.sub
            }
            return session;
        }
    }
}