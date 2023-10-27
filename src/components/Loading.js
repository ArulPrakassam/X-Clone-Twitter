import "../styles/basic.css";
import "../styles/Components/loading.css";

const Loading = () => {
  return (
    <div className="preloader-container">
      <div className="preloader"></div>
    </div>
  );
};

const SectionLoading = () => {
  return (
    <section className="section-container section-loading">
      <Loading />
    </section>
  );
};

export default Loading;
export { SectionLoading };
