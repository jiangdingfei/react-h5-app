module.exports = {
  parser: '@typescript-eslint/parser', // 定义eslint解析器
  extends: [    // 定义文件继承的子规范
    'plugin:@react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [    // 定义了该eslint文件运行依赖的插件
    '@typescript-eslint'
  ],
  env: {
    browser: true,
    node: true
  },
  settings: {
    "react": {  // 自动发现react版本，从而进行规范react代码
      "pragma": "React",
      "version": "detect"
    }
  },
  parserOptions: { // 指定Eslint可以解析JSX语法
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures": {
      jsx: true
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}