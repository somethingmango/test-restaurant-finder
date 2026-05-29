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

function formatTag(tag: string) {
  return tag
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function tagTone(tag: string) {
  const normalizedTag = normalize(tag);

  if (
    normalizedTag.includes('high protein') ||
    normalizedTag.includes('highest protein') ||
    normalizedTag.includes('lower calorie') ||
    normalizedTag.includes('lowest calorie')
  ) {
    return 'positive';
  }

  if (
    normalizedTag.includes('high calorie') ||
    normalizedTag.includes('low protein')
  ) {
    return 'caution';
  }

  if (
    normalizedTag.includes('has ') ||
    normalizedTag.includes('filling') ||
    normalizedTag.includes('bacon')
  ) {
    return 'ingredient';
  }

  return 'neutral';
}

function sliderBackground(
  value: number,
  min: number,
  max: number,
  fill: string,
  rest: string
) {
  const percentage = ((value - min) / (max - min)) * 100;
  return `linear-gradient(90deg, ${fill} 0%, ${fill} ${percentage}%, ${rest} ${percentage}%, ${rest} 100%)`;
}

function calorieMood(maxCalories: number) {
  if (maxCalories <= 500) return 'Light, but still trying to have a personality.';
  if (maxCalories <= 800) return 'Flexible enough for real food.';
  return 'Big entree energy. We can work with this.';
}

function proteinMood(minProtein: number) {
  if (minProtein >= 45) return 'The protein is protein-ing.';
  if (minProtein >= 25) return 'Actually pretty solid.';
  return 'Casual mode. No spreadsheet behavior.';
}

export default function Page() {
  const [selectedRestaurantName, setSelectedRestaurantName] =
    useState('Chipotle');
  const [maxCalories, setMaxCalories] = useState(700);
  const [minProtein, setMinProtein] = useState(20);
  const [restaurantSort, setRestaurantSort] = useState<'featured' | 'az'>(
    'featured'
  );

  const restaurant = useMemo<Restaurant | undefined>(() => {
    return RESTAURANTS.find(
      (r) => normalize(r.name) === normalize(selectedRestaurantName)
    );
  }, [selectedRestaurantName]);

  const results = useMemo<MenuItem[]>(() => {
    const baseItems = restaurant ? restaurant.items : [];

    const filteredItems = baseItems
      .filter((item) => item.calories <= maxCalories)
      .filter((item) => item.protein >= minProtein);

    return smartRank(filteredItems);
  }, [restaurant, maxCalories, minProtein]);

  const visibleRestaurants = useMemo(() => {
    if (restaurantSort === 'az') {
      return [...RESTAURANTS].sort((a, b) => a.name.localeCompare(b.name));
    }

    return RESTAURANTS;
  }, [restaurantSort]);

  const displayTitle = restaurant ? restaurant.name : selectedRestaurantName;
  const displayNote = restaurant?.note || 'Pick a restaurant to get started.';
  const maxCaloriesMin = 250;
  const maxCaloriesMax = 1500;
  const minProteinMin = 0;
  const minProteinMax = 90;

  return (
    <main className="page">
      <section className="shell">
        <header className="hero">
          <div className="eyebrow">Like, fast food, but make it skinny.</div>
          <h1>
            <img
              className="mangoMark"
              src="/mango-logo.png?v=2"
              alt=""
              aria-hidden="true"
            />
            Skinny Mango
          </h1>
          <p className="tagline">Healthy Food Finder</p>
          <p className="subtag">
            Pick a chain and find lower-calorie, higher-protein options that
            still feel worth ordering.
          </p>
        </header>

        <section className="pickerGlass">
          <div className="sectionHeader">
            <div>
              <p className="sectionKicker">Pick your restaurant</p>
              <h2>Hack your menu</h2>
            </div>
            <div className="pickerActions">
              <label className="sortControl">
                <span>Sort</span>
                <select
                  value={restaurantSort}
                  onChange={(event) =>
                    setRestaurantSort(event.target.value as 'featured' | 'az')
                  }
                  aria-label="Sort restaurants"
                >
                  <option value="featured">Featured</option>
                  <option value="az">A-Z</option>
                </select>
              </label>
              <div className="miniPill">{RESTAURANTS.length} chains</div>
            </div>
          </div>

          <div className="restaurantGrid">
            {visibleRestaurants.map((chain) => {
              const selected = chain.name === selectedRestaurantName;

              return (
                <button
                  key={chain.name}
                  type="button"
                  className={`restaurantChip ${selected ? 'selected' : ''}`}
                  onClick={() => setSelectedRestaurantName(chain.name)}
                  aria-pressed={selected}
                >
                  <span>{chain.name}</span>
                  <small>{chain.items.length} picks</small>
                </button>
              );
            })}
          </div>
        </section>

        <section className="filterGlass">
          <div className="sectionHeader filterHeader">
            <div>
              <p className="sectionKicker">Fine tune your picks</p>
              <h2>Set your meal vibe</h2>
              <p>
                Raise calories for bigger entrees. Raise protein when you want
                the shortlist to work harder.
              </p>
            </div>
            <div className="miniPill">Ranked by protein efficiency</div>
          </div>

          <div className="filters">
            <label className="sliderCard calorieSlider">
              <div className="sliderTop">
                <span>Max calories</span>
                <strong>{maxCalories}</strong>
              </div>
              <p>{calorieMood(maxCalories)}</p>
              <input
                type="range"
                min={maxCaloriesMin}
                max={maxCaloriesMax}
                step="50"
                value={maxCalories}
                style={{
                  background: sliderBackground(
                    maxCalories,
                    maxCaloriesMin,
                    maxCaloriesMax,
                    '#f59e0b',
                    'rgba(255, 255, 255, 0.62)'
                  ),
                }}
                onChange={(e) => setMaxCalories(Number(e.target.value))}
              />
            </label>

            <label className="sliderCard proteinSlider">
              <div className="sliderTop">
                <span>Minimum protein</span>
                <strong>{minProtein}g</strong>
              </div>
              <p>{proteinMood(minProtein)}</p>
              <input
                type="range"
                min={minProteinMin}
                max={minProteinMax}
                step="5"
                value={minProtein}
                style={{
                  background: sliderBackground(
                    minProtein,
                    minProteinMin,
                    minProteinMax,
                    '#16a34a',
                    'rgba(255, 255, 255, 0.62)'
                  ),
                }}
                onChange={(e) => setMinProtein(Number(e.target.value))}
              />
            </label>
          </div>
        </section>

        <section className="resultHeader glassCard">
          <div>
            <p className="sectionKicker">Best bets right now</p>
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
                  <span className="scoreWithInfo">
                    {scoreItem(item)} protein score
                    <span className="infoWrap">
                      <button
                        type="button"
                        className="infoButton"
                        aria-label="Protein score explanation"
                      >
                        i
                      </button>
                      <span className="scoreTooltip" role="tooltip">
                        Protein score compares protein to calories. Higher
                        means more protein for fewer calories.
                      </span>
                    </span>
                  </span>
                </div>

                <h3>{item.name}</h3>

                <div className="tagRow">
                  {item.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className={`tagBadge ${tagTone(tag)}`}>
                      {formatTag(tag)}
                    </span>
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
                <div className="metricBubble calories">
                  <strong>{item.calories}</strong>
                  <span>calories</span>
                </div>
                <div className="metricBubble protein">
                  <strong>{item.protein}g</strong>
                  <span>protein</span>
                </div>
                <div className="metricBubble score">
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
            radial-gradient(circle at 12% 10%, rgba(255, 214, 102, 0.78), transparent 31%),
            radial-gradient(circle at 85% 14%, rgba(244, 114, 182, 0.44), transparent 32%),
            radial-gradient(circle at 50% 92%, rgba(59, 130, 246, 0.38), transparent 36%),
            linear-gradient(135deg, #fff7ed 0%, #f5d0fe 44%, #dbeafe 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding: 30px 16px 64px;
        }

        .page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.22) 1px, transparent 1px);
          background-size: 46px 46px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
          pointer-events: none;
        }

        .shell {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          padding: 18px 0 24px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.46);
          border: 1px solid rgba(255, 255, 255, 0.58);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            0 12px 30px rgba(88, 28, 135, 0.12);
          backdrop-filter: blur(18px);
          color: #6d28d9;
          font-weight: 900;
          font-size: 13px;
          margin-bottom: 14px;
        }

        h1 {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          font-size: 72px;
          line-height: 0.9;
          margin: 0;
          color: #ffffff;
          -webkit-text-stroke: 3px rgba(109, 40, 217, 0.86);
          text-shadow:
            0 4px 0 rgba(109, 40, 217, 0.22),
            0 14px 34px rgba(109, 40, 217, 0.24);
        }

        .mangoMark {
          width: 128px;
          height: 148px;
          flex: 0 0 auto;
          object-fit: contain;
          overflow: visible;
          filter: drop-shadow(0 14px 20px rgba(109, 40, 217, 0.22));
        }

        .mangoBodyStroke,
        .mangoLeafStroke {
          fill: none;
          stroke: #6f43d6;
          stroke-linejoin: round;
          stroke-linecap: round;
        }

        .mangoBodyStroke {
          stroke-width: 16;
        }

        .mangoLeafStroke {
          stroke-width: 14;
        }

        .mangoBodyFill {
          fill: url(#mangoBody);
        }

        .mangoBodyGlow {
          fill: url(#bodyGlow);
        }

        .mangoBodyShade {
          fill: url(#bodyShade);
        }

        .mangoInnerRim {
          fill: none;
          stroke: rgba(255, 247, 204, 0.92);
          stroke-width: 7;
          stroke-linecap: round;
        }

        .mangoLeafFill {
          fill: url(#mangoLeaf);
        }

        .mangoLeafHighlight {
          fill: url(#leafShine);
        }

        .mangoWink,
        .mangoSmile {
          fill: none;
          stroke: #581c87;
          stroke-width: 8;
          stroke-linecap: round;
        }

        .mangoEye {
          fill: #581c87;
        }

        .mangoCheek {
          fill: rgba(251, 113, 133, 0.76);
        }

        .tagline {
          margin: 16px 0 0;
          font-size: 28px;
          font-weight: 950;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #3b0764;
        }

        .subtag {
          margin: 10px auto 0;
          max-width: 720px;
          font-size: 18px;
          line-height: 1.5;
          color: rgba(55, 65, 81, 0.78);
        }

        .pickerGlass,
        .filterGlass,
        .glassCard,
        .resultCard {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.68),
            rgba(255, 255, 255, 0.34)
          );
          border: 1px solid rgba(255, 255, 255, 0.74);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.86),
            0 24px 70px rgba(88, 28, 135, 0.16);
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
        }

        .pickerGlass {
          border-radius: 30px;
          padding: 20px;
          overflow: hidden;
        }

        .sectionHeader {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .sectionKicker {
          margin: 0 0 5px;
          color: #7c3aed;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.9px;
        }

        .sectionHeader h2 {
          margin: 0;
          color: #111827;
          font-size: 26px;
          line-height: 1.08;
        }

        .sectionHeader p:last-child {
          margin: 6px 0 0;
          color: rgba(75, 85, 99, 0.84);
          line-height: 1.45;
        }

        .miniPill {
          white-space: nowrap;
          border-radius: 999px;
          background: rgba(220, 252, 231, 0.72);
          border: 1px solid rgba(22, 163, 74, 0.22);
          color: #166534;
          font-size: 12px;
          font-weight: 950;
          padding: 9px 12px;
        }

        .pickerActions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          flex-wrap: wrap;
        }

        .sortControl {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 7px 8px 7px 13px;
          background: rgba(255, 255, 255, 0.58);
          border: 1px solid rgba(124, 58, 237, 0.16);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.74);
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }

        .sortControl select {
          border: none;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.78);
          color: #111827;
          font: inherit;
          text-transform: none;
          letter-spacing: 0;
          padding: 7px 28px 7px 10px;
          outline: none;
          cursor: pointer;
        }

        .restaurantGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .restaurantChip {
          min-height: 72px;
          border: 1px solid rgba(124, 58, 237, 0.16);
          background: rgba(255, 255, 255, 0.48);
          color: #312e81;
          border-radius: 20px;
          padding: 13px 14px;
          text-align: left;
          cursor: pointer;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease;
        }

        .restaurantChip:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.72);
        }

        .restaurantChip.selected {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.92), rgba(22, 163, 74, 0.86));
          border-color: rgba(255, 255, 255, 0.7);
          color: white;
          box-shadow:
            0 14px 34px rgba(22, 163, 74, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.34);
        }

        .restaurantChip span,
        .restaurantChip small {
          display: block;
        }

        .restaurantChip span {
          font-size: 16px;
          line-height: 1.1;
          font-weight: 950;
        }

        .restaurantChip small {
          margin-top: 8px;
          color: rgba(49, 46, 129, 0.62);
          font-size: 12px;
          font-weight: 900;
        }

        .restaurantChip.selected small {
          color: rgba(255, 255, 255, 0.78);
        }

        .filterGlass {
          border-radius: 30px;
          padding: 20px;
          margin: 22px 0 18px;
        }

        .filters {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .sliderCard {
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.72);
          padding: 18px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.76),
            0 12px 30px rgba(76, 29, 149, 0.08);
        }

        .sliderTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
        }

        .sliderTop span {
          color: #6b21a8;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .sliderTop strong {
          color: #111827;
          font-size: 38px;
          line-height: 1;
          font-weight: 950;
        }

        .sliderCard p {
          min-height: 22px;
          margin: 0 0 16px;
          color: rgba(55, 65, 81, 0.76);
          font-size: 14px;
          font-weight: 800;
        }

        input[type='range'] {
          width: 100%;
          height: 12px;
          border-radius: 999px;
          appearance: none;
          outline: none;
          cursor: pointer;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.78);
        }

        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: white;
          border: 4px solid #111827;
          box-shadow: 0 8px 18px rgba(17, 24, 39, 0.18);
        }

        input[type='range']::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: white;
          border: 4px solid #111827;
          box-shadow: 0 8px 18px rgba(17, 24, 39, 0.18);
        }

        .calorieSlider input[type='range']::-webkit-slider-thumb {
          border-color: #f59e0b;
        }

        .proteinSlider input[type='range']::-webkit-slider-thumb {
          border-color: #16a34a;
        }

        .calorieSlider input[type='range']::-moz-range-thumb {
          border-color: #f59e0b;
        }

        .proteinSlider input[type='range']::-moz-range-thumb {
          border-color: #16a34a;
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

        .resultHeader h2 {
          margin: 0;
          color: #111827;
          font-size: 32px;
          line-height: 1.08;
        }

        .resultHeader p:last-child {
          margin: 6px 0 0;
          color: rgba(75, 85, 99, 0.84);
          line-height: 1.45;
        }

        .countBubble {
          min-width: 96px;
          text-align: center;
          border-radius: 999px;
          padding: 12px 14px;
          background: rgba(220, 252, 231, 0.78);
          border: 1px solid rgba(22, 163, 74, 0.24);
          color: #166534;
          font-weight: 950;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .results {
          display: grid;
          gap: 18px;
        }

        .resultCard {
          position: relative;
          border-radius: 30px;
          padding: 22px;
          display: grid;
          grid-template-columns: 1fr 230px;
          gap: 22px;
          overflow: visible;
        }

        .resultCard::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.65), transparent 34%),
            radial-gradient(circle at bottom right, rgba(22, 163, 74, 0.11), transparent 36%);
          pointer-events: none;
          border-radius: inherit;
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
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.86);
          color: #6d28d9;
          font-weight: 950;
          box-shadow: 0 8px 22px rgba(76, 29, 149, 0.12);
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
          flex-wrap: wrap;
          gap: 8px;
          color: #16a34a;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          margin-bottom: 10px;
        }

        .scoreWithInfo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .infoWrap {
          position: relative;
          display: inline-flex;
        }

        .infoButton {
          width: 18px;
          height: 18px;
          border: 1px solid rgba(22, 163, 74, 0.24);
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: rgba(220, 252, 231, 0.78);
          color: #166534;
          font-size: 11px;
          font-weight: 950;
          cursor: help;
        }

        .scoreTooltip {
          position: absolute;
          left: 50%;
          top: calc(100% + 10px);
          width: 230px;
          transform: translateX(-50%);
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(17, 24, 39, 0.92);
          color: white;
          font-size: 12px;
          line-height: 1.35;
          text-transform: none;
          letter-spacing: 0;
          box-shadow: 0 14px 30px rgba(17, 24, 39, 0.22);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.16s ease;
          z-index: 5;
        }

        .infoWrap:hover .scoreTooltip,
        .infoWrap:focus-within .scoreTooltip {
          opacity: 1;
        }

        .resultMain h3 {
          margin: 0;
          max-width: 760px;
          color: #111827;
          font-size: 34px;
          line-height: 1.04;
        }

        .tagRow {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 15px 0 0;
        }

        .tagBadge {
          border-radius: 999px;
          padding: 7px 10px;
          font-size: 12px;
          font-weight: 950;
          border: 1px solid transparent;
        }

        .tagBadge.positive {
          background: rgba(220, 252, 231, 0.78);
          border-color: rgba(22, 163, 74, 0.2);
          color: #166534;
        }

        .tagBadge.ingredient {
          background: rgba(254, 243, 199, 0.82);
          border-color: rgba(245, 158, 11, 0.22);
          color: #92400e;
        }

        .tagBadge.caution {
          background: rgba(255, 237, 213, 0.86);
          border-color: rgba(249, 115, 22, 0.2);
          color: #9a3412;
        }

        .tagBadge.neutral {
          background: rgba(255, 255, 255, 0.58);
          border-color: rgba(124, 58, 237, 0.14);
          color: #6d28d9;
        }

        .description {
          margin: 18px 0 0;
          color: rgba(55, 65, 81, 0.88);
          font-size: 16px;
          line-height: 1.55;
        }

        .orderBox {
          margin-top: 16px;
          border-radius: 22px;
          padding: 16px;
          background: rgba(220, 252, 231, 0.55);
          border: 1px solid rgba(22, 163, 74, 0.22);
          color: #14532d;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .orderBox strong {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }

        .orderBox p {
          margin: 0;
          line-height: 1.5;
        }

        .sourceLine {
          margin: 14px 0 0;
          color: rgba(107, 114, 128, 0.76);
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
          border-radius: 24px;
          padding: 18px;
          text-align: center;
          background: rgba(255, 255, 255, 0.58);
          border: 1px solid rgba(255, 255, 255, 0.76);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.85),
            0 12px 26px rgba(76, 29, 149, 0.08);
        }

        .metricBubble.protein {
          background: rgba(220, 252, 231, 0.64);
          border-color: rgba(22, 163, 74, 0.2);
        }

        .metricBubble.calories {
          background: rgba(254, 243, 199, 0.68);
          border-color: rgba(245, 158, 11, 0.2);
        }

        .metricBubble strong {
          display: block;
          color: #111827;
          font-size: 34px;
          line-height: 1;
          font-weight: 950;
        }

        .metricBubble span {
          display: block;
          margin-top: 7px;
          color: rgba(75, 85, 99, 0.76);
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.8px;
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
          color: rgba(75, 85, 99, 0.82);
        }

        @media (min-width: 980px) {
          h1 {
            font-size: 104px;
          }
        }

        @media (max-width: 900px) {
          .restaurantGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .resultCard {
            grid-template-columns: 1fr;
          }

          .metrics {
            grid-template-columns: repeat(3, 1fr);
            padding-right: 0;
          }
        }

        @media (max-width: 720px) {
          .page {
            padding: 24px 14px 50px;
          }

          h1 {
            font-size: 58px;
            gap: 12px;
          }

          .mangoMark {
            width: 86px;
            height: 110px;
          }

          .tagline {
            font-size: 22px;
          }

          .subtag {
            font-size: 16px;
          }

          .sectionHeader,
          .resultHeader {
            flex-direction: column;
            align-items: stretch;
          }

          .miniPill,
          .countBubble {
            width: fit-content;
          }

          .restaurantGrid,
          .filters {
            grid-template-columns: 1fr;
          }

          .restaurantChip {
            min-height: 64px;
          }

          .resultMain h3 {
            padding-right: 46px;
            font-size: 28px;
          }

          .scoreTooltip {
            left: auto;
            right: -8px;
            transform: none;
          }

          .rankBadge {
            top: 14px;
            right: 14px;
          }
        }

        @media (max-width: 520px) {
          h1 {
            font-size: 44px;
            gap: 8px;
          }

          .mangoMark {
            width: 72px;
            height: 92px;
          }

          .pickerActions {
            justify-content: flex-start;
          }

          .pickerGlass,
          .filterGlass,
          .resultCard,
          .resultHeader {
            border-radius: 24px;
          }

          .sectionHeader h2,
          .resultHeader h2 {
            font-size: 24px;
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
