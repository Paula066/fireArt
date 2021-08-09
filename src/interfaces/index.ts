export interface Question {
    question: string,
    correct_answer: string,
    category: string,
    difficulty: string,
    incorrect_answers: string[],
    type: string
}

export interface IGETQuestions {
    response_code: number,
    results: Question[]
}
