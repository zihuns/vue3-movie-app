module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // js
    "eslint:recommended",

    // vue
    "plugin:vue/vue3-strongly-recommended",
  ],

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],

    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "below"
    }],
    
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],

    // script부분 들여쓰기
    "vue/script-indent": ["error", 2, {
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }],

    // 단일단어컴포넌트 경고 해제
    "vue/multi-word-component-names": 0
  },
};
