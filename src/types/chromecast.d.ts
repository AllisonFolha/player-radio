declare global {
    interface Window {
      chrome?: {
        cast?: {
          framework?: {
            CastContext: {
              getInstance(): CastContext;
            };
          };
          media?: {
            DEFAULT_MEDIA_RECEIVER_APP_ID: string;
            MediaInfo: new (src: string, contentType: string) => MediaInfo;
            LoadRequest: new (mediaInfo: MediaInfo) => LoadRequest;
          };
        };
      };
      cast?: {
        framework?: {
          CastContext: {
            getInstance(): CastContext;
          };
        };
      };
    }
  
    interface MediaInfo {
      contentId: string;
      contentType: string;
    }
  
    interface LoadRequest {
      media: MediaInfo;
    }
  
    interface CastContext {
      setOptions(options: { receiverApplicationId: string }): void;
      getCurrentSession(): CastSession | null;
    }
  
    interface CastSession {
      loadMedia(request: LoadRequest): Promise<void>;
    }
  }
  
  export {};
  