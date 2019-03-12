export const getDrawerMode = (drawerMode, currentWidth) => {
  if (currentWidth !== document.body.offsetWidth) {
    if (document.body.offsetWidth > 1100 && drawerMode === 'mobile') {
      return 'desktop';
    }
    if (document.body.offsetWidth < 1100 && drawerMode === 'desktop') {
      return 'mobile';
    }
  }
  return null;
};
  