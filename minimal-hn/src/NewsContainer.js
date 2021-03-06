import NewsCard from './NewsCard';

function NewsContainer() {
  return (
    <div id="newsContainer">
      <NewsCard title="Rust is better than C" link="https//google.com" comments={[1,2,3]}/>
    </div>
  );
}

export default NewsContainer;
