const mapping: Record<string, string> = {
  'content-creators': 'content_creator',
  'end-customers': 'end_customer',
  users: 'user',
  vips: 'vip',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
