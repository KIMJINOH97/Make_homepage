// next.config.js
const withImages = require('next-images');
module.exports = withImages({
    webpack(config, options) {
        return config;
    },
});
// next-images 깔고 웹팩 설정 고쳐주면 이미지 파일 업로드 가능!
