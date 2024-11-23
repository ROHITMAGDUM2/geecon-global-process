import Process from "./components/Process";
import WorkingWithUs from "./components/WorkingWithUs";
import PrototypingSpecificationWriting from "./components/PrototypingSpecificationWriting";
import RapidApplicationDevelopment from "./components/RapidApplicationDevelopment";
import AgileSoftDevMethodology from "./components/AgileSoftDevMethodology";

function App() {
  return (
    <>
      <div className="text-center bg-gray-100 min-h-screen flex flex-col items-center font-sans text-white text-[calc(10px+2vmin)]">
        {/* <Process /> */}
        {/* <WorkingWithUs /> */}
        {/* <PrototypingSpecificationWriting /> */}
        {/* <RapidApplicationDevelopment /> */}
        <AgileSoftDevMethodology />
      </div>
    </>
  );
}

export default App;
