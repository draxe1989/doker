FROM node:24-alpine
WORKDIR /opt/app/server
COPY *.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]