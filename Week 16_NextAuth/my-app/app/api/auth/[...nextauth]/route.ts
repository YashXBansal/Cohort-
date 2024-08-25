import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";


const handler = NextAuth({
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
                    id: "user1",
                    name: "yash",
                    email: "dfasas"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler;
export const POST = handler;