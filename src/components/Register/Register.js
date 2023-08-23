import Form from '../Form/Form.js';
import { ERROR_MESSAGE, REGISTER_FORM_SETTING, STORAGE_DATA_NAME } from '../../utils/constants.js';
import mainApi from '../../utils/MainApi.js';

function Register({ isLoad, setCurrentUser, setIsLoad, navigate, requestError, setRequestError }) {
  const handleRegistrationUser = (userData) => {
    setIsLoad(true);


    mainApi.getRegistrationUser(userData)
      .then((test) => {
        debugger
        return mainApi.getAuthorizationUser(userData);
      })
      .then(data => {
        const { name, email, _id } = data;

        if (_id) {
          localStorage.setItem(STORAGE_DATA_NAME.userId, data._id);
          setCurrentUser(oldState => ({ name, email, loggeIn: true }));
          navigate('/movies');
        };
      })
      .catch(() => setRequestError(ERROR_MESSAGE.repeatedEmail))
      .finally(() => setIsLoad(false));
  };

  return (
      <Form
        isLoad={isLoad}
        setting={REGISTER_FORM_SETTING}
        handleSubmit={handleRegistrationUser}
        requestError={requestError}/>

  );
};

export default Register;
