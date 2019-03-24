FROM    node:10.15.3-alpine as builder
WORKDIR /app
COPY    . .
RUN     NODE_ENV=development yarn install
RUN     NODE_ENV=production yarn build

FROM    node:10.15.3-alpine
WORKDIR /app
COPY    --from=builder /app/build .
COPY    --from=builder /app/serve.js serve.js
COPY    --from=builder /app/LICENSE LICENSES
ENV     NODE_ENV production
RUN     yarn install
CMD     ["node", "serve.js"]
