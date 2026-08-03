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
        <div>- Принял решение о возсоздании медиа части моей жизни. Тяжело без неё.</div>
        <div>- Продумываю структуру мероприятий для своего сервера, переделываю свои стрим-оверлеи. Очень нравится создавать интерактивные вещи.</div>
        <div>- Слишком много сижу в телефоне и в YouTube</div>
        <div>- Зависаю в инди-Интернете</div>
        <div>- Глажу котика</div>
        {/* <div>- </div> */}
      </div>

      <div className="font-bold text-lg mt-2 mb-1">РАБОТА</div>
      <div className="pl-2">
        <div>- Жду нового учебного года, ибо универ ждет.</div>
        {/* <div>- </div> */}
      </div>

      <div className="font-bold text-lg mt-2 mb-1">УЧЕБА</div>
      <div className="pl-2">
        <div>- Диплом красный получил</div>
        <div>- Готовлюсь к экзамену по аспирантуре. Должен на изи пройти, но не уверен.</div>
        {/* <div>- </div> */}
      </div>
      
      <div className="font-bold text-lg mt-2 mb-1">Во что я сейчас играю</div>
      <div className="pl-2">
        <div>- CS2, Всегда либо лоутаб, либо максфрагер в Премке.</div>
        <div>- Умираю на ДМ серверах Quake Champions.</div>
        <div>- Пробую новые игры, хочу попробовать разнообразить свой интерес.</div>
        <div>- Minecraft. Играю на своём сервере DeltaCraft. Делаю периметр для ферм. Хотя если честно очень устал от кубов.</div>
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
