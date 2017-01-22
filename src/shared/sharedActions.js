import { ACTIONS } from './const';


export function setRequestingStatus(isRequesting) {
  return {
    type: ACTIONS.REQUESTING_DATA,
    isRequesting
  };
}



