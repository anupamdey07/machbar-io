# Skill: resilient-websearch-v2 (machbar research pipeline)

## Purpose
A local-agent (Pi Agent) skill that drives the machbar.tech search â extract â escalate â report pipeline. It wraps your existing local stack (SearXNG, Jina Reader, Camoufox, CloakBrowser) into a single fault-tolerant ladder, then hands clean structured output to the doc/report generation stage. Goal: zero silently-skipped URLs, full audit trail, and strong enough for unattended recurring research runs.

## Core Pipeline (your notes, confirmed + hardened)

```
Search â SearXNG â get URLs
  â
Extract â Jina Reader (r.jina.ai, instant, free)
  â
If < 200 chars OR JS-heavy â Camoufox (:9377)
  â
If Cloudflare/Akamai/DataDome fingerprint block â CloakBrowser (stealth chromium)
  â
If ALL fail â do NOT skip yet â run Tier X hardening (below) â THEN skip + log
```

## Verdict on your notes

Yes â the substance of your notes was already included in the skill, and the current skill already treats your stack as the default path rather than generic fallback advice. The only update needed is tightening the document around **processing and report generation**, so the skill becomes not just a search ladder but a full research-operating-system for machbar.tech.

## What is already covered

- SearXNG as the default first search layer, with rotation across backup instances when one instance is unhealthy.
- Jina Reader as the first extraction pass for discovered URLs.
- Camoufox on `:9377` as the JS-heavy/render fallback.
- CloakBrowser as the anti-bot specialist tier for Cloudflare, Akamai, DataDome, CAPTCHA, and stealth-browser-required cases.
- A post-browser hardening step before final skip, so valuable URLs are not abandoned too early.
- Structured per-URL logging for later report generation and crawl learning.

## What changed in this update

### 1. Your pipeline is now the canonical execution path
The document now makes clear that your exact ladder is the operational default. Other tactics exist to support it, not replace it.

### 2. Processing rules are more explicit
The agent should not only fetch pages â it should normalize and classify them after extraction:
- detect official vs distributor vs community vs archive source,
- extract structured fields,
- assign field-level confidence,
- deduplicate repeated URLs and canonicalize redirects,
- attach provenance for every extracted claim.

### 3. Report generation is now first-class
The skill now explicitly defines how outputs should feed markdown reports, not just URL fetching. Every run should be capable of generating:
- an executive summary,
- a structured findings table,
- a methodology appendix,
- a blockers/tactics appendix,
- a source audit trail,
- a gaps/unverified section.

## Recommended execution policy

### Search tier
1. Query via preferred SearXNG instance.
2. If unhealthy, rotate to backup SearXNG pool.
3. If all SearXNG instances fail, fall back to Brave Search API, Bing API, then DuckDuckGo HTML.
4. Reformulate the query before declaring zero results.

### Extraction tier
1. Try Jina Reader first for every discovered URL.
2. If content is under 200 chars, clearly incomplete, or contains JS placeholders, escalate to Camoufox.
3. If Camoufox hits CAPTCHA, anti-bot challenge, or obvious fingerprint rejection, escalate to CloakBrowser.
4. If CloakBrowser fails, run Tier X hardening before final skip.

### Tier X hardening
- Wayback snapshot lookup.
- Archive.today or equivalent mirror.
- Underlying JSON/XHR/API discovery.
- Distributor or trusted secondary-source substitution.
- Final skip only after all of the above fail.

## Processing contract

After a URL is successfully accessed, the agent must process content into normalized records instead of passing raw text downstream.

### Required normalization steps
- Canonicalize URL and final redirect target.
- Detect content type: product page, docs page, distributor listing, blog post, forum thread, PDF/manual, video transcript.
- Extract title, vendor, model, price, availability, specs, region, and source type when present.
- Separate hard facts from inferred statements.
- Store both raw snippet evidence and normalized field values.

### Confidence rules
- **High**: official vendor specs, manuals, datasheets, direct structured API response.
- **Medium**: distributor listing matching multiple official sources, press release, verified retailer.
- **Low**: forum summaries, community posts, mirrored pages, archived copies, or inferred field extraction.

### Provenance rules
Every extracted field should preserve:
```json
{
  "field": "edge_compute_type",
  "value": "Raspberry Pi 5",
  "evidence": "Raspberry Pi 5 + STM32 dual-controller",
  "source_url": "...",
  "source_type": "official",
  "confidence": "high"
}
```
This makes markdown reports auditable and lets your pipeline rebuild tables without rescanning the web.

## Trigger rules

Use explicit escalation triggers so the agent does not waste time second-guessing:
- **Escalate Jina â Camoufox** when content < 200 chars, page says "Enable JavaScript," extracted DOM is shell-only, or important selectors are missing.
- **Escalate Camoufox â CloakBrowser** when Cloudflare, Akamai, DataDome, CAPTCHA, challenge loops, or fingerprint rejection is observed.
- **Escalate to Tier X** when CloakBrowser returns challenge loops, access denied, or empty-success pages with no useful content.
- **Mark secondary-source mode** when official source remains unreachable after Tier X.

## Structured logging
Every URL attempt must emit:
```json
{
  "url": "...",
  "canonical_url": "...",
  "query": "...",
  "tactic_chain": ["searxng", "jina_reader", "camoufox_9377", "cloakbrowser", "wayback"],
  "final_status": "success | secondary_source | skipped",
  "confidence": "high | medium | low",
  "blocker_type": "none | js_heavy | cloudflare | akamai | datadome | cookie_wall | dead_instance | rate_limited",
  "content_length": 0,
  "source_type": "official | distributor | community | archive",
  "processing_status": "raw | normalized | report_ready",
  "timestamp": "..."
}
```
Write this directly to `machbar_research.db` in a `research_log` table.

## Report-generation contract

Each recurring run should be able to auto-generate a markdown report with the following sections:

### 1. Executive summary
- Total queries run.
- Total unique URLs discovered.
- Total successful extractions.
- Number of official vs secondary sources.
- Number of skipped URLs and why.

### 2. Findings table
For each product or target entity:
- entity name,
- category,
- normalized key fields,
- confidence,
- source count,
- last verified timestamp.

### 3. Methodology appendix
- Search backends used.
- Extraction tactics used.
- Escalation counts by tactic.
- Domain-level blocker summary.

### 4. Blockers appendix
- Domains hit by 403/429/WAF.
- Which tactic eventually worked.
- Which domains still failed.

### 5. Unverified gaps
- Fields still missing.
- Pages only available from archive/community sources.
- URLs skipped after all tactics.

## Report markdown template

```md
# Research Run: {topic}

## Executive summary
- Queries run: {n}
- Unique URLs: {n}
- Successful extractions: {n}
- Secondary-source fallbacks: {n}
- Skipped after all tactics: {n}

## Findings
| Entity | Source type | Key facts | Confidence | Last verified |
|---|---|---|---|---|
| ... | official | ... | high | 2026-07-16 |

## Methodology
- Search backends: ...
- Extraction chain: SearXNG â Jina â Camoufox â CloakBrowser â Tier X
- Domain blockers observed: ...

## Unverified gaps
- ...
```

## Site-specific defaults from your current setup
| Site pattern | Blocker | Default response |
|---|---|---|
| SearXNG instance 404 | Dead search backend | Rotate pool immediately |
| Jina result too short | JS-heavy or blocked reader extraction | Escalate to Camoufox |
| BunkerWeb / Cloudflare / Akamai | WAF or fingerprint block | Escalate to CloakBrowser |
| Shopify cookie/session wall | Session continuity needed | CloakBrowser persistent profile |
| Generic 403 after browser tier | UA/IP or origin restriction | Wayback/API sniffing before skip |

## Guardrails
- Never fabricate missing fields when all tiers fail.
- Always label secondary-source substitutions clearly.
- Respect per-domain pacing and retry budgets.
- Official vendor pages remain source-of-record whenever reachable.
- Skipping is allowed only after the full ladder and Tier X hardening are exhausted.
