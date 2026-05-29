# Fast Food, But Make It Skinny

## Project Overview

Fast Food, But Make It Skinny is a nutrition-focused restaurant meal finder that helps users identify meals that are:

- High protein
- Lower calorie
- Weight-loss friendly
- Easy to order at popular restaurant chains

The experience should feel fun, modern, approachable, and slightly self-aware.

This is not a bodybuilding app.

This is not a calorie-counting spreadsheet.

The goal is to help everyday people make better choices at chain restaurants without feeling like they are dieting.

## Brand Voice

### Core Headline

Like, fast food, but make it skinny.

### Personality

- Funny
- Self-aware
- Modern
- Millennial/Gen Z
- Slightly sarcastic
- Helpful
- Non-judgmental

Examples:

Good:

- "The protein is protein-ing."
- "Actually pretty solid."
- "You can have the cheese. We aren't monsters."

Bad:

- Gym-bro language
- Extreme dieting language
- Shame-based language
- Clinical nutrition language

## Design Direction

### Overall Feel

Apple-inspired.

Modern.

Premium.

Glassmorphism / Liquid Glass.

The site should feel more like:

- Apple
- Arc Browser
- Linear
- Notion Calendar

and less like:

- MyFitnessPal
- Government nutrition websites
- Excel

### UI Principles

#### Mobile First

Most users will be browsing on phones.

Design for mobile first.

Desktop should feel like an enhanced experience, not the primary experience.

### Visual Style

Use:

- Frosted glass cards
- Soft shadows
- Blur effects
- Rounded corners
- Smooth animations
- Subtle gradients

Avoid:

- Harsh borders
- Dense tables
- Excessive text
- Corporate dashboard aesthetics

## Product Goal

Help users answer:

"What should I order here if I'm trying to lose weight but still want good food?"

The answer should be visible within seconds.

Users should not need to:

- Calculate macros
- Open nutrition PDFs
- Compare dozens of menu items

## Core Data Structure

Restaurants contain meal recommendations.

Each meal should include:

- Name
- Calories
- Protein
- Description
- Warnings
- Modifications

Example:

```js
{
  name: "Chicken Burrito Bowl",
  calories: 535,
  protein: 48,
  notes: "High protein favorite.",
  modifications: [
    "Half rice",
    "Extra chicken"
  ]
}
```

## Existing Product Decisions

### Hardcoded Data

Current restaurant meal data is intentionally hardcoded.

Do NOT remove this architecture unless explicitly requested.

The goal is:

- Fast development
- Full control
- Consistent formatting

Future API integrations may be evaluated later.

### Future API Considerations

Potential future integrations:

- Nutritionix
- USDA FoodData Central
- Restaurant APIs

However:

API complexity should not be introduced unless it provides clear value.

Maintainability is preferred over complexity.

## Restaurant Roadmap

Current and future chains should be easy to add.

Priority additions:

- Shake Shack
- IHOP
- Qdoba
- Popeyes
- KFC

Additional future candidates:

- Chick-fil-A
- Taco Bell
- Panera
- Wendy's
- Burger King
- Subway
- Jersey Mike's
- Five Guys
- Panda Express
- Raising Cane's
- McDonald's

## Meal Ranking Philosophy

Prioritize:

1. Protein
2. Calorie efficiency
3. Satiety
4. Simplicity

Avoid recommending meals that:

- Look healthy but contain excessive calories
- Require unrealistic modifications
- Depend on unusual ordering hacks

## UX Requirements

Users should be able to:

- Browse restaurants quickly
- Compare meals easily
- Understand why a meal is recommended
- Identify protein/calorie tradeoffs instantly

## Future Features

Potential future additions:

### Filters

- High Protein
- Under 500 Calories
- Under 700 Calories
- Low Carb
- Vegetarian

### Search

Search restaurants.

Search meal names.

### Favorites

Save favorite meals.

### Compare

Compare meals across chains.

Example:

Chicken Bowl:

- Chipotle
- CAVA
- Qdoba

### Health Score

Potential future scoring model:

Health Score =

Protein Density +
Calorie Efficiency +
Fiber +
Sodium Adjustment

This feature is optional.

## Technical Rules

IMPORTANT:

Before making changes:

1. Read entire repository.
2. Understand architecture.
3. Understand current data structure.

When making changes:

- Preserve existing restaurants.
- Preserve existing meal data.
- Preserve TypeScript types.
- Preserve mobile responsiveness.
- Avoid introducing breaking changes.

After changes:

- Run build.
- Run lint.
- Fix all errors.
- Verify all restaurants still render.

Never assume data can be removed.

Never replace existing restaurant data with a partial dataset.

## Development Workflow

For every task:

1. Inspect codebase.
2. Understand current implementation.
3. Make smallest possible change.
4. Verify build succeeds.
5. Verify UI still renders correctly.

If unsure:

Ask for clarification instead of making assumptions.

## Success Criteria

A user opens the site and immediately thinks:

"Wait... I can actually eat here."

The experience should feel:

- Fast
- Helpful
- Attractive
- Modern
- Slightly funny

while still being trustworthy.
