nextjs에서 타입스크립트를 쓸려면

touch tsconfig.json 명령어를 입력 후 파일을 루트폴더에 만들어줍니다.
npm install --save-dev typescript @types/react @types/node 을 입력해 타입스크립트를 적용시킵니다.

타입스크립트에서 getStaticProps, getStaticPaths, getServerSideProps의 사용법이 약간 다릅니다.

```
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}
```
