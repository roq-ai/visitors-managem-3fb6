interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Employee', 'Security Personnel', 'Visitor', 'Online Applicant'],
  tenantName: 'Company',
  applicationName: 'Visitors Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read company information'],
  ownerAbilities: ['Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/25639697-27fe-46f4-9318-f2f9e35b42a4',
};
