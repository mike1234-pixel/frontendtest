# AC Frontend Test

## Getting started

First, fork this repository into your own Github account, then clone locally.

Install the modules:

    npm install

Start the app, which will open the app at [http://localhost:3000/](http://localhost:3000/):

    npm start

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is written in React + Typescript, using the [Emotion](https://emotion.sh/docs/introduction) library for styling.

## The task

The App is a simple gallery of images from NASA. As you can see once you reach Part 2, the images are quite big, filesize-wise. The task is to turn this into a lazy-loading image gallery so the images are only loaded once they appear in the viewport.

Open the file `App.tsx`. You'll see it uses an `Image` component located inside `Image.tsx` to display the images. At the moment, `Image` merely is a proxy for the native HTML `<img>` tag.

### Part 1

Upon opening the address at [http://localhost:3000/](http://localhost:3000/) you will see there are a series of Typescript errors.

In `Image.tsx`, the `Image` component has props of type `ImageProps`, which in turn extends a type called `ImgElementProps`. `ImgElementProps` should represent all the props an HTML `<img>` element can take, but at the moment it is just `{}`. This is causing the Typescript errors you can see.

Task: Update the definition of `ImgElementProps` so that it correctly covers the props an `<img>` element can take. After this is done, all Typescript errors in the project should have disappeared.

Once completed, commit your changes with the commit message "Part 1".

### Part 2

Reload [http://localhost:3000/](http://localhost:3000/) if it has not auto-reloaded, and now that it correctly compiles, you can see the app is a series of large images from NASA.

Task: Update the `Image` component so that it does not initially load the image source, but instead displays a blank grey rectangle of some arbitrary height. As the user scrolls down the page so the component becomes displayed, the `Image` component should update and load the desired image. If the component is in view on the initial page load however, it should display the image automatically straight away.

Do **not** use any third-party library for this. There must be no additional packages installed to enable this functionality. For styling your components, the [Emotion](https://emotion.sh/docs/introduction) library has been provided as a CSS-in-JS solution.

Once completed, commit your changes with the commit message "Part 2".

### Part 3

Task: Update the interface `ImageProps` to be:

    interface ImageProps extends ImgElementProps {
      threshold?: number;
      loadingIcon?: React.ReactNode;
    }

Update the `Image` component so that it can take the optional props `threshold` and `loadingIcon`.

`threshold` is a number between 0 and 1 reflecting how much of the component should be visible before loading. `0` means just one pixel visible in the window will trigger a load. `1` means the entire component will need to be visible before loading. The default value, if none given, is up to you.

`loadingIcon` is a React component that will render a loading icon while the image is loading. It should be centered both horizontally and vertically within the rectangle. To start you off there is a `Spinner.tsx` component which should be the default if none provided, but it will need animating.

Once completed, commit your changes with the commit message "Part 3".

### Part 4

At the moment it's a bit jarring when the image suddenly loads. Update your `Image` component's styling so the image fades in once it is loaded.

Once all this is done, with a threshold value of `0.9`, the gallery should look something like this:

![](/images/demo.gif)

Once completed, commit your changes with the commit message "Part 4".

### Part 5

Write some tests for the `Image` component's lazy loading behaviour in `Image.test.tsx`. Jest is already installed as part of [Create React App](https://create-react-app.dev/docs/running-tests/). You may add additional testing libraries or packages for this part of the test, if you wish.

The suggested test functions are intended as a guide, feel free to add more or edit them. Aim for coverage of all the most likely scenarios, but 100% coverage is not mandatory if you feel it is not necessary.

Once completed, commit your changes with the commit message "Part 5".

## Once you are done

Push all your committed changes to your forked repo on Github. Do not initiate a Pull Request or else other candidates will see your answer. Email the URL of the forked repo back to us for assessment. Thank you.
