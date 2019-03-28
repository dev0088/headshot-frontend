import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import { PersistGate } from 'redux-persist/integration/react';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
// import { StripeProvider } from "react-stripe-elements";

// const root = document.createElement('div');
// root.id = 'root';
// document.body.appendChild(root);

// const render = (Component) => {
//     const rootElement = document.getElementById('root');
//     ReactDom.render(
//         <AppContainer>
//             <Component />
//         </AppContainer>,
//         rootElement,
//     );
// };

// render(App);
// if (module.hot) {
//     module.hot.accept('./containers/App', () => {
//         render(App);
//     });
// }

// registerServiceWorker();

const history = createHistory();

const { store, persistor } = configureStore(history);

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const render = (Component) => {
    const rootElement = document.getElementById('root');
    ReactDom.render(
        // <StripeProvider apiKey={"pk_test_3MJjMu9cCoQbihWg8Sw8dqUM"}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <AppContainer>
                        <Component />
                    </AppContainer>
            </PersistGate>
        </Provider>
        // </StripeProvider>
        ,
        rootElement,
    );
};

render(App);
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}

registerServiceWorker();