
FROM node:19-alpine AS deps
RUN ls
WORKDIR /app

COPY . .
RUN  npm install --production

FROM  node:19-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn install
RUN npm run build

FROM node:19-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./ui/.next
COPY --from=builder /app/node_modules ./ui/node_modules
COPY --from=builder /app/package.json ./ui/package.json

USER nextjs

ENV PORT 3000
WORKDIR /app/ui
CMD ["npm", "start"]
