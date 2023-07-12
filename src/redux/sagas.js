import { all } from "redux-saga/effects";
import moviesPlayingNow from "./movies/PlayingNow/saga";
import listMoviesSession from "./movies/ListMoviesSession/saga";
import movieById from "./movies/MovieById/saga";

export default function* rootSaga() {
  return yield all([moviesPlayingNow, listMoviesSession, movieById]);
}

// Exemplo chamados no SAGAs

// function* loadDashboardNonSequenced() {
//   try {
// Esperando pela redux action
//     yield take('FETCH_USER_SUCCESS');
// Busca informações do usuário na store
//     const user = yield select(getUserFromState);
// Busca informações de embarque
//     const departure = yield call(loadDeparture, user);

// AQUI QUE A MÁGICA ACONTECE 🎉🎉🎉
//     const [flight, forecast] = yield [
//         call(loadFlight, departure.flightID),
//         call(loadForecast, departure.date)
//     ];
// Retornando os valores para nossa aplicação
//     yield put({
//         type: 'FETCH_DASHBOARD_2_SUCCESS',
//         payload: { departure, flight, forecast }
//     });
// } catch(error) {
//     yield put({type: 'FETCH_FAILED', error: error.message});
//   }
// }

// REGISTRANDO NO ROOTSAGA
// function* rootSaga() {
//   yield[
//     fork(loadUser),
//     takeLatest('LOAD_DASHBOARD', loadDashboardSequenced),
//     takeLatest('LOAD_DASHBOARD2' loadDashboardNonSequenced)
//   ];
// }

// Sagas não sequências e não bloqueantes [E aqui a brincadeira começa a ficar divertida]

// CALL AND PUT SÃO EFEITOS BLOQUEANTES
// FORK É NÃO BLOQUEANTE = O fork cria uma tarefa separada que executa um gerador,
// permitindo que o saga principal continue sua execução sem esperar pela conclusão da tarefa criada
