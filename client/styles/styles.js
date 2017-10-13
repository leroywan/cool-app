/******************************************************************************************

Import all scss files here. All css code will be structured in the order that is imported 
in this file. 

NOTE: Keep each scss file independent of other files to prevent hard to debug problems. Use 
IDs to wrap components that need to be styled. 

NOTE: varables.scss will be injected at the top of each scss file through webpack 
sass-loader so it does not need to be included here.

*******************************************************************************************/

// =========================================================================================
// VENDOR
// =========================================================================================
import './vendor/normalize.css';
import './vendor/animate.min.css';
import './vendor/bootstrap-grid.min.css';
import 'react-toastify/dist/ReactToastify.min.css'; 

// =========================================================================================
// LAYOUTS AND FONTS
// =========================================================================================
import fonts from './fonts.scss';  // keep the fonts at the top since others depend on it
import global from './global.scss';
import header from './main/app/header.scss';
import footer from './main/app/footer.scss';

// =========================================================================================
// COMPONENTS
// =========================================================================================
import forms from './main/app/forms.scss';

// =========================================================================================
// SCENES
// =========================================================================================
import home from './main/scenes/home.scss';
import dashboard from './main/scenes/dashboard.scss';
import userprofile from './main/scenes/userprofile.scss';
import createProject from './main/scenes/createProject.scss';

// =========================================================================================
// APP
// =========================================================================================

// =========================================================================================
// PAGES
// =========================================================================================
import pages from './main/pages/pages.scss';
