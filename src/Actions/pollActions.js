import { createActions } from "redux-actions";

/*
	Define API actions for dispatching to reducers.
	3 major actions to be dispatched when
	REQUEST - making requests to API.
	SUCCESS - receiving successful response from API.
	FAILURE - failure occurs while making API calls.
*/

const Actions = createActions({
  ADD: {
    /*
      Every key corresponds to an endpoint that is called.
      Payload of the Action is spread as data passed while 
      dispatching the action.
      Example - /stories?quantity=6 is equal to dispatching
      REQUEST.STORIES({quantity:6})
    */
    USER: data => ({ ...data }),
    QUESTION: data => ({ ...data })
  },
  VOTE: data => ({ ...data }),
  LOADED: data => ({ ...data }),
  FAILURE: data => new Error(data)
});

export default Actions;
