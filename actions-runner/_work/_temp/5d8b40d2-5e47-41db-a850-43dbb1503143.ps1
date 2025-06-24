$ErrorActionPreference = 'stop'
docker build -t binhanvku462004/my-fullstack-frontend:latest ./frontend
if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }