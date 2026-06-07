---
layout: page
title: Bachelor Thesis - Aerodynamic Evaluation of an FSAE Car
description: Full aerodynamics package design, CFD analysis, and carbon fibre manufacturing for the 2023 Orion Racing India FSAE car
img: assets/img/project_fsae_aero_images/final_aero_design.png
importance: 1
category: work
giscus_comments: true
---

This project encompassed my Bachelor's Thesis at K.J Somaiya. It covers the end-to-end design, simulation, and manufacture of a complete aerodynamic package for **Orion Racing India**'s Formula Student Electric car, competing at **Formula Student East 2023**. The package — front wing, rear wing, bullhorn wing, side diffusers, and rear diffuser — was developed by me and my colleagues Ritwik Deo and Aditya Shah, as our final-year thesis at K.J. Somaiya College of Engineering, Mumbai, under the guidance of Prof. (Dr.) Shailesh R. Nikam.

The primary goal was to maximise downforce while staying within the drag budget, and to achieve an aerodynamic balance of **54% front** — a slightly oversteering setup that lap-time simulations on the Hockenheim FSG track confirmed to be optimal.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/final_aero_design.png" title="Final aerodynamics package" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The complete aerodynamic package: front wing with flow-conditioning devices, bullhorn wing, side and rear diffusers, and a rear wing with slat–main–auxiliary configuration and louvred endplates.
</div>

---

## Motivation & System-Level Targets

Aerodynamic downforce improves cornering speed without adding the inertia penalty of extra mass — a well-designed package can generate 4–5× its own weight in downforce at racing speeds. Lap-time simulations using IPG CarMaker on the Hockenheim FSG track showed a **5.2-second improvement** (80.75 s vs 85.92 s) when the aerodynamic package was fitted.

Three top-level targets were set before any geometry work began:

- **Maximum drag coefficient:** C<sub>d</sub> ≤ 1.62 (0.75× the top-speed-limiting C<sub>d</sub> of 2.165, derived from the 55 kW motor and a target top speed of 125 km/h)
- **Aerodynamic balance:** 54% front, tuned to complement the vehicle dynamics team's slightly oversteering setup
- **Structural compliance:** front wing must fail at ≤ 120 kN crush load per Formula Student rules; carbon fibre tubes verified by 3-point bend test (fracture at 520 N, well above the 200 N maximum in-service load)

---

## CFD Setup & Verification

All aerodynamic simulations were run in OpenFOAM using the **k-ω SST** turbulence model, chosen for its accuracy in adverse pressure gradients, separated flows, and near-wall regions without requiring additional damping functions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/cfd_boundary_conditions.png" title="CFD domain and boundary conditions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Simulation domain (42 m × 18 m × 12 m bounding box). Boundary conditions: velocity inlet −16 m/s, moving floor −16 m/s, rotating wheels at 70 rad/s, pressure outlet at 0 Pa gauge.
</div>

A systematic mesh independence study fixed the bounding box dimensions and cell edge length at 0.2 m (where residuals plateau). The mesh was then validated against published Ahmed Body experimental data — C<sub>d</sub> error within 1.3% and C<sub>L</sub> error within 3.2% at 25° slant angle.

---

## Front Wing

Custom airfoils were designed from scratch for both the main element and the outboard section, using the S1223 camber line as a baseline. XFLR5 comparisons at 430 mm chord showed the custom airfoil outperforming all standard candidates (C<sub>L</sub> = −1.6, C<sub>d</sub> = 0.022 vs S1223's −1.2 / 0.017).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/final_front_wing_cad.png" title="Final front wing CAD" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/final_front_wing_cfd.png" title="Final front wing CFD pressure coefficient" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: final front wing geometry after five design iterations. Right: total pressure coefficient (C<sub>pt</sub>) side view showing clean attached flow over the main and auxiliary elements, with an outwash vortex at the endplate keeping tyre wake away from the car body.
</div>

The final design features a **custom main element**, an **S1223 inboard ladder** (keeps the wing inboard-loaded, reducing overhang bending), and two **flow-conditioning vortex generators** that produce the outwash effect. The five-iteration CFD-driven process progressively refined endplate geometry, auxiliary element chord, and the dihedral of the outboard section.

**Final result:** C<sub>L</sub> = −1.62, C<sub>d</sub> = 0.28, downforce = 248.8 N @ 16 m/s.

---

## Rear Wing

For the rear element a modified Benzing 153-175 airfoil was adopted — camber reduced to 80% of its original value to raise the stall angle and ease manufacturing (fewer MDF stacking layers per mould). This yielded C<sub>L</sub> = −1.42 with moderate stall characteristics, compared to the abrupt stall of the S1223.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/final_rear_wing_cad.png" title="Final rear wing CAD" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/final_rear_wing_cfd.png" title="Final rear wing CFD pressure coefficient" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: final rear wing with slat–main–auxiliary configuration and louvred endplates. Right: C<sub>pt</sub> side view showing how the slat re-energises the boundary layer, allowing the main element to run at a higher angle of attack without separation.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_fsae_aero_images/rear_wing_louvre_vortices.png" title="Louvre vortices on rear wing endplate" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Velocity streamlines showing the counter-rotating vortex pair generated by the endplate louvres, which reduce induced drag at the tip.
</div>

The three-element **Slat–Main–Auxiliary** configuration allows an aggressive main-element angle of attack by re-energising the boundary layer, while the endplate louvres generate counter-rotating vortices that cut induced drag.

**Final result:** C<sub>L</sub> = −1.278, C<sub>d</sub> = 0.553, downforce = 196.3 N @ 16 m/s.

---

## Drag Reduction System (DRS)

A servo-actuated DRS was implemented on the rear wing auxiliary element. CFD pivot-position analysis identified the 60% chord point as the optimum — minimising both opening torque (0.095 Nm) and holding torque (−0.175 Nm) to reduce strain on the servo. An AGFRC SA81BVMW smart servo was selected and mounted directly inside the element.

| Condition | C<sub>L</sub> | C<sub>d</sub> |
|---|---|---|
| DRS closed (full car) | −3.548 | 1.495 |
| DRS open (full car) | −2.701 | 1.036 |

Opening the DRS reduces drag by ~31% on the full car, with a downforce cost of ~24%.

---

## Diffusers

The diffuser system comprises two side diffusers and one rear diffuser, all operating under ground effect. Key design choices:

- **3D diffusing sections** increase the effective expansion ratio beyond what a 2D profile would allow
- **Side diffuser inlet** positioned to accept only the clean air conditioned by the front wing, keeping tyre wake out of the diffuser passage
- **Flat wall alongside** the side diffuser prevents high-pressure air from striking the rear tyre, reducing tyre wake

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/final_diffuser_cad.png" title="Final diffuser assembly CAD" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/final_diffuser_pressure.png" title="Final diffuser pressure distribution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: final diffuser assembly (side and rear). Right: pressure distribution showing the low-pressure region beneath the diffuser ramp generating downforce via ground effect; the blue suction peak at the rear is visible on the right side.
</div>

**Final result:** C<sub>L</sub> = −1.13, C<sub>d</sub> = 0.15, downforce = 173.6 N @ 16 m/s.

---

## Full-Car CFD Results & Comparison

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/pressure_plot_top.png" title="Full car pressure plot — top isometric view" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/pressure_plot_bottom.png" title="Full car pressure plot — bottom isometric view" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Full-car pressure distribution at 16 m/s. Top view (left) shows stagnation pressure on the front surfaces; bottom view (right) reveals the large suction regions under the diffusers generating ground-effect downforce.
</div>

Compared to the previous year's design, the 2022–23 package achieved higher downforce with lower drag across all components:

| Component | C<sub>L</sub> (current) | C<sub>d</sub> (current) | C<sub>L</sub> (prev.) | C<sub>d</sub> (prev.) |
|---|---|---|---|---|
| Front Wing | −1.62 | 0.28 | −1.07 | 0.22 |
| Rear Wing | −1.278 | 0.553 | −1.06 | 0.47 |
| Diffusers | −1.13 | 0.15 | −1.12 | 0.19 |
| **Full Car** | **−3.548** | **1.49** | **−3.35** | **1.56** |

Total downforce improved from 514.6 N to 544.9 N while drag fell from 239.6 N to 228.9 N.

---

## Aerodynamic Maps

To understand how the aerodynamics behave dynamically, four sets of CFD sweeps were performed, varying ride height (heave), roll angle, yaw angle, and the combination of front/rear ride height (pitch).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/aero_map_heave.png" title="Cl, Cd vs ride height (heave)" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/aero_map_roll.png" title="Cl, Cd vs roll angle" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: C<sub>L</sub> and C<sub>d</sub> vs ride height — maximum downforce occurs near 30 mm, with a characteristic diffuser stall at lower ride heights. Right: C<sub>L</sub> and C<sub>d</sub> vs roll angle — the package is symmetric and well-behaved through ±2°.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_fsae_aero_images/aero_map_yaw.png" title="Cl, Cd, Csf vs yaw angle" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    C<sub>L</sub>, C<sub>d</sub>, and side force coefficient vs yaw angle (±5°). Downforce is broadly stable across the yaw sweep, confirming the package does not destabilise the car during cornering.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/aero_map_cl_pitch.png" title="Cl map — front vs rear ride height" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/aero_map_balance_pitch.png" title="Aero balance map — front vs rear ride height" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    3D pitch maps (MATLAB-interpolated from CFD data). Left: total C<sub>L</sub> as a function of front and rear ride height — maximum downforce is achieved at low front and intermediate rear ride height. Right: aerodynamic balance (%Front) across the same parameter space, showing how pitch attitude shifts the balance forward or rearward.
</div>

---

## Manufacturing

All structural components were manufactured from **300 gsm Carbon Epoxy Prepreg** over CNC-machined MDF moulds. Smaller intricate parts (flow conditioners, louvres, outwash vanes) were produced by FDM 3D printing in PLA.

**Mould fabrication** used a 3-axis CNC mill with Fusion 360 CAM toolpaths (15,000 mm/min feedrate, 10,000 rpm spindle, 0.8 mm stepover for finishing passes). MDF was chosen for its low coefficient of thermal expansion under autoclave conditions and cost-effectiveness over foam board or aluminium.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/composite_layup_cf.png" title="Carbon fibre prepreg layup on front wing mould" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_fsae_aero_images/autoclave.png" title="Autoclave curing at Godrej Aerospace" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: carbon fibre prepreg layup for the front wing main element at Godrej Aerospace Plant 4B. Right: vacuum-bagged assemblies inside the autoclave — cure cycle: 10 min @ 50°C → 10 min @ 80°C → 60 min @ 120°C.
</div>

The sandwich layup sequence was: carbon prepreg skin → Nomex honeycomb core → carbon prepreg skin. CF tubes run spanwise inside the wings to resist bending, and aluminium inserts at all mounting points prevent the Nomex core from crushing under load.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_fsae_aero_images/internal_structure.png" title="Internal structure of wings and diffuser assemblies" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Exploded view of the internal structure across the full aero package. CF tubes, foam inserts, and aluminium mounting inserts are visible inside both wing and diffuser assemblies.
</div>

---

## Conclusions

The 2022–23 aerodynamics package met all primary objectives:

- **Total downforce** of 544.9 N at 16 m/s — a 6% improvement over the previous year, with a simultaneous 4.5% drag reduction
- **Aerodynamic balance** of ~50–54% front, consistent with the vehicle dynamics target
- A functional **servo-actuated DRS** reducing full-car drag by ~31% on straights
- Full compliance with Formula Student rules (geometry, TSAL visibility, crush load)
- Validated CFD methodology (k-ω SST, Ahmed Body benchmark within 3.2%)

Identified areas for future improvement include the diffuser efficiency at low Reynolds numbers, and further integration of the bullhorn wing geometry with the rear wing slat to reduce upwash interaction losses.
