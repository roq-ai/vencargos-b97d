interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Agencies'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Content Creator', 'Agencies'],
  tenantName: 'VIP',
  applicationName: 'VEncargos',
  addOns: ['chat', 'notifications'],
};
