from __future__ import annotations


def luminance(hex_value: str) -> float:
    channels = [int(hex_value[i : i + 2], 16) / 255 for i in (1, 3, 5)]
    linear = [channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4 for channel in channels]
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2]


def ratio(foreground: str, background: str) -> float:
    light, dark = sorted((luminance(foreground), luminance(background)), reverse=True)
    return (light + 0.05) / (dark + 0.05)


pairs = {
    "Body text on light cyan": ("#264643", "#e7f8f6"),
    "Body text on white": ("#264643", "#ffffff"),
    "Eyebrow on light cyan": ("#0d4b4e", "#e7f8f6"),
    "Address link on light cyan": ("#1a4d52", "#eaf8f6"),
    "Primary button dark text": ("#063d40", "#00b5b8"),
    "Review card dark text": ("#063d40", "#00b5b8"),
    "Bright service panel dark text": ("#063d40", "#00b5b8"),
    "Footer body on deep teal": ("#c9dfda", "#204e58"),
    "Hero body on dark image overlay": ("#edf5f0", "#2b636e"),
    "Appointment white body on deep teal": ("#ffffff", "#087f89"),
}

for label, (foreground, background) in pairs.items():
    value = ratio(foreground, background)
    status = "PASS AA normal text" if value >= 4.5 else "FAIL AA normal text"
    print(f"{label}: {value:.2f}:1 — {status}")
