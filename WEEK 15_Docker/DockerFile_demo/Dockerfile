FROM node:20 

WORKDIR /user/src/app dfas

COPY package* .
COPY ./prisma . 

# Only if there are any change in package files or prima folder, then only npm i and npx prisma generate will work.

RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]