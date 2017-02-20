/**
 * Created by SergST on 20.02.2017.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);
