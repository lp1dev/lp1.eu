#!/bin/sh
rm -frvi dist; nuxt generate && scp -r -P 44 dist/* lp1@lp1.eu:/home/lp1/Projects/lp1.eu/

