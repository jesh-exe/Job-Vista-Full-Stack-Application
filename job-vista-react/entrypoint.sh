#!/bin/sh

echo "Generating runtime config.js with API URL: $API_URL"


# Generate the runtime config.js
echo "window._env_ = { API_URL: '${API_URL}' };" > /usr/share/nginx/html/config.js

# Start nginx
exec nginx -g "daemon off;"
