import React from "react";
import PropTypes from "prop-types";
import { HeartIcon } from "@heroicons/react/outline";
import FavButton from "./styles";

export default function FavoriteButton({ fav, onClick }) {
	return (
		<FavButton onClick={onClick} fav={fav} bg="#eee" rounded>
			<HeartIcon />
		</FavButton>
	);
}

FavoriteButton.propTypes = {
	fav: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};
