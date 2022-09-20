import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'
import { getSortedBlogData } from '../lib/blogs';
import Date from '../components/date';
import Head from 'next/head'

export async function getStaticProps() {
  const allBlogData = getSortedBlogData();
  return {
    props: {
      allBlogData,
    },
  };
}

export default function Projects({allBlogData}) {
  let blog_list = [];
  allBlogData.map((post, index) => {
    if (index == 0) {
      blog_list.push(
        <Link key={post.id}  href = {`/blog/${post.id}`}>
          <a className='h-fit w-full border border-b-stone-500/30 border-t-transparent border-x-transparent relative transition ease-in-out hover:scale-105 hover:z-10' >
          <div className='h-full text-m lg:text-sm tracking-tighter'>
              <p className='text-left font-bold'>&#x2022; {post.title}</p>
              <p className='text-left'>&nbsp;&nbsp;<Date dateString={post.date}>{post.date}</Date></p>
            </div>
          </a>
        </Link>
      )
    } else if (index == allBlogData.length-1) {
      blog_list.push(
        <Link key={post.id}  href = {`/blog/${post.id}`}>
          <a className='h-fit w-full border border-t-stone-500/30 border-b-transparent border-x-transparent relative transition ease-in-out hover:scale-105 hover:z-10' >
          <div className='h-full text-m lg:text-sm tracking-tighter'>
              <p className='text-left font-bold'>&#x2022; {post.title}</p>
              <p className='text-left'>&nbsp;&nbsp;<Date dateString={post.date}>{post.date}</Date></p>
            </div>
          </a>
        </Link>
      )
    } else {
      blog_list.push(
        <Link key={post.id}  href = {`/blog/${post.id}`}>
          <a className='h-fit w-full border border-y-stone-500/30 border-x-transparent relative transition ease-in-out hover:scale-105 hover:z-10' >
          <div className='h-full text-m lg:text-sm tracking-tighter'>
              <p className='text-left font-bold'>&#x2022; {post.title}</p>
              <p className='text-left'>&nbsp;&nbsp;<Date dateString={post.date}>{post.date}</Date></p>
            </div>
          </a>
        </Link>
      )
    }
  });

  return (
    <Layout>
      <Head>
        <title>Cabbage's Blogposts</title>
      </Head>
      <div className='h-full bg-slate-100 flex flex-col'>
        <div className='sticky top-0 bg-slate-200'>
          <h1 className='pl-3 text-s lg:text-xl font-bold'>Blog</h1>
          <p className='pl-3 text-xs lg:text-l'>My ramblings/blogposts</p>
        </div>
        <div className='flex flex-col overflow-auto pb-4 px-9 max-h-full'>
          {blog_list}
        </div>
      </div>
    </Layout>
    )
}
