set -a 

. ./.env
. ./.vars

set +a

CONTAINER=$PREFIX-ide

PUID=$(id -u)
PGID=$(id -g)
PUSER=$(whoami)
HOSTNAME=$PREFIX'-dev'
IS_EXIST=$(docker ps | grep "$CONTAINER")

if [[ ! -z $IS_EXIST ]]; then

	echo "is exist $IS_EXIST"
	docker exec -it $CONTAINER bash -c "sudo -iu $PUSER"

	exit

fi



docker run -it --rm \
	-h $HOSTNAME \
	-v $SRC:$DST \
	-v $TMP:$DST_TMP \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
    	-v /var/run/docker.sock:/var/run/docker.sock \
	-e DISPLAY=$DISPLAY \
	-e PUID=$PUID -e PGID=$PGID \
	-e PUSER=$PUSER \
	-v $SRC/home:$HOME \
	--name $CONTAINER \
	-p $EXT_PORT:$IN_PORT \
    	-p $SSH_PORT:22 \
	$IMAGE

