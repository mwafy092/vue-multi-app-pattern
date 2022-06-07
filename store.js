let store = {};
let proxy = new Proxy(store, {});

let setStore = (data) => {
  proxy.store = { ...proxy.store, data };
};

let getStore = () => proxy.store;

export { setStore, getStore };
