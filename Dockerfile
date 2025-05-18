FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git curl zip unzip libonig-dev libxml2-dev libpng-dev \
    libjpeg-dev libfreetype6-dev libzip-dev libpq-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd zip

COPY --from=composer:2.5 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN chmod -R 755 /var/www/storage

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
