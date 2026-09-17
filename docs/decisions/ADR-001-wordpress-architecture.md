# ADR 001 WordPress Architecture

- Status: Proposed
- Date: 2026-09-16

## Decision

Retain WordPress as the production CMS. Use a lightweight Blocksy child theme, governed Elementor templates, PHP, semantic HTML, modern CSS, and minimal vanilla JavaScript.

## Rationale

This approach is compatible with the current one.com environment, preserves user-friendly editing, supports local development and controlled deployment, and avoids the added infrastructure and maintenance burden of a headless JavaScript architecture.

## Consequences

- Elementor usage must be disciplined through global tokens and reusable templates.
- Custom code belongs in the child theme or a narrowly scoped custom plugin only when necessary.
- New plugins require documented need, ownership, update policy, and performance review.
- The decision must be revisited if future requirements include application-grade authenticated workflows that materially exceed a corporate website.
