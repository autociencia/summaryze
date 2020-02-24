FROM alpine:3.11
LABEL maintainer="https://autociencia.blogspot.com"

WORKDIR /home

# updates source list
RUN apk update

# install required tools
RUN apk add git npm python3

# pip update
RUN pip3 install --upgrade pip

# Build dependencies
RUN apk add --no-cache --virtual .build-deps \
    gcc libc-dev libxml2-dev libxslt-dev python3-dev

# Project's setup
RUN git clone https://github.com/autociencia/summaryze.git
WORKDIR /home/summaryze
RUN python3 -m venv env
RUN . env/bin/activate
RUN pip3 install --no-cache-dir -r requirements.txt
RUN npm install

# Purge Build dependencies
RUN apk del .build-deps

EXPOSE 5000

CMD ["python3", "/home/summaryze/run.py"]