# Password-Generator
A web app using javascript to generate a random password.
Much of the code was sourced from this helpful guide:
https://webdesign.tutsplus.com/tutorials/build-a-configurable-random-password-generator-with-javascript--cms-93262

## Deployed Website
https://anuf0.github.io/Password-Generator/

.\assests\screenshot.png

##  Usage
This site used a series of automated prompts to gain paramenters to randomly create a password of between 8-128 characters. Whilst the character limit will automaticly cut off any numbers to high or low, it will not accept any input outside of numeric values.
Similarly, the other promts for upper/lowercase, special characters and numbers will only accecpt "y" as a valid input, otherwise it will default to 'no'.
After a user had input their parameters, they then press the large 'generate" button and a password will generate within the the set parameters. If they are not satififed with generated password, they may continue to press the 'generate' button which will return another password, again within the previously set parameters.