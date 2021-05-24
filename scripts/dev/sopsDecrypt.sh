#!/bin/bash

# decrypt .envrc, used for local dev
sops -d envrc.sops > .envrc
