FROM nginx:stable

COPY nginx/conf.d /etc/nginx/conf.d
COPY wp /var/www/wp

CMD ["nginx", "-g", "daemon off;"]