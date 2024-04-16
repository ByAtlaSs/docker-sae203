FROM debian:latest

FROM nginx:latest

COPY . /usr/share/nginx/html

COPY . /videos /videos

EXPOSE 80