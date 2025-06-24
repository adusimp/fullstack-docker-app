$ErrorActionPreference = 'stop'
docker build -t binhanvku462004/my-fullstack-backend:latest ./backend
if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }