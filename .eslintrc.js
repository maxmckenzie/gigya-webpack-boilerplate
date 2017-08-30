module.exports = {
    "extends": "standard",
    "rules": {
      // i know... i'm happy to omit them
      // but mi dios, its like walking down the street wearing real fur
      "semi": ["error", "always"]
    },
    "plugins": [
      "standard",
      "promise"
    ],
    "globals"   : {
      /* testing globals */
      "pending"    : false,
      "browser"    : false,
      "expect"     : false,
      "describe"   : false,
      "it"         : false,
      "before"     : false,
      "beforeEach" : false,
      "after"      : false,
      "afterEach"  : false
  }
};
