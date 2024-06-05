import { Navbar } from "../../components";

const Header = ({ navbarRef }) => {
  return (
    <header
      ref={navbarRef}
      className="py-[0.5rem] flex justify-between items-center "
    >
      <figure className="w-[120px]">
        <a href="/">
          <img src="/logo.png" alt="" />
        </a>
      </figure>
      <Navbar />
      <figure className="flex gap-[0.5rem]">
        <a
          href="https://play.google.com/store/apps/details?id=np.com.easyfruits.www"
          target="_blank"
        >
          <img src="/play_store.png" alt="" className="w-[120px]" />
        </a>
        <a
          href="https://apps.apple.com/us/app/easy-fruits/id6451135079"
          target="_blank"
        >
          <img src="/app_store.png" alt="" className="w-[120px]" />
        </a>
      </figure>
    </header>
  );
};

export { Header };
