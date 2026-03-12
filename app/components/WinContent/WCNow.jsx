import React from "react";

const WCNow = () => {
  return (
    <div className="p-0.5 w-full h-full">
      <div className="p-2 shadow-w98-pressed w-full">
        {"Эта страничка про то, чем я сейчас занимаюсь, что у меня происходит и что у меня на уме. "
         + "Эта страница будет регулярно обновляться, а прошлые версии этой страницы не будут сохраняться."}
      </div>
      <div className="font-bold text-lg mt-2 mb-1">Что я делаю сейчас</div>
      <div className="pl-2">
        <div>- <a href="https://new.nn-of.ru/" target="_blank" id="link">Этот сайт</a>. Прорабатываю структуру и заполняю информацией</div>
        <div>- Учусь водить машину. Первый внутренний экзамен сдать не получилось. Надеюсь справлюсь на пересдаче.</div>
        <div>- Продумываю структуру мероприятий для своего сервера, переделываю свои стрим-оверлеи.</div>
        <div>- Слишком много сижу в телефоне и в YouTube</div>
        <div>- Зависаю в инди-Интернете</div>
        <div>- Глажу котика</div>
        {/* <div>- </div> */}
      </div>

      <div className="font-bold text-lg mt-2 mb-1">РАБОТА</div>
      <div className="pl-2">
        <div>- Каждое утро хожу в школу ради одного урока в одном классе</div>
        <div>- Проверяю домашние работы (лень)</div>
        <div>- Жду конца года сильнее учеников</div>
        {/* <div>- </div> */}
      </div>

      <div className="font-bold text-lg mt-2 mb-1">УЧЕБА</div>
      <div className="pl-2">
        <div>- Завершаю последний курс (наконец-то)</div>
        <div>- Сделал введение для Диплома (шок-контент)</div>
        <div>- Устроился лаборантом по одному проекту-гранту. За месяц ничего не сделал</div>
        <div>- Удивительно, но сдал за месяц 2 зачета... Обычно в последний момент доделываю всё.</div>
        {/* <div>- </div> */}
      </div>
      
      <div className="font-bold text-lg mt-2 mb-1">Во что я сейчас играю</div>
      <div className="pl-2">
        <div>- Minecraft. Играю на своём сервере DeltaCraft. Делаю периметр для ферм.</div>
        <div>- CS2, Всегда либо лоутаб, либо максфрагер в Премке.</div>
        {/* <div>- </div> */}
      </div>
      {/* <div className="font-bold text-lg mt-2 mb-1">Что я сейчас слушаю</div>
      <div className="pl-2">
        <div>- </div>
      </div> */}
    </div>
  );
};

export default WCNow;
