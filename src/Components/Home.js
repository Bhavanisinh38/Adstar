import Categories from './Sections/Categories';
import Recentreviews from './Sections/Recentreviews';
import Videosection from './Sections/Videosection';
import Gifts from './Sections/Gifts';
// import Howitwork from './Sections/Howitwork';
// import Isadstart from './Sections/Isadstart';
import Listitem from './Sections/Listitem';

function Home() {

    return (
      <>
        <Categories extraClass="big-heading" pagetitle="Personalized videos from your favorite stars"/>
        <Listitem pagetitle="Top Star" />
        <Listitem pagetitle="Favourite Star" />
        <Gifts/>
        <Videosection pagetitle="Recent Reels" />
        <Categories pagetitle="Categories" />
        <Listitem pagetitle="Your City Star" />
        <Videosection pagetitle="Top Business Reels" />
        <Recentreviews pagetitle="Recent reviews"/>
        <Listitem pagetitle="Recent Star" />
      </>
    );
  }
  
export default Home;
  