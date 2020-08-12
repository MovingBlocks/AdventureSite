import data from '../../data/pathMap';

//Take pathId as a parameter and returns JSON data from pathMap.
export default function urlToJSON(u) {
  //url format - u[position]-u[position]
  var url = String(u).split('u');
  var d = data;

  if (u === null || u === undefined) {
    return d;
  }
  //  console.log(d['user-responses'][0]['child']);
  url.forEach((i, index) => {
    if (d === undefined || index > 100) {
      d = data;
      return null;
    }

    if (Number.isInteger(Number(i)) && i !== '') {
      d = d['user-responses'][Number(i)]['child'];
    } else if (i === '') {
      return null;
    } else {
      d = data;
      return null;
    }
  });

  //return if wrong url
  if (d === undefined) {
    return null;
  }

  return d;
}
