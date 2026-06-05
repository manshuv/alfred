import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import dashboardPage from '../../client/index.html';

export const alfred_dashboard = UiPage({
  $id: Now.ID['alfred-dashboard'],
  endpoint: 'x_snc_alfred_dashboard.do',
  html: dashboardPage,
  direct: true
});