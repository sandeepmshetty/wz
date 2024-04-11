import {mount as casesMount} from 'cases/CasesIndex';
import {mount as documentsMount} from 'documents/DocumentsList'

console.log('Container!');

casesMount(document.querySelector('#my-products'));
documentsMount(document.querySelector('#my-dev'));