# Stage 1: Build
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun --bun run build

# Stage 2: Production
FROM builder AS production

COPY --from=builder /app/build .

# Expose the application port
EXPOSE 3000
ENV PORT=3000

# Start the application
CMD ["bun", "run", "./build/index.js"]