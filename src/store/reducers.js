import * as types from "./constants"

const initialState = { mobiledecAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_BGGFHGFHGF_LIST:
    case types.API_V1_BGGFHGFHGF_LIST_SUCCEEDED:
    case types.API_V1_BGGFHGFHGF_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_BGGFHGFHGF_CREATE:
    case types.API_V1_BGGFHGFHGF_CREATE_SUCCEEDED:
    case types.API_V1_BGGFHGFHGF_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_BGGFHGFHGF_READ:
    case types.API_V1_BGGFHGFHGF_READ_SUCCEEDED:
    case types.API_V1_BGGFHGFHGF_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_BGGFHGFHGF_UPDATE:
    case types.API_V1_BGGFHGFHGF_UPDATE_SUCCEEDED:
    case types.API_V1_BGGFHGFHGF_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_BGGFHGFHGF_PARTIAL_UPDATE:
    case types.API_V1_BGGFHGFHGF_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_BGGFHGFHGF_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_BGGFHGFHGF_DELETE:
    case types.API_V1_BGGFHGFHGF_DELETE_SUCCEEDED:
    case types.API_V1_BGGFHGFHGF_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_FGHGJYJ_LIST:
    case types.API_V1_FGHGJYJ_LIST_SUCCEEDED:
    case types.API_V1_FGHGJYJ_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_FGHGJYJ_CREATE:
    case types.API_V1_FGHGJYJ_CREATE_SUCCEEDED:
    case types.API_V1_FGHGJYJ_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_FGHGJYJ_READ:
    case types.API_V1_FGHGJYJ_READ_SUCCEEDED:
    case types.API_V1_FGHGJYJ_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_FGHGJYJ_UPDATE:
    case types.API_V1_FGHGJYJ_UPDATE_SUCCEEDED:
    case types.API_V1_FGHGJYJ_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_FGHGJYJ_PARTIAL_UPDATE:
    case types.API_V1_FGHGJYJ_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_FGHGJYJ_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_FGHGJYJ_DELETE:
    case types.API_V1_FGHGJYJ_DELETE_SUCCEEDED:
    case types.API_V1_FGHGJYJ_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHGH_LIST:
    case types.API_V1_GGHGH_LIST_SUCCEEDED:
    case types.API_V1_GGHGH_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHGH_CREATE:
    case types.API_V1_GGHGH_CREATE_SUCCEEDED:
    case types.API_V1_GGHGH_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHGH_READ:
    case types.API_V1_GGHGH_READ_SUCCEEDED:
    case types.API_V1_GGHGH_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHGH_UPDATE:
    case types.API_V1_GGHGH_UPDATE_SUCCEEDED:
    case types.API_V1_GGHGH_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHGH_PARTIAL_UPDATE:
    case types.API_V1_GGHGH_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_GGHGH_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHGH_DELETE:
    case types.API_V1_GGHGH_DELETE_SUCCEEDED:
    case types.API_V1_GGHGH_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHHH_LIST:
    case types.API_V1_GGHHH_LIST_SUCCEEDED:
    case types.API_V1_GGHHH_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHHH_CREATE:
    case types.API_V1_GGHHH_CREATE_SUCCEEDED:
    case types.API_V1_GGHHH_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHHH_READ:
    case types.API_V1_GGHHH_READ_SUCCEEDED:
    case types.API_V1_GGHHH_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHHH_UPDATE:
    case types.API_V1_GGHHH_UPDATE_SUCCEEDED:
    case types.API_V1_GGHHH_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHHH_PARTIAL_UPDATE:
    case types.API_V1_GGHHH_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_GGHHH_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GGHHH_DELETE:
    case types.API_V1_GGHHH_DELETE_SUCCEEDED:
    case types.API_V1_GGHHH_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHFDGFDGFD_LIST:
    case types.API_V1_GHFDGFDGFD_LIST_SUCCEEDED:
    case types.API_V1_GHFDGFDGFD_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHFDGFDGFD_CREATE:
    case types.API_V1_GHFDGFDGFD_CREATE_SUCCEEDED:
    case types.API_V1_GHFDGFDGFD_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHFDGFDGFD_READ:
    case types.API_V1_GHFDGFDGFD_READ_SUCCEEDED:
    case types.API_V1_GHFDGFDGFD_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHFDGFDGFD_UPDATE:
    case types.API_V1_GHFDGFDGFD_UPDATE_SUCCEEDED:
    case types.API_V1_GHFDGFDGFD_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHFDGFDGFD_PARTIAL_UPDATE:
    case types.API_V1_GHFDGFDGFD_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_GHFDGFDGFD_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHFDGFDGFD_DELETE:
    case types.API_V1_GHFDGFDGFD_DELETE_SUCCEEDED:
    case types.API_V1_GHFDGFDGFD_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHGFHGF_LIST:
    case types.API_V1_GHGFHGF_LIST_SUCCEEDED:
    case types.API_V1_GHGFHGF_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHGFHGF_CREATE:
    case types.API_V1_GHGFHGF_CREATE_SUCCEEDED:
    case types.API_V1_GHGFHGF_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHGFHGF_READ:
    case types.API_V1_GHGFHGF_READ_SUCCEEDED:
    case types.API_V1_GHGFHGF_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHGFHGF_UPDATE:
    case types.API_V1_GHGFHGF_UPDATE_SUCCEEDED:
    case types.API_V1_GHGFHGF_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHGFHGF_PARTIAL_UPDATE:
    case types.API_V1_GHGFHGF_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_GHGFHGF_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_GHGFHGF_DELETE:
    case types.API_V1_GHGFHGF_DELETE_SUCCEEDED:
    case types.API_V1_GHGFHGF_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HGGFHGFH_LIST:
    case types.API_V1_HGGFHGFH_LIST_SUCCEEDED:
    case types.API_V1_HGGFHGFH_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HGGFHGFH_CREATE:
    case types.API_V1_HGGFHGFH_CREATE_SUCCEEDED:
    case types.API_V1_HGGFHGFH_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HGGFHGFH_READ:
    case types.API_V1_HGGFHGFH_READ_SUCCEEDED:
    case types.API_V1_HGGFHGFH_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HGGFHGFH_UPDATE:
    case types.API_V1_HGGFHGFH_UPDATE_SUCCEEDED:
    case types.API_V1_HGGFHGFH_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HGGFHGFH_PARTIAL_UPDATE:
    case types.API_V1_HGGFHGFH_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HGGFHGFH_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HGGFHGFH_DELETE:
    case types.API_V1_HGGFHGFH_DELETE_SUCCEEDED:
    case types.API_V1_HGGFHGFH_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGHJG_LIST:
    case types.API_V1_JHGHJG_LIST_SUCCEEDED:
    case types.API_V1_JHGHJG_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGHJG_CREATE:
    case types.API_V1_JHGHJG_CREATE_SUCCEEDED:
    case types.API_V1_JHGHJG_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGHJG_READ:
    case types.API_V1_JHGHJG_READ_SUCCEEDED:
    case types.API_V1_JHGHJG_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGHJG_UPDATE:
    case types.API_V1_JHGHJG_UPDATE_SUCCEEDED:
    case types.API_V1_JHGHJG_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGHJG_PARTIAL_UPDATE:
    case types.API_V1_JHGHJG_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_JHGHJG_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGHJG_DELETE:
    case types.API_V1_JHGHJG_DELETE_SUCCEEDED:
    case types.API_V1_JHGHJG_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGJFHG_LIST:
    case types.API_V1_JHGJFHG_LIST_SUCCEEDED:
    case types.API_V1_JHGJFHG_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGJFHG_CREATE:
    case types.API_V1_JHGJFHG_CREATE_SUCCEEDED:
    case types.API_V1_JHGJFHG_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGJFHG_READ:
    case types.API_V1_JHGJFHG_READ_SUCCEEDED:
    case types.API_V1_JHGJFHG_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGJFHG_UPDATE:
    case types.API_V1_JHGJFHG_UPDATE_SUCCEEDED:
    case types.API_V1_JHGJFHG_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGJFHG_PARTIAL_UPDATE:
    case types.API_V1_JHGJFHG_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_JHGJFHG_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_JHGJFHG_DELETE:
    case types.API_V1_JHGJFHG_DELETE_SUCCEEDED:
    case types.API_V1_JHGJFHG_DELETE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        mobiledecAPI: [...state.mobiledecAPI, action.response]
      })
    default:
      return state
  }
}
