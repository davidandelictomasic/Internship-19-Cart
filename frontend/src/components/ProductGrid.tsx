import zutePatike from "../assets/products/state=ŽutePatike.png";
import crniSweater from "../assets/products/state=CrniSweater.png";
import sivaHoodica from "../assets/products/state=SivaHoodica.png";
import crnaKosulja from "../assets/products/state=CrnaKošulja.png";
import spidermanMajica from "../assets/products/state=SpidermanMajica.png";
import sivaTuta from "../assets/products/state=SivaTuta.png";
import plavePatike from "../assets/products/state=PlavePatike.png";

function ProductGrid() {
  return (
    <div className="px-4 mt-3">
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-3">
          <div
            className="rounded-lg overflow-hidden flex flex-col"
            style={{ border: "1px solid rgba(192, 138, 91, 1)" }}
          >
            <div className="flex items-center justify-center pt-[28px] gap-[30px] bg-white">
              <img
                src={zutePatike}
                alt="Niske tenisice"
                className="object-contain max-h-[140px] px-2"
              />
            </div>
            <div
              className="px-3 py-2"
              style={{ backgroundColor: "rgba(192, 138, 91, 0.85)" }}
            >
              <p className="text-white text-sm font-medium">Niske tenisice</p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xs">89,90 $</p>
                <span className="text-white text-xs">{">"}</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg overflow-hidden flex flex-col"
            style={{ border: "1px solid rgba(90, 62, 54, 1)" }}
          >
            <div className="flex-1 flex items-center justify-center pt-[28px] gap-[30px] bg-white">
              <img
                src={crnaKosulja}
                alt="Crna košulja"
                className="object-contain max-h-[200px] px-2"
              />
            </div>
            <div
              className="px-3 py-2"
              style={{ backgroundColor: "rgba(90, 62, 54, 0.85)" }}
            >
              <p className="text-white text-sm font-medium">
                Budite spremni za posebne prilike!
              </p>
              <div className="flex justify-end items-center">
                <span className="text-white text-xs">{">"}</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg overflow-hidden flex flex-col"
            style={{
              border: "1px solid rgba(128, 128, 128, 1)",
              height: "409px",
            }}
          >
            <div className="flex-1 flex flex-col items-center justify-between pt-[28px] bg-white">
              <img
                src={plavePatike}
                alt="Plave patike"
                className="object-contain max-h-[140px] px-2"
              />
              <img
                src={sivaTuta}
                alt="Siva tuta"
                className="object-contain max-h-[140px] px-2"
              />
            </div>
            <div
              className="px-3 py-2"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.85)" }}
            >
              <p className="text-white text-sm font-medium">
                Sportski trendovi
              </p>
              <div className="flex justify-end items-center">
                <span className="text-white text-xs">{">"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <div
            className="rounded-lg overflow-hidden flex flex-col"
            style={{
              border: "1px solid rgba(128, 128, 128, 1)",
              height: "409px",
            }}
          >
            <div className="flex-1 flex flex-col items-center justify-between pt-[28px] bg-white">
              <img
                src={crniSweater}
                alt="Crni sweater"
                className="object-contain max-h-[140px] px-2"
              />
              <img
                src={sivaHoodica}
                alt="Siva hoodica"
                className="object-contain max-h-[140px] px-2"
              />
            </div>
            <div
              className="px-3 py-2"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.85)" }}
            >
              <p className="text-white text-sm font-medium">
                Istraži našu casual kolekciju!
              </p>
              <div className="flex justify-end items-center">
                <span className="text-white text-xs">{">"}</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg overflow-hidden flex flex-col"
            style={{ border: "1px solid rgba(192, 138, 91, 1)" }}
          >
            <div className="flex items-center justify-center pt-[28px] gap-[30px] bg-white">
              <img
                src={spidermanMajica}
                alt="Spiderman majica"
                className="object-contain max-h-[140px] px-2"
              />
            </div>
            <div
              className="px-3 py-2"
              style={{ backgroundColor: "rgba(192, 138, 91, 0.85)" }}
            >
              <p className="text-white text-sm font-medium">Streetwear</p>
              <div className="flex justify-end items-center">
                <span className="text-white text-xs">{">"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
