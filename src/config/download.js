// Application Download Configuration
// Using the official application APK build: logmitra-2.2.1.apk

export const APK_CONFIG = {
  url: '/logmitra-2.2.1.apk',
  fileName: 'logmitra-2.2.1.apk',
  version: '2.2.1',
  fileSize: '67.3 MB',
  minAndroid: 'Android 8.0+',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.logmitra.app'
};

export function downloadApkFile() {
  const link = document.createElement('a');
  link.href = APK_CONFIG.url;
  link.setAttribute('download', APK_CONFIG.fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
