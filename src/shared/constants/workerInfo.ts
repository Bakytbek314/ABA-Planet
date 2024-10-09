import {WorkerInfo} from "../types/workerInfoTypes.ts";
import NiluPhoto from "../assets/images/nilu.webp";
import ArukePhoto from "../assets/images/aru.webp";
import AyshaPhoto from "../assets/images/aysha.webp";
import Nilu_diploma from "../assets/images/diplom_nilu.webp";
import Aruke_serf from "../assets/images/sertif_aru.webp";
import Zarima_serf from "../assets/images/sertif_zarima.webp";
import Abdu_serf from "../assets/images/sertif_abdu.webp";



export const workerInfo: WorkerInfo[] = [
    {
        id: 1,
        name: "Нилуфар",
        photo: NiluPhoto,
        description: "ABA-терапевт, детский психолог. Моя цель - раскрыть потенциал каждого ребенка, помогая ему преодолеть барьеры и найти свой путь к развитию и понимание.",
        education: Nilu_diploma
    },
    {
        id: 2,
        name: "Айша",
        photo: AyshaPhoto,
        description: "ABA-специалист. Каждый ребенок уникален, и я верю, что даже самые маленькие шаги ведут к большим достижениям. Моя миссия -помогать детям развиваться и открывать мир через последовательную и поддерживающую терапию.",
        education: ""
    },
    {
        id: 3,
        name: "Арууке",
        photo: ArukePhoto,
        description: "ЛФК-массаж, специалист по сенсорной интеграции. Я убеждена, что через движение и физическую активность ребенок обретает уверенность и новые возможности для роста. Моей задачей является поддержка каждого ребенка на пути к гармоничному развитию.",
        education: Aruke_serf
    },
    {
        id: 4,
        name: "Зарима",
        photo: "",
        description: "Логопед-дефектолог. Каждое слово - это мост к миру общения.Я помогаю детям обрести уверенность в общении, преодолевать трудности с речью и строить крепкие взаимоотношения с окружающими.",
        education: Zarima_serf
    },
    {
        id: 5,
        name: "Абдумажит",
        photo: "",
        description: "Специалист по сенсорной интеграции. Я убежден, что каждый ребенок заслуживает внимания и индивидуального подхода. Моя цель - создавать комфортные условия для обучения и развития, чтобы каждый ребенок мог раскрыть свои способности.",
        education: Abdu_serf
    }
];
