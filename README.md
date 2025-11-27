# parkerCYH-portfolio (Next.js + AWS)

> 個人全端作品集網站，展示技能、專案與聯絡方式，採用 Next.js 16、TypeScript、Tailwind CSS、shadcn/ui 等現代技術開發。

---

## 🚀 特色 Features

- **個人簡介與技能**：介紹開發者背景、專長技術與設計工具
- **作品集展示**：卡片式呈現多個專案，附技術標籤與圖片
- **聯絡表單**：支援即時留言，資料經 API 以 Resend 寄送 Email
- **響應式設計**：桌機與行動裝置皆適用
- **現代化 UI/UX**：shadcn/ui + Tailwind CSS 打造美觀介面

## 🛠 技術棧 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form + Zod
- Resend (Email API)
- AWS (可擴充部署)

## 📁 專案結構 Project Structure

```text
app/
    _components/      # 各區塊元件 (Header, Hero, About, Skills, Projects, Contact)
    api/contact/      # 聯絡表單 API (Resend Email)
components/ui/      # 共用 UI 元件 (Button, Card, Input...)
lib/                # 共用函式與環境變數設定
public/             # 靜態資源
```

## ⚡ 快速開始 Getting Started

1. 安裝依賴 Install dependencies

    ```bash
    pnpm install
    # 或 npm install / yarn install
    ```

2. 設定環境變數 Setup environment variables
    - 複製 `.env.example` 為 `.env.local`，填入 `RESEND_API_KEY`

3. 啟動開發伺服器 Start dev server

    ```bash
    pnpm dev
    # 或 npm run dev / yarn dev
    ```

4. 開啟 [http://localhost:3000](http://localhost:3000)

## 📬 聯絡表單 Contact Form

- 表單資料送到 `/api/contact`，經 Resend API 寄送 Email
- 需設定 `RESEND_API_KEY` 於環境變數

## ☁️ 部署 Deployment

- 可部署於 Vercel、AWS、或任何支援 Node.js 的平台
- 建議使用 Vercel 以獲得最佳 Next.js 支援

## 👤 作者 Author

- [鄭雲修](https://github.com/parkerCYH)

GitHub Repo: [parkerCYH-portfolio](https://github.com/parkerCYH/parkerCYH-portfolio)

- Email: fbi0258zzz@gmail.com

---

歡迎交流與合作！
