import FaceApp from "../../assets/faceApp.png";
import WebApp from "../../assets/streamlit.png";
import Risk from "../../assets/determining-risk.jpg";
import Art from "../../assets/art.png";
import Clothes from "../../assets/clothes.png";
import utau from "../../assets/utau2.png";
import ai from "../../assets/Ai_singer.jpg";

const Menu = [
  {
    id: 1,
    image: FaceApp,
    title: "Facial Recognition APP",
    content: "A real-time selfie capture program using the CNN model.",
    category: "Apps",
    path: "https://github.com/Wanqing18/facial-recognition-app",
  },
  {
    id: 2,
    image: WebApp,
    title: "Streamlit Web App",
    content:
      "Developed a website that applied an ML model using customized hyperparameters  to forecast target metrics.",
    category: "Apps",
    path: "https://github.com/Wanqing18/ML_Streamlit",
  },
  {
    id: 3,
    image: Risk,
    title: "ML in Credit Risk Analytics",
    content:
      " Compared different ML models and selected and tuned the optimized one for risk prediction.",
    category: "Apps",
    path: "https://www.kaggle.com/code/christalz18/credit-risk-analytics",
  },
  ,
  {
    id: 4,
    image: Art,
    title: "Illustrations",
    content:
      "Digital painting is my hobby.(all the works are original, none of them used AI)",
    category: "Creative",
    path: "https://www.pixiv.net/users/10456137/illustrations",
  },
  ,
  {
    id: 5,
    image: Clothes,
    title: "Clothing Patterns Design",
    content:
      "Collaborated with friends on creating products with Chinese traditional elements.  Check out our TikTok to explore more!",
    category: "Creative",
    path: "https://world.taobao.com/item/641306606379.htm?spm=a21wu.11804641-tw.shop-content.11.21e6623dwuo3db",
  },
  ,
  {
    id: 6,
    image: utau,
    title: "Virtual Singer'白石川'",
    content:
      "Participated in virtual singer projects with friends. Provided singer's voice and design--Japanese Version",
    category: "Creative",
    path: "https://www.bilibili.com/video/BV1UW411e7t9/?spm_id_from=333.337.search-card.all.click",
  },
  ,
  {
    id: 7,
    image: ai,
    title: "Diffusion AI--Virtual singer",
    content:
      " Participated in model optimizing and voice provided in English and Chinese versions. ",
    category: "Creative",
    path: "https://www.bilibili.com/video/BV1hu411G7M8/?spm_id_from=333.337.search-card.all.click&vd_source=8d9f13125cd96701f8d937a05eb9bfcf",
  },
];

export default Menu;
