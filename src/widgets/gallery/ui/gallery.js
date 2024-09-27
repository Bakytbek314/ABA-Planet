import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SwiperContainer from "../../../features/swiperContainer/ui/swiperContainer.tsx";
import { SwiperSlide } from "swiper/react";
import TextType from "../../../shared/ui/textType/textType.tsx";
import styles from "./gallery.module.scss";
const Gallery = () => {
    return (_jsx("section", { className: styles.gallery_section, children: _jsxs("div", { className: "container", children: [_jsx("div", { className: styles.title, children: _jsx(TextType, { variant: "h1", color: "red", align: "center", weight: "semiBold", children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F" }) }), _jsxs(SwiperContainer, { children: [_jsx(SwiperSlide, { children: _jsx("div", { className: styles.slider, children: _jsx("img", { src: "https://avatars.mds.yandex.net/i?id=21207a1f55dff704d40df5f24497fba5_l-5220773-images-thumbs&n=13", alt: "" }) }) }), _jsx(SwiperSlide, { children: _jsx("div", { className: styles.slider, children: _jsx("img", { src: "https://i.pinimg.com/originals/56/66/6a/56666aa4744cbbd13232191959e9ebbd.jpg", alt: "" }) }) }), _jsx(SwiperSlide, { children: _jsx("div", { className: styles.slider, children: _jsx("img", { src: "https://avatars.mds.yandex.net/i?id=4885802605247ddede97f840d188c74d1dc798d8-4909855-images-thumbs&n=13", alt: "" }) }) })] })] }) }));
};
export default Gallery;
