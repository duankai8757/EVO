let uid = 0;

// 容器构造函数
function Dep() {
  // 收集观察者的容器
  this.subs = [];
  this.id = uid++;
}

Dep.prototype = {
  // 将当前观察者收集到容器中
  addSub: function(sub) {
    this.subs.push(sub);
  },

  // 收集依赖，调用观察者的addDep方法
  depend: function() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  },

  // 遍历执行容器中各观察者的run方法，以执行回调
  notify: function() {
    this.subs.forEach(sub => {
      sub.run();
    });
  }
};

// 初始化当前观察者对象为空
Dep.target = null;

// 数据劫持函数
function observe(data) {
  // 防止重复对数据做劫持处理
  if (data.__ob__) return;
  let keys = Object.keys(data);
  keys.forEach(key => {
    let val = data[key];
    let dep = new Dep();

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        dep.depend();
        return val;
      },
      set: function(newValue) {
        if (newValue !== newValue || newValue === val) {
          return;
        } else {
          val = newValue;
          dep.notify();
        }
      }
    });
  });
  // 在被劫持的数据上定义一个不可遍历的内部属性
  Object.defineProperty(data, "__ob__", {
    configurable: true,
    enumerable: false,
    value: true,
    writable: true
  });
}

// 观察者构造函数
function Watcher(data, exp, callback) {
  this.cb = callback;
  this.deps = {};
  this.exp = exp;
  // 获取得到数据的函数
  this.getter = this.parseExp(exp.trim());
  this.data = data;
  this.value = this.get();
}

Watcher.prototype = {
  run: function() {
    let value = this.get();
    let oldValue = this.value;

    if (value !== oldValue) {
      this.value = value;
      this.cb.call(null, value, oldValue);
    }
  },

  addDep: function(dep) {
    // 防止收集重复数据
    if (!this.deps.hasOwnProperty(dep.id)) {
      dep.addSub(this);
      this.deps[dep.id] = dep;
    }
  },

  get: function() {
    // 将实例对象变为当前观察者对象
    Dep.target = this;
    // 读取数据，从而触发数据get方法
    let value = this.getter.call(this.data, this.data);
    // 依赖收集完毕，当前观察者对象置为空
    Dep.target = null;

    return value;
  },

  // 通过形如‘a.b’的字符串形式获取数据值
  parseExp: function(exp) {
    if (/[^\w.$]/.test(exp)) return;

    let exps = exp.split(".");

    return function(obj) {
      return obj[exps[1]];
    };
  }
};
function $watch(data, exp, cb) {
    observe(data);
    new Watcher(data, exp, cb);
  }
// 监测函数
export default {$watch}
