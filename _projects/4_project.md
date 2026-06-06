---
layout: page
title: F1 Telemetry & Race Analysis Tool
description: A config-driven Python notebook for visualising Formula 1 session data — telemetry traces, tyre strategy, lap distributions, weather overlays and more — built on FastF1 and matplotlib
img: assets/img/fastf1/lap_times_2024_Bahrain_R.png
importance: 1
category: fun
giscus_comments: true
---

A personal project born out of wanting to go beyond broadcast graphics and actually dig into the raw session data that FastF1 exposes. Point it at any race, qualifying or practice session, pick your drivers, and a single "main()" call produces up to **10 publication-quality plots**  in a consistent dark (or light) monospace theme. Still a work in progress that I plan to make into a one stop analysis platform with connections to live data. Similar to F1 Multiviewer but more race engineering oriented. Kind of a homemade verison of Racewatch if you will.

```python
SESSION = {"year": 2024, "round": "Bahrain", "session": "R"}
DRIVERS = ["VER", "NOR", "LEC"]
```

That's all the configuration needed to get started.

---

## Architecture

The notebook is structured around a central config block (`SESSION`, `DRIVERS`, `PLOTS`, `ANNOTATIONS`, `STYLE`) that controls everything: which plots are generated, whether telemetry is loaded at all (skipped if unneeded to save time), and whether figures are saved to disk or rendered inline.

A `main()` dispatcher then loads the FastF1 session, fetches per-driver lap data, and calls only the enabled plot functions. Each plot function is self-contained and follows the same pattern: `make_fig()` → build axes → `save_or_show()`.

Key design choices:
- Telemetry is only fetched when at least one telemetry plot is enabled, keeping session load time low for stats-only runs.
- Laps more than 112% of median (safety car, VSC, formation) are stripped automatically before plotting.
- Missing drivers, unavailable telemetry, and missing weather data all produce warnings rather than crashes.
- `TELEMETRY_LAP` can be `None` (fastest lap), `"all"` (every lap overlaid), or a specific lap number.

---

## Plot Gallery

### Lap Time Evolution

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/lap_times_2024_Bahrain_R.png" title="Lap time evolution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Lap time evolution across the race. Each driver's personal best lap is marked with a ★; pit-out laps are shown as faint vertical dotted lines in the driver's team colour. Safety car and VSC laps are automatically stripped.
</div>

For Qualifying sessions the chart automatically switches to a horizontal bar chart showing each driver's best Q1 / Q2 / Q3 time, with colour-coded segments and inline time labels.

---

### All-Laps Speed Overlay

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/all_laps_2024_Bahrain_R.png" title="All laps speed overlay" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Every lap's speed trace overlaid for each driver. Fastest lap = bold solid line; slowest = dashed red; all others = faint. Min/max speed annotations are placed automatically on the fastest and slowest laps.
</div>

---

### Telemetry Traces — Speed, Throttle/Brake, Gear

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/speed_trace_2024_Bahrain_R.png" title="Speed trace comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Speed vs distance for the configured lap(s). DRS zone shading is overlaid where circuit info is available. Min/max annotations flag peak and minimum speeds per driver.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/throttle_brake_2024_Bahrain_R.png" title="Throttle and brake traces" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/gear_trace_2024_Bahrain_R.png" title="Gear trace" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: throttle (top panel) and brake (bottom panel) vs distance. Right: gear usage with colour-filled bands per gear (red–yellow–green scale), one subplot per driver.
</div>

---

### Sector Times

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/sector_times_2024_Bahrain_R.png" title="Best sector times" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Grouped bar chart of best sector times. A gold highlight and outline marks the fastest driver in each sector. Time labels are placed above each bar in the driver's team colour.
</div>

---

### Tyre Strategy

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/tyre_strategy_2024_Bahrain_R.png" title="Tyre strategy chart" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Horizontal stint chart coloured by compound (red = Soft, yellow = Medium, grey = Hard, green = Inter, blue = Wet). Compound initial and stint length are labelled inside each bar when the stint is long enough to fit.
</div>

---

### Lap Distribution & Delta Trace

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/fastf1/lap_dist_2024_Bahrain_R.png" title="Lap time distribution" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/fastf1/delta_2024_Bahrain_R.png" title="Cumulative lap delta" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: box plot of clean lap pace with jittered individual lap dots overlaid; ★ marks each driver's fastest lap. Box = IQR, whiskers = 5th–95th percentile. Right: cumulative lap-time gap relative to the fastest driver — a falling line means gaining, rising means losing time. Final gap is annotated at the end of each trace.
</div>

---

### Weather Overlay

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fastf1/weather_2024_Bahrain_R.png" title="Lap times with weather overlay" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Lap times (left axis) with track and air temperature on a twin axis (right). Rainfall periods are shaded blue. Useful for understanding pace variation that isn't explained by car setup or strategy alone.
</div>

---

## Usage

```bash
pip install fastf1 matplotlib numpy pandas
```

Open the notebook, set `SESSION`, `DRIVERS`, and the `PLOTS` flags you want, then run all cells. On first load FastF1 downloads and caches the session data; subsequent runs for the same session are instant.

Set `STYLE["save_plots"] = True` to write all figures as PNGs to `./f1_output/` instead of rendering inline — useful for batch-generating a full race weekend's worth of charts.

```python
SESSION  = {"year": 2024, "round": "Monaco", "session": "Q"}
DRIVERS  = ["LEC", "SAI", "VER"]
TELEMETRY_LAP = None   # each driver's fastest lap
PLOTS    = {"lap_times": True, "speed_trace": True, "sector_times": True, ...}
STYLE    = {"theme": "dark", "save_plots": True, "save_dir": "./monaco_quali"}
```
