let store = { message: "store proxy", code: 234 };

let storeProxy = new Proxy(store, {
  get: (o, property) => {
    return property in o ? o[property] : o;
  },
  set: (o, property, value) => {
    console.log(value);
  },
});

let getStore = async () => {
  const getData = await storeProxy.get;
  return getData;
};

let setStore = async (property, value) => {
  storeProxy.set[property] = await value;
};

export { getStore, setStore };
