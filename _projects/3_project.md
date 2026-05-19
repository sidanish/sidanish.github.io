---
layout: page
title: Ride Comfort of a Vehicle — 7-DOF Vibrational Analysis
description: Vibrational analysis of a 7 degrees-of-freedom vehicle model across three road profiles, implemented in MATLAB with modal analysis and direct numerical integration
img: assets/img/project_group6_images/7dof_model.png
importance: 3
category: work
giscus_comments: false
---

This project develops and analyses a **7 degrees-of-freedom (7-DOF)** vehicle dynamic model to evaluate ride comfort under three distinct road profiles: a single bump (transient), a washboard (periodic steady-state), and a random rough surface (stochastic). System parameters were taken from a validated SUV identification study. All analysis was implemented in MATLAB using modal analysis (convolution integral) and validated against direct numerical integration via `ode45`.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/7dof_model.png" title="7 degrees-of-freedom vehicle model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The 7-DOF model: sprung mass (m<sub>s</sub>) with pitch (θ) and roll (φ) degrees of freedom, four unsprung masses at each wheel, each coupled to the body via spring-damper pairs and to the road via tyre stiffness.
</div>

---

## System Description & Equations of Motion

The total vehicle mass is split into a **sprung mass** (chassis, body, everything above the suspension) and four **unsprung masses** (wheel assemblies). The 7 generalised coordinates are the vertical displacement of each wheel (z<sub>uA</sub>–z<sub>uD</sub>), the sprung mass heave (z<sub>s</sub>), pitch (θ), and roll (φ).

Equations of motion were derived using the **Lagrange approach**, yielding a coupled matrix system Mq̈ + Cq̇ + Kq = F. The forcing vector F contains the tyre-stiffness loads from each wheel's ground displacement input. The damped eigenvalue problem was solved using the **Duncan (phase-space) approach**, which extends the standard eigenvalue method to systems where the damping matrix C cannot be diagonalised by the undamped mode shapes.

---

## Natural Frequencies & Mode Shapes

The system exhibits two distinct frequency bands: three low-frequency modes (1.0–1.6 Hz) dominated by sprung-mass heave, pitch, and roll, and four high-frequency modes (~10.9–11.4 Hz) corresponding to unsprung-mass bouncing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/mode_shapes.png" title="Mode shapes of the undamped system" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    All seven undamped mode shapes. Modes 1–3 are low-frequency body modes (heave, pitch, roll); Modes 4–7 are high-frequency wheel-hop modes involving primarily the four unsprung masses. Damping ratios for all modes lie in the 0.25–0.36 range.
</div>

---

## Case 1 — Single Bump (Transient)

The bump was modelled as a half-sine pulse (amplitude 70 mm, length 800 mm). The time histories of displacement, pitch, roll, sprung-mass acceleration and chassis forces were computed at three speeds: 5, 60, and 130 km/h. Roll remains identically zero throughout — both sides of each axle strike simultaneously.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/bump_5kmh.png" title="Single bump response at 5 km/h" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Response at 5 km/h. The sprung mass displacement closely mirrors the road profile and the pitch excursion is large (~±2°), consistent with quasi-static behaviour at low speed. Both convolution (solid) and ode45 (dashed) solutions overlap perfectly, confirming numerical validation.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/bump_60kmh.png" title="Single bump response at 60 km/h" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/bump_130kmh.png" title="Single bump response at 130 km/h" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: 60 km/h — sprung mass displacement is reduced but body acceleration peaks near 1 g and chassis force exceeds 10 kN, reflecting the damper velocity effect. Right: 130 km/h — the bump becomes a near-impulse; energy shifts to frequencies above the natural modes and forces decay rapidly.
</div>

The bump also reveals a **wheel detachment risk**: at high speed the tire spring enters extension, implying a negative ground reaction force — physically impossible, and indicating the model becomes invalid during that phase.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_group6_images/bump_detachment.png" title="Detachment analysis — unsprung mass vs road profile and ground force" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Detachment analysis at high speed. Top: the front-left unsprung mass displacement (blue) exceeds the bump profile (red), meaning the wheel has left the ground. Bottom: the ground force becomes negative — physically this marks the onset of detachment, which the current model does not capture.
</div>

---

## Case 2 — Washboard (Periodic Ripples)

The periodic road profile uses the same sinusoidal shape as the bump, repeated continuously. The key result is a **resonance sweep**: the washboard frequency matches a natural frequency of the system (~10.4 Hz) at approximately 60 km/h, causing large-amplitude unsprung-mass oscillations.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/washboard_velocity_sweep.png" title="Maximum response vs velocity — washboard" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Maximum values of displacement, rotation, acceleration, and chassis forces swept over 0–130 km/h. The sharp resonance peaks near 6–7 km/h and 57–60 km/h correspond to excitation of the low- and high-frequency natural modes respectively. Outside resonance, all quantities decay smoothly.
</div>

At resonance (60 km/h), the front unsprung mass oscillation amplitude is **nearly twice the road profile amplitude** (128.7 mm peak vs 70 mm input), and the chassis force reaches 38 kN. The single-sided spectrum confirms the washboard frequency (10.42 Hz) coincides with the 5th and 6th natural frequencies.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_group6_images/washboard_resonance_spectrum.png" title="Resonance spectrum — washboard vs front wheel at 60 km/h" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Single-sided spectrum around 10.4 Hz at 60 km/h. The front-left wheel response (orange) significantly exceeds the washboard input (blue) at the resonant frequency. The spectral leakage around the peak is a consequence of insufficient sampling time.
</div>

---

## Case 3 — Random Road Profile

A random rough surface was generated using MATLAB's `rand` function independently for each of the four wheels. A fixed spatial road length is used so that simulation time scales inversely with speed, keeping the number of spatial samples constant.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/random_road_profile.png" title="Random road profile — all four wheels" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generated random road profiles for all four wheels at 5 km/h. Each track is independent, producing both heave and roll excitation (unlike the bump and washboard cases, where left-right symmetry suppressed roll).
</div>

### Spectrum & PSD Across 20 Velocities

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/random_spectrum_psd_20v.png" title="Spectrum and PSD — 20 velocities" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Spectrum (left) and PSD (right) of sprung-mass acceleration, displacement, pitch, and roll for all 20 simulated velocities. As speed increases the frequency content shifts rightward and peak amplitudes decrease, consistent with increased damping effectiveness at higher excitation frequencies.
</div>

### RMS Across 20 Velocities

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/random_rms_20v.png" title="RMS of body characteristics vs speed" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RMS values of body displacement, acceleration, pitch, and roll vs speed (0.1–100 km/h). All four quantities increase monotonically — the suspension does not fully attenuate the broadband random input and the system accumulates more energy as speed rises. Three representative speeds (5, 60, 95 km/h) were selected for deeper analysis.
</div>

### Three-Regime Analysis

At 5 km/h the unsprung masses faithfully track the road profile. As speed increases, the suspension filters out more content — but the resonant "knee" near 10 Hz is visible in all regimes.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/random_unsprung_vs_road.png" title="Unsprung displacement vs road profile at 5 km/h" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    At 5 km/h the front-left unsprung mass displacement (blue) closely follows the road profile input (orange), confirming quasi-static suspension behaviour at low speed. The small lag and amplitude difference stem from tyre compliance and suspension damping.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/random_input_response_psd.png" title="Input PSD vs unsprung mass response PSD — 3 regimes" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Road input PSD (left) vs unsprung mass response PSD (right) for all four wheels at 5, 60, and 95 km/h. Both signals follow a power-law decay with an amplification "knee" near 10 Hz where suspension resonance boosts the response above the input level.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_group6_images/random_sprung_psd_3regimes.png" title="Sprung mass PSD — 3 regimes" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    PSD of sprung mass acceleration, displacement, pitch, and roll at 5, 60, and 95 km/h. Two resonance peaks are visible at ~1 Hz and ~10 Hz, corresponding to the body and wheel-hop natural frequencies. At higher speeds the energy content above 10 Hz decays more steeply due to increased damper effectiveness.
</div>

---

## Conclusions

The 7-DOF model successfully reproduces the expected behaviour of a vehicle suspension across all three road scenarios. Key findings:

- **Bump**: damper velocity explains the non-monotonic force-vs-speed relationship; high-speed impacts risk wheel detachment, invalidating the simple spring constraint.
- **Washboard**: resonance at ~60 km/h amplifies unsprung-mass oscillation to nearly double the input amplitude and chassis forces to 38 kN — a critical comfort and fatigue concern.
- **Random profile**: RMS metrics grow with speed in the absence of a resonance peak; the 1 Hz and 10 Hz modes are consistently excited and visible in all PSD plots.

Both solution methods (convolution integral and `ode45`) produced identical results throughout, confirming the implementation's correctness.
