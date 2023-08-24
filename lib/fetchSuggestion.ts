import formatTodosForAI from "./formatTodosForAi";

const fetchSuggestion = async (board: Board) => {
  console.log(board)
  const todos = formatTodosForAI(board);
  console.log('formatted todos to send: ', todos)
  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
}

export default fetchSuggestion;