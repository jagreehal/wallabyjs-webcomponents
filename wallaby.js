module.exports = function() {
  return {
    files: [
      {
        pattern: "node_modules/document-register-element/build/document-register-element.js",
        instrument: false
      },
      "!components/**/*.spec.js",
      "components/**/*.html",
      { pattern: "component/*", load: false }
    ],
    tests: ["components/**/*.spec.js"],

    env: {
      kind: "electron"
    },

    // this allows wallaby to serve files when requested by components
    // delaying running tests until web components are ready
    setup: function(wallaby) {
      // if (!window.customElements) {
      //   wallaby.delayStart();
      //   window.addEventListener("WebComponentsReady", function() {
      //     wallaby.start();
      //   });
      // }
    }
  };
};
