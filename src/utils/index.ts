export function cloneForce(x: object): object {
  // 拷贝对象记录
  const uniqueList: any[] = []
  let root: object = {}

  // 循环数组
  const loopList: any[] = [{
    parent: root,
    key: undefined,
    data: x
  }];
  while (loopList.length) {
    // 深拷贝,元素出栈
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    // 判断数据是否存在
    let uniqueData = find(uniqueList, data);
    // 数据存在
    if (uniqueData) {
      parent[key] = uniqueData.target;
      break;
    }
    // 数据不存在
    uniqueList.push({
      source: data,
      target: res
    })
    console.log('uniqueList', uniqueList)
    console.log('data', data)

    for (let k in data) {
      console.log('key', k)
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
    if (Array.isArray(data)) {
      // 改造res
      console.log('res', res)
      res = Object.values(res)
      console.log('res', res)
    }
  }
  return root
}

function find(arr: any[], item: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source === item) {
      return arr[i]
    }
  }
  return null
}

/**
 * 深拷贝
 * @param  目标对象或数组
 */
export function deepCopy(target: any): any {
  let copyed_objs: any = [];//此数组解决了循环引用和相同引用的问题，它存放已经递归到的目标对象 
  function _deepCopy(target: any) {
    if ((typeof target !== 'object') || !target) { return target; }
    for (let i = 0; i < copyed_objs.length; i++) {
      if (copyed_objs[i].target === target) {
        return copyed_objs[i].copyTarget;
      }
    }
    let obj: any = {};
    if (Array.isArray(target)) {
      obj = [];//处理target是数组的情况 
    }
    copyed_objs.push({ target: target, copyTarget: obj })
    Object.keys(target).forEach(key => {
      console.log('obj')
      if (obj[key]) {
        console.log('执行了')
        return;
      }
      obj[key] = _deepCopy(target[key]);
    });
    return obj;
  }
  return _deepCopy(target);
}

/**
 * 获取对象中的值
 * @param target 目标对象 
 */
export const get = <T>(target: any, defultValue: T, ...paths: string[]): T => {
  try {
    const result = paths.reduce((last, item) => {
      return last[item]
    }, target)
    return result === undefined ? defultValue : result
  } catch (error) {
    return defultValue
  }
}