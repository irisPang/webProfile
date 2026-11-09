# Iris 网站本地修改记录

2026年11月3日。已保存到 `/Users/iris/Downloads/Iris_Projects_Pack/iris-personal-site`。未部署。

- 将首屏图片与文字分层，桌面采用双栏，手机和平板采用上下布局。
- 清除首页占位卡片与页脚内部备注；Join 改为 Contact。联系页明确渠道尚未开放。
- 精选栏目从统一内容数据读取，新增 series / episode 类型区分。
- 原代码备份位于本次聊天的 `work/site-backup`。原始设计图和原始人像素材未覆盖。
- 类型检查通过。生产构建 `next build --webpack` 通过，生成17个页面。
- 浏览器检查桌面、390px手机、820px平板；手机和平板无横向溢出。验证菜单、Contact导航和首屏向下阅读链接。

## 素材来源

使用内置 image_gen 工具编辑既有概念素材，非CLI。新文件：
`/Users/iris/Downloads/Iris_Projects_Pack/iris-personal-site/public/images/iris-concept-cutout-v2.png`

该人物仍为概念占位，正式发布前需换成确认的本人照片。未开通真实联系渠道。

## 图像编辑提示词

Use case: background-extraction. Edit target: the supplied existing concept portrait collage. Extract only the woman with her black clothing, hair and earrings onto a genuinely transparent background. Preserve her exact face, identity, upward gaze, expression, pose, lighting, hair and outfit. Remove ALL typography, all letters, buttons, orange planet, stars, orbit lines (including lines crossing clothes), mountains and background. Clean natural hair edges. Waist-up/bust cutout suitable for layering in a website hero. No text, no symbols, no new person. This is a concept placeholder, not an identity photo.
