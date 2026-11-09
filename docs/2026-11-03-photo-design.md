# Iris 正脸照片首页设计

采用用户提供的 IMG_4203.JPG，通过内置 image_gen 工具制作透明半身素材。保留正脸、笑容和红色礼服，沿用左侧星球与右侧宣言的网页构图。图像编辑可能改变细节，面貌还原程度待本人确认。

项目素材位置：`/Users/iris/Downloads/Iris_Projects_Pack/iris-personal-site/public/images/iris-photo-cutout-v3.png`。原照片与旧素材未覆盖。

修改文件：`src/components/home/HeroCollage.tsx` 和 `src/app/globals.css`。未发布至互联网。

## 图像编辑提示词

Use case: background-extraction. Edit target: supplied real photograph IMG_4203.JPG. Create a faithful transparent cutout of the SAME woman, cropped from just above her hair to her waist, centered with minimal transparent padding. Preserve her actual face EXACTLY: same facial proportions, eyes, nose, mouth, smile with teeth, makeup, head orientation facing camera, skin texture, hair, earrings, red sequined dress and pose. Do not beautify, reshape, change age, turn head, invent hair or replace her identity. Remove the entire salon, wall, signs, furniture, plants and all background. Only extract the photographed person and crop to waist-up. Natural clean hair edges. Genuine transparent alpha background. No lettering, no planets, no graphic elements. This asset is for layering over a dark website background; keep the photographic lighting natural.
