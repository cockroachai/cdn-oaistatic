FROM caddy
COPY ./resource/public /var/www/html
COPY ./resource/Caddyfile /etc/caddy/Caddyfile