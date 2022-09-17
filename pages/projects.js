import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'
import { getSortedProjectsData } from '../lib/projects';
import Date from '../components/date';
import Head from 'next/head'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Projects({allProjectsData}) {
  let project_list = [];
  allProjectsData.map((post, index) => {
    project_list.push(
      <Link key={index}  href = {`/projects/${post.id}`}>
        <a className='m-2 h-1/3 w-1/3 lg:h-1/2 lg:w-1/4 border border-black relative drop-shadow-lg transition ease-in-out hover:scale-105 hover:z-10' >
          <div className='relative h-2/3 w-full self-start'>
            <Image 
              src = {post.image}
              layout = 'fill'
            />
          </div>
          <div className='h-1/3 text-xs lg:text-sm tracking-tighter'>
            <p className='text-left font-bold'>{post.title}</p>
            <Date dateString={post.date} className='text-left'>{post.date}</Date>
          </div>
        </a>
      </Link>
    )
  });

  if (project_list.length % 3 !=0) {
    for (let i=0; i<= (3 - project_list.length % 3); i++) {
      project_list.push(
        <button key={i} className='m-2 h-1/3 w-1/3 lg:h-1/2 lg:w-1/4 invisible'>
        </button>)
    }
  };

  return (
    <Layout>
      <Head>
        <title>Cabbage's Projects</title>
      </Head>
      <div className='h-full bg-slate-100 flex flex-col'>
        <div className='sticky top-0'>
          <h1 className='pl-3 pt-3 text-s lg:text-xl font-bold'>Projects</h1>
          <p className='pl-3 text-xs lg:text-l'>List of my current and past projects</p>
        </div>
        <div className='flex flex-wrap justify-center grow overflow-auto pb-4'>
          {project_list} 
        </div>
      </div>
    </Layout>  
  )
}


