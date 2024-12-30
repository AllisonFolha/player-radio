// import RadioPlayerShaka from "@/components/RadioPlayerShaka";
// import RadioPlayerHtml from "@/components/RadioPlayerHtml";
// import HLSPlayer from "@/components/HLSPlayer";
// import ClapprPlayer from "@/components/ClapprPlayer";
// import DashPlayer from "@/components/DashPlayer";
// import PlyrRadioPlayer from "@/components/PlyrRadioPlayer";
// import VideoJSRadioPlayer from "@/components/VideoJSRadioPlayer";
// import SimpleRadioPlayer from "@/components/SimpleRadioPlayer";
// import FFmpegPlayer from "@/components/FFmpegPlayer";
// import AudioJSPlayer from "@/components/AudioJSPlayer";
import ShakaAudioPlayer from "@/components/ShakaAudioPlayer";




export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Players de Rádio</h1>
      <div style={{ margin: "20px 0" }}>
        {/* Comente ou descomente os players para testar */}
        <ShakaAudioPlayer src="https://stream.radioparadise.com/aac-320" />       
        {/* <RadioPlayerHtml /> */}
        {/* <HLSPlayer /> */}
        {/* <ClapprPlayer /> */}
        {/* <DashPlayer /> */}
        {/* <PlyrRadioPlayer /> */}     
        {/* <VideoJSRadioPlayer /> */}
        {/* <SimpleRadioPlayer /> */}
        {/* <FFmpegPlayer /> */}
        {/* <AudioJSPlayer /> */}
      </div>
    </main>
  );
}
