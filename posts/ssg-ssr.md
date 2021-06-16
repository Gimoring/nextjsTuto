---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2030-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

가급적 **SSG**를 사용하는 것을 권장합니다.
모든 요청에 대해 서버가 페이지를 렌더하는 것 보다 CDN에 의해 캐싱 처리를 해주는 것이 빠르기 때문입니다.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

유저가 요청하기 **전에** 페이지를 미리 렌더해야한다면 **SSG** 방식이 좋습니다.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

만약 페이지가 데이터를 자주 업데이트하거나 요청마다 컨텐츠가 바뀔 경우 **SSG는 좋은 방식이 아닙니다.**

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

이럴 경우에는, **SSR** 방식을 사용할 수 있습니다. 느리지만 미리렌더된 페이지는 항상 최신화 되어있을 것입니다.
아니면 프리렌더링을 스킵하고 CSR 방식을 취할 수 있습니다.
