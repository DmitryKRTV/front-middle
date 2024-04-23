PWD=$(pwd)
docker build -f $PWD/Dockerfile --build-arg VERSION=1.0 -t ide:v1.0 .
