const z = require('zod');

const signUpBody = z.object({
    FirstName: z.string(),
    LastName: z.string(),
    Password: z.string().min(6),
    email: z.string().email(),
})

const signInBody = z.object({
    Password: z.string().min(6),
    email: z.string().email(),
});

const updateBody = z.object({
    password: z.string().optional(),
    firstName :z.string().optional(),
    lastName: z.string().optional()
})

module.exports  = {
    signUpBody, signInBody, updateBody
};