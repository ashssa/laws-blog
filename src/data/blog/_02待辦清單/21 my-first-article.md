---
title: SA Law的未來展望 a.k.a. 待辦清單
author: 學生議員潘祈瑋
pubDatetime: 2024-11-02T11:02:41Z
modDatetime:
slug: to-do-list
featured: false
draft: false
tags:
  - 待辦清單
description:
  SA Law的未來展望 a.k.a. 待辦清單
series: 介紹部落格
order: 20
---

> 『如果不拒絕那些不想做的事，就沒有時間與心力去做真正想做的事了。』
> ── 張曼娟

## Table of contents

## 說說話

現行的法律系統仍不臻完美，我還有一系列的改裝目標想要完成，他們現在都乖乖躺在我的的Google Keep內。總有一天，一定會把他們全部實裝的！各位等我！

礙於時間與技術都不足，雖有如此宏大的目標，也很難一蹵而就。但是，我們也可以先階段性地完成這些目標。

例如：

- [ ] 學測模考4科全頂
- [ ] 特殊選才直接入學
- [ ] 英文單字量與考試之間有著無限
- [x] ~~考爆~~

沒事！愈挫愈勇，時候到了，Google Keep內的酷東西總會更新上來，我們學測後見！

## 擴充功能型（大工程!）

1. 網站設計理念介紹（就是這個BLOG！）

   - 使用差異（[`diff`](https://daisyui.com/components/diff/)）來比較新舊網站結構差異
   - 說明條號標示方法（項用羅馬字、款用數字、目用括號） 
   - 條豪旁邊的錨點（`#`）按鈕
   - 半透明的玻璃設計（`header`、回上方按鈕）以及失敗的地方（導覽列選單）
   - ……還有更多！

   以上內容會陸續放上本Blog，上線後可至Blog[設計理念標籤](https://ashssa-law-blog.netlify.app/tags/設計理念/)裡看到！

    <!-- > [SA Law](https://ashssa.github.io/laws/)細節比想想中多吧。細啊！都是細節！ -->

1. 修法沿革時間軸

   像是[這個](https://daisyui.com/components/timeline/)。

1. 法規沿革查詢與對照系統

   像是[立法院法律系統](https://lis.ly.gov.tw/lglawc/lglawkm)。考量技術限制（GitHub Pages），應該就在單一頁面中撈JSON即時渲染就好。

1. 重新設計自治法規架構圖

   現在的真的很陽春（我沒有把他下架喔！只是沒有公開路徑而已，歡迎去看[笑話](https://ashssa.github.io/laws/direction/overview.html)），改好看一點順便加一個「學生會自治法規制定程序圖」（制定程序其實也可以放學生會官網就好）

1. 頁面「內」搜尋功能

   把現在回上方按鈕的位置，調整成以[FAB](https://daisyui.com/components/fab/)構成的二合一（頁面內搜尋＆回上方）按鈕。也想加上其他功能，像是截圖（[LINE內建](https://line-tw-official.weblog.to/archives/10253437.html)）、螢光筆畫記重點等等。

1. 只分享單一一條法規

   參考全國法規資料庫，現在的想法是透過網此參數，將除了顯示法規之外其他所有`div class="row"`加上`hidden`的類名。只是按鈕要放哪裡呢？法條旁邊嗎！

## 技術型（待修正問題）

1. 列印時的版面調整

   如頁首隱藏＋上邊距調整（還是其實不用調？）、~~回上方按鈕隱藏~~（已完成）、調整段落遺落字元等等。

2. 寫一本網站維護手冊

   原本是想說寫[法規系統](https://ashssa.github.io/laws/)的手冊就好了，但現在看來要多寫一份BLOG版本了。

> 嗯，我後來想想，這麼繁瑣的清單，也太無聊了吧！好像也不會有人想看，你們說是吧。

3. 設計新的PWA小工具icon，然後修正路徑

   可是我超沒有美術天分的，怎解啊。

## 設計型

1. 捲動動畫

   - 我想用在法規標題或路徑，捲動都有感覺有點太多（考量議會官網[內嵌iframe頁面](https://sites.google.com/a/stu.nknush.kh.edu.tw/ashs_sp/laws/system)）。
   - 技術：參考[這個](https://developer.chrome.com/blog/new-in-web-ui-io-2024?hl=zh-tw#scroll-driven_animations)。

2. [「為什麼你們就是不能加個空格呢？」](https://github.com/vinta/pangu.js/blob/master/README.md)的js版本

   - 在Android、Windows中，中文與英數字之間的間距，擠到有時候甚至得瞇起眼睛才能看見一個數字1。實在是太醜了。但手動加入空白也時常漏加，導致有些數字有間距但有些沒有。這個JS簡直救了我一命。
   - 但也有不少理由不支持裝上這個，好比Chrome正在測試的`text-autospace`性質（參考[這個Blog](https://developer.chrome.com/blog/css-i18n-features?hl=zh-tw#inter-script_spacing_text-autospace)）、iOS渲染時本來就會增加間距、手動增加空白後搜尋時容易找不到（例如使用瀏覽器內建的字詞查找時）。再觀望看看吧。

> 這也太瑣碎了吧，真的會有人看到這邊嗎？

3. 引入昭源字體TEXT家族

   因為字距比較開，又不會影響到英文間距。技術文件請見[這裡](https://chiron-fonts.github.io/technical-details/source-han-differences/subfamily-and-weights/)。

4. 烤土司通知的動畫有點陽春

   好像也可以再調整顏色調整

5. 手機版字體可以再細一點……？

   靈感來源是參考數發部的官網。而且本站就有實踐！可以拿起手機跟電腦比對看看字體粗細。

6. 聲明改用[「手風琴」](https://daisyui.com/components/accordion/)


## SA Law的未來展望

- **短期目標**：改用靜態網站生成器
- **中期目標**：製作成各校可直接fork走的template reop
- **長期目標**：網站上面現在的那個

> 期許未來，總有一天要把系統升級成『有後端』『可用純前端維護』『各校都能自由運用』的法規系統！

其實這個計劃還有個最最遙遠的目標，可能需要幾年的時間，也可能胎死腹中。因為先說出來實在很害羞，我就先把這個小小的種子放在這裡，不對他太寄予眾望，也不強求說要什麼，但你知我知。數年之後，說不定已長成大樹。