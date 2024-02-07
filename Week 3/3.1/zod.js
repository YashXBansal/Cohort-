const z = require("zod");

function ValidateInput(obj){
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);    
}

ValidateInput({
    email: "yashbansal414@gmail.com",
    password: "Yash_2004"
})