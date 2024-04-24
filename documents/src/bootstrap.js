import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './App';

const mount = (el) => {
  platformBrowserDynamic().bootstrapModule(App)
    .then(moduleRef => {
      const appRef = moduleRef.injector.get(ApplicationRef);
      appRef.attachView(el);
    })
    .catch(err => console.error(err));
};

if (process.env.NODE_ENV === "development") {
  const casesRoot = document.querySelector("#document-list");

  if (casesRoot) mount(casesRoot);
}

export { mount };
