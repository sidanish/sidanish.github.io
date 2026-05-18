---
layout: page
title: MSC ADAMS Car Project
description: Adams Car Suspension and Full Vehicle Analysis
img: assets/img/adams_figures/ADAMS_Project_title_card.jpg
importance: 1
category: work
related_publications: false
---

This project was completed as part of the Vehicle Dynamics course in the Advanced Automotive Engineering – Racing Car Design curriculum at the Motorvehicle University of Emilia-Romagna (MUNER), AY 2024/25.

The objective was to optimize front and rear suspension hardpoints for improved handling performance, then validate the changes through full vehicle simulations including Step Steer and Single Lane Change analyses.

---

## Suspension Optimization

Both front and rear suspensions were first simulated in a baseline configuration using an Opposite Wheel Travel analysis. Adams Insight was then used to run a Design of Experiments (DOE) to minimize toe variation across the wheel travel range, with camber set to *ignore*.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig01_front_baseline_assembly.jpg" title="Baseline Front Suspension Assembly" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig10_rear_baseline_assembly.jpg" title="Baseline Rear Suspension Assembly" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Baseline front suspension assembly. Right: Baseline rear suspension assembly, both built using default subsystems from acar_shared.
</div>

The optimized hardpoints relocated the tierod outer point closer to the wheel center, bringing it more in-plane with the wheel hub. This reduced bump steer significantly at both axles, at a minor cost to camber gain.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig06_front_toe_owt.jpg" title="Front Toe vs Wheel Travel" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig15_rear_toe_owt.jpg" title="Rear Toe vs Wheel Travel" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Toe vs Wheel Travel under Opposite Wheel Travel — front (left) and rear (right). The modified hardpoints (solid line) show notably reduced bump and droop steer compared to baseline (dashed).
</div>

---

## Full Vehicle Analysis

The optimized suspension assemblies were assembled into a full vehicle model. Vehicle mass, inertias, and center-of-mass Z-coordinate were scaled by a factor of **0.92**. Two tyre models were compared — **pac89** and **pac2002** — across Step Steer and Single Lane Change maneuvers at 90 kph.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/adams_figures/fig20_roll_step_steer.jpg" title="Roll vs Time - Step Steer" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/adams_figures/fig22_yaw_velocity_step_steer.jpg" title="Yaw Velocity vs Time - Step Steer" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Step Steer at 90 kph. The pac2002 tyre (dashed) produces a higher peak roll angle and yaw velocity during the transient phase, while both models converge to similar steady-state values.
</div>

Key findings from the tyre comparison:
- The **pac89** model responds earlier and shows more desirable cornering stiffness characteristics.
- The **pac2002**, with 136 coefficients vs pac89's 52, captures overturning and scaling effects, and shows signs of **oversteer** tendencies as inferred from the yaw vs lateral acceleration diagrams.

---

## Additional Simulations

### Anti-Roll Bar (ARB) Study

A rear ARB was fitted to the full vehicle and a Single Lane Change was run at 90 kph to isolate its effect. The ARB couples left/right vertical tyre motion, reducing body roll but increasing lateral load transfer at the rear axle — and consequently reducing overall axle grip.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig33_roll_arb_comparison.jpg" title="Roll vs Time - ARB Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig34_tyre_lat_force_arb.jpg" title="Rear Normal Load vs Time - ARB Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Single Lane Change at 90 kph with and without rear ARB. The ARB reduces body roll magnitude (left) while increasing lateral load transfer at the rear axle (right).
</div>

### Double Lane Change at 100 kph

A double lane change was run per NCAP stability control test settings. The modified vehicle achieved higher lateral acceleration and maintained a tighter path throughout, with quicker toe angle response — confirming the benefits of the hardpoint optimizations.

### Step Steer at 90, 100, and 120 kph

Speed sweep tests showed that as speed increases, the vehicle generates more yaw moment and higher peak lateral acceleration, with more lateral acceleration per unit steering wheel angle — consistent with expected understeer gradient behavior.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig41_swa_speed_sweep.jpg" title="SWA vs Lateral Acceleration - Speed Sweep" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/adams_figures/fig42_yaw_speed_sweep.jpg" title="Yaw vs Lateral Acceleration - Speed Sweep" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Step Steer across 90, 100, and 120 kph. Higher speeds require less steering input per unit lateral acceleration and produce greater peak yaw velocity.
</div>

---

## Conclusion

Suspension hardpoint optimization using Adams Insight reduced bump steer at both axles. These improvements translated into measurable gains in full vehicle responsiveness and stability, validated across multiple standardized maneuvers and tyre models.
