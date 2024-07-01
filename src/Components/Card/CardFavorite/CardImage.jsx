import { constants } from '../../../services/constants'

export const CardImage = ({ path, alt }) => {
  const getImages = constants.events.GET_MOVIE_IMAGES

  return <img src={`${getImages}${path}`} {...{ alt }} />
}
