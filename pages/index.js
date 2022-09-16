import Image from 'next/image'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/blog';

export default function Home({allPostsData}) {
  return (
    <Layout>
      <h1 className='grow'>HI THIS IS MY BLOG. PLEASE SEND ME MONEY</h1>
      <ul>
          {allPostsData.map(({ id, date, title, image }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              <Image src = {image} layout='fill'/>
            </li>
          ))}
      </ul>
    </Layout>  
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
