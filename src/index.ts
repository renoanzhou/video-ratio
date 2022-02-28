function maxCommonMuliple(n: number, m: number): number {
  if (m == 0) return n;
  return maxCommonMuliple(m, n % m);
}

function getRatio(video: HTMLVideoElement) {
  const width = video.videoWidth;
  const height = video.videoHeight;
  const max = maxCommonMuliple(width, height);
  return `${width / max}:${height / max}`;
}

function getResolution(video: HTMLVideoElement) {
  const width = video.videoWidth;
  const height = video.videoHeight;
  return {
    detail: `${width}x${height}`,
    width,
    height
  };
}

export interface VideoRatioInfo {
  resolution: {
    detail: string;
    width: number;
    height: number;
  },
  ratio: string
}

function getInfo(video: HTMLVideoElement, timeout: number): Promise<VideoRatioInfo | string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('get video info timeout');
    }, timeout);

    video.onloadedmetadata = () => {
      resolve({
        resolution: getResolution(video),
        ratio: getRatio(video),
      });
    };

    video.onerror = () => {
      resolve(video.error?.message || '');
    };

    video.style.display = 'none';
    document.body.appendChild(video);
  });
}

export async function info(src: string, timeout = 2000) {
  const video = document.createElement('video');
  video.src = src;

  const info = await getInfo(video, timeout);

  document.body.removeChild(video);
  return info;
}

