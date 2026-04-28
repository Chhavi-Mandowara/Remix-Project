This is a Remix based portfolio made with:
- [Contentstack](https://www.contentstack.com/platforms/headless-cms)
- [Contentstack Launch For deployement](https://www.contentstack.com/platforms/launch)
- [Remix.Run](https://remix.run)
- [Tailwind.css](https://tailwindcss.com/)
- [Headlessui](https://headlessui.com/)


## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Create a `.env` file at the root and Set you contentstack environment variables as mentioned in `.env.example`
Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

To Set your theme update the env variable `DEFAULT_THEME` to any of the supported values `light`, `dark`, `mint`, `dust` & `water`
