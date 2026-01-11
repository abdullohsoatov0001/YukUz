import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import HeaderBtn from "../Childrens/HeaderBtn";
import { Cuboid, Truck } from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";
import { useTranslation } from "react-i18next";

const MAPTILER_KEY = "rf1gXMhGBAjtNceCNzpk";

const locations: [number, number][] = [
    [69.2401, 41.2995], // бу озбекситон, тошкент
    [2.3522, 48.8566],  // бу франция, париж
    [-0.1276, 51.5074], // бу лондон, великобритания
    [139.6917, 35.6895] // бу токио, япония
];

const Map = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState("load");
    const { t } = useTranslation()

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/bright/style.json?key=${MAPTILER_KEY}`,
            center: [0, 20], // 
            zoom: 1.5,
            attributionControl: false,
        });

        map.on("load", () => {
            map.getStyle().layers?.forEach(layer => {
                if (!layer) return;


                if (layer.type === "fill" && (layer.id.includes("water") || layer.id.includes("landuse"))) {
                    map.setPaintProperty(layer.id, "fill-color", "#ffffff");
                }

                if (
                    layer.type === "line" ||
                    (layer.type === "fill" && !layer.id.includes("water"))
                ) {
                    const colorProperty = layer.type === "line" ? "line-color" : "fill-color";
                    map.setPaintProperty(layer.id, colorProperty, "#2563eb");

                }
            });

            const bounds = new maplibregl.LngLatBounds();
            locations.forEach(([lng, lat]) => {
                new maplibregl.Marker({ color: "#2563eb" })
                    .setLngLat([lng, lat])
                    .addTo(map);
                bounds.extend([lng, lat]);
            });

            map.fitBounds(bounds, { padding: 50 });
        });

        return () => map.remove();
    }, []);

    return (
        <section className="bg-white/90 max-w-280 m-auto max-md:px-2">
            <h3 className="text-[32px] text-center font-bold mt-20">
                {t('sectionMap.find_on_map')}
            </h3>
            <div className="justify-center m-auto mt-10 flex gap-6 max-md:mt-4">
                <div onClick={() => setOpen(open === "load" ? "" : "load")}>
                    <HeaderBtn
                        text={t("header.loads")}
                        className={
                            open === "load"
                                ? "bg-black/50 text-white"
                                : "bg-white text-black shadow"
                        }
                        img={<Cuboid />}
                    />
                </div>
                <div onClick={() => setOpen(open === "transport" ? "" : "transport")}>
                    <HeaderBtn
                        className={
                            open === "transport"
                                ? "bg-black/50 text-white"
                                : "bg-white text-black shadow"
                        }
                        text={t("header.transports")}
                        img={<Truck />}
                    />
                </div>
            </div>
            <div ref={mapContainer}
                className="w-full max-md:h-60 m-auto h-155 mt-20 rounded-2xl"
            />
        </section>
    );
};

export default Map;
