# -*- coding: utf-8 -*-
"""Roy Bar CV — one-page A4, two columns. Rebuilt after the title change."""
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4

HNP = "/System/Library/Fonts/HelveticaNeue.ttc"
for n, i in [("HN", 0), ("HN-Bd", 1), ("HN-It", 2), ("HN-Lt", 7), ("HN-Md", 10)]:
    pdfmetrics.registerFont(TTFont(n, HNP, subfontIndex=i))
pdfmetrics.registerFont(TTFont("Mono", "/System/Library/Fonts/SFNSMono.ttf"))

W, H = A4
L, R = 42.0, 42.0
FULL_W = W - L - R                 # 511.28
MAIN_X, MAIN_W = 42.0, 322.0
SIDE_X, SIDE_W = 392.0, 161.0
DIV_X = 377.0

INK    = HexColor("#15202B")
BODY   = HexColor("#2B3A47")
MUTED  = HexColor("#6B7A88")
ACCENT = HexColor("#0E7490")
RULE   = HexColor("#D7DEE3")
PANEL  = HexColor("#EEF6F8")

import os, sys
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "cv.pdf")
c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("Roy Bar — Solutions Engineering Team Lead — CV")
c.setAuthor("Roy Bar")


def wrap(text, font, size, width):
    lines, cur = [], ""
    for word in text.split():
        trial = (cur + " " + word).strip()
        if pdfmetrics.stringWidth(trial, font, size) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def para(text, x, y, w, font="HN", size=8.4, lead=10.6, color=BODY):
    c.setFillColor(color)
    c.setFont(font, size)
    for ln in wrap(text, font, size, w):
        c.drawString(x, y, ln)
        y -= lead
    return y


def section(title, x, y, w, color=ACCENT):
    c.setFillColor(color)
    t = c.beginText(x, y)
    t.setFont("Mono", 7.0)
    t.setCharSpace(1.6)
    t.textOut(title.upper())
    t.setCharSpace(0)              # reset so Tc does not leak
    c.drawText(t)
    y -= 5.5
    c.setStrokeColor(RULE)
    c.setLineWidth(0.5)
    c.line(x, y, x + w, y)
    return y - 10.5


def entry_h(lead, rest, w, size=8.4, leadng=10.6):
    """Height of a bold-lead-in paragraph, without drawing it."""
    off = pdfmetrics.stringWidth(lead + " ", "HN-Bd", size)
    first = wrap(rest, "HN", size, w - off)
    if not first:
        return leadng
    remaining = " ".join(rest.split()[len(first[0].split()):])
    n = 1 + (len(wrap(remaining, "HN", size, w)) if remaining.strip() else 0)
    return n * leadng


def entry(lead, rest, x, y, w, size=8.4, leadng=10.6):
    c.setFillColor(INK)
    c.setFont("HN-Bd", size)
    c.drawString(x, y, lead)
    off = pdfmetrics.stringWidth(lead + " ", "HN-Bd", size)
    first = wrap(rest, "HN", size, w - off)
    c.setFillColor(BODY)
    c.setFont("HN", size)
    if first:
        c.drawString(x + off, y, first[0])
    y -= leadng
    remaining = " ".join(rest.split()[len(first[0].split()):]) if first else rest
    if remaining.strip():
        y = para(remaining, x, y, w, size=size, lead=leadng)
    return y


# ----------------------------------------------------------------- header
y = H - 46
c.setFillColor(INK)
c.setFont("HN-Bd", 25)
c.drawString(L, y, "Roy Bar")
y -= 16
c.setFillColor(ACCENT)
c.setFont("HN-Md", 12)
c.drawString(L, y, "Solutions Engineering Team Lead")
y -= 14
c.setFillColor(MUTED)
c.setFont("HN-It", 9)
c.drawString(L, y, "I build the tools other people click — and lately, the agents that test them.")
y -= 14
c.setFillColor(BODY)
c.setFont("Mono", 7.8)
c.drawString(L, y, "Tel Aviv, Israel · 050-679-7973 · roy.bar134@gmail.com")
y -= 10
c.drawString(L, y, "roy-bar-dev.vercel.app · linkedin.com/in/roybarlinked · github.com/Roy-Bar")
y -= 16

y = para(
    "Six years building multi-brand e-commerce platforms — React and Next.js storefronts, the operator tools "
    "behind them, and the C#/.NET services they run on. I specialise in the systems non-engineers operate: "
    "experimentation, content targeting, and the backoffice systems behind catalog, pricing and merchandising. "
    "Now leading Solutions Engineering — and spending as much time building agents and AI tooling as features.",
    L, y, FULL_W, size=8.8, lead=11.6, color=BODY)
y -= 10

c.setStrokeColor(RULE)
c.setLineWidth(0.5)
c.line(L, y, W - R, y)
split_top = y - 18

# column divider
c.setStrokeColor(RULE)
c.setLineWidth(0.5)
c.line(DIV_X, split_top + 10, DIV_X, 44)

# ------------------------------------------------------------- main column
AI = [
    ("Claude Code —", "My daily driver. Agentic development as the normal workflow — custom skills, hooks and "
     "subagents, with MCP servers wired into the tools we already use."),
    ("Autonomous UI QA agent —", "Drives the product in a real browser, walks the critical flows and reports "
     "regressions with screenshots."),
    ("Cross-repo knowledge graph —", "AST-derived graph across 20 services with semantic search, so "
     "“where is this used?” is a query rather than an afternoon of grepping."),
    ("Agent-maintained runbooks —", "Our release and QA procedures encoded as reusable agent instructions — "
     "which the agents then update after each run, so the next one starts smarter."),
]

PAD = 9.0
# Height from the same code path that renders it, so the panel can't drift.
_probe = split_top
_probe = _probe - 16.0                                   # section label + rule + gap
for a, b in AI:
    _probe -= entry_h(a, b, MAIN_W - 2 * PAD) + 2.2
panel_top = split_top + 12
panel_h = (split_top + 12) - (_probe - 2.0)
c.setFillColor(PANEL)
c.roundRect(MAIN_X - PAD, panel_top - panel_h, MAIN_W + 2 * PAD, panel_h, 5, stroke=0, fill=1)

my = section("AI & agentic engineering", MAIN_X, split_top, MAIN_W)
for a, b in AI:
    my = entry(a, b, MAIN_X, my, MAIN_W - 2 * PAD)
    my -= 2.2
assert abs(my - _probe) < 0.01, "panel height model drifted: %.2f vs %.2f" % (my, _probe)
my -= 12

BUILD = [
    ("Experimentation platforms —", "A/B testing end to end: dashboard, setup wizard, traffic allocation, "
     "GrowthBook integration, and a results page that reads the statistics back in."),
    ("Content targeting —", "Audience, geography, device and cart-based page targeting; variant priority, "
     "drafts and publishing; optimistic locking so two editors can't overwrite each other."),
    ("Storefront platforms —", "Category, product, cart and checkout for eight brands across multiple markets "
     "— a legacy storefront, the Next.js platform that replaced it, and the .NET APIs retiring what's left."),
    ("Backoffice systems —", "The admin side of commerce: catalog and pricing operations, multi-currency "
     "overrides, crossed-price validation and draft/publish workflows — plus the C# services behind them."),
    ("Design systems —", "Design tokens and per-brand theming that turn diverging brands into configuration "
     "instead of code paths."),
    ("Measurement —", "GA4 and a Tag Manager data layer built from scratch, an event taxonomy across the "
     "funnel, SEO structured data and client-side observability."),
    ("International commerce —", "Server-side geo-localisation, locale and currency selection, per-market "
     "configuration — the work that opens new markets."),
]
my = section("What I build", MAIN_X, my, MAIN_W)
for a, b in BUILD:
    my = entry(a, b, MAIN_X, my, MAIN_W)
    my -= 2.2
my -= 12

my = section("Experience", MAIN_X, my, MAIN_W)
c.setFillColor(INK)
c.setFont("HN-Bd", 9.6)
c.drawString(MAIN_X, my, "Tenengroup")
c.setFillColor(MUTED)
c.setFont("Mono", 7.4)
c.drawRightString(MAIN_X + MAIN_W, my, "Tel Aviv · Feb 2020 – Present")
my -= 11
my = para("Multi-brand DTC e-commerce group — eight brands, multi-market, millions of sessions "
          "a month. Storefronts, content platform and backoffice all built in house.",
          MAIN_X, my, MAIN_W, size=8.0, lead=10.2, color=MUTED)
my -= 6

ROLES = [
    ("Solutions Engineering Team Lead", "Oct 2026 – Present",
     "Lead a new engineering team that owns the business's technical requests across every brand. The goal is "
     "a faster and smaller queue — AI-assisted triage, automation, fixes at source and self-service."),
    ("Software Engineer", "Sep 2021 – Oct 2026",
     "Owned three product areas end to end across a React admin app, a Next.js storefront and three .NET "
     "services. De-facto frontend reviewer and author of the user guides."),
    ("Technical Solution Engineer", "May 2020 – Sep 2021",
     "Production SQL, .NET automation and Kibana dashboards for e-commerce operations across ~12 country sites. "
     "Integrated the CRM and lifecycle-messaging stack — email, SMS, referral, reviews — plus "
     "order-management and customer-care tooling."),
    ("QA Specialist (part-time)", "Feb – May 2020",
     "How I learned the system I'd spend the next six years building."),
]
for title, period, text in ROLES:
    c.setFillColor(ACCENT)
    c.setFont("HN-Md", 8.8)
    c.drawString(MAIN_X, my, title)
    c.setFillColor(MUTED)
    c.setFont("Mono", 7.2)
    c.drawRightString(MAIN_X + MAIN_W, my, period)
    my -= 10.5
    my = para(text, MAIN_X, my, MAIN_W, size=8.2, lead=10.3)
    my -= 6.5

# ------------------------------------------------------------- side column
SIDE_BLOCKS = [
    ("Frontend",       [("", "React · Next.js · TypeScript · MUI · Tailwind · SCSS")]),
    ("Backend",        [("", "C# · .NET · Node.js · SQL · REST")]),
    ("AI",             [("", "Claude Code · MCP · RAG · knowledge graphs · agent design")]),
    ("Experimentation",[("", "GrowthBook · Dynamic Yield · GA4 · Tag Manager")]),
    ("Observability",  [("", "Datadog RUM · Elasticsearch · Kibana")]),
    ("Commerce",       [("", "Multi-currency · i18n · cart & checkout · SEO")]),
    ("Backoffice",     [("", "Admin tooling · CRM & lifecycle messaging · order management")]),
    ("Tooling",        [("", "Git · Vite · Jest · Figma")]),
    ("Education",      [("B.Sc. Computer Science", "Holon Institute of Technology · 2016–2019 · 86 average. "
                                                   "Electives in computer vision and machine learning.")]),
    ("Languages",      [("", "Hebrew · English")]),
    ("Service",        [("", "401st Brigade, Armored Corps · 2011–2014.")]),
    ("Off the clock",  [("Tiny Bites", "A feeding and sleep tracker for new parents. I built it because we needed "
                                       "one; it's live, free for anyone to use, and the source is public. "
                                       "tiny-bites-57104.web.app")]),
]

SS, SL = 7.9, 10.2


def side_block_h(title, items):
    h = 16.0                                   # section label + rule + gap
    for head, text in items:
        if head:
            h += 10.0
        h += len(wrap(text, "HN", SS, SIDE_W)) * SL
    return h


measured = [side_block_h(t, it) for t, it in SIDE_BLOCKS]
side_top = split_top
avail = side_top - 48.0                        # down to the bottom margin
slack = avail - sum(measured)
gap = max(5.0, slack / max(1, len(SIDE_BLOCKS) - 1))

sy = side_top
for idx, ((title, items), h) in enumerate(zip(SIDE_BLOCKS, measured)):
    sy = section(title, SIDE_X, sy, SIDE_W)
    for head, text in items:
        if head:
            c.setFillColor(INK)
            c.setFont("HN-Bd", SS)
            c.drawString(SIDE_X, sy, head)
            sy -= 10.0
        sy = para(text, SIDE_X, sy, SIDE_W, size=SS, lead=SL, color=BODY)
    if idx < len(SIDE_BLOCKS) - 1:
        sy -= gap

print("main column bottom  : %.1f" % my)
print("side column bottom  : %.1f" % sy)
print("slack distributed   : %.1f pt over %d gaps (gap=%.1f)" % (slack, len(SIDE_BLOCKS) - 1, gap))
low = min(my, sy)
print("FITS (>=40)" if low >= 40 else "OVERFLOW by %.1f" % (40 - low))
c.showPage()
c.save()
print("wrote", OUT)
