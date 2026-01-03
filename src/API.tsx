import { shuffleArray } from "./utils"; // Import shuffleArray utility
import { API_URL } from "./apiConfig"; // Import API URL

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

// Fetch quiz questions from the API
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const endpoint = `${API_URL}?amount=${amount}&difficulty=${difficulty}&type=multiple`; // Using imported API URL

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch quiz questions");
    }
    const data = await response.json();
    // console.log(data);
    // Return the questions with shuffled answers
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return []; // Return an empty array in case of an error
  }
};
