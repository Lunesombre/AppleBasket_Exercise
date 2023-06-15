# AppleBasket Exercise

## Instructions 

- Make a new Angular project

- Create an "apple.model.ts" file and export an "Apple" interface. The interface shall have an "id" property of type number.

- Create 2 components : 
    - AppleBasket :
        - This component shall maintain an apple list (of the Apple type), empty in its initial state.
        - The view shall : 
            - Display a button to add a new apple to the apple list (generate a new id).
            - Display a text indicating that an apple must be clicked to delete it.
            - Display a \<hr> separator for greater clarity.
            - Display as many Apple components as there are Apple objects in the apple list.
    - Apple : 
        - This component shall contain an "apple" property of type Apple.
        - At view level, it shall:
            - Display the image of an apple.
            - On hovering over the apple, a title is displayed (title attribute) indicating the apple's id.
            - Clicking on the apple removes it from the list of apples maintained in AppleBasket.

## Some thoughts about it

This small project was used to learn the principles of inputs/outputs in Angular.

After completing what was asked in the instructions, I got myself a bit of fun, randomizing apples' images, adding sounds and hover effets. 