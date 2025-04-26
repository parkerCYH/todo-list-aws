# 文字載入動畫展示：三種實作方式

![文字載入動畫展示](./demo.gif)

本專案展示了一段精緻且富有創意的文字載入動畫，靈感來自國際知名開發團隊 Dogstudio 的網站案例，並以「Team Taiwan! Team Taiwan! Taiwan is a great country!」這段文字作為主題，實現動畫的細緻度與視覺衝擊感。

為了探索不同技術在動畫表現上的可能性，本專案分別以 **純 CSS/JS**、**GSAP**、以及 **Next.js + React + GSAP** 三種方式實作相同動畫概念，呈現文字由下方翻轉進場的 3D 效果。

---

## 🧪 三種版本說明

### 1. `index-cssjsonly.html`：純 CSS/JS 實作

- 使用 CSS transition 與 `cubic-bezier` 緩動實現動畫
- JavaScript 動態產生文字元素
- 配合 Intersection Observer 觸發動畫

### 2. `index-gsap.html`：GSAP 實作

- 使用 GSAP 的 fromTo 實現動畫順序控制
- 更細緻的動畫
- 相較 CSS/JS 更具可控性與擴充性

### 3. `Next.js + React + GSAP`

- 現代框架組合，提升可維護性與模組化
- 結合 React 組件與 GSAP 動畫邏輯
- 適用於實際專案中大型動畫應用場景

---

## 🔍 技術細節

- **動畫效果**：如上方 Demo 所示，字母從底部翻轉進入視圖，帶有 3D 效果
- **動畫觸發**：所有版本均採用 Intersection Observer API，當目標元素進入瀏覽器可視範圍時，才會開始播放文字載入動畫，優化效能。
- **動畫時間控制**：
  - CSS/JS：每個字母延遲 0.03 秒進場
  - GSAP：使用 stagger，延遲 0.015 秒
- **文字排版優化**：
  - 文字排版經過細緻調整，確保在文字換行時，後續文字能夠垂直置左對齊，呈現更美觀的視覺效果。
  - 在 Next.js 版本中，透過 `@import url()` 引入了指定的字體 (`https://use.typekit.net/pxc5lqp.css`)，確保頁面字體與設計稿保持一致。

---

## 🧪 使用方式

### CSS/JS 與 GSAP 版本：

- 直接打開對應 HTML 檔案即可觀看動畫

### Next.js + React + GSAP 版本：

```bash
pnpm install       # 安裝相依套件
pnpm dev           # 啟動開發伺服器
http://localhost:3000  # 開啟頁面預覽動畫
```
