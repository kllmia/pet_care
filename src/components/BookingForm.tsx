"use client";

import { FormEvent, useState } from "react";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        飼主姓名
        <input name="name" placeholder="請輸入姓名" type="text" />
      </label>
      <label>
        聯絡電話
        <input name="phone" placeholder="0912-345-678" type="tel" />
      </label>
      <label>
        毛孩類型
        <select name="pet">
          <option>小型犬</option>
          <option>中大型犬</option>
          <option>貓咪</option>
        </select>
      </label>
      <label>
        預約服務
        <select name="service">
          <option>基礎洗澡</option>
          <option>洗澡加造型</option>
          <option>皮毛護理</option>
          <option>現場諮詢</option>
        </select>
      </label>
      <label className="full">
        備註
        <textarea
          name="message"
          placeholder="可以留下毛孩個性、皮膚狀況、希望預約的日期或特殊需求。"
        />
      </label>
      <button className="btn btn-primary full" type="submit">
        送出預約需求
      </button>
      {submitted ? (
        <p className="form-note full" role="status">
          已收到預約需求範例。正式上線時可再串接後端或表單服務。
        </p>
      ) : null}
    </form>
  );
}
