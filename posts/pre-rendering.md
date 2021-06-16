---
title: 'Two Forms of Pre-rendering'
date: '2030-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

넥스트는 **SSG**, **SSR** 2개의 프리렌더링 방식을 취합니다.
차이점은 페이지에 대한 HTML 파일을 **언제** 생성하냐입니다.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.

한마디로 처음 페이지에 들어갔을 때 HTML 생성해두고 요청할 때마다 재사용 하는 방식

- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

한마디로 요청할 때마다 HTML을 생성해주는 방식

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

서버사이드 렌더링 방식을 사용하고 싶다면

```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

이 틀을 사용하면 됩니다.
클라이언트 사이드 렌더링 방식을 사용하고 싶다면

**공홈보세요.**

SEO가 필요없는 Mypage같은 페이지에 적합한 것 같습니다.
