import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

// getStaticProps는 빌드 타임 때 데이터를 같이 보내줍니다. 빌드된 후에는 변경이 불가능합니다.
// 무조건 server-side에서만 작동합니다.
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	// 1. Props객체의 allPostsData를 리턴함으로써, 포스트들이 Home 컴포넌트의 props로 전해집니다.
	return {
		props: {
			allPostsData,
		},
	};
	/*
  API endpoint로 데이터를 가져올 수 있습니다.
  const res = await axios.get(...)
  const data = res.data
  return data.map(post => {
    return {
      params: {
        id: post.id
      }
    }
  })
  */
}
// 2. 이제 Home에서 접근이 가능합니다.
export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Bonjour, Je suis Jun, Développeur Front-End</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>
					착한 준필님이 이해하기 쉽게 번역해놓은 블로그
				</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
