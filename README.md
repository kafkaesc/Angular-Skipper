# My Favorite Things

This project is a demonstration of how to implement a reliable 'skip to main content' button using the Angular framework. This button is not always necessary, but on pages with large headers it can be an important quality of life improvement for keyboard-focused and keyboard-dependent users.

The layout for this site includes a skip to main content button next to the site logo, but it is only visible when focused. Clicking or pressing enter on the button will shift the focus the first item in the page's main content, skipping the navigation items as suggested.

Beneath the main navigation menu is a sub-menu demonstrating different typical methods one might use to write a skip to main content button for a site. So far only `[href]` calling a string from the component's TypeScript works as a reliable solution.

If you are using Safari or Firefox on macOS and this site is not behaving as expected, you might want to check your system settings. You can find more details about this [here](https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537#11713537).

To run:

1. navigate to the project folder
1. `npm install`
1. `ng serve -o`

A working version of this site can be viewed at https://kafkaesc.github.io/Angular-Skipper.

The full code for this site can be viewed at https://github.com/kafkaesc/Angular-Skipper.

Built by Jared Hettinger.
