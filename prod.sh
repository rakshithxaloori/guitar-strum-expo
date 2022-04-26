#!/bin/bash

# Checkout to new branch
git checkout -b production

# Eject
expo eject

# Copy manifest files
rsync -a manifest/android/ android/app/src/

# Commit locally
git add -A
git commit -m "production"

# Build the profile - KEY STEP (envs)
eas build --profile production --platform android

# Checkout to main
git checkout main

# Delete production branch
git branch -D production

# Delete android and ios directories
rm -rf android
rm -rf ios
