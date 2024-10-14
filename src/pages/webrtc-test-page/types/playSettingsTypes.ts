export interface PlaySettingsState {
    signalingURL: string,
    applicationName: string,
    streamName: string,
    playStart: boolean,
    playStarting: boolean,
    playStop: boolean,
    playStopping: boolean
};

export interface PlayFlags {
    playStart?: boolean | null,
    playStarting?: boolean | null,
    playStop?: boolean | null,
    playStopping?: boolean | null
};

export interface WebRtcPlayerProps {
    signalingURL: string,
    applicationName: string,
    streamName: string,
    secureTokenHash: string,
    secureTokenStartTime: number,
    secureTokenEndTime: number
};