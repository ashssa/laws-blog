---
# ====================================
# 內容必備欄位 (Content Essentials)
# ====================================
title: Astro Content Collections 的完整指南與範例
description: 這篇全面指南涵蓋了 Astro 中 Markdown 檔案頭部 (Frontmatter) 所有可能的欄位及其用途。
slug: complete-guide-to-astro-frontmatter # 自定義 URL 路徑，例如： /posts/complete-guide-to-astro-frontmatter

# ====================================
# 日期與時間 (Dates & Times)
# ====================================
pubDatetime: 2025-11-02T15:00:00+08:00   # 發佈日期 (使用 ISO 8601 格式，含時區)
modDatetime: 2025-11-02T15:00:00+08:00   # 最後修改日期 (可選，但建議保留)

# ====================================
# 作者與分類 (Author & Taxonomy)
# ====================================
author: 您的名字或筆名
tags:
  - astro
  - markdown
  - frontmatter
  - tutorial                   # 標籤列表 (用於分類與篩選)
category: Development          # 主要分類 (如果您的專案有單一分類)

# ====================================
# 媒體與 SEO (Media & SEO)
# ====================================
heroImage: /assets/images/header-banner.jpg # 文章頂部的特色圖片
alt: 描述特色圖片的內容 (用於無障礙性)
canonicalURL: https://yourdomain.com/posts/complete-guide-to-astro-frontmatter # 文章的標準連結 (如果內容從其他網站複製，建議提供)

# ====================================
# 文章狀態與特殊設定 (Status & Settings)
# ====================================
draft: false                   # 如果為 true，則文章在生產環境中不會被建構
featured: true                 # 是否在首頁或精選區塊顯示
lang: zh-TW                    # 文章語言

# ====================================
# Open Graph (社群媒體預覽) - 可選，但推薦
# ====================================
ogImage: /assets/images/social-preview.jpg # 專為社群媒體分享優化的圖片 (通常與 heroImage 不同)
ogTitle: [自定義社群標題]
ogDescription: [自定義社群描述]

# ====================================
# 自定義數據 (Custom Data)
# ====================================
readingTime: 12                # 預計閱讀時間 (分鐘)
version: 1.0.0                 # 版本號 (如果文章會頻繁更新)

# 複雜結構 (使用 YAML 映射/Map)
metaData:
  type: blog-post
  series: Astro-Mastery
  order: 5
---

# 您的文章內容從這裡開始

使用 Markdown 語法撰寫文章內文。

## 章節標題 1

...

### 子標題

...
