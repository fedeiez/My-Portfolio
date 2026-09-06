import { configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        //devo aggiungere i reducer qui che sono stati creati in src/features
    }
})

export type RootState = ReturnType<typeof store.getState>; //appresenta lo stato globale dell'applicazione, ottenuto dalla funzione getState dello store. Viene utilizzato per tipizzare correttamente lo stato quando si accede ai dati tramite useSelector o altre funzioni di accesso allo stato.
export type AppDispatch = typeof store.dispatch; //rappresenta la funzione dispatch dello store. Viene utilizzato per tipizzare correttamente le azioni quando si inviano azioni tramite useDispatch o altre funzioni di invio delle azioni.