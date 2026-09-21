from __future__ import annotations


def luminance(hex_value: str) -> float:
    channels = [int(hex_value[i : i + 2], 16) / 255 for i in (1, 3, 5)]
    linear = [channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4 for channel in channels]
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2]


def ratio(foreground: str, background: str) -> float:
    light, dark = sorted((luminance(foreground), luminance(background)), reverse=True)
    return (light + 0.05) / (dark + 0.05)


pairs = {
    "Body text on cream section bg": ("#28302d", "#f3ede3"),
    "Body text on white card": ("#2d3333", "#fbf8f3"),
    "Eyebrow on cream section bg": ("#2b3028", "#f3ede3"),
    "Address link on cream section bg": ("#2d3939", "#f3ede3"),
    "Primary button light text (cream-on-cognac)": ("#f5f4ee", "#7a4e2e"),
    "Footer body on deep forest panel": ("#bac9c6", "#31402e"),
    "Hero body on dark image overlay": ("#edf5f0", "#465946"),
    "Appointment banner white body on cognac": ("#ffffff", "#70482d"),
    "Main body/heading text on cream": ("#3f4d42", "#f3ede3"),
    "Muted/secondary text on cream": ("#5f695f", "#f3ede3"),
    "Cognac focus ring on cream": ("#7a4e2e", "#f3ede3"),
    "Dark text on soft-gold badge": ("#3f4d42", "#e6c681"),
    "Star-rating gold on cognac card": ("#ead0a0", "#7a4e2e"),
}

for label, (foreground, background) in pairs.items():
    value = ratio(foreground, background)
    status = "PASS" if value >= 4.5 else "FAIL"
    print(f"{label}: {value:.2f}:1 — {status}")
