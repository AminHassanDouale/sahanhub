import { onCLS, onFID, onLCP, onTTFB } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

interface Connection {
  effectiveType?: string;
}

interface NavigatorWithConnection extends Navigator {
  connection?: Connection;
}

function getConnectionSpeed() {
  const nav = navigator as NavigatorWithConnection;
  return nav.connection && 'effectiveType' in nav.connection
    ? nav.connection.effectiveType
    : '';
}

export function sendToAnalytics(metric: any, options: { path: string }) {
  const page = Object.entries(options).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path,
  );

  const body = {
    dsn: process.env.NEXT_PUBLIC_ANALYTICS_ID, // Your Analytics ID
    id: metric.id,
    page,
    href: location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (process.env.NODE_ENV === 'production') {
    fetch(vitalsUrl, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    console.log('[Web Vitals]:', metric.name, metric.value);
  }
}

export function webVitals() {
  try {
    onFID((metric) => sendToAnalytics(metric, { path: location.pathname }));
    onTTFB((metric) => sendToAnalytics(metric, { path: location.pathname }));
    onLCP((metric) => sendToAnalytics(metric, { path: location.pathname }));
    onCLS((metric) => sendToAnalytics(metric, { path: location.pathname }));
  } catch (err) {
    console.error('[Web Vitals Error]:', err);
  }
}