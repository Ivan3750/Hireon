import React from "react";
import { FaMapLocationDot, FaRegPaperPlane } from "react-icons/fa6";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {FaArrowLeft} from "react-icons/fa6";
export async function generateMetadata({ params }) {
  const { workerId } = await params;
  return {
    title: `Worker Details - ${workerId}`,
  };
}
const JobDetailsPage = async ({ params }) => {
  const workerId = (await params).workerId;
  return (
    <>
      <div key={workerId} className="bg-[#F8F8FF] w-[90%] max-w-[800px] h-max p-4 rounded-2xl my-5 m-auto">
        <div className="flex justify-between my-2 items-center">
        <Link href="/worker" className="flex flex-row gap-[5px] items-center"><FaArrowLeft></FaArrowLeft>Back</Link>
<button className="bg-[#FFB703] text-[#11181C] text-[16px] h-[50px] w-[200px] rounded-2xl hover:bg-[#11181C] hover:text-[#FFB703] transition-all max-[768px]:w-[50px] max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center">
          <p className="max-[768px]:hidden">
          Apply now 
          </p>
          <FaRegPaperPlane className="max-[768px]:block hidden w-[20px] h-[20px]"  width={20} height={20}/>
        </button>        </div>
        <h2 className="font-semibold md:text-[25px] text-[#11181C] text-[20px]">Peter Petersen</h2>
        <h2 className="font-semibold md:text-[20px] text-[#11181C] text-[16px]">Junior Front End  Developer</h2>
        <div className="flex text-[14px] text-[#5D5D5D] font-normal gap-1 my-3 flex-col">
            <p>Employment: <span className="text-[#11181C]">Full-time</span></p>
            <p>Age: <span className="text-[#11181C]">44 years</span></p>
            <p>City of residence: <span className="text-[#11181C]">Zaporizhzhia</span></p>
            <p>Ready to work: <span className="text-[#11181C]">Remote</span></p>
        </div>
        <h3 className="text-[#11181C] font-normal text-[16px]">Contact information</h3>
        <div className="flex gap-2 mb-5 mt-1 items-center flex-wrap">
          <div>

          <BsFillTelephoneFill />
          <p className="text-[#11181C] text-[14px] text-light cursor-pointer">+380 672 850 96 88</p>
          </div>
          <div>

          <MdEmail size={20}/>
          <p className="text-[#11181C] text-[14px] text-light cursor-pointer">emailtest@gmail.com</p>
          </div>
        </div>
        <div>
            <p className="text-[10px] md:text-[12px] font-light text-wrap w-full">
            Front-end Розробник
Ми шукаємо досвідченого Front-end розробника з глибокими знаннями Vue.js для розробки та підтримки геоінформаційної системи. Великим плюсом є досвід роботи з картографічними бібліотеками, WebGL, розробкою застосунків на Electron.

Основні обов’язки:
Розробка інтерфейсу системи на базі Vue.js.
Інтеграція та налаштування картографічних бібліотек (Leaflet, Mapbox, OpenLayers тощо).
Оптимізація продуктивності графічних компонентів.
Розробка функціоналу для роботи з великою кількістю даних у реальному часі.
Розробка функціоналу різноманітних інструментів та їх синхронізація з картою.
Співпраця з командою бекенд-розробників для інтеграції API.
Участь у проектуванні архітектури системи.
Підтримка і вдосконалення існуючого коду.
Вимоги:
Досвід розробки Front-end додатків від 3 років.
Досвід роботи з картографічними бібліотеками (Leaflet, Mapbox, OpenLayers тощо).
Досвід роботи з WebGL або бібліотеками для роботи з графікою в браузері (Three.js, Deck.gl, Mapbox GL, тощо).
Практичний досвід побудови інтерактивних картографічних сервісів із використанням WebGL для візуалізації геопросторових даних.
Навички оптимізації рендерингу великих обсягів даних у реальному часі
Розуміння принципів роботи 2D/3D-графіки в браузері, створення анімацій, кастомних рендерів та інтерактивних елементів на картах.
Знання алгоритмів просторового пошуку, кластеризації та відображення геоданих із високою продуктивністю.
Бажано знання Vue.js і його екосистеми (Vue Router, Vuex).
Знання HTML5, CSS3, JavaScript (ES6+).
Досвід роботи з Electron — великий плюс.
Розуміння принципів адаптивної верстки та крос браузерної сумісності.
Глибокі фундаментальні знання алгоритмів, структур даних.
Англійська мова на рівні розуміння документації.
Для нас є важливими:
Здатність розбивати складні задачі на менші підзадачі, визначати основні проблеми та знаходити оптимальні рішення.
Вміння знаходити найбільш ефективні за швидкістю, продуктивністю чи використанням ресурсів рішення.
Здатність генерувати нестандартні ідеї та підходи до вирішення завдань.
Здатність приймати зважені рішення в умовах браку повної інформації або при стислих термінах.
Вміння швидко знаходити та усувати помилки.
Ефективна комунікація при обговоренні технічних проблем, здатність пояснити своє рішення іншим учасникам проекту.
Що пропонуємо ми:
оплата лікарняних, відпусток, додаткових sick days;
бронювання співробітників;
компенсація витрат на заняття різними видами спорт;
корпоративні заходи та подарунки;
можливість розвиватися разом з нами.
            </p>
        </div>
      </div>
    </>
  );
};
export default JobDetailsPage;
