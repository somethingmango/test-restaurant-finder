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

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at top left, #fff2d8 0%, #f2d7ff 36%, #d6e6ff 100%)',
    color: '#1f2937',
    fontFamily: 'Inter, Arial, sans-serif',
    padding: '32px 20px 60px',
  },
  shell: { maxWidth: 1120, margin: '0 auto' },
  hero: { textAlign: 'center', padding: '28px 0 22px' },
  logo: {
    fontSize: 'clamp(48px, 8vw, 96px)',
    lineHeight: 0.92,
    margin: 0,
    letterSpacing: -4,
    color: 'white',
    WebkitTextStroke: '2px #6d28d9',
    textShadow: '0 8px 24px rgba(109,40,217,.18)',
  },
  tagline: {
    margin: '12px 0 0',
    fontSize: 28,
    letterSpacing: 3,
    fontWeight: 800,
    color: '#3b0764',
  },
  subtag: { margin: '8px 0 0', fontSize: 18, color: '#6b7280' },
  searchPanel: {
    background: 'rgba(255,255,255,.68)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,.78)',
    borderRadius: 30,
    boxShadow: '0 24px 70px rgba(80, 30, 120, .18)',
    overflow: 'hidden',
    marginTop: 22,
  },
  searchTop: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 14,
    padding: 26,
    borderBottom: '1px solid rgba(255,255,255,.78)',
  },
  searchInputWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    background: 'white',
    border: '1px solid #eadcff',
    borderRadius: 999,
    padding: '10px 12px 10px 22px',
  },
  magnifier: { fontSize: 22, color: '#7c3aed' },
  input: {
    width: '100%',
    border: 0,
    outline: 0,
    fontSize: 22,
    background: 'transparent',
    color: '#111827',
  },
  searchButton: {
    border: 0,
    borderRadius: 999,
    padding: '0 34px',
    background: '#16a34a',
    color: 'white',
    fontSize: 18,
    fontWeight: 900,
    cursor: 'pointer',
    boxShadow: '0 12px 24px rgba(22,163,74,.22)',
  },
  helperRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    padding: '18px 22px 24px',
  },
  chip: {
    border: '1px solid rgba(124,58,237,.22)',
    background: 'rgba(255,255,255,.68)',
    color: '#6d28d9',
    borderRadius: 999,
    padding: '10px 16px',
    fontSize: 14,
    fontWeight: 800,
    cursor: 'pointer',
  },
  filterBar: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 18,
    alignItems: 'center',
    margin: '22px 0 16px',
    background: 'rgba(255,255,255,.58)',
    border: '1px solid rgba(255,255,255,.76)',
    borderRadius: 24,
    padding: 18,
  },
  filterLabel: {
    fontSize: 13,
    fontWeight: 900,
    color: '#6b21a8',
    marginBottom: 7,
  },
  range: { width: '100%', accentColor: '#16a34a' },
  status: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
    background: 'rgba(255,255,255,.72)',
    border: '1px solid rgba(255,255,255,.8)',
    borderRadius: 24,
    padding: '18px 22px',
    marginBottom: 16,
  },
  statusTitle: { margin: 0, fontSize: 24, fontWeight: 950 },
  statusNote: { margin: '4px 0 0', color: '#6b7280', lineHeight: 1.4 },
  resultCount: {
    background: '#dcfce7',
    color: '#166534',
    padding: '9px 13px',
    borderRadius: 999,
    fontWeight: 950,
    whiteSpace: 'nowrap',
  },
  card: {
    background: 'rgba(255,255,255,.76)',
    border: '1px solid rgba(255,255,255,.86)',
    borderRadius: 28,
    marginBottom: 18,
    boxShadow: '0 18px 46px rgba(88, 28, 135, .14)',
    overflow: 'hidden',
  },
  cardHead: {
    padding: '22px 24px',
    borderBottom: '1px solid rgba(255,255,255,.9)',
  },
  urlLine: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: '#7c3aed',
    fontWeight: 900,
    fontSize: 15,
    marginBottom: 14,
  },
  favicon: {
    width: 30,
    height: 30,
    borderRadius: 999,
    background: 'white',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,.08)',
  },
  cardTitle: { fontSize: 28, margin: 0, fontWeight: 950, letterSpacing: -0.5 },
  tagRow: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 },
  tag: {
    background: 'rgba(255,255,255,.78)',
    color: '#6d28d9',
    border: '1px solid rgba(124,58,237,.18)',
    borderRadius: 999,
    padding: '7px 11px',
    fontSize: 12,
    fontWeight: 900,
  },
  cardBody: { display: 'grid', gridTemplateColumns: '1fr 210px', gap: 0 },
  description: {
    padding: 24,
    color: '#4b5563',
    fontSize: 16,
    lineHeight: 1.55,
  },
  orderBox: {
    marginTop: 16,
    background: 'rgba(220,252,231,.72)',
    border: '1px dashed #16a34a',
    borderRadius: 20,
    padding: 16,
    color: '#14532d',
  },
  metrics: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    background: 'rgba(255,255,255,.58)',
    borderLeft: '1px solid rgba(255,255,255,.9)',
  },
  metric: {
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
    padding: 16,
    borderBottom: '1px solid rgba(255,255,255,.9)',
  },
  metricNum: { fontSize: 30, fontWeight: 950, color: '#111827' },
  metricLabel: {
    fontSize: 12,
    fontWeight: 900,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  empty: {
    textAlign: 'center',
    padding: 44,
    background: 'rgba(255,255,255,.72)',
    borderRadius: 28,
    border: '1px solid rgba(255,255,255,.8)',
    boxShadow: '0 18px 46px rgba(88, 28, 135, .12)',
  },
};

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
    : `Search results for "${submittedQuery}"`;

  const displayNote = restaurant
    ? restaurant.note
    : 'Searching across all hard-coded restaurant items.';

  const restaurantSlug = restaurant
    ? restaurant.name.toLowerCase().replaceAll(' ', '')
    : 'skinny-mangos';

  return (
    <main style={styles.page}>
      <div style={styles.shell}>
        <header style={styles.hero}>
          <h1 style={styles.logo}>Skinny Mango’s</h1>
          <p style={styles.tagline}>Healthy Food Finder</p>
          <p style={styles.subtag}>
            Search any restaurant chain and find lower-calorie, high-protein
            meals that still feel worth ordering.
          </p>
        </header>

        <section style={styles.searchPanel}>
          <form style={styles.searchTop} onSubmit={handleSearch}>
            <div style={styles.searchInputWrap}>
              <span style={styles.magnifier}>⌕</span>
              <input
                style={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search restaurants, like Chipotle or Chili’s"
              />
            </div>
            <button style={styles.searchButton} type="submit">
              Search
            </button>
          </form>

          <div style={styles.helperRow}>
            {chainSuggestions.map((chain) => (
              <button
                key={chain}
                style={styles.chip}
                onClick={() => pickSuggestion(chain)}
                type="button"
              >
                {chain}
              </button>
            ))}
          </div>
        </section>

        <section style={styles.filterBar}>
          <div>
            <div style={styles.filterLabel}>Max calories: {maxCalories}</div>
            <input
              style={styles.range}
              type="range"
              min="250"
              max="1500"
              step="50"
              value={maxCalories}
              onChange={(e) => setMaxCalories(Number(e.target.value))}
            />
          </div>
          <div>
            <div style={styles.filterLabel}>Minimum protein: {minProtein}g</div>
            <input
              style={styles.range}
              type="range"
              min="0"
              max="80"
              step="5"
              value={minProtein}
              onChange={(e) => setMinProtein(Number(e.target.value))}
            />
          </div>
        </section>

        <section style={styles.status}>
          <div>
            <h2 style={styles.statusTitle}>{displayTitle}</h2>
            <p style={styles.statusNote}>{displayNote}</p>
          </div>
          <div style={styles.resultCount}>{results.length} picks found</div>
        </section>

        {results.map((item, index) => (
          <article key={`${item.name}-${index}`} style={styles.card}>
            <div style={styles.cardHead}>
              <div style={styles.urlLine}>
                <span style={styles.favicon}>🍽️</span>
                <span>
                  {restaurantSlug}.com / healthy-pick / #{index + 1}
                </span>
              </div>
              <h3 style={styles.cardTitle}>{item.name}</h3>
              <div style={styles.tagRow}>
                {item.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.cardBody}>
              <div style={styles.description}>
                <p>{item.description}</p>
                <div style={styles.orderBox}>
                  <strong>How to order it:</strong>
                  <p style={{ margin: '8px 0 0' }}>{item.customization}</p>
                </div>
              </div>

              <div style={styles.metrics}>
                <div style={styles.metric}>
                  <div>
                    <div style={styles.metricNum}>{item.calories}</div>
                    <div style={styles.metricLabel}>calories</div>
                  </div>
                </div>
                <div style={styles.metric}>
                  <div>
                    <div style={styles.metricNum}>{item.protein}g</div>
                    <div style={styles.metricLabel}>protein</div>
                  </div>
                </div>
                <div style={styles.metric}>
                  <div>
                    <div style={styles.metricNum}>{scoreItem(item)}</div>
                    <div style={styles.metricLabel}>protein score</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {results.length === 0 && (
          <section style={styles.empty}>
            <h2>No options match those filters</h2>
            <p>
              Try another chain, raise max calories, or lower minimum protein.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}