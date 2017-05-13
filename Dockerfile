FROM resin/%%RESIN_MACHINE_NAME%%-node:slim

RUN wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key &&\
    sudo apt-key add mosquitto-repo.gpg.key &&\
    rm mosquitto-repo.gpg.key &&\
    cd /etc/apt/sources.list.d/ &&\
    sudo wget http://repo.mosquitto.org/debian/mosquitto-repo.list &&\
    apt-get update && apt-get install -yq \
    mosquitto mosquitto-clients &&\
    apt-get clean && rm -rf /var/lib/apt/lists/*


WORKDIR /usr/src/app

COPY package.json package.json

RUN JOBS=MAX npm install --production --unsafe-perm && npm cache clean && rm -rf /tmp/*

COPY . ./

ENV INITSYSTEM on

CMD ["npm", "start"]
