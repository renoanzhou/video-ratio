# video-ratio
输入视频地址，获得视频的比例和分辨率
Enter the video address to get the scale and resolution of the video
# API
videoRatio.info(videoSrc, timeout)
- videoSrc为视频地址，
- timeout为等待时间，单位为毫秒， 默认为2000, 如果超过timeout的时间还未返回结果，会结束等待，返回失败

```
videoRatio.info('https://testvideo.mp4', 2000).then((rs) => {
  if (rs.ratio) {
    // 获取视频比例信息成功
    console.log(rs);
  } else {
    // 获取失败，返回失败原因
    console.log(rs)
  }
})
```

# 接入方式
1. npm 或 yarn 安装
```
npm install video-ratio

yarn add video-ratio
```

```
import { info } from 'video-ratio'

const rs = await info(src);

```

2. 通过script引入, 使用video-ratio.umd.js, 构建时的入口对象为videoRatio
```
<script src="testcdn.com/video-ratio.umd.js"></script>
<script>
videoRatio.info(src).then((rs) => {});
</script>
```

# 返回结果的结构
```
正常情况
{
  ratio: '2:1',
  resolution: {
    detail: "1280x640",
    width: 1280,
    height: 640
  }
}
异常就是一段错误string
```

# 说明
## 实现的原理
获取视频的分辨率的宽高是根据此接口获得的HTMLVideoElement.videoWidth / HTMLVideoElement.videoHeight

只是方便接入，封装为promise返回

## 获取分辨率或比例异常
估计也是浏览器返回的videoWidth 跟 videoHeight有问题，这点在一些移动端浏览器上可能会出现。

