# base image
FROM node:9.8.0

# set working directory
RUN mkdir /usr/src/headshot_frontend
WORKDIR /usr/src/headshot_frontend

# add `/usr/src/headshot_frontend/node_modules/.bin` to $PATH
ENV PATH /usr/src/headshot_frontend/node_modules/.bin:$PATH

# install and cache headshot_frontend dependencies
COPY package.json /usr/src/headshot_frontend/package.json
RUN npm install
# RUN npm install react-scripts@1.1.1 -g --silent
# RUN npm run build

# start app
CMD ["npm", "start"]
