#!/bin/bash

# Path in local system to angular's build output
REL_PATH="../../dist/nuguidpianostudio/"

# To label our tar.gz dists stored locally.
OUT_PREFIX="./DIST_"
OUT_DATE=`date "+%F_%H:%M:%S"`
OUT_FILE=${OUT_PREFIX}${OUT_DATE}
OUT_TAR_FILE=${OUT_FILE}.tar.gz
LOC_ARC_PATH="../../tar_dists/"

# Server paths
SRV_DEPLOY_PATH="~/public_html/" # Where files need eventually go for webserver, on server, this links to SRV_DEPLOY_NEW
SRV_DEPLOY_OLD="~/OLD"
SRV_DEPLOY_OLD_WC='~/OLD/*'
SRV_DEPLOY_NEW="~/NEW"
SRV_DEPLOY_TMP="~/TMP"

# Server info
SRV_SSH_PORT="7822"
SRV_NAME="a2ss40.a2hosting.com"
SRV_USER_NAME="nuguidpi"
SRV_PASSWORD="IAmUsingSSHKeys..."
SAVE_LOCAL=1
DO_FAST_RSYNC=1 # TODO: 0 is actually broken.. hrmmm

echo "Just out of curiosity ... pwd = `pwd` "

# Tar the dist folder and archive/compress.
if (($SAVE_LOCAL==1))
then
	echo "Archiving... $OUT_TAR_FILE"
	tar -czvf${LOC_ARC_PATH}${OUT_TAR_FILE} -C${REL_PATH} .
	echo "Done!"
else
	echo "SAVE_LOCAL is false, proceeding without saving archive locally"
fi

# Deploy to server 
if (($DO_FAST_RSYNC==1))
then
	# This 99% of the time will work, and quickly.
	echo "rsync to ${SRV_USER_NAME}@${SRV_NAME}:${SRV_DEPLOY_PATH}"
	rsync -e"ssh -p${SRV_SSH_PORT}" -avz --delete --size-only ${REL_PATH} ${SRV_USER_NAME}@${SRV_NAME}:${SRV_DEPLOY_PATH}
else
	echo "do full copy"

	# I need to fix this part... something quirky occurs w/ connection when attempting to issue commands this way..
	# thankfully rsync method above is much faster and works anyway...

	# clear out the OLD and copy in our files
	#ssh -p${SRV_SSH_PORT} "${SRV_USER_NAME}@${SRV_NAME}" "rm -r ${SRV_DEPLOY_OLD_WC}"
	#scp -P${SRV_SSH_PORT} -r "${REL_PATH}*" "${SRV_USER_NAME}@${SRV_NAME}:${SRV_DEPLOY_OLD}/"

	# swap OLD and NEW
	#ssh -p${SRV_SSH_PORT} "${SRV_USER_NAME}@${SRV_NAME}" "mv $SRV_DEPLOY_OLD $SRV_DEPLOY_TMP"
	#ssh -p${SRV_SSH_PORT} "${SRV_USER_NAME}@${SRV_NAME}" "mv $SRV_DEPLOY_NEW $SRV_DEPLOY_OLD"
	#ssh -p${SRV_SSH_PORT} "${SRV_USER_NAME}@${SRV_NAME}" "mv $SRV_DEPLOY_TMP $SRV_DEPLOY_NEW"
fi

exit 0
