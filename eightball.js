/* TODO New Line: Add an Event Listener on the document for the event "DOMContentLoaded".
   Have the `init` function handle the event. Hint: http://codepen.io/thomasbell/pen/bEqmqr */

document.addEventListener("DOMContentLoaded", init);

function init() {

    /* TODO New Line: Declare a variable called `canvas`. Store a reference to the HTML canvas that has an HTML
       ID attribute of `demoCanvas` in the `canvas` JS variable. Hint: use the function `document.getElementById()`
       to select the canvas element by ID. */

    var canvas = document.getElementById("canvas");

    /* TODO New Line: Declare a variable called `ctx`. This will store the canvas 2d context.
       Hint: Call the `getContext()` function of `canvas` to get the 2d context of the canvas. */
    var ctx = canvas.getContext("2d");

    /* TODO New Line: Declare a variable called `cw`. This will store the canvas width.
       Hint: Use the width property to get the width of the HTML canvas element.
       https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect */

    var cw = canvas.width;



    /* TODO New Line: Declare a variable called `ch`. This will store the canvas height.
       Hint: Use the height property to get the width of the HTML canvas element.
       https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect */

    var ch = canvas.height;


    /**** No Changes to the code below *****/
    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {

        var words = text.split(" ");
        var line = "";

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + " ";
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;

            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + " ";
                y += lineHeight;
            } else {
                line = testLine;
            }
        }

        ctx.fillText(line, x, y);
        return y + lineHeight;
    }
    /*************************************/

    /* TODO New Line: Declare a variable called `shake`. This will store a reference to the HTML button element that has an ID attribute of `shake`.
       Hint: Use the function `document.getElementById()` to select the shake button element by ID. http://codepen.io/thomasbell/pen/bEqmqr */


    /* TODO New Line: Add an Event Listener on the shake variable for the event "click". Have the shakeHandler function handle the event.
       Hint: http://codepen.io/thomasbell/pen/bEqmqr */


    //var shake = document.getElementById('shake')
    //shake.addEventListener("click", clicked);

    //***my way***
    document.getElementById("shake").addEventListener("click", shakeHandler);

    function shakeHandler() {

        /* TODO New Line: Declare a variable called `answers`. This will store all of the possible answers of the magic eight ball as an array.
           Hint: use square brackets to create the array. Here are the possible answers. Remember strings have quotes. */
        var answers = [
          "It is certain!",
          "It is decidedly so!",
          "Without a doubt!",
          "Yes definitely!",
          "You may rely on it!",
          "As I see it!",
          "Yes!",
          "Most likely!",
          "Outlook good!",
          "Yes!",
          "Signs point to yes!",
          "Reply hazy try again!",
          "Ask again later!",
          "Better not tell you now!",
          "Cannot predict now!",
          "Concentrate and ask again!",
          "Don't count on it!",
          "My reply is no!",
          "My sources say no!",
          "Outlook not so good!",
          "Very doubtful!"
        ]
        /* Answers:
          It is certain!
          It is decidedly so!
          Without a doubt!
          Yes definitely!
          You may rely on it!
          As I see it!
          Yes!
          Most likely!
          Outlook good!
          Yes!
          Signs point to yes!
          Reply hazy try again!
          Ask again later!
          Better not tell you now!
          Cannot predict now!
          Concentrate and ask again!
          Don't count on it!
          My reply is no!
          My sources say no!
          Outlook not so good!
          Very doubtful!
          21 - Total
        */

        /* TODO New Line: Declare a variable called `randomNumber`. This will store a generated random number between 1 and the number of possible answers.
           Hint: you will need the functions `Math.random()`, `Math.floor()`, and to figure out the length of your answers array. */
        var randomNumber = Math.floor(Math.random() * (answers.length - 1));

        /* TODO New Line: Declare a variable called `question`. This will store the value of the HTML textarea with the HTML ID attribute of `question`.
           Hint: Use the `document.getElementById()` to select the textarea element that has an ID of question and then get it's value. */
        var question = document.getElementById("question").value;
        console.log(question);
        /* TODO New Line: Declare a variable called `mylineHeight`. Assign it the value of 15. */
        var mylineHeight = 15;
        /* TODO New Line: Declare a variable called `startX`. Assign it the value of 10. */
        var startX = 10;
        /* TODO New Line: Declare a variable called `startY`. Assign it the value of 20. */
        var startY = 20;

        var maxWidth = 500;
        /* TODO New Line: Clear the canvas. Hints: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
           Remember that we have variables that store the width and height of the canvas. */
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        /* TODO New Line: Set the font property of the `ctx` to: mylineHeight + "px Arial".
           Hint: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText */
        ctx.font = mylineHeight + 'px Arial';
        /* TODO New Line: With an if statement test whether the user has input a question.
           Hint: We have a variable that stores the question text. We are testing that, that variable does *NOT* contain an empty string.
           Empty strings are represented as "". */

        /* TODO New Line: In the if branch use the `wrapText()` custom function to display the users question on the canvas.
           `wrapText()` requires 6 things  in the proper order.
           Hint: All of the things that the `wrapText()` requires you have already created a variable for i.e `ctx`, `question`.
           Look at the function for the correct order. Remember that the canvas width has been stored in a variable.
           `wrapText()` returns a value so on the left side of the first function call declare a variable called `currentY` to store the value `wrapText()` returns.  */

        /* TODO New Line: In the if branch use the `wrapText()` custom function to display the magic eight balls answer on the canvas.
           `wrapText()` requires 6 things in the proper order.
           Hint: All of the things that the `wrapText()` requires you have already created a variable for i.e `ctx`, `question`.
           Look at the function for the correct order. Remember that the canvas width has been stored in a variable.
           The text parameter should be the result of a random answer pulled from the answers array. */

        /* TODO New Line: In the else branch use the `wrapText()` custom function to display the phrase "Please ask a Question!" on the canvas.
           `wrapText()` requires 6 things in the proper order.
           Hint: All of the things that the `wrapText()` requires you have already created a variable for i.e `ctx`, `question`.
           Look at the function for the correct order. */

        if (question !== "") {
            wrapText(ctx, question + "   " + answers[randomNumber], startX, startY, maxWidth)
        } else {
            wrapText(ctx, "Please ask a question.", startX, startY, maxWidth, mylineHeight)
        }
    }

}
