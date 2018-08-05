FROM node
RUN npm install -g ionic
COPY /entrypoint.sh /ionic-app/entrypoint.sh
WORKDIR /ionic-app
RUN chmod +x ./entrypoint.sh
