# BASELINE_FEATURE.md

## Implemented Feature: Native CSS Nesting (Baseline 2024)

This project implements **native CSS nesting**, one of the officially standardized features introduced in **Baseline 2024**.  
The feature allows developers to nest selectors directly within other rule blocks, improving CSS structure and maintainability without the need for preprocessors such as Sass or Less.

---

### Example from `style.css`
```css
.question-block {
  background-color: var(--neutral-bg);
  border-radius: 1rem;
  padding: 1.5rem;

  &:hover {
    background-color: color-mix(in srgb, var(--neutral-bg), white 20%);
  }

  label {
    font-weight: 500;
  }
}
```

---

### Description and Purpose
Native CSS nesting improves:
- **Readability** by grouping related selectors together.  
- **Maintainability** by reducing repetition and selector complexity.  
- **Performance** since it runs natively in modern browsers without precompilation.

This design approach enhances clarity for complex components such as test question blocks and navigation elements.

---

### Fallback Strategy
For browsers that do not yet support native CSS nesting, the stylesheet includes equivalent flattened selectors:
```css
.question-block:hover {
  background-color: #f4f4f4;
}

.question-block label {
  font-weight: 500;
}
```
This ensures consistent rendering across all modern browsers (Chrome, Edge, Firefox, Safari).

---

### Summary
The use of native CSS nesting fulfills the **Baseline 2024 feature requirement** for HW3.  
It demonstrates practical adoption of a new CSS standard while maintaining backward compatibility through fallbacks.
