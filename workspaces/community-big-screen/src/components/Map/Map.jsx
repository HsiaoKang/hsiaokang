// Public health facilities in sub Saharan Africa

// Data: https://springernature.figshare.com/articles/Public_health_facilities_in_sub_Saharan_Africa/7725374/1

import { Scene, PointLayer, GaodeMapV2, PolygonLayer, CityBuildingLayer, BaseLayer } from "@antv/l7"
import { GaodeMap, Mapbox } from "@antv/l7-maps"
import { useEffect } from "react"
import { aMapKey } from "../../config"

const Map = () => {
    const createScene = () => {
        const mapElement = document.createElement("div")
        mapElement.id = "map"
        const wrapper = document.getElementById("map-wrapper")
        wrapper.appendChild(mapElement)

        const scene = new Scene({
            id: "map",
            map: new GaodeMap({
                // style: "dark",
                // center: [104.05941009521484, 30.554241726691032],
                center: [120, 30],
                // 试用 key 时 style 失效
                // token: aMapKey,
                pitch: 45,
                zoom: 15.4,
                // minZoom: 15,
                // maxZoom: 18,
            }),
        })

        const layer = new PointLayer({})
            .source(
                [
                    {
                        lng: 120,
                        lat: 30,
                        v:20
                    },
                    {
                        lng: 110,
                        lat: 30,
                        v:10
                    }
                ],
                {
                    parser: {
                        type: "json",
                        x: "lng",
                        y: "lat",
                    },
                }
            )
            .size('v',v=>[v,10,100])
            .shape("cylinder")
            .color("#f00 ")
            .style({
                heightfixed:true
            })

        const buildingLayer = new CityBuildingLayer()
        buildingLayer.animate(false)

        let i = 0
        function step() {
            buildingLayer.setLight(i++)
            scene.render()
            requestAnimationFrame(step)
        }

        // scene.on("loaded", () => {
        //     step()
        // })

        scene.on("loaded", () => {
            scene.addLayer(layer)

            // fetch("https://gw.alipayobjects.com/os/rmsportal/ggFwDClGjjvpSMBIrcEx.json")
            //     .then((res) => res.json())
            //     .then((data) => {
            //         const layer = new CityBuildingLayer({
            //             zIndex: 0,
            //         })
            //         layer.source(data)
            //         scene.addLayer(layer)
            //     })
        })
        // scene.on("loaded", () => {
        //     fetch(
        //         "https://gw.alipayobjects.com/os/basement_prod/972566c5-a2b9-4a7e-8da1-bae9d0eb0117.json"
        //     )
        //         .then((res) => res.json())
        //         .then((data) => {
        //             const layer = new PolygonLayer({})
        //                 .source(data)
        //                 .shape("extrude")
        //                 .size("h20", [100, 120, 160, 200, 260, 500])
        //                 .color("h20", [
        //                     "#816CAD",
        //                     "#A67FB5",
        //                     "#C997C7",
        //                     "#DEB8D4",
        //                     "#F5D4E6",
        //                     "#FAE4F1",
        //                     "#FFF3FC",
        //                 ])
        //                 .style({
        //                     opacity: 1.0,
        //                 })
        //             scene.addLayer(layer)
        //         })
        // })
    }

    useEffect(() => {
        createScene()
    }, [])
    return <div id="map-wrapper"></div>
}

export default Map
