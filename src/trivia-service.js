// the business Logic file

// the version 1.3.0 of application; in here I used Async and Await functions

export class TriviaService {
    // a static method that takes in userDifficulty as the only parameter
    static async getMeTriviaQuestions(userDifficulty) {

        try {
            // returning a fetch with my endpoint url in it
            let triviaResponse = await fetch(`https://opentdb.com/api.php?amount=15&category=12&difficulty=${userDifficulty}&type=multiple`)


            if (!triviaResponse.ok) {
                // the Error is an object in JavaScript for errors
                throw Error(triviaResponse.statusText);
            }
            // else return the triviaResponse and call the .json() method on it
            return triviaResponse.json();

        }

        catch (triviaError) {
            return triviaError.message;
        }

    }
}
