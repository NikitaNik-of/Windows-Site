import React from "react";
import Tabs from "../Tabs";

const WCNow = () => {
  const [curTab, setCurTab] = React.useState(0);
  const [tabOne, setTabOne] = React.useState(
    <div className="bg-white shadow-w98-pressed p-2">
      <div>
        -{" "}
        <a href="https://new.nn-of.ru/" target="_blank" id="link">
          Этот сайт
        </a>
        . Прорабатываю структуру и заполняю информацией. Крайне доволен текущим результатом.
      </div>
      <div>
        - Принял решение о возсоздании медиа части моей жизни. Тяжело без неё. Но на{" "}
        <a href="https://twitch.tv/nikitanik_of" target="_blank" id="link">
          стримы
        </a>{" "}
        не заходят люди... Жалко, но ладно...
      </div>
      <div>- Продумываю структуру мероприятий для своего сервера, переделываю свои стрим-оверлеи. Очень нравится создавать интерактивные вещи.</div>
      <div>- Слишком много сижу в телефоне и в YouTube</div>
      <div>- Зависаю в инди-Интернете</div>
      <div>- Глажу котика</div>
    </div>,
  );
  const [tabTwo, setTabTwo] = React.useState(
    <div className="bg-white shadow-w98-pressed p-2">
      <div>- Жду нового учебного года, ибо универ ждет.</div>
    </div>,
  );
  const [tabThree, setTabThree] = React.useState(
    <div className="bg-white shadow-w98-pressed p-2">
      <div>- Диплом красный получил</div>
      <div>- <span className="font-bold">В аспирантуру прошел!</span> Учимся теперь еще 4 года, так еще и бюджет)))</div>
    </div>,
  );
  const [tabFour, setTabFour] = React.useState(
    <div className="bg-white shadow-w98-pressed p-2">
      <div>- CS2, Всегда либо лоутаб (в 90% случаев), либо максфрагер в Премке.</div>
      <div>- Умираю на ДМ серверах Quake Champions.</div>
      <div>- Пробую новые игры, хочу попробовать разнообразить свой интерес.</div>
      <div>- Minecraft. Играю на своём сервере DeltaCraft. Делаю периметр для ферм. Хотя если честно очень устал от кубов.</div>
    </div>,
  );
  const [tabFive, setTabFive] = React.useState(
    <div className="bg-white shadow-w98-pressed p-2">
      <div>- Ачивки.</div>
      <div>- Последние ролики.</div>
      <div>- Привести в порядок ссылки.</div>
      <div>- Эффекты при активном стриме.</div>
      <div>- FAQ. “what do you use?”.</div>
      <div>- Часы.</div>
    </div>,
  );

  return (
    <div className="p-0.5 w-full h-full">
      <div className="p-2 shadow-w98-pressed w-full">
        {"Эта страничка про то, чем я сейчас занимаюсь, что у меня происходит и что у меня на уме. " + "Эта страница будет регулярно обновляться, а прошлые версии этой страницы не будут сохраняться."}
      </div>
      <Tabs className="mt-4" tabList={["Что я делаю сейчас", "РАБОТА", "УЧЕБА", "Gaming", "To-Do сайта"]} tabContentList={[tabOne, tabTwo, tabThree, tabFour, tabFive]} curTab={curTab} setCurTab={setCurTab} />
    </div>
  );
};

export default WCNow;
