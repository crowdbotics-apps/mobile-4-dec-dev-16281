import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* api_v1_bggfhgfhgf_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bggfhgfhgf_list, action)
    yield put(actions.api_v1_bggfhgfhgf_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bggfhgfhgf_listFailed(err, action))
  }
}
function* api_v1_bggfhgfhgf_listWatcher() {
  yield takeEvery(types.API_V1_BGGFHGFHGF_LIST, api_v1_bggfhgfhgf_listWorker)
}
function* api_v1_bggfhgfhgf_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bggfhgfhgf_create, action)
    yield put(actions.api_v1_bggfhgfhgf_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bggfhgfhgf_createFailed(err, action))
  }
}
function* api_v1_bggfhgfhgf_createWatcher() {
  yield takeEvery(
    types.API_V1_BGGFHGFHGF_CREATE,
    api_v1_bggfhgfhgf_createWorker
  )
}
function* api_v1_bggfhgfhgf_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bggfhgfhgf_read, action)
    yield put(actions.api_v1_bggfhgfhgf_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bggfhgfhgf_readFailed(err, action))
  }
}
function* api_v1_bggfhgfhgf_readWatcher() {
  yield takeEvery(types.API_V1_BGGFHGFHGF_READ, api_v1_bggfhgfhgf_readWorker)
}
function* api_v1_bggfhgfhgf_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bggfhgfhgf_update, action)
    yield put(actions.api_v1_bggfhgfhgf_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bggfhgfhgf_updateFailed(err, action))
  }
}
function* api_v1_bggfhgfhgf_updateWatcher() {
  yield takeEvery(
    types.API_V1_BGGFHGFHGF_UPDATE,
    api_v1_bggfhgfhgf_updateWorker
  )
}
function* api_v1_bggfhgfhgf_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_bggfhgfhgf_partial_update,
      action
    )
    yield put(actions.api_v1_bggfhgfhgf_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bggfhgfhgf_partial_updateFailed(err, action))
  }
}
function* api_v1_bggfhgfhgf_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_BGGFHGFHGF_PARTIAL_UPDATE,
    api_v1_bggfhgfhgf_partial_updateWorker
  )
}
function* api_v1_bggfhgfhgf_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bggfhgfhgf_delete, action)
    yield put(actions.api_v1_bggfhgfhgf_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bggfhgfhgf_deleteFailed(err, action))
  }
}
function* api_v1_bggfhgfhgf_deleteWatcher() {
  yield takeEvery(
    types.API_V1_BGGFHGFHGF_DELETE,
    api_v1_bggfhgfhgf_deleteWorker
  )
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_fghgjyj_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_fghgjyj_list, action)
    yield put(actions.api_v1_fghgjyj_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_fghgjyj_listFailed(err, action))
  }
}
function* api_v1_fghgjyj_listWatcher() {
  yield takeEvery(types.API_V1_FGHGJYJ_LIST, api_v1_fghgjyj_listWorker)
}
function* api_v1_fghgjyj_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_fghgjyj_create, action)
    yield put(actions.api_v1_fghgjyj_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_fghgjyj_createFailed(err, action))
  }
}
function* api_v1_fghgjyj_createWatcher() {
  yield takeEvery(types.API_V1_FGHGJYJ_CREATE, api_v1_fghgjyj_createWorker)
}
function* api_v1_fghgjyj_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_fghgjyj_read, action)
    yield put(actions.api_v1_fghgjyj_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_fghgjyj_readFailed(err, action))
  }
}
function* api_v1_fghgjyj_readWatcher() {
  yield takeEvery(types.API_V1_FGHGJYJ_READ, api_v1_fghgjyj_readWorker)
}
function* api_v1_fghgjyj_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_fghgjyj_update, action)
    yield put(actions.api_v1_fghgjyj_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_fghgjyj_updateFailed(err, action))
  }
}
function* api_v1_fghgjyj_updateWatcher() {
  yield takeEvery(types.API_V1_FGHGJYJ_UPDATE, api_v1_fghgjyj_updateWorker)
}
function* api_v1_fghgjyj_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_fghgjyj_partial_update, action)
    yield put(actions.api_v1_fghgjyj_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_fghgjyj_partial_updateFailed(err, action))
  }
}
function* api_v1_fghgjyj_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_FGHGJYJ_PARTIAL_UPDATE,
    api_v1_fghgjyj_partial_updateWorker
  )
}
function* api_v1_fghgjyj_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_fghgjyj_delete, action)
    yield put(actions.api_v1_fghgjyj_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_fghgjyj_deleteFailed(err, action))
  }
}
function* api_v1_fghgjyj_deleteWatcher() {
  yield takeEvery(types.API_V1_FGHGJYJ_DELETE, api_v1_fghgjyj_deleteWorker)
}
function* api_v1_gghgh_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghgh_list, action)
    yield put(actions.api_v1_gghgh_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghgh_listFailed(err, action))
  }
}
function* api_v1_gghgh_listWatcher() {
  yield takeEvery(types.API_V1_GGHGH_LIST, api_v1_gghgh_listWorker)
}
function* api_v1_gghgh_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghgh_create, action)
    yield put(actions.api_v1_gghgh_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghgh_createFailed(err, action))
  }
}
function* api_v1_gghgh_createWatcher() {
  yield takeEvery(types.API_V1_GGHGH_CREATE, api_v1_gghgh_createWorker)
}
function* api_v1_gghgh_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghgh_read, action)
    yield put(actions.api_v1_gghgh_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghgh_readFailed(err, action))
  }
}
function* api_v1_gghgh_readWatcher() {
  yield takeEvery(types.API_V1_GGHGH_READ, api_v1_gghgh_readWorker)
}
function* api_v1_gghgh_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghgh_update, action)
    yield put(actions.api_v1_gghgh_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghgh_updateFailed(err, action))
  }
}
function* api_v1_gghgh_updateWatcher() {
  yield takeEvery(types.API_V1_GGHGH_UPDATE, api_v1_gghgh_updateWorker)
}
function* api_v1_gghgh_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghgh_partial_update, action)
    yield put(actions.api_v1_gghgh_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghgh_partial_updateFailed(err, action))
  }
}
function* api_v1_gghgh_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_GGHGH_PARTIAL_UPDATE,
    api_v1_gghgh_partial_updateWorker
  )
}
function* api_v1_gghgh_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghgh_delete, action)
    yield put(actions.api_v1_gghgh_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghgh_deleteFailed(err, action))
  }
}
function* api_v1_gghgh_deleteWatcher() {
  yield takeEvery(types.API_V1_GGHGH_DELETE, api_v1_gghgh_deleteWorker)
}
function* api_v1_gghhh_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghhh_list, action)
    yield put(actions.api_v1_gghhh_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghhh_listFailed(err, action))
  }
}
function* api_v1_gghhh_listWatcher() {
  yield takeEvery(types.API_V1_GGHHH_LIST, api_v1_gghhh_listWorker)
}
function* api_v1_gghhh_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghhh_create, action)
    yield put(actions.api_v1_gghhh_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghhh_createFailed(err, action))
  }
}
function* api_v1_gghhh_createWatcher() {
  yield takeEvery(types.API_V1_GGHHH_CREATE, api_v1_gghhh_createWorker)
}
function* api_v1_gghhh_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghhh_read, action)
    yield put(actions.api_v1_gghhh_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghhh_readFailed(err, action))
  }
}
function* api_v1_gghhh_readWatcher() {
  yield takeEvery(types.API_V1_GGHHH_READ, api_v1_gghhh_readWorker)
}
function* api_v1_gghhh_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghhh_update, action)
    yield put(actions.api_v1_gghhh_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghhh_updateFailed(err, action))
  }
}
function* api_v1_gghhh_updateWatcher() {
  yield takeEvery(types.API_V1_GGHHH_UPDATE, api_v1_gghhh_updateWorker)
}
function* api_v1_gghhh_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghhh_partial_update, action)
    yield put(actions.api_v1_gghhh_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghhh_partial_updateFailed(err, action))
  }
}
function* api_v1_gghhh_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_GGHHH_PARTIAL_UPDATE,
    api_v1_gghhh_partial_updateWorker
  )
}
function* api_v1_gghhh_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_gghhh_delete, action)
    yield put(actions.api_v1_gghhh_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_gghhh_deleteFailed(err, action))
  }
}
function* api_v1_gghhh_deleteWatcher() {
  yield takeEvery(types.API_V1_GGHHH_DELETE, api_v1_gghhh_deleteWorker)
}
function* api_v1_ghfdgfdgfd_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghfdgfdgfd_list, action)
    yield put(actions.api_v1_ghfdgfdgfd_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghfdgfdgfd_listFailed(err, action))
  }
}
function* api_v1_ghfdgfdgfd_listWatcher() {
  yield takeEvery(types.API_V1_GHFDGFDGFD_LIST, api_v1_ghfdgfdgfd_listWorker)
}
function* api_v1_ghfdgfdgfd_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghfdgfdgfd_create, action)
    yield put(actions.api_v1_ghfdgfdgfd_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghfdgfdgfd_createFailed(err, action))
  }
}
function* api_v1_ghfdgfdgfd_createWatcher() {
  yield takeEvery(
    types.API_V1_GHFDGFDGFD_CREATE,
    api_v1_ghfdgfdgfd_createWorker
  )
}
function* api_v1_ghfdgfdgfd_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghfdgfdgfd_read, action)
    yield put(actions.api_v1_ghfdgfdgfd_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghfdgfdgfd_readFailed(err, action))
  }
}
function* api_v1_ghfdgfdgfd_readWatcher() {
  yield takeEvery(types.API_V1_GHFDGFDGFD_READ, api_v1_ghfdgfdgfd_readWorker)
}
function* api_v1_ghfdgfdgfd_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghfdgfdgfd_update, action)
    yield put(actions.api_v1_ghfdgfdgfd_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghfdgfdgfd_updateFailed(err, action))
  }
}
function* api_v1_ghfdgfdgfd_updateWatcher() {
  yield takeEvery(
    types.API_V1_GHFDGFDGFD_UPDATE,
    api_v1_ghfdgfdgfd_updateWorker
  )
}
function* api_v1_ghfdgfdgfd_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_ghfdgfdgfd_partial_update,
      action
    )
    yield put(actions.api_v1_ghfdgfdgfd_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghfdgfdgfd_partial_updateFailed(err, action))
  }
}
function* api_v1_ghfdgfdgfd_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_GHFDGFDGFD_PARTIAL_UPDATE,
    api_v1_ghfdgfdgfd_partial_updateWorker
  )
}
function* api_v1_ghfdgfdgfd_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghfdgfdgfd_delete, action)
    yield put(actions.api_v1_ghfdgfdgfd_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghfdgfdgfd_deleteFailed(err, action))
  }
}
function* api_v1_ghfdgfdgfd_deleteWatcher() {
  yield takeEvery(
    types.API_V1_GHFDGFDGFD_DELETE,
    api_v1_ghfdgfdgfd_deleteWorker
  )
}
function* api_v1_ghgfhgf_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghgfhgf_list, action)
    yield put(actions.api_v1_ghgfhgf_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghgfhgf_listFailed(err, action))
  }
}
function* api_v1_ghgfhgf_listWatcher() {
  yield takeEvery(types.API_V1_GHGFHGF_LIST, api_v1_ghgfhgf_listWorker)
}
function* api_v1_ghgfhgf_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghgfhgf_create, action)
    yield put(actions.api_v1_ghgfhgf_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghgfhgf_createFailed(err, action))
  }
}
function* api_v1_ghgfhgf_createWatcher() {
  yield takeEvery(types.API_V1_GHGFHGF_CREATE, api_v1_ghgfhgf_createWorker)
}
function* api_v1_ghgfhgf_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghgfhgf_read, action)
    yield put(actions.api_v1_ghgfhgf_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghgfhgf_readFailed(err, action))
  }
}
function* api_v1_ghgfhgf_readWatcher() {
  yield takeEvery(types.API_V1_GHGFHGF_READ, api_v1_ghgfhgf_readWorker)
}
function* api_v1_ghgfhgf_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghgfhgf_update, action)
    yield put(actions.api_v1_ghgfhgf_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghgfhgf_updateFailed(err, action))
  }
}
function* api_v1_ghgfhgf_updateWatcher() {
  yield takeEvery(types.API_V1_GHGFHGF_UPDATE, api_v1_ghgfhgf_updateWorker)
}
function* api_v1_ghgfhgf_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghgfhgf_partial_update, action)
    yield put(actions.api_v1_ghgfhgf_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghgfhgf_partial_updateFailed(err, action))
  }
}
function* api_v1_ghgfhgf_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_GHGFHGF_PARTIAL_UPDATE,
    api_v1_ghgfhgf_partial_updateWorker
  )
}
function* api_v1_ghgfhgf_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_ghgfhgf_delete, action)
    yield put(actions.api_v1_ghgfhgf_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_ghgfhgf_deleteFailed(err, action))
  }
}
function* api_v1_ghgfhgf_deleteWatcher() {
  yield takeEvery(types.API_V1_GHGFHGF_DELETE, api_v1_ghgfhgf_deleteWorker)
}
function* api_v1_hggfhgfh_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hggfhgfh_list, action)
    yield put(actions.api_v1_hggfhgfh_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hggfhgfh_listFailed(err, action))
  }
}
function* api_v1_hggfhgfh_listWatcher() {
  yield takeEvery(types.API_V1_HGGFHGFH_LIST, api_v1_hggfhgfh_listWorker)
}
function* api_v1_hggfhgfh_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hggfhgfh_create, action)
    yield put(actions.api_v1_hggfhgfh_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hggfhgfh_createFailed(err, action))
  }
}
function* api_v1_hggfhgfh_createWatcher() {
  yield takeEvery(types.API_V1_HGGFHGFH_CREATE, api_v1_hggfhgfh_createWorker)
}
function* api_v1_hggfhgfh_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hggfhgfh_read, action)
    yield put(actions.api_v1_hggfhgfh_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hggfhgfh_readFailed(err, action))
  }
}
function* api_v1_hggfhgfh_readWatcher() {
  yield takeEvery(types.API_V1_HGGFHGFH_READ, api_v1_hggfhgfh_readWorker)
}
function* api_v1_hggfhgfh_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hggfhgfh_update, action)
    yield put(actions.api_v1_hggfhgfh_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hggfhgfh_updateFailed(err, action))
  }
}
function* api_v1_hggfhgfh_updateWatcher() {
  yield takeEvery(types.API_V1_HGGFHGFH_UPDATE, api_v1_hggfhgfh_updateWorker)
}
function* api_v1_hggfhgfh_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hggfhgfh_partial_update, action)
    yield put(actions.api_v1_hggfhgfh_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hggfhgfh_partial_updateFailed(err, action))
  }
}
function* api_v1_hggfhgfh_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HGGFHGFH_PARTIAL_UPDATE,
    api_v1_hggfhgfh_partial_updateWorker
  )
}
function* api_v1_hggfhgfh_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hggfhgfh_delete, action)
    yield put(actions.api_v1_hggfhgfh_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hggfhgfh_deleteFailed(err, action))
  }
}
function* api_v1_hggfhgfh_deleteWatcher() {
  yield takeEvery(types.API_V1_HGGFHGFH_DELETE, api_v1_hggfhgfh_deleteWorker)
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_jhghjg_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhghjg_list, action)
    yield put(actions.api_v1_jhghjg_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhghjg_listFailed(err, action))
  }
}
function* api_v1_jhghjg_listWatcher() {
  yield takeEvery(types.API_V1_JHGHJG_LIST, api_v1_jhghjg_listWorker)
}
function* api_v1_jhghjg_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhghjg_create, action)
    yield put(actions.api_v1_jhghjg_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhghjg_createFailed(err, action))
  }
}
function* api_v1_jhghjg_createWatcher() {
  yield takeEvery(types.API_V1_JHGHJG_CREATE, api_v1_jhghjg_createWorker)
}
function* api_v1_jhghjg_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhghjg_read, action)
    yield put(actions.api_v1_jhghjg_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhghjg_readFailed(err, action))
  }
}
function* api_v1_jhghjg_readWatcher() {
  yield takeEvery(types.API_V1_JHGHJG_READ, api_v1_jhghjg_readWorker)
}
function* api_v1_jhghjg_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhghjg_update, action)
    yield put(actions.api_v1_jhghjg_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhghjg_updateFailed(err, action))
  }
}
function* api_v1_jhghjg_updateWatcher() {
  yield takeEvery(types.API_V1_JHGHJG_UPDATE, api_v1_jhghjg_updateWorker)
}
function* api_v1_jhghjg_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhghjg_partial_update, action)
    yield put(actions.api_v1_jhghjg_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhghjg_partial_updateFailed(err, action))
  }
}
function* api_v1_jhghjg_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_JHGHJG_PARTIAL_UPDATE,
    api_v1_jhghjg_partial_updateWorker
  )
}
function* api_v1_jhghjg_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhghjg_delete, action)
    yield put(actions.api_v1_jhghjg_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhghjg_deleteFailed(err, action))
  }
}
function* api_v1_jhghjg_deleteWatcher() {
  yield takeEvery(types.API_V1_JHGHJG_DELETE, api_v1_jhghjg_deleteWorker)
}
function* api_v1_jhgjfhg_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhgjfhg_list, action)
    yield put(actions.api_v1_jhgjfhg_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhgjfhg_listFailed(err, action))
  }
}
function* api_v1_jhgjfhg_listWatcher() {
  yield takeEvery(types.API_V1_JHGJFHG_LIST, api_v1_jhgjfhg_listWorker)
}
function* api_v1_jhgjfhg_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhgjfhg_create, action)
    yield put(actions.api_v1_jhgjfhg_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhgjfhg_createFailed(err, action))
  }
}
function* api_v1_jhgjfhg_createWatcher() {
  yield takeEvery(types.API_V1_JHGJFHG_CREATE, api_v1_jhgjfhg_createWorker)
}
function* api_v1_jhgjfhg_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhgjfhg_read, action)
    yield put(actions.api_v1_jhgjfhg_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhgjfhg_readFailed(err, action))
  }
}
function* api_v1_jhgjfhg_readWatcher() {
  yield takeEvery(types.API_V1_JHGJFHG_READ, api_v1_jhgjfhg_readWorker)
}
function* api_v1_jhgjfhg_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhgjfhg_update, action)
    yield put(actions.api_v1_jhgjfhg_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhgjfhg_updateFailed(err, action))
  }
}
function* api_v1_jhgjfhg_updateWatcher() {
  yield takeEvery(types.API_V1_JHGJFHG_UPDATE, api_v1_jhgjfhg_updateWorker)
}
function* api_v1_jhgjfhg_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhgjfhg_partial_update, action)
    yield put(actions.api_v1_jhgjfhg_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhgjfhg_partial_updateFailed(err, action))
  }
}
function* api_v1_jhgjfhg_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_JHGJFHG_PARTIAL_UPDATE,
    api_v1_jhgjfhg_partial_updateWorker
  )
}
function* api_v1_jhgjfhg_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_jhgjfhg_delete, action)
    yield put(actions.api_v1_jhgjfhg_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_jhgjfhg_deleteFailed(err, action))
  }
}
function* api_v1_jhgjfhg_deleteWatcher() {
  yield takeEvery(types.API_V1_JHGJFHG_DELETE, api_v1_jhgjfhg_deleteWorker)
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_bggfhgfhgf_listWatcher,
    api_v1_bggfhgfhgf_createWatcher,
    api_v1_bggfhgfhgf_readWatcher,
    api_v1_bggfhgfhgf_updateWatcher,
    api_v1_bggfhgfhgf_partial_updateWatcher,
    api_v1_bggfhgfhgf_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_fghgjyj_listWatcher,
    api_v1_fghgjyj_createWatcher,
    api_v1_fghgjyj_readWatcher,
    api_v1_fghgjyj_updateWatcher,
    api_v1_fghgjyj_partial_updateWatcher,
    api_v1_fghgjyj_deleteWatcher,
    api_v1_gghgh_listWatcher,
    api_v1_gghgh_createWatcher,
    api_v1_gghgh_readWatcher,
    api_v1_gghgh_updateWatcher,
    api_v1_gghgh_partial_updateWatcher,
    api_v1_gghgh_deleteWatcher,
    api_v1_gghhh_listWatcher,
    api_v1_gghhh_createWatcher,
    api_v1_gghhh_readWatcher,
    api_v1_gghhh_updateWatcher,
    api_v1_gghhh_partial_updateWatcher,
    api_v1_gghhh_deleteWatcher,
    api_v1_ghfdgfdgfd_listWatcher,
    api_v1_ghfdgfdgfd_createWatcher,
    api_v1_ghfdgfdgfd_readWatcher,
    api_v1_ghfdgfdgfd_updateWatcher,
    api_v1_ghfdgfdgfd_partial_updateWatcher,
    api_v1_ghfdgfdgfd_deleteWatcher,
    api_v1_ghgfhgf_listWatcher,
    api_v1_ghgfhgf_createWatcher,
    api_v1_ghgfhgf_readWatcher,
    api_v1_ghgfhgf_updateWatcher,
    api_v1_ghgfhgf_partial_updateWatcher,
    api_v1_ghgfhgf_deleteWatcher,
    api_v1_hggfhgfh_listWatcher,
    api_v1_hggfhgfh_createWatcher,
    api_v1_hggfhgfh_readWatcher,
    api_v1_hggfhgfh_updateWatcher,
    api_v1_hggfhgfh_partial_updateWatcher,
    api_v1_hggfhgfh_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_jhghjg_listWatcher,
    api_v1_jhghjg_createWatcher,
    api_v1_jhghjg_readWatcher,
    api_v1_jhghjg_updateWatcher,
    api_v1_jhghjg_partial_updateWatcher,
    api_v1_jhghjg_deleteWatcher,
    api_v1_jhgjfhg_listWatcher,
    api_v1_jhgjfhg_createWatcher,
    api_v1_jhgjfhg_readWatcher,
    api_v1_jhgjfhg_updateWatcher,
    api_v1_jhgjfhg_partial_updateWatcher,
    api_v1_jhgjfhg_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_signup_createWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
