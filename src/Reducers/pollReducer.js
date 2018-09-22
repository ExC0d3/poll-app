import produce from "immer";

/*
	Reducer for the About component's state.
*/

// define the initial state for the component
const initialState = {
  loading: true,
  users: {}
};

const poll = (state = initialState, action) => {
  /*
		Produce creates a copy of the state in draft and automatically
		returns it if not explicity returned.
		At the end all the modifications to draft will create a new
		deep copy of the state object.

		This is necessary because we should never modify the state 
		object directly.
	*/
  return produce(state, draft => {
    /*
			Based on the action that is dispacted,
			we modify the state.
		*/

    switch (action.type) {
      case "ADD/USER": {
        draft.loading = true;
        const user = action.payload.user;
        if (draft.users.hasOwnProperty(user)) {
          draft.error = `${user} already exists. Try something different!`;
        } else {
          draft.users[user] = {
            questions: {}
          };
        }
        break;
      }

      case "ADD/QUESTION": {
        draft.loading = false;
        const { user, question } = action.payload;
        if (!question.hasOwnProperty("q")) {
          draft.error =
            "Missing the q propeerty. It contains the poll questino";
        } else if (!question.hasOwnProperty("a")) {
          draft.error =
            "Missing the a property. It contains the answers to the poll";
        } else if (!question.a instanceof Array) {
          draft.error = "The 'a' property should be an Array of strings";
        } else {
          draft.users[user].questions[btoa(user + question.q)] = {
            q: question.q,
            a: question.a
          };
        }
        break;
      }

      case "LOADED": {
        draft.loading = action.payload.value;
        break;
      }

      default:
        return draft;
    }
  });
};

export default poll;
