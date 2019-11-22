const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let values = Object.values(collection);

      for (let i =0; i < values.length; i++) {
        callback(values[i], i, values);
      };
      return collection
    },

    map: function(collection, callback) {
      let values = Object.values(collection);
      let newCollection = [];

      for (let i =0; i < values.length; i++) {
        newCollection.push(callback(values[i], i, values));
      };
      return newCollection;
    },

    reduce: function(collection, callback, startValue) {
      let balues = Object.values(collection);
      let accumulator = !!startValue ? startValue : values[0];
      let i = !!startValue ? 0 : 1;

      for (i; i < values.length; i++) {
        accumulator = callback(accumulator, values[1], values);
      };
      return accumulator;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
