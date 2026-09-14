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
        . Прорабатываю структуру и заполняю информацией. Крайне доволен текущим результатом. Хочу успеть доделать до первого ролика в 2026.
      </div>
      <div>
        - Принял решение о возсоздании медиа части моей жизни. Тяжело без неё. Но на{" "}
        <a href="https://twitch.tv/nikitanik_of" target="_blank" id="link">
          стримы
        </a>{" "}
        не заходят люди... Жалко, но ладно...
      </div>
      <div>- Сделал турнир с кастомными оверлеями и БД. Были косяки - надо исправить</div>
      <div>- Слишком много сижу в телефоне и в YouTube</div>
      <div>- Зависаю в инди-Интернете. Каждый раз я в шоке, как соцсети ломают представление о людях в Интернете</div>
      <div>- Разочаровался в онлайн-общении. </div>
      <div>- Глажу котика. Он сказал: "mrrrr"</div>
    </div>,
  );
  const [tabTwo, setTabTwo] = React.useState(
    <div className="bg-white shadow-w98-pressed p-2">
      <div>- Веду 5 пар в неделю. Очень интересно, точно лучше чем сидеть на них и слушать 67-летнего деда.</div>
      <div>- Работаем над научным грантом. Программы и гравики goes <span className="italic">brrrrrrrrrr</span></div>
    </div>,
  );
  const [tabThree, setTabThree] = React.useState(
    <div className="bg-white shadow-w98-pressed p-2">
      <div>- Диплом красный получил</div>
      <div>- <span className="font-bold">В аспирантуру прошел!</span> Учимся теперь еще 4 года, так еще и бюджет)))</div>
      <div>- Учим философию науки и English. Просто ez-clap</div>

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
      <div className="line-through">- Ачивки.</div>
      <div>- Последние ролики.</div>
      <div>- Логотип.</div>
      <div className="line-through">- Привести в порядок ссылки.</div>
      <div>- Эффекты при активном стриме.</div>
      <div>- FAQ. “what do you use?”.</div>
      <div className="line-through">- Часы.</div>
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
