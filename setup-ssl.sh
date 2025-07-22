#!/bin/bash

# Script to setup Let's Encrypt certificates for mtflux.ru
set -e

DOMAIN="mtflux.ru"
EMAIL="your-email@example.com"  # Replace with your email

echo "🔒 Setting up Let's Encrypt certificates for $DOMAIN..."

# Create necessary directories
mkdir -p ssl
mkdir -p certbot/conf
mkdir -p certbot/www

# Stop any running containers
docker-compose down 2>/dev/null || true

# Start nginx with simple config for verification
echo "📋 Starting temporary nginx for domain verification..."
docker-compose -f docker-compose.simple.yml up -d

# Wait for nginx to start
sleep 10

# Get certificates using Docker Certbot
echo "🔑 Requesting certificates from Let's Encrypt..."
docker run --rm \
    --name certbot \
    -v "./certbot/conf:/etc/letsencrypt" \
    -v "./certbot/www:/var/www/certbot" \
    -v "./ssl:/ssl" \
    --network host \
    certbot/certbot \
    certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d $DOMAIN \
    -d www.$DOMAIN

# Copy certificates to ssl directory
echo "📁 Copying certificates..."
docker run --rm \
    -v "./certbot/conf:/etc/letsencrypt" \
    -v "./ssl:/ssl" \
    alpine/openssl \
    sh -c "
        cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /ssl/cert.pem &&
        cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /ssl/key.pem &&
        chmod 644 /ssl/cert.pem &&
        chmod 600 /ssl/key.pem
    "

# Stop simple nginx
docker-compose -f docker-compose.simple.yml down

# Start production nginx with SSL
echo "🚀 Starting production setup with SSL..."
docker-compose -f docker-compose.prod.yml up -d

echo "✅ SSL certificates installed successfully!"
echo "🌐 Your site should now be available at:"
echo "   https://$DOMAIN"
echo "   https://www.$DOMAIN" 