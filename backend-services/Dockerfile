# Use Node.js 22 as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/api-jojos-click

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install only production dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS project
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start:prod"]
