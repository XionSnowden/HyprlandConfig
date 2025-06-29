#!usr/bin/bash

sleep 0.5

while true
do	
	WALLPAPER_DIR="$HOME/.config/Wallpapers/display"
	CURRENT_WALL=$(hyprctl hyprpaper listloaded)

	# Get a random wallpaper that is not the current one
	WALLPAPER=$(find "$WALLPAPER_DIR" -type f ! -name "$(basename "$CURRENT_WALL")" | shuf -n 1)

	# Apply the selected wallpaper
	hyprctl hyprpaper reload ,"$WALLPAPER"

	sleep 1800
done
