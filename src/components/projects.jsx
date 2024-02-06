import responsive from "../img/responsive.png";
import seo from "../img/SEO.png";
import deploy from "../img/deploy.png";
import ai from "../img/AI.png";
import api from "../img/API.png";
import backend from "../img/backend.png";

function Projects() {
  return (
    <div id="#work" className="container max-w-screen-xl mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 h-20 py-1 px-1 flex justify-center bg-gray-100 rounded-md mb-4 ">
            <img src={responsive} alt="responsive svg" />
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">
            Responsywność
          </h4>
          <p className="font-normal text-gray-500 text-md">
            Dbam o responsywność strony na trzech różnych szerokościach ekranu:
            telefonu, tabletu i ekranu monitora komputera. Dzięki temu, strona
            wyświetla się optymalnie i zachowuje swój układ oraz funkcjonalność
            niezależnie od urządzenia, na którym jest przeglądana.
          </p>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 h-20 py-1 px-1 flex justify-center bg-gray-100 rounded-md mb-4">
            <img src={seo} alt="responsive svg" />
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">SEO</h4>
          <p className="font-normal text-gray-500 text-md">
            Optymalizacja SEO: Podczas tworzenia strony internetowej kładę
            nacisk na optymalizację pod kątem wyszukiwarek (SEO). Dzięki temu
            strona może osiągnąć wyższą widoczność w wynikach wyszukiwania, co
            przekłada się na większy ruch organiczny i lepszą pozycję w
            rankingach.
          </p>
        </div>
        <div className="bg-gray-50 px-8 py-10 rounded-md">
          <div className="w-20 h-20 py-1 px-1 flex justify-center bg-gray-100 rounded-md mb-4">
            <img src={deploy} alt="responsive svg" />
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">Wdrażanie</h4>
          <p className="font-normal text-gray-500 text-md">
            Zajmuję się również wdrażaniem stron internetowych na serwer. Dzięki
            mojej pomocy strona może być skutecznie uruchomiona i udostępniona
            online, zapewniając klientom łatwy dostęp do jej treści i funkcji.
          </p>
        </div>
        <div className="bg-gray-50 px-8 py-10 rounded-md grid ">
          <div className="w-20 h-20 py-1 px-1 flex justify-center bg-gray-100 rounded-md mb-4">
            <img src={api} alt="responsive svg" />
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">API</h4>
          <p className="font-normal text-gray-500 text-md">
            Tworzę także interfejsy programistyczne aplikacji (API), ułatwiając
            klientom integrację różnych systemów i usług online. Moje
            rozwiązania zapewniają płynną wymianę danych, umożliwiając efektywną
            komunikację między aplikacjami.
          </p>
        </div>
        <div className="bg-gray-50 px-8 py-10 rounded-md grid ">
          <div className="w-20 h-20 py-1 px-1 flex justify-center bg-gray-100 rounded-md mb-4">
            <img src={backend} alt="responsive svg" />
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">Backend</h4>
          <p className="font-normal text-gray-500 text-md">
            Dzięki podstawowej znajomości pracy serwera (Backend) mam szerszy
            pogląd na pracę całej aplikacji. Posiadam wiedzę potrzebną do
            budowania funkcjonalności serwerowych, co umożliwia mi rozwijanie
            bardziej zaawansowanych aplikacji internetowych.
          </p>
        </div>
        <div className="bg-gray-50 px-8 py-10 rounded-md grid ">
          <div className="w-20 h-20 py-1 px-1 flex justify-center bg-gray-100 rounded-md mb-4">
            <img src={ai} alt="responsive svg" />
          </div>
          <h4 className="font-medium text-gray-700 text-lg mb-4">AI</h4>
          <p className="font-normal text-gray-500 text-md">
            Dzięki znajomości narzędzi sztucznej inteligencji (AI), zwiększam
            swoją produktywność oraz efektywność w codziennej pracy. Te
            technologie wspierają mnie w różnych zadaniach, co przekłada się na
            lepsze rezultaty i skuteczność w realizacji projektów.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
