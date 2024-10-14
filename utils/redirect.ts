const appScheme = "eatly://";

const appStoreUrl = "https://apps.apple.com/app/eatly/id6472184359";
const playStoreUrl = "https://play.google.com/apps/internaltest/4701703567304493046";

export function redirectToAppOrStore(route: string = "") {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  const appUrl = appScheme + route;
  let opened = false;

  const handleRedirect = () => {
    if (document.visibilityState == 'hidden') {
      opened = true;
      window.close();
    }
  };

  document.addEventListener("visibilitychange", handleRedirect);
  window.location.href = appUrl;

  setTimeout(() => {
    if (!opened) {
      if (isAndroid) {
        window.location.href = playStoreUrl;
      } else if (isIOS) {
        window.location.href = appStoreUrl;
      }
    }
    document.removeEventListener("visibilitychange", handleRedirect);
  }, 200);
}