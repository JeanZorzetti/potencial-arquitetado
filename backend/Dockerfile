# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Install curl for the HEALTHCHECK
RUN apt-get update && apt-get install -y curl

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
# Use --omit=dev to not install devDependencies
RUN npm install --omit=dev

# Copy the rest of the application code to the working directory
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define the health check
# This will check the /health endpoint every 30 seconds after an initial 5-second delay
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

# Run the app when the container launches
CMD ["node", "server.js"]