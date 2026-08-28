import { lazy, useRef } from "react";

const TAP_WINDOW_MS = 600;
const REQUIRED_TAPS = 3;

export function useTripleTap(onTripleTap) {
    const tapCount = useRef(0);
    const lastTap = useRef(0);

    return () => {
        const now = Date.now();
        if (now - lastTap.current > TAP_WINDOW_MS) {
            tapCount.current = 0;
        }
        tapCount.current += 1;
        lastTap.current = now;

        if (tapCount.current >= REQUIRED_TAPS) {
            tapCount.current = 0;
            onTripleTap();
        }
    }
};