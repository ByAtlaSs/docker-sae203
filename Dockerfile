FROM debian:latest

FROM jellyfin/jellyfin

EXPOSE 8096

COPY config /config

CMD ["jellyfin", "--config", "/config"]