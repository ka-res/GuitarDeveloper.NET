import { NotifierOptions } from 'angular-notifier';

export const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 7
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 7000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 10
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 700,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
}
