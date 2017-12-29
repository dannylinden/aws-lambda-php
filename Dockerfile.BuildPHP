# Compile PHP 7.1.0RC5 with static linked dependencies
# to create a single running binary

FROM ubuntu

ARG PHP_VERSION

RUN apt-get update && apt-get install -y \
    git \
    autoconf \
    wget \
	libcurl4-openssl-dev \
	libjpeg-dev \
	libpng-dev \
	libxpm-dev \
	libmysqlclient-dev \
	libpq-dev \
	libicu-dev \
	libfreetype6-dev \
	libldap2-dev \
	libxslt-dev \
	build-essential \
	libssl-dev \
	libgmp-dev \
	libpspell-dev \
	librecode-dev \
	php-mysql

RUN git clone -b $PHP_VERSION https://github.com/php/php-src /php-src/

WORKDIR /php-src

RUN ln -s /usr/include/x86_64-linux-gnu/gmp.h /usr/include/gmp.h

RUN wget http://launchpadlibrarian.net/140087283/libbison-dev_2.7.1.dfsg-1_amd64.deb
RUN wget http://launchpadlibrarian.net/140087282/bison_2.7.1.dfsg-1_amd64.deb

RUN dpkg -i libbison-dev_2.7.1.dfsg-1_amd64.deb
RUN dpkg -i bison_2.7.1.dfsg-1_amd64.deb

RUN ./buildconf --force

RUN ./configure \
    --prefix=$HOME/php7/usr \
    --with-config-file-path=$HOME/php7/usr/etc \
    --without-pear \
    --enable-shared=no	\
    --enable-static=yes	\
    --enable-mbstring \
    --enable-zip \
    --enable-bcmath \
    --enable-pcntl \
    --enable-exif \
    --enable-calendar \
    --enable-sysvmsg \
    --enable-sysvsem \
    --enable-sysvshm \
    --enable-json \
    --with-curl \
    --with-iconv \
    --with-gmp \
    --with-gd \
    --enable-ctype \
    --enable-pdo \
    --with-mysqli=mysqlnd \
    --with-pdo-mysql=mysqlnd \
    --enable-gd-native-ttf \
    --enable-gd-jis-conv \
    --libdir=/usr/lib64 \
    --disable-opcache \
    --disable-cgi

RUN make

RUN make install

RUN strip /root/php7/usr/bin/php
