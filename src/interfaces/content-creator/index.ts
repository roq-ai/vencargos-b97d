import { UserInterface } from 'interfaces/user';
import { VipInterface } from 'interfaces/vip';
import { GetQueryInterface } from 'interfaces';

export interface ContentCreatorInterface {
  id?: string;
  user_id?: string;
  vip_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  vip?: VipInterface;
  _count?: {};
}

export interface ContentCreatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  vip_id?: string;
}
