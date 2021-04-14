#!/bin/bash

mkdir -p /opt/.katacodacode/user-data/User/
cat << VSCODEEOF > /opt/.katacodacode/user-data/User/settings.json
{
  "workbench.startupEditor": "none",
  "files.exclude": {
    "**/.*": true,
    "go": true
  },
  "editor.semanticHighlighting.enabled": true,
}
VSCODEEOF
