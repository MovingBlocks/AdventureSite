import { PATH_ID_QUERY_PARAM } from '../../consts/URLConsts';

export default function createPathIdQuery(paramValue) {
  return PATH_ID_QUERY_PARAM + paramValue;
}