# Stage 1: build React app
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

# Build with backend URL for docker network
ARG REACT_APP_BACKEND_URL=http://backend:5000
RUN REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL npm run build

# Stage 2: serve with nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000:80

CMD ["nginx", "-g", "daemon off;"]
