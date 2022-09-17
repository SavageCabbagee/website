import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/projects';
import Date from '../../components/date';
import Head from 'next/head'
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function ProjectPost({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='flex flex-col'>
        <h1 className='text-2xl font-bold'>{postData.title}</h1>
        <div>
          <Date className='text-xs' dateString={postData.date} />
        </div>
        <div className='p-2 justify-self-center' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Link href = '/projects'>
          <a className='w-fit'>
            <p className='m-2 underline underline-offset-1 hover:underline-offset-2'>&larr;Back to Projects</p>
          </a>
        </Link>
      </article>

      
    </Layout>);
}


