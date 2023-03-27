# Use an official Node.js runtime as the base image
FROM node:18

# Create app directory
RUN mkdir -p /app
# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /app

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
