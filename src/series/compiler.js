import get from '@yelloxing/core.js/get';
import attr from './attr';

export default function (serie) {

  let attrServers = [];

  for (let i = serie.length - 2; i >= 0; i--) {
    attrServers.unshift(get(attr, serie[i]));//数组开头添加一个或多个元素并返回新长度
  }
  return serie[serie.length - 1].apply(null, attrServers);

};