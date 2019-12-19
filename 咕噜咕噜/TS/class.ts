class Animal {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}
let a = new Animal("Jack");


// 抽象类中的抽象方法必须被子类实现：

abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat extends Animal {
    public eat() {
        console.log(`${this.name} is eating.`);
    }
}

let cat = new Cat('Tom');

// 上面的例子中，我们定义了一个类 Cat 继承了抽象类 Animal，但是没有实现抽象方法 sayHi，所以编译报错了。
// 正确如下：
/* abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat extends Animal {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat('Tom'); */