const appScheme = "eatly://";
//const appScheme = "exp://192.168.0.101:8081/--/";

const appStoreUrl = "https://testflight.apple.com/join/DtmkJ2B3";
const playStoreUrl = "https://play.google.com/apps/internaltest/4701703567304493046";

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

export function redirectToAppOrStore(link) {
  const appUrl = appScheme + link;
  window.location.href = appUrl;

  setTimeout(() => {
    if (isAndroid) {
      window.location.href = playStoreUrl;
    } else if (isIOS) {
      window.location.href = appStoreUrl;
    }
  }, 100);
}