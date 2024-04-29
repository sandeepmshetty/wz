import { mount as casesMount } from 'cases/CasesIndex';
import { mount as appComponentMount } from 'angularApp/MyFeature';

casesMount(document.querySelector('#my-products'));
appComponentMount(document.querySelector('#my-dev'));