import { GLOBALTYPES, DeleteData } from "../actions/globalTypes";
import { postDataApi, getDataApi, deleteDataApi } from "../../utils/fetchData";

export const MESS_TYPES = {
  ADD_USER: "ADD_USER",
  ADD_MESSAGE: "ADD_MESSAGE",
  GET_CONVERSATIONS: "GET_CONVERSATIONS",
  GET_MESSAGES: "GET_MESSAGES",
  DELETE_MESSAGES: "DELETE_MESSAGES",
  DELETE_CONVERSATION: "DELETE_CONVERSATION",
  CHECK_ONLINE_OFFLINE: "CHECK_ONLINE_OFFLINE",
};

export const addMessage =
  ({ msg, auth, socket }) =>
  async (dispatch) => {
    dispatch({ type: MESS_TYPES.ADD_MESSAGE, payload: msg });
    const { _id, avatar, fullname, username, job } = auth.user;
    socket.emit("addMessage", {
      ...msg,
      user: { _id, avatar, fullname, username, job },
    });
    try {
      await postDataApi("message", msg, auth.token);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { err: err.response.data.msg },
      });
    }
  };

export const getConversations =
  ({ auth, page = 1 }) =>
  async (dispatch) => {
    try {
      const res = await getDataApi(
        `conversations?limit=${page * 9}`,
        auth.token
      );

      let newArr = [];
      res.data.conversations.forEach((item) => {
        item.recipients.forEach((cv) => {
          if (cv._id !== auth.user._id) {
            newArr.push({
              ...cv,
              text: item.text,
              media: item.media,
              call: item.call,
            });
          }
        });
      });

      dispatch({
        type: MESS_TYPES.GET_CONVERSATIONS,
        payload: { newArr, result: res.data.result },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { err: err.response.data.msg },
      });
    }
  };

export const getMessages =
  ({ auth, id, page = 1 }) =>
  async (dispatch) => {
    try {
      const res = await getDataApi(
        `message/${id}?limit=${page * 9}`,
        auth.token
      );
      dispatch({ type: MESS_TYPES.GET_MESSAGES, payload: res.data });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { err: err.response.data.msg },
      });
    }
  };

export const deleteMessages =
  ({ msg, data, auth }) =>
  async (dispatch) => {
    const newData = DeleteData(data, msg._id);
    dispatch({
      type: MESS_TYPES.DELETE_MESSAGES,
      payload: { newData, _id: msg.recipient },
    });
    try {
      await deleteDataApi(`message/${msg._id}`, auth.token);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { err: err.response.data.msg },
      });
    }
  };

export const deleteConversation =
  ({ auth, id }) =>
  async (dispatch) => {
    dispatch({ type: MESS_TYPES.DELETE_CONVERSATION, payload: id });
    try {
      await deleteDataApi(`conversation/${id}`, auth.token);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { err: err.response.data.msg },
      });
    }
  };
