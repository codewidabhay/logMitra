import { APK_CONFIG } from '../config/apkConfig';

/**
 * Helper utility to trigger downloading the LogMitra APK file directly in the browser.
 */
export function downloadApkFile() {
  const link = document.createElement('a');
  link.href = APK_CONFIG.url;
  link.setAttribute('download', APK_CONFIG.fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
