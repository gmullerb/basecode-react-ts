#!/usr/bin/env bash
[ ! -z $(type -t chromium) ] && chromium --product-version
[ ! -z $(type -t chromium-browser) ] && chromium-browser --product-version
