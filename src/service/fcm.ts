import {
  FCMMessage,
  FCMSendReply,
  ReplyWithError,
} from "fastify-starter/dist/types/routes/v1";

async function send(
  params: FCMMessage,
): Promise<FCMSendReply | ReplyWithError> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fcm/send`, {
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!res.ok) {
    const message = `service: fcm: send: ${res.status} - ${res.statusText}`;

    try {
      return res.json();
    } catch (e) {
      throw new Error(message);
    }
  }

  return res.json();
}

const fcmApi = Object.freeze({ send });
export default fcmApi;
