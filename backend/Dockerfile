# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first to cache npm install
COPY package*.json ./

# Install dependencies (bao gồm mysql2 & redis)
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose cổng backend đang chạy (giả sử 3000)
EXPOSE 3000

# Start server
CMD ["node", "src/index.js"]
