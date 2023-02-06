### git提交规范流程配置
#### 1.安装开发依赖eslint
    yarn add eslint -D

#### 2.根目录生成eslintrc.cjs配置文件，选项式配置，选择使用的框架，代码模块方式

    module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-unused-vars": 0,
    }
};

#### 3.安装husky开发依赖，修改package.json
    yarn add husky -D
    "script": {
      "prepare": "husky install"
    },
    /**
      终端执行yarn prepare 或 npm run prepare
      在项目根目录下生成.husky文件夹
    **/

#### 4.修改package.json,可以添加多种文件后缀名，最后设置检验修复的文件位置；src文件夹下面的.tsx文件
    "script": {
      "lint": "eslint --fit --ext .tsx src"
    }

#### 5.终端执行yarn husky add .husky/pre-commit 'yarn lint'，生成git commit的预执行语法，即git commit之前执行yarn lint或npm run lint,格式检验不通过commit自动退出
    yarn husky add .husky/pre-commit 'yarn lint'

#### 6.安装commitlint开发依赖
    yarn add @commitlint/cli @commitlint/config-conventional -D

#### 7.创建commitlint.config.js
    touch commitlint.config.js

#### 8.commitlint.config.js添加内容
    module.exports = {extends: ["@commitlint/config-conventional"]};

#### 9.在.husky文件夹下生成commit-msg文本
    yarn husky add .husky/commit-msg 'yarn commitlint --edit'