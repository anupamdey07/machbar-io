# machbar.tech Product Research â Evolution Guidance (v4 Roadmap)

## 1. Fix the Scoring Model (Biggest Gap)
The v3 report uses a subjective 1-10 "vibe score" with no defined rubric. Replace with a **weighted, criteria-gated scoring matrix**:

| Dimension | Weight | Scoring Definition |
|---|---|---|
| A - Edge Compute | 35% | 0 = cloud-only, 1 = MCU (ESP32/STM32), 2 = SBC (RPi), 3 = GPU-accelerated edge AI (Jetson/NPU) |
| B - 3D Printing | 35% | 0 = no printable content, 1 = cosmetic/accessory only (community), 2 = official STL for structural parts, 3 = fully open-source printable chassis |
| C - Robotics | 30% | 0 = static, 1 = single actuator, 2 = multi-DOF with sensors, 3 = autonomous with closed-loop control (SLAM/ROS2) |

A product should only "qualify" as true A+B+C if **all three dimensions score >=1** (hard gate), not just weighted average â the current report already senses this (e.g., Eilik flagged as "B is cosmetic-only") but doesn't enforce it structurally. Add a `qualifies_ABC` boolean column separate from the composite score so filtering/sorting is possible in the DB.

## 2. Expand Beyond a Single-Session Snapshot
10 products from one run is a seed list, not a market map. Evolve into a **continuously refreshed panel**:
- Track deltas: new entrants, price changes, firmware/EOL status (Darwin Mini was already flagged EOL â this needs to be a monitored field, not a footnote).
- Add a `first_seen` / `last_verified` timestamp per record so staleness is visible.
- Broaden source diversity: the current list leans heavily on Hiwonder/China maker-robotics catalogs. Add Kickstarter/Indiegogo (early-stage A+B+C hardware), Hackaday.io, Thingiverse/MakerWorld/Printables "robot" tags, and university open-hardware labs (MIT, ETH).

## 3. Strengthen the "3D Printing" Signal
Right now B is mostly inferred as "community strong/moderate/weak" â a soft judgment call. Make it verifiable:
- Pull actual STL/remix counts from MakerWorld, Printables, Thingiverse, Cults3D APIs where available.
- Distinguish **official** (vendor-published files) vs **community** (fan-made) printable content â this materially changes how "open" a product really is, and matters for a hardware-focused audience.
- Flag "structural vs cosmetic" explicitly (the report already does this in prose for Eilik/Petoi â formalize it as a DB field).

## 4. Add Commercial/Business-Relevant Fields
Since this feeds machbar.tech (a web business), the schema should support your actual use case, not just research curiosity:
- Distributor/reseller availability in the EU (import duties, shipping cost from China, CE certification status) â highly relevant given you're Berlin-based.
- Margin/affiliate potential, MOQ for bulk resale, existing EU stock.
- Competitor coverage: is anyone else already writing about/selling this? (SEO gap analysis)

## 5. Improve Methodology Transparency & Reproducibility
Good start noting rate-limits and blockers, but make it a structured log, not narrative:
- Log every source attempt with `{url, method, status_code, blocker_type, resolution}` so you can see patterns over time (e.g., "unitree.com always needs full browser rendering").
- Version the criteria definitions themselves (A/B/C definitions may evolve) alongside the report version.
- Add confidence levels per field (e.g., specs scraped from official spec sheet = high confidence; specs inferred from marketing copy = low confidence).

## 6. Recommended Report Structure v4
1. Executive summary with qualification-gate table (pass/fail, not just score)
2. Methodology log (machine-readable appendix)
3. Full comparison table with normalized fields for filtering
4. Category clusters: "Arms," "Quadrupeds/Pets," "Humanoids," "Mobile platforms," "Competition kits" â since your current top 10 already naturally cluster this way
5. Market gaps section â explicitly call out what a "true 8-10/10 A+B+C" product would need that nothing on the market currently has (Poppy is B+C exceptional but A is DIY; ArmPi Ultra is A+C strong but B is accessory-only â the gap itself is a business insight for machbar.tech, e.g., private-label or kit opportunity)
6. Trend tracking â price-over-time, new SKU velocity per vendor (Hiwonder releasing 3 products in this space signals a strategy worth watching)

## 7. Data Quality Checks to Add
- Deduplicate against your existing machbar DB before flagging something as "new."
- Cross-verify price in at least 2 currencies/regions (US listing price often diverges from EU landed cost).
- Flag EOL/discontinued status proactively (caught manually for Darwin Mini this time, should be automated via vendor page scraping + "end of life" keyword detection).
