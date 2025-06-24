# ===== Stage 1: Build =====
FROM node:18-alpine AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài đặt tất cả dependencies (cả dev)
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# ===== Stage 2: Production =====
FROM node:18-alpine AS production

WORKDIR /app

# Chỉ copy package*.json để cài đặt production dependencies
COPY package*.json ./

# Cài đặt chỉ dependencies cần thiết cho production
RUN npm install --production

# Copy thư mục `.next`, `public`, và các file cần thiết để chạy app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public


# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["npm", "start"]
