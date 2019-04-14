#!/bin/sh
rm -frv dist; yarn run generate && scp -r -P 44 dist/* lp1@51.75.122.226:/home/lp1/www/lp1.eu/

