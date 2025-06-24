$ErrorActionPreference = 'stop'
docker login -u binhanvku462004 -p $DOCKERHUB_TOKEN
if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }