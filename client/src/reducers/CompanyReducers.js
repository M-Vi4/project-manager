const companyReducer = (
  state = {
    companyData: [],
    loading: false,
    error: false,
    uploading: false,
    uploaded: false,
  },
  action
) => {
  switch (action.type) {
    case "COMPANY_START":
      return {
        ...state,
        loading: true,
        error: false,
        uploaded: false,
        uploading: false,
      };
    case "COMPANY_SUCCESS":
      return {
        ...state,
        companyData: action.data,
        loading: false,
        error: false,
        uploaded: false,
      };
    case "COMPANY_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        uploaded: false,
        uploading: false,
      };
    case "CREATE_START":
      return {
        ...state,
        loading: false,
        error: false,
        uploading: true,
        uploaded: false,
      };
    case "CREATE_SUCCESS":
      return {
        ...state,
        companyData: [action.data, ...state.companyData],
        loading: false,
        error: false,
        uploading: false,
        uploaded: true,
      };
    case "CREATE_FAIL":
      return { ...state, loading: false, error: true, uploaded: false };

    default:
      return state;
  }
};

export default companyReducer;
