#!/bin/sh

# sync database
echo "synchronizing db..."
npm run prisma:migrate init
# start server
echo "initialize server..."
node dist/src/index.js