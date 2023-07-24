import { ContentCreatorInterface } from 'interfaces/content-creator';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VipInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  content_creator?: ContentCreatorInterface[];
  user?: UserInterface;
  _count?: {
    content_creator?: number;
  };
}

export interface VipGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
