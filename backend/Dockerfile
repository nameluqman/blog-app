# --- Build Stage ---
# Use a larger Node.js image for building and installing dependencies
FROM node:18-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's cache
# This means if only your source code changes, npm install won't re-run
COPY package.json package-lock.json* ./

# Install production dependencies only
# The --omit=dev flag is crucial for smaller node_modules
RUN npm install --omit=dev --unsafe-perm

# Copy the rest of your application code
COPY . .

# --- Production Stage ---
# Use a minimal Node.js Alpine image for the final runtime
FROM node:18-alpine

WORKDIR /app

# Copy only the necessary files from the builder stage
# /app/node_modules from the builder stage (production dependencies)
COPY --from=builder /app/node_modules ./node_modules
# Your application code
COPY --from=builder /app/index.js ./index.js
# If you have other JS files or folders (e.g., 'src', 'dist', 'routes', 'models')
# COPY --from=builder /app/src ./src
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/<your-other-folders> /app/<your-other-folders>

# Expose the port your backend listens on
EXPOSE 5000

# Command to run your application
CMD ["node", "index.js"]