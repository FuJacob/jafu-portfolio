# Component Structure

## Directory Organization

```
components/
├── Header.tsx              # Main hero section with bio
├── SocialLinks.tsx         # Social media links footer
├── ui/                     # shadcn/ui components (tabs, etc.)
├── sections/               # Page sections for each tab
│   ├── About.tsx          # About/bio section
│   ├── Work.tsx           # Work experience section
│   ├── Projects.tsx       # Projects showcase section
│   └── Contact.tsx        # Contact information section
└── shared/                # Reusable sub-components
    ├── WorkItem.tsx       # Individual work experience card
    ├── ProjectCard.tsx    # Individual project card
    └── ContactLink.tsx    # Individual contact link
```

## Component Hierarchy

- **Page** (`app/page.tsx`)
  - **Header** - Hero section with Snoopy image
  - **Tabs Navigation**
    - **About Tab** → Header + Contact + SocialLinks
    - **Work Tab** → Work section
    - **Projects Tab** → Projects section

## Key Improvements

- ✅ Removed unused components (SkillsSection, ChatLayout, Messages, etc.)
- ✅ Organized by `sections/` for main page sections
- ✅ Organized by `shared/` for reusable sub-components
- ✅ Better separation of concerns
- ✅ Easier to maintain and scale
- ✅ Cleaner imports and modularity
