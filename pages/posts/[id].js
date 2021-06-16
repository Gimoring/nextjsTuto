import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	//  id값에 따라 페이지 지정을 해줍니다.
	//  fallback으로 다른 라우트는 404가 뜨게 설정할 수 있습니다.
	//  만약 true라면
	//  1. getStaticPaths에서 리턴된 paths가 HTML에 렌더됩니다.
	//  2. paths가 빌드타임에 생성되지 않은 것(없는 id)도 404에러가 안나옵니다.
	//  3. nextjs가 존재하지 않는 페이지가 있어도 요청한 paths에 페이지 만드는 헛짓거리를 합니다.

	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	//  id값에 따라 포스트데이터를 받아오고 props로 전해줍니다.
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

/*
* Page Path Depends on External Data (Dynamic Routes)
외부 데이터에 기반한 페이지의 path의 케이스. ( pre-render 할 동적 라우팅)
export async function getStaticPaths() {
  // return a list of possible value for id
}
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
*/
