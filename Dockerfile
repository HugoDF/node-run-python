FROM node:10

WORKDIR /app
COPY . .

CMD ["npm", "start"]
