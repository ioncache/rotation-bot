#!/bin/bash

# encrypt .envrc, used for local dev
sops -e --gcp-kms projects/rotation-bot-313512/locations/global/keyRings/rotation-bot-local-dev/cryptoKeys/rotation-bot-admin-sops-key .envrc > envrc.sops
