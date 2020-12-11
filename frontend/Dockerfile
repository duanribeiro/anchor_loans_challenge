FROM node:10.16.0-alpine
WORKDIR /app
COPY . /app
RUN npm install --silent
EXPOSE 8081
ENV PATH /app/node_modules/.bin:$PATH
ENTRYPOINT ["/app/entrypoint.sh"]