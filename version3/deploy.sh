#!/bin/sh
rm -frvi dist; nuxt generate && scp -r -P 44 dist/* lp1@lp1.eu:/home/lp1/Sites/lp1.eu/

