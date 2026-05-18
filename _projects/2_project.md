---
layout: page
title: Design of an FSAE Rear Wing - A Systematic Approach
description: Systematic aerodynamic redesign of a Formula Student rear wing assembly — from requirements through CFD, FEA, and detailed tolerancing for the ACAD course final exam at MUNER.
img: assets/img/ACAD_project/assembly_cad.png
importance: 2
category: work
giscus_comments: false
---

The MMR E-Driverless team sought to improve the aerodynamic performance of their autonomous Formula Student vehicle. This project followed a full systematic design methodology — from task clarification and QFD-based requirement derivation, through conceptual and embodiment design, to a fully detailed and tolerance-verified rear wing assembly. The result: a **+5% improvement in aerodynamic efficiency (Cl/Cd)** over the previous design.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/assembly_cad.png" title="Final rear wing CAD assembly" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Final CAD assembly of the redesigned rear wing. The multi-element Benzing airfoil arrangement is supported by swan-neck mounts, with louvred endplates on each side.
</div>

---

## Conceptual Design

The conceptual phase mapped every required aerodynamic subfunction — attaching airflow, exchanging force, reducing flow detachment, reducing induced drag — to candidate working principles. These were systematically combined and scored to select the optimal concept.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/working_principles.png" title="Working principles matrix" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Morphological chart mapping subfunctions to candidate solutions. Coloured dots indicate which combinations were evaluated as viable working structures.
</div>

The selected concept employs **Benzing airfoils in a multi-element arrangement** on swan-neck mounts. Endplates are non-structural, and no active mechanism is required — keeping manufacturing complexity and weight to a minimum.

---

## CFD — Simulation Setup & Mesh Independence

All aerodynamic analysis was carried out in a full-car CFD model. A mesh independence study was performed to ensure solution stability before any design iterations.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/cfd_domain.png" title="CFD simulation domain" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Simulation domain (42 × 12 m). A moving-wall ground boundary condition and velocity inlet were used to replicate on-track conditions.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/downforce_sensitivity.png" title="Downforce mesh sensitivity" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Downforce sensitivity with respect to mesh density. The solution stabilises within the red-band tolerance from ~200k cells onward, confirming mesh independence.
</div>

---

## CFD — Baseline Analysis & Problem Identification

CFD of the existing wing revealed two key problem areas: flow separation on the upper surface and excessive tip vortex strength at the endplates.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/cfd_pressure_baseline.png" title="Total pressure coefficient — baseline" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/cfd_wall_shear.png" title="Wall shear stress — baseline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: total pressure coefficient plot showing the wake and separation region behind the baseline wing. Right: wall shear stress magnitude highlighting flow detachment on the suction surface.
</div>

---

## CFD — Design Iterations

Multiple element configurations, endplate geometries, and louvre placements were tested iteratively. The pressure field plots below compare a mid-iteration design (left) with the improved arrangement (right), showing a clear reduction in the low-pressure separation zone.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/cfd_pressure_field.png" title="Pressure field — mid-iteration" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/cfd_pressure_improved.png" title="Pressure field — improved design" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pressure field (Pa) at the multi-element section. The improved configuration (right) shows a more gradual pressure recovery, reducing separation-induced drag.
</div>

The louvres were added to the endplates to bleed high-pressure air from the inboard face to the lower-pressure outboard side, reducing the wingtip vortex intensity and contributing a further 4 N drag reduction.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ACAD_project/cfd_louvres_particle.png" title="Louvre CFD — pressure and particle traces" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ACAD_project/cfd_final_assembly.png" title="Final assembly CFD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: pressure contours and particle traces confirm the louvres redirect high-pressure air outboard, reducing vortex intensity. Right: final assembly pressure and CPT plot.
</div>

The final design delivers **614 N of downforce at 232 N drag**, compared to 596 N / 236 N for the old wing — a Cl/Cd improvement of 5%.

---

## FEA — Structural Verification

Finite element analyses were carried out on all load-bearing components using the Equivalent Isotropic Plate Method (EIPM) to convert the CFRP laminate properties into an equivalent isotropic material for the SIMULIA solver.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/fea_support_displacement.png" title="Support displacement — FEA" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/fea_support_stress.png" title="Support Von Mises stress — FEA" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Swan-neck support under the T8.3.1 load case (200 N distributed over 225 cm²). Left: displacement field (max 2.06 mm, well within the 10 mm limit). Right: Von Mises stress distribution.
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/ACAD_project/fea_rib_stress.png" title="Main element rib Von Mises stress" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Von Mises stress on the main-element rib structure. The CFRP laminate properties were converted via EIPM; stress concentrations are localised at the rib-spar junctions as expected.
</div>

All components were confirmed compliant with FSG rules T8.3.1 and T8.3.2.

---

## Detail Design — Tolerance Stack-ups

Three tolerance stack-ups were constructed to verify fit and function across the critical interfaces of the assembly.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ACAD_project/tolerance_stackup_drawing.jpg" title="Tolerance stack-up 1 — overall assembly width" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Stack-up 1: overall assembly width. The nominal span of the auxiliary wings and main wing was adjusted from 946 mm to 947 mm to ensure zero gap or interference at the endplate interfaces in all worst-case scenarios.
</div>

The three stack-ups covered: overall assembly width, rib-to-airfoil bonding clearance, and M5 fastener thread engagement at the auxiliary wing–endplate interface. After one round of nominal adjustments, all three were confirmed **OK** under worst-case tolerance combination.
