declare module "audio.js" {
    type AudiojsOptions = Record<string, unknown>;
  
    interface AudiojsPlayer {
      destroy: () => void; // Method to destroy the player
    }
  
    interface Audiojs {
      create: (element: HTMLAudioElement, options?: AudiojsOptions) => AudiojsPlayer;
      createAll: (options?: AudiojsOptions, elements?: NodeListOf<HTMLAudioElement>) => void;
    }
  
    const audiojs: Audiojs;
    export default audiojs;
  }
  