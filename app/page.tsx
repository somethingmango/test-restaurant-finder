'use client';

import React, { useMemo, useState } from 'react';
import { RESTAURANTS, type MenuItem, type Restaurant } from './data/restaurants';

function normalize(input: string) {
  return input.trim().toLowerCase();
}

function scoreItem(item: MenuItem) {
  return Number(((item.protein / item.calories) * 100).toFixed(1));
}

function smartRank(items: MenuItem[]) {
  return [...items]
    .sort((a, b) => {
      const scoreA = scoreItem(a) * 10 + a.protein * 0.8 - a.calories * 0.01;
      const scoreB = scoreItem(b) * 10 + b.protein * 0.8 - b.calories * 0.01;
      return scoreB - scoreA;
    })
    .slice(0, 5);
}

const chainSuggestions = [
  'Chipotle',
  'Taco Bell',
  'Burger King',
  'Wendy’s',
  'McDonald’s',
  'Chick-fil-A',
  'Panera',
  'Starbucks',
  'Dunkin’',
  'Subway',
  'Chili’s',
  'Cheesecake Factory',
];

export default function Page() {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('Chipotle');
  const [maxCalories, setMaxCalories] = useState(700);
  const [minProtein, setMinProtein] = useState(20);

  const normalizedQuery = normalize(submittedQuery);

  const restaurant = useMemo<Restaurant | undefined>(() => {
    return RESTAURANTS.find((r) =>
      r.aliases.some(
        (alias) =>
          alias.includes(normalizedQuery) || normalizedQuery.includes(alias)
      )
    );
  }, [normalizedQuery]);

  const results = useMemo<MenuItem[]>(() => {
    const baseItems = restaurant
      ? restaurant.items
      : RESTAURANTS.flatMap((r) =>
          r.items
            .filter((item) => {
              const haystack = normalize(
                `${r.name} ${item.name} ${item.description} ${item.tags.join(
                  ' '
                )}`
              );

              return haystack.includes(normalizedQuery);
            })
            .map((item) => ({
              ...item,
              name: `${r.name}: ${item.name}`,
            }))
        );

    const filteredItems = baseItems
      .filter((item) => item.calories <= maxCalories)
      .filter((item) => item.protein >= minProtein);

    return smartRank(filteredItems);
  }, [restaurant, normalizedQuery, maxCalories, minProtein]);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedQuery(query || 'Chipotle');
  }

  function pickSuggestion(chain: string) {
    setQuery(chain);
    setSubmittedQuery(chain);
  }

  const displayTitle = restaurant
    ? restaurant.name
    : `Search results for “${submittedQuery}”`;

  const displayNote = restaurant
    ? restaurant.note
    : 'Searching across all hard-coded restaurant items.';

  return (
    <main className="page">
      <div className="orb orbOne" />
      <div className="orb orbTwo" />
      <div className="orb orbThree" />

      <section className="shell">
        <header className="hero">
          <div className="eyebrow">Fast food, but make it strategic.</div>
          <h1>Skinny Mango’s</h1>
          <p className="tagline">Healthy Food Finder</p>
          <p className="subtag">
            Search restaurant chains and find lower-calorie, higher-protein
            options that still feel worth ordering.
          </p>
        </header>

        <section className="searchGlass">
          <form className="searchForm" onSubmit={handleSearch}>
            <div className="searchInputWrap">
              <span className="searchIcon">⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search restaurants, like McDonald’s or Chili’s"
                className="searchInput"
              />
            </div>

            <button className="searchButton" type="submit">
              Search
            </button>
          </form>

          <div className="suggestions">
            {chainSuggestions.map((chain) => (
              <button
                key={chain}
                type="button"
                className="chip"
                onClick={() => pickSuggestion(chain)}
              >
                {chain}
              </button>
            ))}
          </div>
        </section>

        <section className="filterGlass">
          <div className="filterHeader">
            <div>
              <h2>Fine tune your picks</h2>
              <p>Raise calories to unlock bigger entrées. Raise protein to get stricter.</p>
            </div>
            <div className="miniPill">
              Ranked by protein-per-calorie
            </div>
          </div>

          <div className="filters">
            <label className="sliderCard">
              <div className="sliderTop">
                <span>Max calories</span>
                <strong>{maxCalories}</strong>
              </div>
              <input
                type="range"
                min="250"
                max="1500"
                step="50"
                value={maxCalories}
                onChange={(e) => setMaxCalories(Number(e.target.value))}
              />
            </label>

            <label className="sliderCard">
              <div className="sliderTop">
                <span>Minimum protein</span>
                <strong>{minProtein}g</strong>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="5"
                value={minProtein}
                onChange={(e) => setMinProtein(Number(e.target.value))}
              />
            </label>
          </div>
        </section>

        <section className="resultHeader glassCard">
          <div>
            <p className="resultKicker">Now searching</p>
            <h2>{displayTitle}</h2>
            <p>{displayNote}</p>
          </div>
          <div className="countBubble">{results.length} picks</div>
        </section>

        <section className="results">
          {results.map((item, index) => (
            <article key={`${item.name}-${index}`} className="resultCard">
              <div className="rankBadge">#{index + 1}</div>

              <div className="resultMain">
                <div className="resultMeta">
                  <span>Best match</span>
                  <span>•</span>
                  <span>{scoreItem(item)} protein score</span>
                </div>

                <h3>{item.name}</h3>

                <div className="tagRow">
                  {item.tags.slice(0, 5).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <p className="description">{item.description}</p>

                <div className="orderBox">
                  <strong>How to order it</strong>
                  <p>{item.customization}</p>
                </div>

                <p className="sourceLine">Source: {item.source}</p>
              </div>

              <div className="metrics">
                <div className="metricBubble">
                  <strong>{item.calories}</strong>
                  <span>calories</span>
                </div>
                <div className="metricBubble">
                  <strong>{item.protein}g</strong>
                  <span>protein</span>
                </div>
                <div className="metricBubble">
                  <strong>{scoreItem(item)}</strong>
                  <span>score</span>
                </div>
              </div>
            </article>
          ))}

          {results.length === 0 && (
            <section className="empty glassCard">
              <h2>No options match those filters</h2>
              <p>
                Try another chain, raise max calories, or lower minimum protein.
              </p>
            </section>
          )}
        </section>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          color: #1f2937;
          background:
            radial-gradient(circle at 15% 10%, rgba(255, 214, 102, 0.9), transparent 28%),
            radial-gradient(circle at 82% 12%, rgba(244, 114, 182, 0.5), transparent 30%),
            radial-gradient(circle at 50% 90%, rgba(59, 130, 246, 0.45), transparent 34%),
            linear-gradient(135deg, #fff7ed 0%, #f5d0fe 42%, #dbeafe 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding: 34px 20px 70px;
        }

        .page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(8px);
          opacity: .65;
          pointer-events: none;
        }

        .orbOne {
          width: 220px;
          height: 220px;
          background: rgba(255, 255, 255, .45);
          top: 90px;
          left: -60px;
        }

        .orbTwo {
          width: 260px;
          height: 260px;
          background: rgba(22, 163, 74, .2);
          right: -90px;
          top: 240px;
        }

        .orbThree {
          width: 190px;
          height: 190px;
          background: rgba(124, 58, 237, .18);
          left: 20%;
          bottom: 80px;
        }

        .shell {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          padding: 24px 0 26px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.42);
          border: 1px solid rgba(255,255,255,.58);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.7), 0 12px 30px rgba(88,28,135,.12);
          backdrop-filter: blur(18px);
          color: #6d28d9;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: .2px;
          margin-bottom: 14px;
        }

        h1 {
          font-size: clamp(54px, 9vw, 112px);
          line-height: .86;
          margin: 0;
          letter-spacing: -5px;
          color: rgba(255,255,255,.92);
          -webkit-text-stroke: 2px rgba(109, 40, 217, .8);
          text-shadow:
            0 10px 30px rgba(109,40,217,.2),
            inset 0 1px 0 rgba(255,255,255,.9);
        }

        .tagline {
          margin: 16px 0 0;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 950;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #3b0764;
        }

        .subtag {
          margin: 10px auto 0;
          max-width: 720px;
          font-size: 18px;
          line-height: 1.5;
          color: rgba(55, 65, 81, .78);
        }

        .searchGlass,
        .filterGlass,
        .glassCard,
        .resultCard {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, .66),
            rgba(255, 255, 255, .32)
          );
          border: 1px solid rgba(255, 255, 255, .74);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.86),
            0 24px 70px rgba(88, 28, 135, .16);
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
        }

        .searchGlass {
          border-radius: 34px;
          overflow: hidden;
        }

        .searchForm {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 14px;
          padding: 20px;
          border-bottom: 1px solid rgba(255,255,255,.55);
        }

        .searchInputWrap {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 62px;
          border-radius: 999px;
          padding: 0 18px 0 22px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(255,255,255,.9);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 10px 28px rgba(76, 29, 149, .08);
        }

        .searchIcon {
          font-size: 24px;
          color: #7c3aed;
          font-weight: 900;
        }

        .searchInput {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #111827;
          font-size: 21px;
          font-weight: 700;
        }

        .searchInput::placeholder {
          color: rgba(107, 114, 128, .72);
          font-weight: 600;
        }

        .searchButton {
          min-width: 138px;
          border: none;
          border-radius: 999px;
          padding: 0 28px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          font-size: 18px;
          font-weight: 950;
          cursor: pointer;
          box-shadow:
            0 16px 30px rgba(22,163,74,.28),
            inset 0 1px 0 rgba(255,255,255,.35);
          transition: transform .18s ease, box-shadow .18s ease;
        }

        .searchButton:hover {
          transform: translateY(-1px);
          box-shadow:
            0 18px 38px rgba(22,163,74,.34),
            inset 0 1px 0 rgba(255,255,255,.35);
        }

        .suggestions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          padding: 18px 22px 22px;
        }

        .chip {
          border: 1px solid rgba(124,58,237,.18);
          background: rgba(255,255,255,.48);
          color: #5b21b6;
          border-radius: 999px;
          padding: 10px 15px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
          transition: transform .18s ease, background .18s ease;
        }

        .chip:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,.72);
        }

        .filterGlass {
          border-radius: 28px;
          padding: 20px;
          margin: 22px 0 18px;
        }

        .filterHeader {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .filterHeader h2 {
          margin: 0;
          font-size: 22px;
          color: #3b0764;
          letter-spacing: -.4px;
        }

        .filterHeader p {
          margin: 5px 0 0;
          color: rgba(75, 85, 99, .82);
          line-height: 1.45;
        }

        .miniPill {
          white-space: nowrap;
          border-radius: 999px;
          background: rgba(220,252,231,.72);
          border: 1px solid rgba(22,163,74,.22);
          color: #166534;
          font-size: 12px;
          font-weight: 950;
          padding: 9px 12px;
        }

        .filters {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .sliderCard {
          border-radius: 22px;
          background: rgba(255,255,255,.48);
          border: 1px solid rgba(255,255,255,.68);
          padding: 16px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
        }

        .sliderTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .sliderTop span {
          color: #6b21a8;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .6px;
        }

        .sliderTop strong {
          color: #111827;
          font-size: 22px;
          font-weight: 950;
        }

        input[type='range'] {
          width: 100%;
          accent-color: #16a34a;
          cursor: pointer;
        }

        .resultHeader {
          border-radius: 28px;
          padding: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 18px;
        }

        .resultKicker {
          margin: 0 0 4px;
          color: #7c3aed;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .9px;
        }

        .resultHeader h2 {
          margin: 0;
          color: #111827;
          font-size: 30px;
          letter-spacing: -.8px;
        }

        .resultHeader p:last-child {
          margin: 6px 0 0;
          color: rgba(75,85,99,.84);
          line-height: 1.45;
        }

        .countBubble {
          min-width: 96px;
          text-align: center;
          border-radius: 999px;
          padding: 12px 14px;
          background: rgba(220,252,231,.78);
          border: 1px solid rgba(22,163,74,.24);
          color: #166534;
          font-weight: 950;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
        }

        .results {
          display: grid;
          gap: 18px;
        }

        .resultCard {
          position: relative;
          border-radius: 32px;
          padding: 22px;
          display: grid;
          grid-template-columns: 1fr 230px;
          gap: 22px;
          overflow: hidden;
        }

        .resultCard::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,.65), transparent 34%),
            radial-gradient(circle at bottom right, rgba(22,163,74,.11), transparent 36%);
          pointer-events: none;
        }

        .rankBadge {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(255,255,255,.86);
          color: #6d28d9;
          font-weight: 950;
          box-shadow: 0 8px 22px rgba(76,29,149,.12);
          z-index: 2;
        }

        .resultMain,
        .metrics {
          position: relative;
          z-index: 1;
        }

        .resultMeta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #16a34a;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .7px;
          margin-bottom: 10px;
        }

        .resultMain h3 {
          margin: 0;
          max-width: 760px;
          color: #111827;
          font-size: clamp(25px, 3.5vw, 38px);
          line-height: 1.02;
          letter-spacing: -1.2px;
        }

        .tagRow {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 15px 0 0;
        }

        .tagRow span {
          border-radius: 999px;
          padding: 7px 10px;
          background: rgba(255,255,255,.56);
          border: 1px solid rgba(124,58,237,.14);
          color: #6d28d9;
          font-size: 12px;
          font-weight: 900;
        }

        .description {
          margin: 18px 0 0;
          color: rgba(55,65,81,.88);
          font-size: 16px;
          line-height: 1.55;
        }

        .orderBox {
          margin-top: 16px;
          border-radius: 22px;
          padding: 16px;
          background: rgba(220,252,231,.55);
          border: 1px solid rgba(22,163,74,.22);
          color: #14532d;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.6);
        }

        .orderBox strong {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: .7px;
        }

        .orderBox p {
          margin: 0;
          line-height: 1.5;
        }

        .sourceLine {
          margin: 14px 0 0;
          color: rgba(107,114,128,.76);
          font-size: 12px;
          font-weight: 700;
        }

        .metrics {
          display: grid;
          gap: 12px;
          align-content: center;
          padding-right: 44px;
        }

        .metricBubble {
          border-radius: 26px;
          padding: 18px;
          text-align: center;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(255,255,255,.76);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.85),
            0 12px 26px rgba(76,29,149,.08);
        }

        .metricBubble strong {
          display: block;
          color: #111827;
          font-size: 34px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .metricBubble span {
          display: block;
          margin-top: 7px;
          color: rgba(75,85,99,.76);
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .empty {
          border-radius: 30px;
          padding: 42px;
          text-align: center;
        }

        .empty h2 {
          margin: 0;
          color: #111827;
          font-size: 28px;
        }

        .empty p {
          margin: 10px 0 0;
          color: rgba(75,85,99,.82);
        }

        @media (max-width: 820px) {
          .page {
            padding: 24px 14px 50px;
          }

          h1 {
            letter-spacing: -3px;
          }

          .searchForm {
            grid-template-columns: 1fr;
          }

          .searchButton {
            min-height: 56px;
          }

          .filterHeader,
          .resultHeader {
            flex-direction: column;
            align-items: stretch;
          }

          .miniPill,
          .countBubble {
            width: fit-content;
          }

          .filters {
            grid-template-columns: 1fr;
          }

          .resultCard {
            grid-template-columns: 1fr;
          }

          .metrics {
            grid-template-columns: repeat(3, 1fr);
            padding-right: 0;
          }

          .rankBadge {
            top: 14px;
            right: 14px;
          }
        }

        @media (max-width: 560px) {
          .searchInput {
            font-size: 17px;
          }

          .resultHeader h2 {
            font-size: 25px;
          }

          .metrics {
            grid-template-columns: 1fr;
          }

          .metricBubble strong {
            font-size: 28px;
          }
        }
      `}</style>
    </main>
  );
}