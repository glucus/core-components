(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1261:function(r,o,t){"use strict";t(17),t(64),t(22),t(32),t(89),t(69),t(122);var e,n=t(74),a=(e=t(1262))&&e.__esModule?e:{default:e},i=t(59);n.addons.register("TitleAddon",(function(r){var o=null,t=function(){clearTimeout(o);var e,n=null;try{n=r.getCurrentStoryData()}catch(r){}if(n){var a=n.kind;a=(a=a.replace("Компоненты","")).includes("|")?a.match(/\|(.*)/)[1]:a;var i=n.name;i="Page"===i?"":i,e="".concat(a||i," ⋅ ").concat("Core Components")}else e="Core Components";document.title!==e&&(document.title=e),o=setTimeout(t,100)};t(),r.on(i.STORY_RENDERED,(function(){t()}))})),n.addons.setConfig({theme:a.default,sortStoriesByKind:!1})},1262:function(r,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=t(1263),n=t(1264),a=(0,e.create)({base:"light",colorPrimary:"#0B1F35",appContentBg:"#fff",appBorderColor:"rgba(11, 31, 53, 0.1)",fontBase:"system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif",fontCode:"Consolas, Liberation Mono, Menlo, monospace",textColor:"#0B1F35",barTextColor:"#6D7986",barSelectedColor:"#EF3124",inputBg:"#fff",inputBorder:"#DBDEE1",inputTextColor:"#0B1F35",brandTitle:"core-components@".concat(n.version),brandImage:"https://alfabank.ru/api/files/mail_designer/mailz/core-components.svg"});o.default=a},1264:function(r){r.exports=JSON.parse('{"name":"@alfalab/core-components","version":"2.1.0","private":true,"workspaces":["packages/*"],"license":"ISC","repository":{"type":"git","url":"git+https://github.com/alfa-laboratory/core-components.git"},"bugs":{"url":"https://github.com/alfa-laboratory/core-components/issues"},"homepage":"https://github.com/alfa-laboratory/core-components#readme","scripts":{"build":"./bin/build.sh","start":"start-storybook -p 9009 -c .storybook -s ./.storybook/public","start:quick":"RDTL=off yarn start","build-storybook":"build-storybook -o build -s ./.storybook/public","update-colors":"node ./tools/update-colors.js && yarn lint:css --fix","update-typography":"node ./tools/update-typography.js","lint":"yarn lint:css && yarn lint:js","lint:css":"stylelint ./packages/**/*.css","lint:js":"eslint ./packages --ext .ts,.tsx,.js,.jsx","test":"jest --watchAll=false --env=jsdom-sixteen","format":"prettier --write \\"./{packages,bin}/**/*.{ts,tsx,js,jsx,css,json}\\"","clean":"rimraf packages/*/{tsconfig.tsbuildinfo,dist} && rimraf {dist,build}","cm":"git-cz","pub:patch":"RELEASE_TYPE=\\"patch\\" ./bin/publish.sh","pub:minor":"RELEASE_TYPE=\\"minor\\" ./bin/publish.sh","pub:major":"RELEASE_TYPE=\\"major\\" ./bin/publish.sh","release":"standard-version --no-verify --releaseCommitMessageFormat \\"chore: release\\"","postbuild":"yarn purgecss","purgecss":"./bin/purgecss.sh"},"browserslist":{"production":["last 2 versions","ie >= 11","Android >= 5","iOS >= 9"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@alfalab/hooks":"^0.8.1","@alfalab/icons-classic":"^1.7.0","@alfalab/icons-glyph":"^1.26.0","@alfalab/icons-logotype":"^1.4.0","@alfalab/utils":"^0.3.0","@popperjs/core":"^2.3.3","alfa-ui-primitives":"^2.58.0","compute-scroll-into-view":"^1.0.13","downshift":"5.4.7","lodash.debounce":"^4.0.8","react-merge-refs":"^1.1.0","react-node-resolver":"^2.0.1","react-popper":"^2.2.2","react-textarea-autosize":"^8.2.0","react-transition-group":"^4.3.0","react-virtual":"^2.2.0","text-mask-core":"^5.1.2"},"devDependencies":{"@alfalab/rollup-plugin-postcss":"^3.2.0","@babel/plugin-proposal-nullish-coalescing-operator":"^7.8.3","@babel/plugin-proposal-optional-chaining":"^7.9.0","@babel/preset-typescript":"^7.9.0","@commitlint/config-conventional":"^8.3.4","@commitlint/config-lerna-scopes":"^8.3.4","@storybook/addon-actions":"^5.3.8","@storybook/addon-docs":"^5.3.17","@storybook/addon-knobs":"^5.3.8","@storybook/addons":"^5.3.8","@storybook/preset-create-react-app":"^2.1.1","@storybook/preset-typescript":"^1.2.0","@storybook/react":"^5.3.8","@testing-library/dom":"^7.22.2","@testing-library/jest-dom":"^5.10.1","@testing-library/react":"^10.2.1","@testing-library/user-event":"^12.0.2","@types/classnames":"^2.2.9","@types/jest":"^25.1.2","@types/lodash.debounce":"^4.0.6","@types/node":"^13.5.0","@types/react":"^16.9.19","@types/react-dom":"^16.9.5","@typescript-eslint/eslint-plugin":"^2.23.0","@typescript-eslint/parser":"^2.23.0","arui-presets-lint":"4.1.1","arui-presets-ts":"^5.0.0","babel-jest":"^25.3.0","babel-loader":"^8.0.6","commitizen":"^4.1.2","copyfiles":"^2.2.0","css-loader":"^4.2.2","cz-conventional-changelog":"3.2.0","eslint":"^6.8.0","eslint-config-airbnb":"^18.0.1","eslint-config-airbnb-typescript":"^7.0.0","eslint-config-prettier":"^6.10.0","eslint-import-resolver-typescript":"^2.0.0","eslint-plugin-chai-friendly":"^0.5.0","eslint-plugin-cypress":"2.10.3","eslint-plugin-import":"^2.20.1","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.19.0","eslint-plugin-react-hooks":"^2.5.0","eslint-plugin-sort-class-members":"^1.6.0","fork-ts-checker-webpack-plugin":"^4.0.2","git-url-parse":"^11.1.2","glob":"^7.1.6","globby":"^11.0.1","handlebars":"^4.7.3","husky":"^4.3.0","identity-obj-proxy":"^3.0.0","jest":"^26.0.1","jest-environment-jsdom-sixteen":"^1.0.3","json":"^9.0.6","lerna":"^3.20.2","lint-staged":"^10.0.8","mini-css-extract-plugin":"^0.11.0","optimize-css-assets-webpack-plugin":"^5.0.4","postcss-cli":"^7.1.0","postcss-import":"^12.0.1","postcss-mixins":"^6.2.3","postcss-preset-env":"^6.7.0","prettier":"^1.19.1","purgecss":"^2.2.1","raw-loader":"^4.0.1","react-docgen-typescript-loader":"^3.6.0","react-scripts":"^3.3.1","replace-in-file":"^5.0.2","rimraf":"^3.0.2","rollup":"^2.10.2","rollup-plugin-copy":"^3.3.0","rollup-plugin-multi-input":"^1.1.1","rollup-plugin-ts":"^1.2.24","shelljs":"^0.8.3","standard-version":"^8.0.0","string-hash":"^1.1.3","stylelint":"^12.0.0","stylelint-config-standard":"^20.0.0","ts-jest":"^25.4.0","ts-loader":"^6.2.1","tslib":"^2.0.0","typescript":"~3.8.3"},"peerDependencies":{"classnames":"^2.2.6","react":">=16.12.0","react-dom":">=16.12.0"},"publishConfig":{"access":"public"},"prettier":"arui-presets-lint/prettier","eslintConfig":{"extends":"./node_modules/arui-presets-lint/eslint/index.js"},"stylelint":{"extends":"arui-presets-lint/stylelint","rules":{"arui-cssvars/use-variables":false}},"lint-staged":{"{packages,bin}/**/*.{js,jsx,ts,tsx}":["prettier --write","eslint"],"*.css":["prettier --write","stylelint"]},"husky":{"hooks":{"pre-commit":"yarn lint-staged && yarn test","commit-msg":"commitlint -E HUSKY_GIT_PARAMS"}},"jest":{"testEnvironment":"jest-environment-jsdom-sixteen"},"config":{"commitizen":{"path":"./node_modules/cz-conventional-changelog"}}}')},1402:function(r,o,t){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}t(2),t(9),t(13),t(17),t(53),t(10),t(18),t(54),t(22),t(7),t(25),t(11),t(12),Object.defineProperty(o,"__esModule",{value:!0}),o.ADDON_ID=void 0,t(1403);var n=d(t(0)),a=d(t(74)),i=t(100),l=t(59),c=t(28);function s(){if("function"!=typeof WeakMap)return null;var r=new WeakMap;return s=function(){return r},r}function d(r){if(r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!=typeof r)return{default:r};var o=s();if(o&&o.has(r))return o.get(r);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)){var i=n?Object.getOwnPropertyDescriptor(r,a):null;i&&(i.get||i.set)?Object.defineProperty(t,a,i):t[a]=r[a]}return t.default=r,o&&o.set(r,t),t}function b(r,o){return function(r){if(Array.isArray(r))return r}(r)||function(r,o){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var t=[],e=!0,n=!1,a=void 0;try{for(var i,l=r[Symbol.iterator]();!(e=(i=l.next()).done)&&(t.push(i.value),!o||t.length!==o);e=!0);}catch(r){n=!0,a=r}finally{try{e||null==l.return||l.return()}finally{if(n)throw a}}return t}(r,o)||function(r,o){if(!r)return;if("string"==typeof r)return p(r,o);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(r,o)}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(r,o){(null==o||o>r.length)&&(o=r.length);for(var t=0,e=Array(o);t<o;t++)e[t]=r[t];return e}var g="theme-switcher";o.ADDON_ID="theme-switcher";var f=n.default.createElement("span",{className:"label"},"Theme:"),u=function(){var r,o,t,e=b((0,n.useState)("default"),2),a=e[0],s=e[1],d=(0,i.useParameter)(g,{themes:[]}).themes,p=(0,i.useChannel)((r={},o=l.STORY_RENDERED,t=function(){return p("".concat(g,"/theme"),a)},o in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r)),u=(0,n.useCallback)((function(r){s(r.target.value),p("".concat(g,"/theme"),r.target.value)}),[]);return 0<d.length&&n.default.createElement("div",{className:"tool"},f,n.default.createElement(c.Form.Select,{size:1,onChange:u,className:"select"},["default"].concat(d).map((function(r){return n.default.createElement("option",{value:r,key:r},r)}))))},m=n.default.createElement(u,null);a.default.register("theme-switcher",(function(){a.default.add(g,{type:a.types.TOOL,match:function(r){return"story"===r.viewMode},render:function(){return m},paramKey:g})}))},1403:function(r,o,t){var e=t(1404),n=t(1405);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[r.i,n,""]]);var a={insert:"head",singleton:!1},i=(e(n,a),n.locals?n.locals:{});r.exports=i},1405:function(r,o,t){var e=t(51),n=t(1406),a=t(1415),i=t(1417),l=t(1419);(o=e(!1)).i(n),o.i(a),o.i(i),o.i(l),o.push([r.i,".tool {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.label {\n    display: inline-block;\n    margin-right: 8px;\n    font-size: 13px;\n}\n\n.click {\n    @mixin theme-click;\n}\n\n.site {\n    @mixin theme-site;\n}\n\n.corp {\n    @mixin theme-corp;\n}\n\n.mobile {\n    @mixin theme-mobile;\n}\n",""]),r.exports=o},1406:function(r,o,t){var e=t(51),n=t(1407),a=t(1408),i=t(1409),l=t(1410),c=t(1411),s=t(1412),d=t(1414);(o=e(!1)).i(n),o.i(a),o.i(i),o.i(l),o.i(c),o.i(s),o.i(d),o.push([r.i,"@define-mixin theme-click {\n    @mixin amount-click;\n    @mixin form-control-click;\n    @mixin pure-input-click;\n    @mixin button-click;\n    @mixin tabs-click;\n    @mixin tag-click;\n    @mixin link-click;\n}\n",""]),r.exports=o},1407:function(r,o,t){(o=t(51)(!1)).push([r.i,"@define-mixin amount-click {\n    --amount-major-part-font-weight: bold;\n    --amount-minor-part-font-weight: bold;\n}\n",""]),r.exports=o},1408:function(r,o,t){(o=t(51)(!1)).push([r.i,"@define-mixin form-control-click {\n    /* core vars */\n    --color-dark-indigo-07-flat: #eeeff1;\n    --gap-s: 12px;\n    --gap-m: 16px;\n\n    /* base */\n    --form-control-border-radius: 4px;\n    --form-control-border-bottom: 0;\n    --form-control-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* paddings */\n    --form-control-paddings: 0 var(--gap-s);\n    --form-control-l-paddings: 0 var(--gap-m);\n    --form-control-labeled-s-paddings: 23px var(--gap-s) 5px;\n    --form-control-labeled-m-paddings: 28px var(--gap-s) 8px;\n    --form-control-labeled-l-paddings: 34px var(--gap-m) 14px;\n\n    /* disabled */\n    --form-control-disabled-border-bottom: 0;\n    --form-control-disabled-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* focus */\n    --form-control-focus-shadow: none;\n    --form-control-focus-border-bottom: 0;\n    --form-control-hover-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* error */\n    --form-control-error-shadow: inset 0 0 0 1px var(--form-control-error-color);\n    --form-control-error-border-bottom: 0;\n    --form-control-error-icon-display: none;\n}\n",""]),r.exports=o},1409:function(r,o,t){(o=t(51)(!1)).push([r.i,"@define-mixin pure-input-click {\n    /* core vars */\n    --color-dark-indigo-07-flat: #eeeff1;\n    --gap-s: 12px;\n    --gap-m: 16px;\n\n    /* base */\n    --pure-input-border-radius: 4px;\n    --pure-input-border-bottom: 0;\n    --pure-input-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* paddings */\n    --pure-input-paddings: 0 var(--gap-s);\n    --pure-input-l-paddings: 0 var(--gap-m);\n\n    /* disabled */\n    --pure-input-disabled-border-bottom: 0;\n    --pure-input-disabled-bg-color: var(--color-dark-indigo-07-flat);\n\n    /* focus */\n    --pure-input-focus-shadow: none;\n    --pure-input-focus-border-bottom: 0;\n    --pure-input-hover-bg-color: var(--color-dark-indigo-07-flat);\n}\n",""]),r.exports=o},1410:function(r,o,t){var e=t(51),n=t(193);(o=e(!1)).i(n),o.push([r.i,"@define-mixin button-click {\n    /* core vars */\n    --color-light-bg-accent: #ef3124;\n    --color-light-bg-neutral: #dbdee1;\n\n    /* primary */\n    --button-primary-base-bg-color: var(--color-light-bg-accent);\n    --button-primary-hover-bg-color: #d72c20;\n    --button-primary-active-bg-color: #a72219;\n    --button-primary-disabled-bg-color: rgba(239, 49, 36, 0.3);\n\n    /* --button-primary-hover-bg-color: color-mod(var(--color-light-bg-accent) shade(10%));\n    --button-primary-active-bg-color: color-mod(var(--color-light-bg-accent) shade(30%));\n    --button-primary-disabled-bg-color: color-mod(var(--color-light-bg-accent) alpha(30%)); */\n\n    /* secondary */\n    --button-secondary-base-bg-color: var(--color-light-bg-neutral);\n    --button-secondary-hover-bg-color: #c5c8cb;\n    --button-secondary-active-bg-color: #999b9d;\n    --button-secondary-disabled-bg-color: rgba(219, 222, 225, 0.3);\n\n    /* --button-secondary-hover-bg-color: color-mod(var(--color-light-bg-neutral) shade(10%));\n    --button-secondary-active-bg-color: color-mod(var(--color-light-bg-neutral) shade(30%));\n    --button-secondary-disabled-bg-color: color-mod(var(--color-light-bg-neutral) alpha(30%)); */\n}\n",""]),r.exports=o},1411:function(r,o,t){(o=t(51)(!1)).push([r.i,"@define-mixin tabs-click {\n    --primary-tablist-s-font-size: 20px;\n    --primary-tablist-s-font-weight: 500;\n    --primary-tablist-s-font-family: var(--font-family-styrene);\n    --primary-tablist-m-font-size: 20px;\n    --primary-tablist-m-font-weight: 500;\n    --primary-tablist-m-font-family: var(--font-family-styrene);\n    --primary-tablist-l-font-size: 24px;\n    --primary-tablist-l-font-weight: 500;\n    --primary-tablist-l-font-family: var(--font-family-styrene);\n}\n",""]),r.exports=o},1412:function(r,o,t){var e=t(51),n=t(1413);(o=e(!1)).i(n),o.push([r.i,"@define-mixin tag-click {\n    /* core vars */\n\n    /* theme */\n    --tag-background-color: var(--color-dark-indigo-07-flat);\n    --tag-background-color-hover: #d6d7d9;\n    --tag-background-color-active: #a7a7a9;\n    --tag-text-color-checked-hover: #b3b3b3;\n    --tag-border-color: transparent;\n    --tag-border-color-hover: transparent;\n    --tag-border-color-active: transparent;\n    --tag-border-color-disabled: transparent;\n\n    /* --tag-background-color-hover: color-mod(var(--color-dark-indigo-07-flat) blenda(black 10%));\n    --tag-background-color-active: color-mod(var(--color-dark-indigo-07-flat) blenda(black 30%));\n    --tag-text-color-checked-hover: color-mod(var(--color-white) blenda(black 30%)); */\n}\n",""]),r.exports=o},1413:function(r,o,t){(o=t(51)(!1)).push([r.i,":root {\n    --color-dark-indigo: #0b1f35;\n    --color-dark-indigo-60: rgba(11, 31, 53, 0.6);\n    --color-dark-indigo-30: rgba(11, 31, 53, 0.3);\n    --color-dark-indigo-15: rgba(11, 31, 53, 0.15);\n    --color-dark-indigo-10: rgba(11, 31, 53, 0.1);\n    --color-dark-indigo-07: rgba(11, 31, 53, 0.07);\n    --color-dark-indigo-05: rgba(11, 31, 53, 0.05);\n    --color-dark-indigo-60-flat: #6d7986;\n    --color-dark-indigo-30-flat: #b6bcc3;\n    --color-dark-indigo-15-flat: #dbdee1;\n    --color-dark-indigo-10-flat: #e7e9eb;\n    --color-dark-indigo-07-flat: #eeeff1;\n    --color-dark-indigo-05-flat: #f3f4f5;\n    --color-red-brand: #ef3124;\n    --color-red-brand-85: rgba(239, 49, 36, 0.85);\n    --color-red-brand-70: rgba(239, 49, 36, 0.7);\n    --color-red-brand-50: rgba(239, 49, 36, 0.5);\n    --color-red-brand-30: rgba(239, 49, 36, 0.3);\n    --color-red-brand-20: rgba(239, 49, 36, 0.2);\n    --color-red-brand-10: rgba(239, 49, 36, 0.1);\n    --color-red-brand-85-flat: #f15045;\n    --color-red-brand-70-flat: #f46f66;\n    --color-red-brand-50-flat: #f69791;\n    --color-red-brand-30-flat: #fbc2bd;\n    --color-red-brand-20-flat: #fcd6d3;\n    --color-red-brand-10-flat: #feebea;\n    --color-red-brand-05-flat: #fef5f4;\n    --color-red-dark: #d91d0b;\n    --color-red-error: #ff5c5c;\n    --color-green-text: #13a463;\n    --color-green-text-60: rgba(19, 164, 99, 0.6);\n    --color-green-text-60-flat: #71c8a1;\n    --color-green-done: #2fc26e;\n    --color-green-done-20: rgba(47, 194, 110, 0.2);\n    --color-green-done-10: rgba(47, 194, 110, 0.1);\n    --color-green-done-05: rgba(47, 194, 110, 0.05);\n    --color-green-done-20-flat: #d5f3e2;\n    --color-green-done-10-flat: #ebf9f1;\n    --color-green-done-05-flat: #f4fcf7;\n    --color-blue-action: #0e60b9;\n    --color-blue-swipe-a: #2670c6;\n    --color-blue-swipe-b: #3781d8;\n    --color-blue-swipe-c: #4a90e2;\n    --color-blue-link-mobile: #007aff;\n    --color-blue-link-mobile-10: rgba(0, 122, 255, 0.1);\n    --color-blue-link-mobile-10-flat: #e6f2ff;\n    --color-blue-link-web: #0f62fe;\n    --color-sand: #f6bf65;\n    --color-lavender: #8888ad;\n    --color-amethyst: #a489aa;\n    --color-black: #000;\n    --color-black-60: rgba(0, 0, 0, 0.6);\n    --color-black-30: rgba(0, 0, 0, 0.3);\n    --color-black-10: rgba(0, 0, 0, 0.1);\n    --color-black-60-flat: #666;\n    --color-black-30-flat: #b3b3b3;\n    --color-black-10-flat: #e6e6e6;\n    --color-white: #fff;\n    --color-white-60: rgba(255, 255, 255, 0.6);\n    --color-white-30: rgba(255, 255, 255, 0.3);\n    --color-white-10: rgba(255, 255, 255, 0.1);\n    --color-bg-corporate: #212a33;\n    --color-bg-corporate-90: rgba(33, 42, 51, 0.9);\n    --color-bg-corporate-60: rgba(33, 42, 51, 0.6);\n    --color-bg-corporate-30: rgba(33, 42, 51, 0.3);\n    --color-bg-corporate-90-flat: #384048;\n    --color-bg-corporate-60-flat: #7a7f85;\n    --color-bg-corporate-30-flat: #bdc0c2;\n    --color-light-blue: #f5f7f9;\n}\n",""]),r.exports=o},1414:function(r,o,t){var e=t(51),n=t(193);(o=e(!1)).i(n),o.push([r.i,"@define-mixin link-click {\n    /* primary */\n    --link-primary-hover-color: #546272;\n    --link-primary-active-color: #858f9a;\n\n    /* TODO --link-primary-hover-color: color-mod(var(--color-light-text-primary) tint(30%));\n    --link-primary-active-color: color-mod(var(--color-light-text-primary) tint(50%)); */\n\n    /* secondary */\n    --link-secondary-hover-color: #99a1aa;\n    --link-secondary-active-color: #b6bcc3;\n\n    /* TODO --link-secondary-hover-color: color-mod(var(--color-light-text-secondary) tint(30%));\n    --link-secondary-active-color: color-mod(var(--color-light-text-secondary) tint(50%)); */\n\n    /* default */\n    --link-default-hover-color: #4da2ff;\n    --link-default-active-color: #80bdff;\n\n    /* TODO --link-default-hover-color: color-mod(--color-light-text-link) tint(30%));\n    --link-default-active-color: color-mod(--color-light-text-link) tint(50%)); */\n}\n",""]),r.exports=o},1415:function(r,o,t){var e=t(51),n=t(1416);(o=e(!1)).i(n),o.push([r.i,"@define-mixin theme-site {\n    @mixin tabs-site;\n}\n",""]),r.exports=o},1416:function(r,o,t){(o=t(51)(!1)).push([r.i,"@define-mixin tabs-site {\n    /* core vars */\n    --gap-4xl: 48px;\n\n    /* theme */\n    --primary-tablist-m-gaps: var(--gap-4xl);\n    --primary-tablist-m-font-weight: 500;\n    --primary-tablist-l-gaps: var(--gap-4xl);\n    --primary-tablist-l-font-weight: 500;\n}\n",""]),r.exports=o},1417:function(r,o,t){var e=t(51),n=t(1418);(o=e(!1)).i(n),o.push([r.i,"@define-mixin theme-corp {\n    @mixin button-corp;\n}\n",""]),r.exports=o},1418:function(r,o,t){var e=t(51),n=t(193);(o=e(!1)).i(n),o.push([r.i,"@define-mixin button-corp {\n    /* core vars */\n    --color-light-border-key: #0b1f35;\n    --color-light-specialbg-component: #eeeff1;\n\n    /* secondary */\n    --button-secondary-base-bg-color: transparent;\n    --button-secondary-base-border-color: rgba(11, 31, 53, 0.6);\n    --button-secondary-hover-bg-color: #dddee0;\n    --button-secondary-active-bg-color: #cacbcd;\n    --button-secondary-disabled-bg-color: transparent;\n    --button-secondary-disabled-border-color: rgba(11, 31, 53, 0.1);\n\n    /* --button-secondary-base-border-color: color-mod(var(--color-light-border-key) alpha(60%));\n    --button-secondary-hover-bg-color: color-mod(var(--color-light-specialbg-component) shade(7%));\n    --button-secondary-active-bg-color: color-mod(\n        var(--color-light-specialbg-component) shade(15%)\n    );\n    --button-secondary-disabled-border-color: color-mod(var(--color-light-border-key) alpha(10%)); */\n}\n",""]),r.exports=o},1419:function(r,o,t){var e=t(51),n=t(1420);(o=e(!1)).i(n),o.push([r.i,"@define-mixin theme-mobile {\n    @mixin button-mobile;\n}\n",""]),r.exports=o},1420:function(r,o,t){var e=t(51),n=t(193);(o=e(!1)).i(n),o.push([r.i,"@define-mixin button-mobile {\n    /* core vars */\n    --color-light-bg-secondary: #f3f4f5;\n    --button-border-radius: 12px;\n\n    /* primary TODO secret color from the future */\n    --button-primary-base-bg-color: #2b2b2b;\n    --button-primary-hover-bg-color: #272727;\n    --button-primary-active-bg-color: #1e1e1e;\n    --button-primary-disabled-bg-color: rgba(43, 43, 43, 0.3);\n\n    /* --button-primary-hover-bg-color: color-mod(#2b2b2b shade(10%));\n    --button-primary-active-bg-color: color-mod(#2b2b2b shade(30%));\n    --button-primary-disabled-bg-color: color-mod(#2b2b2b alpha(30%)); */\n\n    /* secondary */\n    --button-secondary-base-bg-color: var(--color-light-bg-secondary);\n    --button-secondary-hover-bg-color: #dbdcdd;\n    --button-secondary-active-bg-color: #aaabac;\n    --button-secondary-disabled-bg-color: rgba(243, 244, 245, 0.3);\n\n    /* --button-secondary-hover-bg-color: color-mod(var(--color-light-bg-secondary) shade(10%));\n    --button-secondary-active-bg-color: color-mod(var(--color-light-bg-secondary) shade(30%));\n    --button-secondary-disabled-bg-color: color-mod(var(--color-light-bg-secondary) alpha(30%)); */\n}\n",""]),r.exports=o},193:function(r,o,t){(o=t(51)(!1)).push([r.i,":root {\n    --color-light-border-secondary-inverted: #b6bcc3;\n    --color-light-border-key-inverted: #fff;\n    --color-light-border-tertiary-inverted: #6d7986;\n    --color-light-bg-overlay: rgba(0, 0, 0, 0.6);\n    --color-light-specialbg-tertiary-grouped: #f3f4f5;\n    --color-light-specialbg-primary-grouped: #f3f4f5;\n    --color-light-specialbg-nulled: rgba(255, 255, 255, 0);\n    --color-light-bg-secondary: #f3f4f5;\n    --color-light-bg-tertiary: #e7e9eb;\n    --color-light-bg-neutral: #dbdee1;\n    --color-light-graphic-attention: #e58933;\n    --color-light-text-tertiary: #b6bcc3;\n    --color-light-border-primary: #dbdee1;\n    --color-light-text-disabled-transparent: rgba(11, 31, 53, 0.15);\n    --color-light-graphic-accent: #ef3124;\n    --color-light-border-tertiary: #f3f4f5;\n    --color-light-border-accent: #ef3124;\n    --color-light-bg-secondary-inverted: #233549;\n    --color-light-bg-positive-muted: #ebf9f1;\n    --color-light-graphic-neutral: #dbdee1;\n    --color-light-text-disabled: #dbdee1;\n    --color-light-border-key: #0b1f35;\n    --color-light-specialbg-secondary-grouped: #fff;\n    --color-light-text-accent: #ef3124;\n    --color-light-text-tertiary-inverted-transparent: rgba(255, 255, 255, 0.4);\n    --color-light-graphic-positive: #2fc26e;\n    --color-light-text-primary: #0b1f35;\n    --color-light-specialbg-component: #eeeff1;\n    --color-light-text-secondary-transparent: rgba(11, 31, 53, 0.6);\n    --color-light-text-secondary-inverted-transparent: rgba(255, 255, 255, 0.7);\n    --color-light-graphic-negative: #f15045;\n    --color-light-text-attention: #de6a00;\n    --color-light-text-positive: #13a463;\n    --color-light-bg-primary: #fff;\n    --color-light-graphic-secondary: #6d7986;\n    --color-light-graphic-link: #007aff;\n    --color-light-text-secondary: #6d7986;\n    --color-light-graphic-tertiary: #b6bcc3;\n    --color-light-text-tertiary-inverted: #6d7986;\n    --color-light-text-tertiary-transparent: rgba(11, 31, 53, 0.3);\n    --color-light-bg-opaque: rgba(255, 255, 255, 0.6);\n    --color-light-bg-tertiary-inverted: #3c4c5d;\n    --color-light-text-primary-inverted: #fff;\n    --color-light-text-secondary-inverted: #b6bcc3;\n    --color-light-bg-accent: #ef3124;\n    --color-light-border-secondary: #e7e9eb;\n    --color-light-text-link: #007aff;\n    --color-light-text-negative: #d91d0b;\n    --color-light-graphic-primary: #0b1f35;\n    --color-light-bg-attention-muted: #fff3e0;\n    --color-light-bg-primary-inverted: #0b1f35;\n    --color-light-bg-negative-muted: #feebea;\n    --color-light-graphic-primary-inverted: #f3f4f5;\n    --color-dark-border-secondary-inverted: #6d7986;\n    --color-dark-border-tertiary-inverted: #b6bcc3;\n    --color-dark-border-key-inverted: #0b1f35;\n    --color-dark-bg-opaque: rgba(11, 31, 53, 0.6);\n    --color-dark-bg-overlay: rgba(0, 0, 0, 0.6);\n    --color-dark-graphic-link: #007aff;\n    --color-dark-text-primary: #fff;\n    --color-dark-bg-primary: #0b1f35;\n    --color-dark-bg-positive-muted: #06311e;\n    --color-dark-border-secondary: #3c4c5d;\n    --color-dark-specialbg-nulled: rgba(11, 31, 53, 0);\n    --color-dark-text-secondary-transparent: rgba(255, 255, 255, 0.7);\n    --color-dark-bg-tertiary: #3c4c5d;\n    --color-dark-text-disabled: #485767;\n    --color-dark-border-key: #fff;\n    --color-dark-graphic-secondary: #b6bcc3;\n    --color-dark-graphic-positive: #2fc26e;\n    --color-dark-text-tertiary-inverted-transparent: rgba(11, 31, 53, 0.3);\n    --color-dark-text-disabled-transparent: rgba(255, 255, 255, 0.25);\n    --color-dark-text-attention: #de6a00;\n    --color-dark-graphic-neutral: #485767;\n    --color-dark-graphic-negative: #f15045;\n    --color-dark-text-tertiary-transparent: rgba(255, 255, 255, 0.4);\n    --color-dark-graphic-accent: #ef3124;\n    --color-dark-graphic-primary-inverted: #233549;\n    --color-dark-border-accent: #ef3124;\n    --color-dark-text-tertiary: #6d7986;\n    --color-dark-text-secondary-inverted-transparent: rgba(11, 31, 53, 0.6);\n    --color-dark-bg-accent: #ef3124;\n    --color-dark-bg-attention-muted: #432000;\n    --color-dark-text-accent: #ef3124;\n    --color-dark-specialbg-component: #485767;\n    --color-dark-border-primary: #485767;\n    --color-dark-text-tertiary-inverted: #b6bcc3;\n    --color-dark-text-secondary-inverted: #6d7986;\n    --color-dark-text-secondary: #b6bcc3;\n    --color-dark-specialbg-tertiary-grouped: #3c4c5d;\n    --color-dark-graphic-tertiary: #6d7986;\n    --color-dark-specialbg-secondary-grouped: #233549;\n    --color-dark-graphic-attention: #e58933;\n    --color-dark-border-tertiary: #233549;\n    --color-dark-specialbg-primary-grouped: #0b1f35;\n    --color-dark-bg-neutral: #485767;\n    --color-dark-text-primary-inverted: #0b1f35;\n    --color-dark-text-positive: #13a463;\n    --color-dark-bg-secondary-inverted: #b6bcc3;\n    --color-dark-bg-primary-inverted: #fff;\n    --color-dark-text-negative: #d91d0b;\n    --color-dark-text-link: #007aff;\n    --color-dark-graphic-primary: #fff;\n    --color-dark-bg-tertiary-inverted: #6d7986;\n    --color-dark-bg-secondary: #233549;\n    --color-dark-bg-negative-muted: #410903;\n    --color-static-text-tertiary-light-transparent: rgba(255, 255, 255, 0.4);\n    --color-static-bg-dark: #000;\n    --color-static-text-secondary-dark: #6d7986;\n    --color-static-bg-accent: #ef3124;\n    --color-static-border-accent: #ef3124;\n    --color-static-graphic-dark: #0b1f35;\n    --color-static-text-secondary-light-transparent: rgba(255, 255, 255, 0.7);\n    --color-static-text-primary-dark: #0b1f35;\n    --color-static-bg-light: #fff;\n    --color-static-text-tertiary-dark: #b6bcc3;\n    --color-static-graphic-accent: #ef3124;\n    --color-static-text-tertiary-dark-transparent: rgba(11, 31, 53, 0.3);\n    --color-static-text-secondary-dark-transparent: rgba(11, 31, 53, 0.6);\n    --color-static-text-accent: #ef3124;\n    --color-static-text-tertiary-light: #6d7986;\n    --color-static-text-secondary-light: #b6bcc3;\n    --color-static-text-primary-light: #fff;\n    --color-static-graphic-light: #fff;\n}\n",""]),r.exports=o},471:function(r,o,t){t(472),t(615),t(1261),t(1265),t(1370),t(1372),r.exports=t(1402)},534:function(r,o){}},[[471,1,2]]]);