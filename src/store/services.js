import axios from "axios"
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7307/storyboard/8491/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobiledecAPI = axios.create({
  baseURL: "https://mobile-4-dec-dev-16281.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_bggfhgfhgf_list(action) {
  return mobiledecAPI.get(`/api/v1/bggfhgfhgf/`)
}
function api_v1_bggfhgfhgf_create(action) {
  return mobiledecAPI.post(`/api/v1/bggfhgfhgf/`, null, { data: action.data })
}
function api_v1_bggfhgfhgf_read(action) {
  return mobiledecAPI.get(`/api/v1/bggfhgfhgf/${action.id}/`)
}
function api_v1_bggfhgfhgf_update(action) {
  return mobiledecAPI.put(`/api/v1/bggfhgfhgf/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_bggfhgfhgf_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/bggfhgfhgf/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_bggfhgfhgf_delete(action) {
  return mobiledecAPI.delete(`/api/v1/bggfhgfhgf/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return mobiledecAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return mobiledecAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return mobiledecAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_fghgjyj_list(action) {
  return mobiledecAPI.get(`/api/v1/fghgjyj/`)
}
function api_v1_fghgjyj_create(action) {
  return mobiledecAPI.post(`/api/v1/fghgjyj/`, null, { data: action.data })
}
function api_v1_fghgjyj_read(action) {
  return mobiledecAPI.get(`/api/v1/fghgjyj/${action.id}/`)
}
function api_v1_fghgjyj_update(action) {
  return mobiledecAPI.put(`/api/v1/fghgjyj/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_fghgjyj_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/fghgjyj/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_fghgjyj_delete(action) {
  return mobiledecAPI.delete(`/api/v1/fghgjyj/${action.id}/`)
}
function api_v1_gghgh_list(action) {
  return mobiledecAPI.get(`/api/v1/gghgh/`)
}
function api_v1_gghgh_create(action) {
  return mobiledecAPI.post(`/api/v1/gghgh/`, null, { data: action.data })
}
function api_v1_gghgh_read(action) {
  return mobiledecAPI.get(`/api/v1/gghgh/${action.id}/`)
}
function api_v1_gghgh_update(action) {
  return mobiledecAPI.put(`/api/v1/gghgh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_gghgh_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/gghgh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_gghgh_delete(action) {
  return mobiledecAPI.delete(`/api/v1/gghgh/${action.id}/`)
}
function api_v1_gghhh_list(action) {
  return mobiledecAPI.get(`/api/v1/gghhh/`)
}
function api_v1_gghhh_create(action) {
  return mobiledecAPI.post(`/api/v1/gghhh/`, null, { data: action.data })
}
function api_v1_gghhh_read(action) {
  return mobiledecAPI.get(`/api/v1/gghhh/${action.id}/`)
}
function api_v1_gghhh_update(action) {
  return mobiledecAPI.put(`/api/v1/gghhh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_gghhh_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/gghhh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_gghhh_delete(action) {
  return mobiledecAPI.delete(`/api/v1/gghhh/${action.id}/`)
}
function api_v1_ghfdgfdgfd_list(action) {
  return mobiledecAPI.get(`/api/v1/ghfdgfdgfd/`)
}
function api_v1_ghfdgfdgfd_create(action) {
  return mobiledecAPI.post(`/api/v1/ghfdgfdgfd/`, null, { data: action.data })
}
function api_v1_ghfdgfdgfd_read(action) {
  return mobiledecAPI.get(`/api/v1/ghfdgfdgfd/${action.id}/`)
}
function api_v1_ghfdgfdgfd_update(action) {
  return mobiledecAPI.put(`/api/v1/ghfdgfdgfd/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_ghfdgfdgfd_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/ghfdgfdgfd/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_ghfdgfdgfd_delete(action) {
  return mobiledecAPI.delete(`/api/v1/ghfdgfdgfd/${action.id}/`)
}
function api_v1_ghgfhgf_list(action) {
  return mobiledecAPI.get(`/api/v1/ghgfhgf/`)
}
function api_v1_ghgfhgf_create(action) {
  return mobiledecAPI.post(`/api/v1/ghgfhgf/`, null, { data: action.data })
}
function api_v1_ghgfhgf_read(action) {
  return mobiledecAPI.get(`/api/v1/ghgfhgf/${action.id}/`)
}
function api_v1_ghgfhgf_update(action) {
  return mobiledecAPI.put(`/api/v1/ghgfhgf/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_ghgfhgf_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/ghgfhgf/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_ghgfhgf_delete(action) {
  return mobiledecAPI.delete(`/api/v1/ghgfhgf/${action.id}/`)
}
function api_v1_hggfhgfh_list(action) {
  return mobiledecAPI.get(`/api/v1/hggfhgfh/`)
}
function api_v1_hggfhgfh_create(action) {
  return mobiledecAPI.post(`/api/v1/hggfhgfh/`, null, { data: action.data })
}
function api_v1_hggfhgfh_read(action) {
  return mobiledecAPI.get(`/api/v1/hggfhgfh/${action.id}/`)
}
function api_v1_hggfhgfh_update(action) {
  return mobiledecAPI.put(`/api/v1/hggfhgfh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_hggfhgfh_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/hggfhgfh/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_hggfhgfh_delete(action) {
  return mobiledecAPI.delete(`/api/v1/hggfhgfh/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return mobiledecAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return mobiledecAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return mobiledecAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhghjg_list(action) {
  return mobiledecAPI.get(`/api/v1/jhghjg/`)
}
function api_v1_jhghjg_create(action) {
  return mobiledecAPI.post(`/api/v1/jhghjg/`, null, { data: action.data })
}
function api_v1_jhghjg_read(action) {
  return mobiledecAPI.get(`/api/v1/jhghjg/${action.id}/`)
}
function api_v1_jhghjg_update(action) {
  return mobiledecAPI.put(`/api/v1/jhghjg/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhghjg_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/jhghjg/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhghjg_delete(action) {
  return mobiledecAPI.delete(`/api/v1/jhghjg/${action.id}/`)
}
function api_v1_jhgjfhg_list(action) {
  return mobiledecAPI.get(`/api/v1/jhgjfhg/`)
}
function api_v1_jhgjfhg_create(action) {
  return mobiledecAPI.post(`/api/v1/jhgjfhg/`, null, { data: action.data })
}
function api_v1_jhgjfhg_read(action) {
  return mobiledecAPI.get(`/api/v1/jhgjfhg/${action.id}/`)
}
function api_v1_jhgjfhg_update(action) {
  return mobiledecAPI.put(`/api/v1/jhgjfhg/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhgjfhg_partial_update(action) {
  return mobiledecAPI.patch(`/api/v1/jhgjfhg/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_jhgjfhg_delete(action) {
  return mobiledecAPI.delete(`/api/v1/jhgjfhg/${action.id}/`)
}
function api_v1_login_create(action) {
  return mobiledecAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(action) {
  return mobiledecAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function rest_auth_login_create(action) {
  return mobiledecAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return mobiledecAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return mobiledecAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return mobiledecAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return mobiledecAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return mobiledecAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return mobiledecAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return mobiledecAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return mobiledecAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return mobiledecAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return mobiledecAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_bggfhgfhgf_list,
  api_v1_bggfhgfhgf_create,
  api_v1_bggfhgfhgf_read,
  api_v1_bggfhgfhgf_update,
  api_v1_bggfhgfhgf_partial_update,
  api_v1_bggfhgfhgf_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_fghgjyj_list,
  api_v1_fghgjyj_create,
  api_v1_fghgjyj_read,
  api_v1_fghgjyj_update,
  api_v1_fghgjyj_partial_update,
  api_v1_fghgjyj_delete,
  api_v1_gghgh_list,
  api_v1_gghgh_create,
  api_v1_gghgh_read,
  api_v1_gghgh_update,
  api_v1_gghgh_partial_update,
  api_v1_gghgh_delete,
  api_v1_gghhh_list,
  api_v1_gghhh_create,
  api_v1_gghhh_read,
  api_v1_gghhh_update,
  api_v1_gghhh_partial_update,
  api_v1_gghhh_delete,
  api_v1_ghfdgfdgfd_list,
  api_v1_ghfdgfdgfd_create,
  api_v1_ghfdgfdgfd_read,
  api_v1_ghfdgfdgfd_update,
  api_v1_ghfdgfdgfd_partial_update,
  api_v1_ghfdgfdgfd_delete,
  api_v1_ghgfhgf_list,
  api_v1_ghgfhgf_create,
  api_v1_ghgfhgf_read,
  api_v1_ghgfhgf_update,
  api_v1_ghgfhgf_partial_update,
  api_v1_ghgfhgf_delete,
  api_v1_hggfhgfh_list,
  api_v1_hggfhgfh_create,
  api_v1_hggfhgfh_read,
  api_v1_hggfhgfh_update,
  api_v1_hggfhgfh_partial_update,
  api_v1_hggfhgfh_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_jhghjg_list,
  api_v1_jhghjg_create,
  api_v1_jhghjg_read,
  api_v1_jhghjg_update,
  api_v1_jhghjg_partial_update,
  api_v1_jhghjg_delete,
  api_v1_jhgjfhg_list,
  api_v1_jhgjfhg_create,
  api_v1_jhgjfhg_read,
  api_v1_jhgjfhg_update,
  api_v1_jhgjfhg_partial_update,
  api_v1_jhgjfhg_delete,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
