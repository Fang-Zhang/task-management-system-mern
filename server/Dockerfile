# Base Image
FROM node

# Define working directory of a Docker container
WORKDIR /app

# Optimisation step for running the Dockerfile
# If no changes in package.json, `npm install` step is skipped
COPY package.json .

# Running NPM to install dependencies in package.json files
RUN npm install

# Copying all files in the folder into the working directory
COPY . .

# Expose PORT from within the container to the host machine
# EXPOSE 3002

# # using node modules on the image
# VOLUME ["/app/node_modules"]

# Command to run app.js (NodeJS)
CMD ["npm", "run", "dev"]