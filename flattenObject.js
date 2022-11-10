let obj = {
  name: "sareen",
  age: 20,

  address: {
    pincode: 321529,
    city: "noida",
  },
};

function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    let propName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

flattenObj(obj);
