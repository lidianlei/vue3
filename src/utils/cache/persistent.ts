import {LOCK_INFO_KEY, MULTIPLE_TABS_KEY, PROJ_CFG_KEY, ROLES_KEY, TOKEN_KEY, USER_INFO_KEY} from "@/enums/cacheEnum";
import type {RouteLocationNormalized} from "vue-router";
import {Memory} from "@/utils/cache/memory";
import {DEFAULT_CACHE_TIME} from "@/settings/encryptionSetting";

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [USER_INFO_KEY]: UserInfo;
  [ROLES_KEY]: string[];
  [LOCK_INFO_KEY]: LockInfo;
  [PROJ_CFG_KEY]: any;
  [MULTIPLE_TABS_KEY]: RouteLocationNormalized[];
}

type LocaleStore = BasicStore;

type SessionStore = BasicStore;

export type Basickeys = keyof BasicStore;
type LocalKeys = keyof LocaleStore;
type SessionKeys = keyof SessionStore;


const localMemory = new Memory(DEFAULT_CACHE_TIME)


export class Persistent {
  static getLocal<T>(key:LocalKeys){
    return localMemory.get(key)?.value as Nullable<T>
  }
}

window.addEventListener("beforeunload",function () {
  //TOKEN_KEY 在登陆或注销时已经写到了storage了，此处为了解决同时打开多个窗口时token不同步的问题
  //LOCK_INFO_KEY 在锁屏和解锁时写入，此处不应该修改
})