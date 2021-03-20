/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [
       {
            question: "1.   Which of the following additive manufacturing technique is an example of powder bed fusion:", ///// Write the question inside double quotes
            answers: {
                a: "SLA (Stereolithography)", ///// Write the option 1 inside double quotes
                b: "DOD (Drop On Demand)",
                c: "SLS (Selective Laser Sintering)",
                d: "FDM (Fused Deposition Modelling)",
                     },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

   {
      question: "2. Which of the following is NOT a characteristic of SLS process:",  ///// Write the question inside double quotes
      answers: {
        a: "Printed parts have a porous surface",                  ///// Write the option 1 inside double quotes
        b: "Residual stresses are not generated",                  ///// Write the option 2 inside double quotes
        c: "Powdered material is fully melted and solidified",  
        d: "Expensive setup",
            },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    
    {
 question: "3. SLS is particularly useful for industries involving:",  ///// Write the question inside double quotes
      answers: {
        a: "Mass Production",                  ///// Write the option 1 inside double quotes
        b: "Rapid Prototyping",                  ///// Write the option 2 inside double quotes
        c: "Economically Cheap Production",  
        d: "High quality & limited Production",
            },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
 question: "4. Which difficulties are caused by thermal distortion in SLS process:",  ///// Write the question inside double quotes
      answers: {
        a: "Grainy surface finish",                  ///// Write the option 1 inside double quotes
        b: "Handling issues",                  ///// Write the option 2 inside double quotes
        c: "Shrinking and warping",  
        d: "None of above",
            },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
 question: "5. Which of the following laser is used in SLS process",  ///// Write the question inside double quotes
      answers: {
        a: "Nd:YAG; CO2",                  ///// Write the option 1 inside double quotes
        b: "CO2; Nd:YAG",                  ///// Write the option 2 inside double quotes
        c: "Yb-fiber laser; CO2",  
        d: "Nd:YAG; Yb-fiber laser",
            },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
