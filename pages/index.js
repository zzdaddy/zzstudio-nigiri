import { getAllPosts } from '../lib/api.js';
import Blog_list from '../components/blog_list/Blog_list.js';
import Profile from '../components/profile/Profile.js';
import Head from 'next/head.js'

export default function Home({ allPosts, theme, config }) {
  return (
    <>
     <Head>
     <script defer src="https://cloud.umami.is/script.js" data-website-id="ec5537b7-7698-4b5b-87a1-a5fa41855086"></script>                      
     </Head>
    <div className="fade-in">
      <Profile config={config} />
      <Blog_list allPosts={allPosts} theme={theme} config={config} />
    </div>
    </>
    
  );
}
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
