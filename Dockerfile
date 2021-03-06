#base image
FROM node:16-alpine AS BUILD_IMAGE
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn  --network-timeout 100000
COPY . .
RUN yarn build
RUN rm -rf node_modules
RUN yarn --production --network-timeout 100000


FROM node:16-alpine
ENV NODE_ENV production
RUN mkdir -p /usr/app/
WORKDIR /usr/app
COPY --from=BUILD_IMAGE /usr/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /usr/app/package.json ./
COPY --from=BUILD_IMAGE /usr/app/yarn.lock ./
COPY --from=BUILD_IMAGE /usr/app/public ./public
COPY --from=BUILD_IMAGE /usr/app/.next ./.next
EXPOSE 3000
CMD yarn start

