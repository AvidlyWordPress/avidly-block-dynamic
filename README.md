# Avidly Dynamic Block
Hi. I'm a block called Avidly Dynamic Block. I'm a example block based on WordPress Block Editor Handbook <a href="https://developer.wordpress.org/block-editor/handbook/tutorials/create-block/">Create a Block Tutorial</a>. Try turning me into the next, most awesome, WordPress block out there.

## Features

### @wordpress/create-block
Base of mine is created with <a href="https://www.npmjs.com/package/@wordpress/create-block">@wordpress/create-block</a> and I have translation support.

### Requirements
* Requires at least WordPress 5.8
* NodeJS v12.14.1 or later

## Getting Started
1. Download avidly-block-dynamic repository to the `/wp-content/plugins/` directory
2. Rename plugin folder name for your project (use only a-z and -).
3. Go to plugin folder with terminal: `cd wp-content/plugins/your-plugin-name`
4. Run `sh setup.sh` and follow the instructions in terminal. This will run some search and replace functionality for code.

Activate the plugin when you are ready.

## Nice to know

### Development
- Get packages with `npm install` command
- Run development with `npm run start` command (does not compress the code so it is easier to read)
- Run production build with `npm run build` command (compresses the code down so it downloads faster)

VERY IMPORTANT: Always run production build to compile compressed, production-ready CSS and JS.

### block.json
- Canonical way to register block types. Read details from <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/">Block Editor Handbook</a>.

### Translating with WP CLI
- Go to plugin folder with terminal: `cd wp-content/plugins/your-plugin-name`
- Create or update POT file: `npm run make-pot`
- Open your PO file(s) with PoEdit & update the content from POT file and make your translations changes.
- Create or update JSON translations file: `npm run make-json`
- Test that your translations works