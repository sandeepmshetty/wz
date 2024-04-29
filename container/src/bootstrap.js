import {mount as casesMount} from 'cases/CasesIndex';
// import {mount as appComponentMount} from 'angularApp/MyFeature';
import('angularApp/MyFeature')
        .then((m) => {
            console.log(m.MyFeatureModule);
            // m.MyFeatureModule
        })
        .catch((err) => console.error('Error lazy loading mfe1', err))

console.log('Container!');

casesMount(document.querySelector('#my-products'));
// appComponentMount(document.querySelector('#my-dev'));