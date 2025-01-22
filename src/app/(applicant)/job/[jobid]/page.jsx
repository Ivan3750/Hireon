import React from "react";
import { FaMapLocationDot, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import RootLayout from "@/app/RootLayout"
export async function generateMetadata({ params }) {
  const { jobid } = await params;
  return {
    title: `Job Details - ${jobid}`,
  };
}
const JobDetailsPage = async () => {
  return (
    <RootLayout>

    <>
      <div className="bg-[#F8F8FF] w-[850px] h-max p-4 rounded-2xl my-5 m-auto">
        <div className="flex justify-between my-2 items-center">
            <Link href="/job" className="flex flex-row gap-[5px] items-center"><FaArrowLeft></FaArrowLeft>Back</Link>
            <button className="bg-[#FFB703] text-[#11181C] text-[16px] h-[50px] w-[200px] rounded-2xl hover:bg-[#11181C] hover:text-[#FFB703] transition-all">Apply now</button>
        </div>
        <h2 className="font-semibold text-[25px] text-[#11181C]">Junior Front End Developer</h2>
        <div className="flex text-[14px] text-[#5D5D5D] font-normal gap-4 my-2">
            <p>SharksCode.ua</p>
            <p>Country City Street, 10</p>
            <FaMapLocationDot size={18} color="#FB8500"/>
        </div>
        <div className="flex flex-row">
            <div className="bg-[#FFB703] font-light text-[#11181C] text-[12px] rounded-2xl p-2 my-4 mx-1 w-fit">Full Time</div>
            <div className="bg-[#FFB703] font-light text-[#11181C] text-[12px] rounded-2xl p-2 my-4 mx-1 w-fit">Full Time</div>
            <div className="bg-[#FFB703] font-light text-[#11181C] text-[12px] rounded-2xl p-2 my-4 mx-1 w-fit">Full Time</div>
            <div className="bg-[#FFB703] font-light text-[#11181C] text-[12px] rounded-2xl p-2 my-4 mx-1 w-fit">Full Time</div>
        </div>
        <div>
            <p className="text-[12px] font-light text-wrap w-full">
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
    </RootLayout>

  );
};

export default JobDetailsPage;
