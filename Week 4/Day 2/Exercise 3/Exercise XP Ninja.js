class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸"); // ❌ runs before super()
    super();
  }
}

class Flamingo extends Bird {
  constructor() {
    super(); // ✅ must come first
    console.log("I'm pink. 🌸");
  }
}
