export enum ContentEnum {
  FULL = 'full',
  FIXED = 'fixed'
}

export enum ThemeEnum{
  DARK='dark',
  LIGHT='light'
}

export enum SettingButtonPositionEnum {
  AUTO = 'auto',
  HEADER = 'header',
  FIXED = 'fixed'
}

export enum SessionTimeoutProcessingEnum {
  ROUTE_JUMP,
  PAGE_COVERAGE,
}


/**
 * 权限模式
 */
export enum PermissionModeEnum {
  ROLE = 'ROLE',
  BACK = 'BACK',
  ROUTE_MAPPING = "ROUTE_MAPPING"
}

//路由切换动画

export enum RouterTransitionEnum{
  ZOOM_FADE = 'zoom-fade',
  ZOOM_OUT = 'zoom-out',
  FADE_SIDE = 'fade-slide',
  FADE = 'fade',
  FADE_BOTTOM = 'fade-bottom',
  FADE_SCALE = 'fade-scale',
}