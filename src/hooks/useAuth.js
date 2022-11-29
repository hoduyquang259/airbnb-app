import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authAuthSignInSelector,
  authAuthSignUpSelector,
  postSignInRequest,
  postSignUpRequest,
} from "../slice/auth";

const useAuth = () => {
  const dispatch = useDispatch();
  const authSignUp = useSelector(authAuthSignUpSelector);
  const authSignIn = useSelector(authAuthSignInSelector);

  const onPostAuthSignUp = useCallback((payload) => {
    dispatch(postSignUpRequest(payload));
  }, []);

  const onPostAuthSignIn = useCallback((payload) => {
    dispatch(postSignInRequest(payload));
  }, []);

  return { authSignUp, authSignIn, onPostAuthSignUp, onPostAuthSignIn };
};

export default useAuth;
