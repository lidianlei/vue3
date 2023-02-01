//lock  screen information
declare interface LockInfo {
  pwd?: string | undefined;
  isLock?: boolean;
}

declare interface RoleInfo {
  roleName: string;
  value: string;
}


declare interface UserInfo {
  userId: string | number;
  username: string;
  realName: string;
  avatar: string;
  desc?: string;
  homePath?: string;
  roles: RoleInfo[]
}