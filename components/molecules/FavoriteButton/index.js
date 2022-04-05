<<<<<<< HEAD
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
=======
import React from 'react'
import {FavButton} from './styles';
import {HeartIcon} from "@heroicons/react/outline";

export default function FavoriteButton({fav,onClick}) {
  return (
    <FavButton onClick={onClick} fav={fav} bg="#eee" rounded>
      <HeartIcon />
    </FavButton>
  )
}


>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
