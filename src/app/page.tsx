"use client";

import { Button, Form } from "antd";
import { useCallback } from "react";

// import { fcmApi } from "@/service";

interface FormData {
  token: string;
  ["notification.title"]: string;
  ["notification.body"]: string;
}

export default function Home() {
  const [form] = Form.useForm<FormData>();

  const handleSend = (): void => {
    form.submit();
  };

  const handleSubmit = useCallback((values: FormData): void => {
    console.log("handleSubmit", values);
    // const { token } = values;
    // const message = { token };
  }, []);

  return (
    <main>
      <section>
        <header>Firebase Cloud Messaging</header>

        <main>
          <Form
            form={form}
            layout="vertical"
            name="form"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Notification Text"
              name="notification.body"
            ></Form.Item>
          </Form>
        </main>

        <footer>
          <Button type="primary" onClick={handleSend}>
            Send
          </Button>
        </footer>
      </section>
    </main>
  );
}
