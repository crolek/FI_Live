#!/bin/sh

export NODE_PATH=lib
export NODE_ENV=production
forever start server.js