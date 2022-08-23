FROM alpine

# enter this directory
WORKDIR /app

RUN apk add npm

COPY package.json .

# install node modules
RUN npm install

# combine this code from source to destination
COPY . .

# EXPOSE 3002

# # using node modules on the image
# VOLUME ["/app/node_modules"]

CMD ["npm", "start"]