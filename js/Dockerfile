FROM nginx:1.28.2-alpine-slim

COPY index.html /usr/share/nginx/html/index.html
# COPY nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
