import { constants } from '../../services/constants'

export const CardImage = ({ path, alt, className }) => {
  const getImages = constants.events.GET_MOVIE_IMAGES

  return <img className={className} src={`${getImages}${path}`} {...{ alt }} />
}
