---
layout: page
title: NBA Play-by-Play Scheme & Coaching Analysis
description: A Python notebook for dissecting NBA game data from play-by-play feeds — shot profiles, scoring runs, foul patterns, substitution timing, and turnover breakdown, all pointing at the coaching decisions underneath
img: assets/img/nba_placeholder.png
importance: 4
category: fun
giscus_comments: true
---

Most NBA analysis stops at the box score. This project goes one layer deeper, into the **play-by-play feed**, to reconstruct *how* a team scored, *when* coaches intervened, and *what the data suggests about the scheme being run*. It's a personal tool built for watching games differently.

> **Work in progress.** The analysis pipeline is functional but several blocks are still being refined. This page describes current capabilities and where the project is heading.

---

## What It Does

The notebook is organised into 12 independent blocks. After an initial run in order, any block can be re-run in isolation after changing the configuration. Useful for quick comparisons mid-analysis. All data is fetched live from the NBA Stats API via `nba_api`.

**Configuration is a single block:**

```python
TEAM_ABBR   = 'LAL'
SEASON      = '2025-26'
GAME_INDEX  = 0        # 0 = most recent game
FOCUS_TEAM  = None     # auto-detected from game data
```

Point it at any team and season, and a game finder table lets you pick the exact matchup before loading anything else. Sessions can also be targeted directly by Game ID for repeatability.

---

## Analysis Blocks

**Shot Distance Distribution** maps where each team prefers to shoot from, with separate histograms for makes and misses, a 3-point line marker, and an average distance overlay. The gap between a team's average shot distance and their opponent's immediately flags whether one side is forcing mid-range or hunting paint.

**Shot Clock Analysis** buckets made field goals into period time-remaining zones — from early-possession offense (12:00–10:00) through to clutch situations (under 24 seconds). A team that scores heavily in the 2:00–0:24 window is either executing late-clock sets well or generating them too often. The distinction matters.

**Shot Type Breakdown** classifies every shot as a 3-pointer, paint/at-rim attempt, or mid-range look, and cross-references each type against FG% and share of total attempts. This is the clearest single view of offensive philosophy — the numbers make the scheme legible at a glance.

**Scoring Runs & Momentum** reconstructs the full score timeline from play-by-play events, plots cumulative points per team with period markers, and renders a score margin chart showing exactly when leads changed hands and how sustained each run was. Correlating these runs with the substitution and foul blocks tells a coherent story about what triggered them.

**Quarter Tendencies** breaks FGA, FGM, FG%, 3-point rate, and average shot distance down by quarter. Fourth-quarter efficiency relative to first-quarter output is a direct signal of late-game execution quality and how well a team's scheme holds up under fatigue and pressure.

**Foul & Free Throw Patterns** shows when fouls are committed, by which team, and at what point in the period. Late-quarter foul spikes often signal defensive breakdowns or intentional fouling strategy. FTA differential is surfaced as a summary alongside the charts.

**Substitution Timing** asks when each coach makes changes. Teams that substitute aggressively in the 10:00–8:00 window are managing minutes proactively; those that wait until the 4:00–2:00 zone are more likely reacting to what they see. Total sub counts per team are annotated directly on the chart.

**Turnover & Transition Analysis** classifies every turnover — stolen passes, bad passes, lost balls, travels, offensive fouls, violations — and shows the breakdown as a pie chart alongside a per-quarter table. Live-ball turnovers that lead to transition opportunities are the highest-leverage category, and the split between those and dead-ball violations tells you something about ball-handling discipline versus scheme risk.

**Full Dashboard Summary** prints a consolidated stat block for both teams covering FG%, shot mix percentages, average shot distance, turnovers, fouls, and total substitutions — a single-screen read of the whole game.

---

## Current Limitations

The shot clock analysis uses period time-remaining as a proxy for actual shot clock time, which introduces noise — particularly in the early minutes of each quarter where multiple possessions run together. Proper shot clock reconstruction from PBP would require inferring possession boundaries from rebound, turnover, and score events, which is in progress.

The scoring run detector (Block 7) currently relies on the visual chart rather than automated run identification. A proper implementation would flag unanswered scoring runs above a configurable threshold and annotate them directly on the timeline.

Lineup tracking is not yet implemented. Block 10 captures substitution timing but does not reconstruct which five-man unit was on the floor at any given moment — which limits the ability to tie offensive output to specific lineup combinations.

---

## Where It's Going

The most meaningful next step is **possession-level reconstruction** — inferring each possession's start, end, ball-handler, and outcome from the raw play-by-play event sequence. With that as a base, the analysis becomes substantially richer:

- **Lineup efficiency**: plus/minus and offensive rating by five-man unit, enabling direct comparison of a coach's most-used combinations
- **Play type tagging**: semi-automatic classification of possessions into pick-and-roll, isolation, transition, post-up, and off-ball movement based on event sequence patterns
- **Multi-game trend analysis**: running the same pipeline across a full season or playoff series to surface scheme evolution and opponent-specific adjustments
- **Shot quality model**: pairing shot distance and type with period context and score margin to build a basic expected-points-per-attempt estimate without needing tracking data
- **Opponent scouting view**: flipping the focus team to the away side and generating a comparative report, ready to print before a game

The longer-term goal is a lightweight scouting report generator — feed in a team abbreviation and a date range, and get back a structured breakdown of their tendencies across all the dimensions above.

---

## Stack

```bash
pip install nba_api pandas matplotlib seaborn numpy
```

`nba_api` requires browser-like request headers to avoid rejection from `stats.nba.com` — these are set globally in Block 1 and passed to every endpoint call. A short sleep between requests keeps the rate limiter happy.
