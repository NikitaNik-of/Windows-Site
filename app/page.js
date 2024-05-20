import Image from "next/image";

function time() {
  var today = new Date;
  var text = today.getHours().toString() + ":" + today.getMinutes().toString() +  ":" + today.getSeconds().toString()
  return text
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#008080]">
      <div className="bg-neutral-400 items-end">Hallo</div>
      <div className="bg-neutral-400 w-full flex p-1">
        <div>Пуск</div>
        <div className="flex-1">Приложение</div>
        <div>{time()}</div>
      </div>
    </main>
  );
}
