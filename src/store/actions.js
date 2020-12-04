import * as types from "./constants"
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})

export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})

export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})

export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})

export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})

export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})

export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})

export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})

export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})

export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})

export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})

export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})

export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})

export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})

export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})

export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})

export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})

export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})

export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})

export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})

export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})

export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})

export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})

export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})

export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_bggfhgfhgf_list = () => ({
  type: types.API_V1_BGGFHGFHGF_LIST
})
export const api_v1_bggfhgfhgf_listSucceeded = (response, starter) => ({
  type: types.API_V1_BGGFHGFHGF_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_bggfhgfhgf_listFailed = (error, starter) => ({
  type: types.API_V1_BGGFHGFHGF_LIST_FAILED,
  error,
  starter
})
export const api_v1_bggfhgfhgf_create = data => ({
  type: types.API_V1_BGGFHGFHGF_CREATE,
  data
})
export const api_v1_bggfhgfhgf_createSucceeded = (response, starter) => ({
  type: types.API_V1_BGGFHGFHGF_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bggfhgfhgf_createFailed = (error, starter) => ({
  type: types.API_V1_BGGFHGFHGF_CREATE_FAILED,
  error,
  starter
})
export const api_v1_bggfhgfhgf_read = () => ({
  type: types.API_V1_BGGFHGFHGF_READ
})
export const api_v1_bggfhgfhgf_readSucceeded = (response, starter) => ({
  type: types.API_V1_BGGFHGFHGF_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_bggfhgfhgf_readFailed = (error, starter) => ({
  type: types.API_V1_BGGFHGFHGF_READ_FAILED,
  error,
  starter
})
export const api_v1_bggfhgfhgf_update = data => ({
  type: types.API_V1_BGGFHGFHGF_UPDATE,
  data
})
export const api_v1_bggfhgfhgf_updateSucceeded = (response, starter) => ({
  type: types.API_V1_BGGFHGFHGF_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bggfhgfhgf_updateFailed = (error, starter) => ({
  type: types.API_V1_BGGFHGFHGF_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_bggfhgfhgf_partial_update = data => ({
  type: types.API_V1_BGGFHGFHGF_PARTIAL_UPDATE,
  data
})
export const api_v1_bggfhgfhgf_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_BGGFHGFHGF_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bggfhgfhgf_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_BGGFHGFHGF_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_bggfhgfhgf_delete = () => ({
  type: types.API_V1_BGGFHGFHGF_DELETE
})
export const api_v1_bggfhgfhgf_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_BGGFHGFHGF_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bggfhgfhgf_deleteFailed = (error, starter) => ({
  type: types.API_V1_BGGFHGFHGF_DELETE_FAILED,
  error,
  starter
})
export const api_v1_fghgjyj_list = () => ({ type: types.API_V1_FGHGJYJ_LIST })
export const api_v1_fghgjyj_listSucceeded = (response, starter) => ({
  type: types.API_V1_FGHGJYJ_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_fghgjyj_listFailed = (error, starter) => ({
  type: types.API_V1_FGHGJYJ_LIST_FAILED,
  error,
  starter
})
export const api_v1_fghgjyj_create = data => ({
  type: types.API_V1_FGHGJYJ_CREATE,
  data
})
export const api_v1_fghgjyj_createSucceeded = (response, starter) => ({
  type: types.API_V1_FGHGJYJ_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_fghgjyj_createFailed = (error, starter) => ({
  type: types.API_V1_FGHGJYJ_CREATE_FAILED,
  error,
  starter
})
export const api_v1_fghgjyj_read = () => ({ type: types.API_V1_FGHGJYJ_READ })
export const api_v1_fghgjyj_readSucceeded = (response, starter) => ({
  type: types.API_V1_FGHGJYJ_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_fghgjyj_readFailed = (error, starter) => ({
  type: types.API_V1_FGHGJYJ_READ_FAILED,
  error,
  starter
})
export const api_v1_fghgjyj_update = data => ({
  type: types.API_V1_FGHGJYJ_UPDATE,
  data
})
export const api_v1_fghgjyj_updateSucceeded = (response, starter) => ({
  type: types.API_V1_FGHGJYJ_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_fghgjyj_updateFailed = (error, starter) => ({
  type: types.API_V1_FGHGJYJ_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_fghgjyj_partial_update = data => ({
  type: types.API_V1_FGHGJYJ_PARTIAL_UPDATE,
  data
})
export const api_v1_fghgjyj_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_FGHGJYJ_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_fghgjyj_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_FGHGJYJ_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_fghgjyj_delete = () => ({
  type: types.API_V1_FGHGJYJ_DELETE
})
export const api_v1_fghgjyj_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_FGHGJYJ_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_fghgjyj_deleteFailed = (error, starter) => ({
  type: types.API_V1_FGHGJYJ_DELETE_FAILED,
  error,
  starter
})
export const api_v1_gghgh_list = () => ({ type: types.API_V1_GGHGH_LIST })
export const api_v1_gghgh_listSucceeded = (response, starter) => ({
  type: types.API_V1_GGHGH_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghgh_listFailed = (error, starter) => ({
  type: types.API_V1_GGHGH_LIST_FAILED,
  error,
  starter
})
export const api_v1_gghgh_create = data => ({
  type: types.API_V1_GGHGH_CREATE,
  data
})
export const api_v1_gghgh_createSucceeded = (response, starter) => ({
  type: types.API_V1_GGHGH_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghgh_createFailed = (error, starter) => ({
  type: types.API_V1_GGHGH_CREATE_FAILED,
  error,
  starter
})
export const api_v1_gghgh_read = () => ({ type: types.API_V1_GGHGH_READ })
export const api_v1_gghgh_readSucceeded = (response, starter) => ({
  type: types.API_V1_GGHGH_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghgh_readFailed = (error, starter) => ({
  type: types.API_V1_GGHGH_READ_FAILED,
  error,
  starter
})
export const api_v1_gghgh_update = data => ({
  type: types.API_V1_GGHGH_UPDATE,
  data
})
export const api_v1_gghgh_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GGHGH_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghgh_updateFailed = (error, starter) => ({
  type: types.API_V1_GGHGH_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_gghgh_partial_update = data => ({
  type: types.API_V1_GGHGH_PARTIAL_UPDATE,
  data
})
export const api_v1_gghgh_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GGHGH_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghgh_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_GGHGH_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_gghgh_delete = () => ({ type: types.API_V1_GGHGH_DELETE })
export const api_v1_gghgh_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_GGHGH_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghgh_deleteFailed = (error, starter) => ({
  type: types.API_V1_GGHGH_DELETE_FAILED,
  error,
  starter
})
export const api_v1_gghhh_list = () => ({ type: types.API_V1_GGHHH_LIST })
export const api_v1_gghhh_listSucceeded = (response, starter) => ({
  type: types.API_V1_GGHHH_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghhh_listFailed = (error, starter) => ({
  type: types.API_V1_GGHHH_LIST_FAILED,
  error,
  starter
})
export const api_v1_gghhh_create = data => ({
  type: types.API_V1_GGHHH_CREATE,
  data
})
export const api_v1_gghhh_createSucceeded = (response, starter) => ({
  type: types.API_V1_GGHHH_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghhh_createFailed = (error, starter) => ({
  type: types.API_V1_GGHHH_CREATE_FAILED,
  error,
  starter
})
export const api_v1_gghhh_read = () => ({ type: types.API_V1_GGHHH_READ })
export const api_v1_gghhh_readSucceeded = (response, starter) => ({
  type: types.API_V1_GGHHH_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghhh_readFailed = (error, starter) => ({
  type: types.API_V1_GGHHH_READ_FAILED,
  error,
  starter
})
export const api_v1_gghhh_update = data => ({
  type: types.API_V1_GGHHH_UPDATE,
  data
})
export const api_v1_gghhh_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GGHHH_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghhh_updateFailed = (error, starter) => ({
  type: types.API_V1_GGHHH_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_gghhh_partial_update = data => ({
  type: types.API_V1_GGHHH_PARTIAL_UPDATE,
  data
})
export const api_v1_gghhh_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GGHHH_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghhh_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_GGHHH_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_gghhh_delete = () => ({ type: types.API_V1_GGHHH_DELETE })
export const api_v1_gghhh_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_GGHHH_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_gghhh_deleteFailed = (error, starter) => ({
  type: types.API_V1_GGHHH_DELETE_FAILED,
  error,
  starter
})
export const api_v1_ghfdgfdgfd_list = () => ({
  type: types.API_V1_GHFDGFDGFD_LIST
})
export const api_v1_ghfdgfdgfd_listSucceeded = (response, starter) => ({
  type: types.API_V1_GHFDGFDGFD_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghfdgfdgfd_listFailed = (error, starter) => ({
  type: types.API_V1_GHFDGFDGFD_LIST_FAILED,
  error,
  starter
})
export const api_v1_ghfdgfdgfd_create = data => ({
  type: types.API_V1_GHFDGFDGFD_CREATE,
  data
})
export const api_v1_ghfdgfdgfd_createSucceeded = (response, starter) => ({
  type: types.API_V1_GHFDGFDGFD_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghfdgfdgfd_createFailed = (error, starter) => ({
  type: types.API_V1_GHFDGFDGFD_CREATE_FAILED,
  error,
  starter
})
export const api_v1_ghfdgfdgfd_read = () => ({
  type: types.API_V1_GHFDGFDGFD_READ
})
export const api_v1_ghfdgfdgfd_readSucceeded = (response, starter) => ({
  type: types.API_V1_GHFDGFDGFD_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghfdgfdgfd_readFailed = (error, starter) => ({
  type: types.API_V1_GHFDGFDGFD_READ_FAILED,
  error,
  starter
})
export const api_v1_ghfdgfdgfd_update = data => ({
  type: types.API_V1_GHFDGFDGFD_UPDATE,
  data
})
export const api_v1_ghfdgfdgfd_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GHFDGFDGFD_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghfdgfdgfd_updateFailed = (error, starter) => ({
  type: types.API_V1_GHFDGFDGFD_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_ghfdgfdgfd_partial_update = data => ({
  type: types.API_V1_GHFDGFDGFD_PARTIAL_UPDATE,
  data
})
export const api_v1_ghfdgfdgfd_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_GHFDGFDGFD_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghfdgfdgfd_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_GHFDGFDGFD_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_ghfdgfdgfd_delete = () => ({
  type: types.API_V1_GHFDGFDGFD_DELETE
})
export const api_v1_ghfdgfdgfd_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_GHFDGFDGFD_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghfdgfdgfd_deleteFailed = (error, starter) => ({
  type: types.API_V1_GHFDGFDGFD_DELETE_FAILED,
  error,
  starter
})
export const api_v1_ghgfhgf_list = () => ({ type: types.API_V1_GHGFHGF_LIST })
export const api_v1_ghgfhgf_listSucceeded = (response, starter) => ({
  type: types.API_V1_GHGFHGF_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghgfhgf_listFailed = (error, starter) => ({
  type: types.API_V1_GHGFHGF_LIST_FAILED,
  error,
  starter
})
export const api_v1_ghgfhgf_create = data => ({
  type: types.API_V1_GHGFHGF_CREATE,
  data
})
export const api_v1_ghgfhgf_createSucceeded = (response, starter) => ({
  type: types.API_V1_GHGFHGF_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghgfhgf_createFailed = (error, starter) => ({
  type: types.API_V1_GHGFHGF_CREATE_FAILED,
  error,
  starter
})
export const api_v1_ghgfhgf_read = () => ({ type: types.API_V1_GHGFHGF_READ })
export const api_v1_ghgfhgf_readSucceeded = (response, starter) => ({
  type: types.API_V1_GHGFHGF_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghgfhgf_readFailed = (error, starter) => ({
  type: types.API_V1_GHGFHGF_READ_FAILED,
  error,
  starter
})
export const api_v1_ghgfhgf_update = data => ({
  type: types.API_V1_GHGFHGF_UPDATE,
  data
})
export const api_v1_ghgfhgf_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GHGFHGF_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghgfhgf_updateFailed = (error, starter) => ({
  type: types.API_V1_GHGFHGF_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_ghgfhgf_partial_update = data => ({
  type: types.API_V1_GHGFHGF_PARTIAL_UPDATE,
  data
})
export const api_v1_ghgfhgf_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GHGFHGF_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghgfhgf_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_GHGFHGF_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_ghgfhgf_delete = () => ({
  type: types.API_V1_GHGFHGF_DELETE
})
export const api_v1_ghgfhgf_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_GHGFHGF_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghgfhgf_deleteFailed = (error, starter) => ({
  type: types.API_V1_GHGFHGF_DELETE_FAILED,
  error,
  starter
})
export const api_v1_hggfhgfh_list = () => ({ type: types.API_V1_HGGFHGFH_LIST })
export const api_v1_hggfhgfh_listSucceeded = (response, starter) => ({
  type: types.API_V1_HGGFHGFH_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_hggfhgfh_listFailed = (error, starter) => ({
  type: types.API_V1_HGGFHGFH_LIST_FAILED,
  error,
  starter
})
export const api_v1_hggfhgfh_create = data => ({
  type: types.API_V1_HGGFHGFH_CREATE,
  data
})
export const api_v1_hggfhgfh_createSucceeded = (response, starter) => ({
  type: types.API_V1_HGGFHGFH_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_hggfhgfh_createFailed = (error, starter) => ({
  type: types.API_V1_HGGFHGFH_CREATE_FAILED,
  error,
  starter
})
export const api_v1_hggfhgfh_read = () => ({ type: types.API_V1_HGGFHGFH_READ })
export const api_v1_hggfhgfh_readSucceeded = (response, starter) => ({
  type: types.API_V1_HGGFHGFH_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_hggfhgfh_readFailed = (error, starter) => ({
  type: types.API_V1_HGGFHGFH_READ_FAILED,
  error,
  starter
})
export const api_v1_hggfhgfh_update = data => ({
  type: types.API_V1_HGGFHGFH_UPDATE,
  data
})
export const api_v1_hggfhgfh_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HGGFHGFH_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_hggfhgfh_updateFailed = (error, starter) => ({
  type: types.API_V1_HGGFHGFH_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_hggfhgfh_partial_update = data => ({
  type: types.API_V1_HGGFHGFH_PARTIAL_UPDATE,
  data
})
export const api_v1_hggfhgfh_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HGGFHGFH_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_hggfhgfh_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HGGFHGFH_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_hggfhgfh_delete = () => ({
  type: types.API_V1_HGGFHGFH_DELETE
})
export const api_v1_hggfhgfh_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_HGGFHGFH_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_hggfhgfh_deleteFailed = (error, starter) => ({
  type: types.API_V1_HGGFHGFH_DELETE_FAILED,
  error,
  starter
})
export const api_v1_jhghjg_list = () => ({ type: types.API_V1_JHGHJG_LIST })
export const api_v1_jhghjg_listSucceeded = (response, starter) => ({
  type: types.API_V1_JHGHJG_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhghjg_listFailed = (error, starter) => ({
  type: types.API_V1_JHGHJG_LIST_FAILED,
  error,
  starter
})
export const api_v1_jhghjg_create = data => ({
  type: types.API_V1_JHGHJG_CREATE,
  data
})
export const api_v1_jhghjg_createSucceeded = (response, starter) => ({
  type: types.API_V1_JHGHJG_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhghjg_createFailed = (error, starter) => ({
  type: types.API_V1_JHGHJG_CREATE_FAILED,
  error,
  starter
})
export const api_v1_jhghjg_read = () => ({ type: types.API_V1_JHGHJG_READ })
export const api_v1_jhghjg_readSucceeded = (response, starter) => ({
  type: types.API_V1_JHGHJG_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhghjg_readFailed = (error, starter) => ({
  type: types.API_V1_JHGHJG_READ_FAILED,
  error,
  starter
})
export const api_v1_jhghjg_update = data => ({
  type: types.API_V1_JHGHJG_UPDATE,
  data
})
export const api_v1_jhghjg_updateSucceeded = (response, starter) => ({
  type: types.API_V1_JHGHJG_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhghjg_updateFailed = (error, starter) => ({
  type: types.API_V1_JHGHJG_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_jhghjg_partial_update = data => ({
  type: types.API_V1_JHGHJG_PARTIAL_UPDATE,
  data
})
export const api_v1_jhghjg_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_JHGHJG_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhghjg_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_JHGHJG_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_jhghjg_delete = () => ({ type: types.API_V1_JHGHJG_DELETE })
export const api_v1_jhghjg_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_JHGHJG_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhghjg_deleteFailed = (error, starter) => ({
  type: types.API_V1_JHGHJG_DELETE_FAILED,
  error,
  starter
})
export const api_v1_jhgjfhg_list = () => ({ type: types.API_V1_JHGJFHG_LIST })
export const api_v1_jhgjfhg_listSucceeded = (response, starter) => ({
  type: types.API_V1_JHGJFHG_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhgjfhg_listFailed = (error, starter) => ({
  type: types.API_V1_JHGJFHG_LIST_FAILED,
  error,
  starter
})
export const api_v1_jhgjfhg_create = data => ({
  type: types.API_V1_JHGJFHG_CREATE,
  data
})
export const api_v1_jhgjfhg_createSucceeded = (response, starter) => ({
  type: types.API_V1_JHGJFHG_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhgjfhg_createFailed = (error, starter) => ({
  type: types.API_V1_JHGJFHG_CREATE_FAILED,
  error,
  starter
})
export const api_v1_jhgjfhg_read = () => ({ type: types.API_V1_JHGJFHG_READ })
export const api_v1_jhgjfhg_readSucceeded = (response, starter) => ({
  type: types.API_V1_JHGJFHG_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhgjfhg_readFailed = (error, starter) => ({
  type: types.API_V1_JHGJFHG_READ_FAILED,
  error,
  starter
})
export const api_v1_jhgjfhg_update = data => ({
  type: types.API_V1_JHGJFHG_UPDATE,
  data
})
export const api_v1_jhgjfhg_updateSucceeded = (response, starter) => ({
  type: types.API_V1_JHGJFHG_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhgjfhg_updateFailed = (error, starter) => ({
  type: types.API_V1_JHGJFHG_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_jhgjfhg_partial_update = data => ({
  type: types.API_V1_JHGJFHG_PARTIAL_UPDATE,
  data
})
export const api_v1_jhgjfhg_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_JHGJFHG_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhgjfhg_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_JHGJFHG_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_jhgjfhg_delete = () => ({
  type: types.API_V1_JHGJFHG_DELETE
})
export const api_v1_jhgjfhg_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_JHGJFHG_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_jhgjfhg_deleteFailed = (error, starter) => ({
  type: types.API_V1_JHGJFHG_DELETE_FAILED,
  error,
  starter
})
