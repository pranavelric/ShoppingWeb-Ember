// import { helper } from '@ember/component/helper';
import Helper from '@ember/component/helper';

// export default helper(function currency(params, hash = {}) {
//   const number = params;
//   let { sign = '$' } = hash;

//   const dollars = Math.floor(number);
//   let cents = Math.floor(number * 100 % 100);
//   if (cents.toString().length === 1) {
//     cents = '0' + cents;
//   }

//   return `${sign}${dollars}.${cents}`;
// });

export default class currency extends Helper {
  compute(params, hash = {}) {
    const [number] = params;
    let { sign = '$' } = hash;

    const dollars = Math.floor(number);
    let cents = Math.floor((number * 100) % 100);
    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign}${dollars}.${cents}`;
  }
}
