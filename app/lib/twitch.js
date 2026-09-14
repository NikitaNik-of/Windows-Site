'use server'
// 1. Получаем OAuth-токен уровня приложения
async function getAppAccessToken() {
  const params = new URLSearchParams({
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    grant_type: 'client_credentials',
  });
  // console.log(params);
  const res = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    body: params,
    next: { revalidate: 3600 }, // Кэшируем токен на 1 час
  });

  if (!res.ok) throw new Error('Не удалось получить токен Twitch');
  const data = await res.json();
  return data.access_token;
}

// 2. Проверяем статус стрима
export async function getTwitchStreamStatus(channelName) {
  try {
    const token = await getAppAccessToken();

    const res = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(channelName)}`,
      {
        headers: {
          'Client-ID': process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return { isLive: false, stream: null };
    }

    const { data } = await res.json();
    const isLive = Array.isArray(data) && data.length > 0;

    return {
      isLive,
      stream: isLive ? (data[0]) : null,
    };
  } catch (error) {
    console.error('Ошибка проверки стрима Twitch:', error);
    return { isLive: false, stream: null };
  }
}