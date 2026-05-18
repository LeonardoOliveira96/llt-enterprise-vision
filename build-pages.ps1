# Script para fazer build para GitHub Pages no Windows
$env:VITE_BUILD_TARGET = "github-pages"
& vite build
