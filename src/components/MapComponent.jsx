import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import locations from "../Date/locationsData.json"; // 导入 JSON 文件

const MapComponent = () => {
  const [map, setMap] = useState(null); // 地图实例
  const markersRef = useRef([]); // 保存所有标记的引用

  const mapContainerStyle = {
    width: "90%", // 地图宽度
    height: "400px", // 地图高度
  };

  const center = {
    lat: 35.3182, // 镰仓站纬度
    lng: 139.5503, // 镰仓站经度
  };

  useEffect(() => {
    if (!map) return;

    // 创建并添加 AdvancedMarkerElement 标记
    locations.forEach((location, index) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat: location.latitude, lng: location.longitude },
        title: location.name, // 显示标记标题
      });

      // 将标记保存到引用数组中（如果需要管理标记可以用到）
      markersRef.current[index] = marker;
    });

    // 清理标记
    return () => {
      markersRef.current.forEach((marker) => {
        if (marker) {
          marker.map = null;
        }
      });
    };
  }, [map]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBdzWJWEF-U4y8rll3Cvh1Db1zFHwXkHlU"
      libraries={["marker"]} // 加载 marker 库
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        onLoad={(mapInstance) => setMap(mapInstance)} // 获取地图实例
      />
    </LoadScript>
  );
};

export default MapComponent;