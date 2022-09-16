import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/blog';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Projects({allPostsData}) {
  let project_list = [];
  allPostsData.forEach((post) => {
    project_list.push(
      <button className='m-2 h-1/3 w-1/3 lg:h-1/2 lg:w-1/4 border border-black relative drop-shadow-lg transition ease-in-out hover:scale-105 hover:z-10'>
        <div className='relative h-2/3 w-full self-start'>
          <Image 
            src = {post.image}
            layout = 'fill'
          />
        </div>
        <div className='h-1/3 text-xs lg:text-sm overflow-y-scroll tracking-tighter'>
          <p>{post.title}</p>
          <p>{post.date}</p>
        </div>
      </button>
    )
  });

  if (project_list.length % 3 !=0) {
    for (let i=0; i< (3 - project_list.length % 3); i++) {
      project_list.push(
        <button className='m-2 h-1/3 w-1/3 lg:h-1/2 lg:w-1/4 invisible'>
               
        </button>)
    }
  };

  return (
    <Layout>
      <div className='h-full bg-slate-100 flex flex-col'>
        <div className='sticky top-0'>
          <h1 className='pl-3 pt-3 text-s lg:text-xl font-bold'>Projects</h1>
          <p className='pl-3 text-xs lg:text-l'>List of my current and past projects</p>
        </div>
        <div className='flex flex-wrap justify-center grow overflow-auto pb-4'>
          <button className='m-2 h-1/3 w-1/3 lg:h-1/2 lg:w-1/4 border border-black relative drop-shadow-lg transition ease-in-out hover:scale-105 hover:z-10'>
             <div className='relative h-2/3 w-full self-start'>
              <Image 
                  src = '/pfp.jpg'
                  layout = 'fill'
                />
              </div>
              <p className='h-1/3'> test</p>
          </button>
          {project_list} 
          </div>
      </div>
    </Layout>  
  )
}


