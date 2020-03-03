export LANG=ko_KR.UTF-8;
export LANGUAGE=ko_KR.UTF-8;locale-gen;
source ~/.profile; [ ! -f ~/.custom_env ] || source ~/.custom_env;
clear;
if [ ! -z "56833" -a ! -z "59201" ];
then
set -a && REACT_NATIVE_PACKAGER_HOSTNAME="15.165.76.124" && set +a
echo "{ manifestPort: 56833 }" > ./.exprc
jq ".expo.packagerOpts.port=59201" ./app.json > _tmp.json && mv _tmp.json ./app.json
socat TCP4-LISTEN:19000,reuseaddr,fork TCP4:127.0.0.1:56833 &
socat TCP4-LISTEN:19001,reuseaddr,fork TCP4:127.0.0.1:59201 &
cd /workspace/RN-Study && clear
npm start && kill $(ps aux | grep socat | grep -v grep | awk '{print $2}')
else
clear && echo "Run failed: No portforward found for 19000 or 19001"
fi
