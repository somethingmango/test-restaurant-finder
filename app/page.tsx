'use client';

import React, { useMemo, useState } from 'react';

const RESTAURANTS = [
  {
    name: 'Chipotle',
    aliases: ['chipotle', 'chipotle mexican grill'],
    note: 'Best move: bowl format, lean protein, beans or light rice, and salsa over heavy sauces.',
    items: [
      {
        name: 'Chicken Bowl — Light Rice + Beans',
        calories: 560,
        protein: 43,
        description:
          'Chicken, light white or brown rice, black beans, fajita veggies, tomato salsa, light sour cream, and cheese.',
        customization:
          'Ask for light rice and light sour cream. Skip queso and vinaigrette.',
        tags: ['has rice', 'has cheese', 'filling'],
      },
      {
        name: 'Double Chicken Salad Bowl',
        calories: 520,
        protein: 66,
        description:
          'Romaine base, double chicken, black beans, fajita veggies, tomato salsa, and cheese.',
        customization:
          'Use salsa as dressing. Skip vinaigrette to save a lot of calories.',
        tags: ['highest protein', 'low carb', 'has cheese'],
      },
      {
        name: 'Steak Bowl — No Queso',
        calories: 610,
        protein: 42,
        description:
          'Steak, light rice, black beans, fajita veggies, tomato salsa, sour cream, and cheese.',
        customization: 'Keep sour cream and cheese, but skip queso and chips.',
        tags: ['has rice', 'has cheese', 'satisfying'],
      },
      {
        name: 'Chicken Burrito Bowl — No Rice',
        calories: 430,
        protein: 39,
        description:
          'Chicken, black beans, fajita veggies, tomato salsa, cheese, and lettuce.',
        customization:
          'No rice makes this one lighter while still feeling like a real meal.',
        tags: ['lower calorie', 'has cheese'],
      },
    ],
  },
  {
    name: 'Taco Bell',
    aliases: ['taco bell', 'tacobell'],
    note: 'Best move: power-bowl style orders, fresco-style tacos, and less creamy sauce.',
    items: [
      {
        name: 'Chicken Power Menu Bowl — Light Sauce',
        calories: 460,
        protein: 27,
        description:
          'Chicken, rice, black beans, lettuce, pico, cheese, guacamole, and avocado ranch sauce.',
        customization:
          'Ask for light avocado ranch or remove it if you want to cut more calories.',
        tags: ['has rice', 'has cheese'],
      },
      {
        name: 'Two Chicken Soft Tacos Fresco Style',
        calories: 320,
        protein: 24,
        description:
          'Simple chicken soft tacos made lighter with pico instead of cheese and creamy sauce.',
        customization: 'Order fresco style. Add extra chicken if available.',
        tags: ['lower calorie', 'easy order'],
      },
      {
        name: 'Cantina Chicken Bowl — No Creamy Sauce',
        calories: 490,
        protein: 25,
        description: 'Chicken bowl with rice, beans, veggies, and toppings.',
        customization: 'Remove creamy sauces and keep the pico for flavor.',
        tags: ['has rice', 'filling'],
      },
    ],
  },
  {
    name: 'CAVA',
    aliases: ['cava', 'cava grill'],
    note: 'Best move: greens + grains, grilled chicken, lots of vegetables, and one lighter dressing.',
    items: [
      {
        name: 'Grilled Chicken Greens + Grains Bowl',
        calories: 590,
        protein: 42,
        description:
          'Half greens, half rice, grilled chicken, cucumbers, tomatoes, pickled onions, and tzatziki.',
        customization:
          'Use light dressing or sauce on the side. Skip pita chips if cutting calories.',
        tags: ['has rice', 'filling'],
      },
      {
        name: 'Double Chicken Salad Bowl',
        calories: 540,
        protein: 58,
        description:
          'Greens base, double grilled chicken, cucumbers, tomatoes, cabbage, and yogurt-based sauce.',
        customization: 'Keep sauces to one or ask for them on the side.',
        tags: ['highest protein', 'low carb'],
      },
      {
        name: 'Chicken + Lentil Avocado Bowl, Light Dressing',
        calories: 650,
        protein: 45,
        description:
          'A more filling option with chicken, lentils, greens, and avocado.',
        customization: 'Go light on dressing and skip pita on the side.',
        tags: ['filling', 'higher calorie'],
      },
    ],
  },
  {
    name: 'Wendy’s',
    aliases: ['wendys', 'wendy’s', "wendy's"],
    note: 'Best move: chili, lighter wraps, or simple burger builds without mayo-heavy sauces.',
    items: [
      {
        name: 'Large Chili',
        calories: 340,
        protein: 22,
        description:
          'A high-satiety option with beef and beans that is relatively low calorie.',
        customization: 'Add a side salad if you need more volume.',
        tags: ['lower calorie', 'filling'],
      },
      {
        name: 'Grilled Chicken Wrap',
        calories: 420,
        protein: 27,
        description: 'Chicken wrap with cheese and sauce.',
        customization: 'Ask for light sauce if available.',
        tags: ['has cheese', 'easy order'],
      },
      {
        name: 'Jr. Cheeseburger + Chili',
        calories: 630,
        protein: 38,
        description:
          'A more satisfying combo that keeps calories reasonable compared with larger burgers and fries.',
        customization: 'Skip mayo and fries. Keep ketchup/mustard for flavor.',
        tags: ['has cheese', 'filling'],
      },
    ],
  },
  {
    name: 'McDonald’s',
    aliases: ['mcdonalds', 'mcdonald’s', "mcdonald's", 'mcd'],
    note: 'Best move: eggs, simple burgers, and no fries/sugary drinks when cutting calories.',
    items: [
      {
        name: 'Egg McMuffin',
        calories: 310,
        protein: 17,
        description: 'Egg, Canadian bacon, cheese, and English muffin.',
        customization: 'Pair with black coffee or unsweetened iced coffee.',
        tags: ['breakfast', 'has cheese'],
      },
      {
        name: 'Two Hamburger Meal — No Fries',
        calories: 500,
        protein: 26,
        description: 'Two regular hamburgers without fries or sugary drink.',
        customization: 'Add extra pickles/onions. Skip mayo-based sauces.',
        tags: ['simple', 'lower calorie'],
      },
      {
        name: 'McDouble',
        calories: 400,
        protein: 22,
        description:
          'Beef patties, cheese, pickles, onions, ketchup, and mustard.',
        customization:
          'Good when you want a burger without going into Big Mac calorie territory.',
        tags: ['has cheese', 'easy order'],
      },
    ],
  },
];

function normalize(input) {
  return input.trim().toLowerCase();
}

function scoreItem(item) {
  return Number(((item.protein / item.calories) * 100).toFixed(1));
}

const chainSuggestions = [
  'Chipotle',
  'CAVA',
  'Taco Bell',
  'Wendy’s',
  'McDonald’s',
];

const styles = {
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
    fontSize: 'clamp(54px, 9vw, 108px)',
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
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.7)',
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
    gridTemplateColumns: '1fr 1fr auto auto',
    gap: 14,
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
  range: { width: '100%' },
  toggle: {
    border: '1px solid rgba(109,40,217,.25)',
    background: 'rgba(255,255,255,.72)',
    color: '#4c1d95',
    borderRadius: 999,
    padding: '12px 16px',
    fontSize: 14,
    fontWeight: 900,
    cursor: 'pointer',
  },
  toggleActive: {
    border: '1px solid #16a34a',
    background: '#dcfce7',
    color: '#166534',
    borderRadius: 999,
    padding: '12px 16px',
    fontSize: 14,
    fontWeight: 900,
    cursor: 'pointer',
  },
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
  mobileNote: { display: 'none' },
};

export default function Page() {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('Chipotle');
  const [maxCalories, setMaxCalories] = useState(700);
  const [minProtein, setMinProtein] = useState(20);
  const [includeRice, setIncludeRice] = useState(false);
  const [includeCheese, setIncludeCheese] = useState(false);

  const restaurant = useMemo(() => {
    const normalized = normalize(submittedQuery);
    return RESTAURANTS.find((r) =>
      r.aliases.some(
        (alias) => alias.includes(normalized) || normalized.includes(alias)
      )
    );
  }, [submittedQuery]);

  const results = useMemo(() => {
    if (!restaurant) return [];
    return restaurant.items
      .filter((item) => item.calories <= maxCalories)
      .filter((item) => item.protein >= minProtein)
      .filter((item) => (includeRice ? item.tags.includes('has rice') : true))
      .filter((item) =>
        includeCheese ? item.tags.includes('has cheese') : true
      )
      .sort((a, b) => scoreItem(b) - scoreItem(a))
      .slice(0, 5);
  }, [restaurant, maxCalories, minProtein, includeRice, includeCheese]);

  function handleSearch(event) {
    event.preventDefault();
    setSubmittedQuery(query || 'Chipotle');
  }

  function pickSuggestion(chain) {
    setQuery(chain);
    setSubmittedQuery(chain);
  }

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
                placeholder="Search restaurants, like Chipotle or CAVA"
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
              min="300"
              max="900"
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
              min="10"
              max="70"
              step="5"
              value={minProtein}
              onChange={(e) => setMinProtein(Number(e.target.value))}
            />
          </div>
          <button
            style={includeRice ? styles.toggleActive : styles.toggle}
            onClick={() => setIncludeRice(!includeRice)}
          >
            Rice
          </button>
          <button
            style={includeCheese ? styles.toggleActive : styles.toggle}
            onClick={() => setIncludeCheese(!includeCheese)}
          >
            Cheese
          </button>
        </section>

        {restaurant ? (
          <section style={styles.status}>
            <div>
              <h2 style={styles.statusTitle}>{restaurant.name}</h2>
              <p style={styles.statusNote}>{restaurant.note}</p>
            </div>
            <div style={styles.resultCount}>{results.length} picks found</div>
          </section>
        ) : (
          <section style={styles.empty}>
            <h2>No restaurant match yet</h2>
            <p>
              Try one of the starter chains: Chipotle, CAVA, Taco Bell, Wendy’s,
              or McDonald’s.
            </p>
          </section>
        )}

        {results.map((item, index) => (
          <article key={item.name} style={styles.card}>
            <div style={styles.cardHead}>
              <div style={styles.urlLine}>
                <span style={styles.favicon}>🍽️</span>
                <span>
                  {restaurant.name.toLowerCase().replaceAll(' ', '')}.com /
                  macro-pick / #{index + 1}
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

        {restaurant && results.length === 0 && (
          <section style={styles.empty}>
            <h2>No options match those filters</h2>
            <p>
              Raise the max calories or lower the minimum protein to see more
              options.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
