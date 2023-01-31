//menu type
export enum MenuTypeEnum {
  SIDEBAR = 'sidebar',
  MIX_SIDEBAR = 'mix-sidebar',
  MIX = 'mix',
  TOP_MENU = 'top-menu'
}

//menu mode
export enum MenuModeEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  VERTICAL_RIGHT = 'vertical-right',
  INLINE = 'inline'
}

//折叠触发器位置
export enum TriggerEnum {
  NONE = 'NONE',
  FOOTER = 'FOOTER',
  HEADER = 'HEADER'
}

export enum MixSidebarTriggerEnum {
  HOVER = 'hover',
  CLICK = 'click'
}