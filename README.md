[![Build Status](https://travis-ci.org/transloadit/uppy-server.svg?branch=master)](https://travis-ci.org/transloadit/uppy-server)

# uppy-server

## Install

```bash
npm install uppy-server
```

## Configure

```bash
cp env.example.sh env.sh
$EDITOR env.sh
```

## Run

For local development:

```bash
npm run start
```

In production

```bash
# As a privileged user run:
source env.sh
# Then as a an non-privileged user run:
npm run start:production
# this effectively injects secrets into the non-priviliged process' memory, without giving it file access to the secrets
```

An example server is running at http://server.uppy.io, which is deployed via 
[Frey](https://github.com/kvz/frey), using the following [Freyfile](infra/Freyfile.toml).

All the secrets are stored in `env.infra.sh`, so using `env.infra.example.sh`, you could
use the same Freyfile but target a different cloud vendor with different secrets, and run your own
uppy-server.

## Logging

Requires Frey, if you haven't set it up yet type

```bash
npm run install:frey
```

afterwards, production logs are available through:

```bash
npm run logtail
```

This requires at least the `FREY_ENCRYPTION_SECRET` key present in your `./env.sh`.
