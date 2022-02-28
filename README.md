# video-ratio
用于获得视频的比例和分辨率

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
<script src="你们cdn的地址"></script>
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