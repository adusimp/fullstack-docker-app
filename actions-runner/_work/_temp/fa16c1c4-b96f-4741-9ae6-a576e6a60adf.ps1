$ErrorActionPreference = 'stop'
dir ./frontend
if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }