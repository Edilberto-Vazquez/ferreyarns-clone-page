import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import CircularProcItem from "../components/CircularProcItem";
import videoProcess from "../assets/videos/video-process.mp4";
import circP1 from "../assets/icons/circular_procces/icon-01.svg";
import circP2 from "../assets/icons/circular_procces/icon-02.svg";
import circP3 from "../assets/icons/circular_procces/icon-03.svg";
import circP4 from "../assets/icons/circular_procces/icon-04.svg";
import circP5 from "../assets/icons/circular_procces/icon-05.svg";
import process1 from "../assets/images/circular_process/circular-process-1.jpg";
import process2 from "../assets/images/circular_process/circular-process-2.jpg";
import process3 from "../assets/images/circular_process/circular-process-3.jpg";
import process4 from "../assets/images/circular_process/circular-process-4.jpg";
import process5 from "../assets/images/circular_process/circular-process-5.jpg";
import process6 from "../assets/images/circular_process/circular-process-6.jpg";
import process7 from "../assets/images/circular_process/circular-process-7.jpg";
import process8 from "../assets/images/circular_process/circular-process-8.jpg";
import "./styles/CircularProcess.css";

const CircularProcess = () => {
  return (
    <>
      <Header />
      <main className="circular-process">
        <FeatureSection
          title="From waste to yarn. A circular process."
          subTitle="Ferre / Sustainability / Circular process"
          video={videoProcess}
          yAxis="top"
        >
          <p>
            After more than seven decades supplying recycled yarns to the
            fashion industry, circularity is in our DNA. Recycled raw material,
            zero chemicals, zero water and minimal CO2 emissions. Circular
            business models have always fueled our resource- and
            energy-efficient yarn manufacturing process and helped us minimize
            our impact.
          </p>
        </FeatureSection>
        <div className="circular-process-items">
          <CircularProcItem
            title="Textile waste is our raw material"
            titleNum={circP1}
            description="We use pre- and post-consumer textile waste as a source of raw material. By doing so, we prevent textile waste from going to landfill or incineration and are less dependent on virgin and finite raw materials."
            imgs={[process1, process2]}
          ></CircularProcItem>

          <CircularProcItem
            title="Cotton Fiber Recycling"
            titleNum={circP2}
            description="Recover™, our strategic partner in the sustainable supply chain, turns textile waste into new recycled cotton fiber, ensuring the best quality and maximum fiber length. According to the Higg MSI Index, Recover™ makes the lowest-impact recycled cotton fiber in the world market."
            imgs={[process3]}
          ></CircularProcItem>

          <CircularProcItem
            title="Developing low-impact blends"
            titleNum={circP3}
            description="The Recover™ ColorBlend System blends Recover™ undyed recycled cotton fiber with other support fibers that have been low-impact dyed (recycled PET, recycled wool, recycled nylon, organic cotton, …), to create new fibers with accurate and unique colors without using water or chemicals."
            imgs={[process4, process5]}
          ></CircularProcItem>

          <CircularProcItem
            title="The blends"
            titleNum={circP4}
            description="The low-impact fibers blend is reproduced on an industrial scale and subsequently subjected to various intimate blending processes in the blending boxes until achieving the perfect combination of performance and color matching accuracy."
            imgs={[process6, process7]}
          ></CircularProcItem>

          <CircularProcItem
            title="Spinning"
            titleNum={circP5}
            description="The recycled fiber blends are spun into low-impact premium yarns for all types of fashion, accessory and home textile products, in a full spectrum of accurate and unique colors."
            imgs={[process8]}
          ></CircularProcItem>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CircularProcess;
