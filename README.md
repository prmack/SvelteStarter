
Svelte Starter Template with;

- Less Support
- Bulma
- Svelte-Router
- Support for Local HTTPS

Contains `Global Styles`, and `Variables` for styling.


If you are looking to use HTTPS you will need to;

-  Add Local SSL certs. 
-  Uncomment `line 86` on the `rollup.config.js`.
-  Alter `start` command in `package.json`.
-  Include `import * as fs from 'fs';` in `rollup.config.js`.

Be sure to add `certs/` folder to `.gitignore`.
