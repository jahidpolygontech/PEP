# PEP Project Documentation

Welcome to the comprehensive documentation of PEP. This guide covers the purpose, structure, and relationships of each component in the project.

## 📋 Table of Contents

- [App Directory Structure](#app-directory-structure)
- [Major Components Overview](#major-component-overview)
- [Layouts & Pages](#layouts--pages)
- [Login Components](#login-components)
- [Tracking Components](#tracking-components)
- [Shared UI Components](#shared-ui-components)
  - [Buttons](#buttons-primarybutton)
  - [Checkbox](#checkbox-checkbox)
  - [Inputs](#inputs)
  - [FAQ Item](#faq-item)
  - [Footer](#footer)
  - [Navigation](#navigation)
  - [Sidebar](#sidebar)

## App Directory Structure

```
Src/
│─app/
├── layout.tsx                # Root layout (fonts, Metadata)
├── page.tsx                  # Global homepage
├── (center-layout)/        # Auth & tracking flows (no sidebar)
│   ├── layout.tsx            # Navbar + Footer wrapper
│   ├── login/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── HelpSection.tsx
│   │   └── page.tsx
│   └── tracking/
│       ├── components/
│       │   ├── TrackingHeader.tsx
│       │   ├── TrackingDetailsSection.tsx
│       │   ├── TrackingUpdates.tsx
│       │   ├── FAQSection.tsx
│       │   ├── TravelHistoryTable.tsx
│       │   └── StatusBadge.tsx
│       └── page.tsx
└── (sidebar-layout)/
|    └── dashboard/
│         ├── layout.tsx        # Sidebar + navbar + footer
│         └── page.tsx 
└── components
     └── button
     └── checkbox      
     └── custom-input
     └── Faq
     └── Footer     
     └── Navbar
     └── sidebar

```

### Major Components Overview
```

- src/app/
  Root directory containing all route pages, layouts, and shared structure of the app.

- Root Layout (layout.tsx)  
  Applies global settings like fonts, metadata, and wraps all pages with a common layout.

- Global Homepage (page.tsx)
  The default landing page at `/`, typically for public users.

- Sidebar Layout (`(sidebar)/)  
  Layout used for internal/authenticated pages like the dashboard, includes sidebar, navbar, and footer.

- Center Layout ((center-layout)/)
  Layout for routes like login and tracking, includes only navbar and footer (no sidebar).

- Login Page (login/)  
  Handles user authentication UI with `LoginForm` and `HelpSection` components.

- Tracking Page (tracking/) 
  Displays tracking information using components like `TrackingHeader`, `StatusBadge`, and `TravelHistoryTable`.

- Dashboard Page (dashboard/)  
  Main user interface post-login, rendered inside the sidebar layout with support for navigation and content management.
```

## Layouts & Pages

### ✅ Adding New Pages Using Existing Layouts

This guide explains how to create new pages under the two existing layouts:
- **Center Layout** (`src/app/(center-layout)/`)
- **Sidebar Layout** (`src/app/(sidebar)`)

### 1. Adding a New Page under center-layout

**Folder Path:** `src/app/(center-layout)/<your-page-name>/page.tsx`

**Steps:**
1. Create a new folder inside `(center-layout)` (e.g., `profile`, `about`, etc.)
2. Inside it, add a `page.tsx` file
3. The layout (Navbar + Footer) will automatically wrap this new page because of the `layout.tsx` present in `center-layout`

**Example:**
```
src/
└── app/
    └── (center-layout)/
        └── profile/
            └── page.tsx
```

```tsx
// src/app/(center-layout)/profile/page.tsx
export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <p>This is the profile page under the Without-Sidebar layout.</p>
    </div>
  );
}
```

> **Note:** Navbar and Footer will be included automatically.

### 2. Adding a New Page under Sidebar Layout

**Folder Path:** `src/app/(sidebar)/<your-page-name>/page.tsx`

**Steps:**
1. Create a new folder inside `(sidebar)/` (e.g., `orders`, `settings`)
2. Inside it, add a `page.tsx` file
3. The page will be wrapped with Sidebar, SidebarNavbar, and Footer by default (from `layout.tsx`)

**Example:**
```
src/
└── app/
    └── (sidebar)/
        └── settings/
            └── page.tsx
```

```tsx
// src/app/(sidebar)/settings/page.tsx
export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p>Manage your preferences and account settings here.</p>
    </div>
  );
}
```

> **Note:** Sidebar, SidebarNavbar, and Footer will be applied automatically.

## Shared UI Components

### Buttons (PrimaryButton)

**File:** `src/components/button/PrimaryButton.tsx`

#### How to Use PrimaryBtn

Import the button:
```tsx
import PrimaryBtn from "@/components/button/PrimaryButton"
```

Use it like a normal button with extra options:
```tsx
<PrimaryBtn label="Submit" />
<PrimaryBtn variant="secondary" size="lg" startIcon="/icon.svg" label="Add" />
<PrimaryBtn variant="outline">Click Me</PrimaryBtn>
```

#### Props you can use:
- `variant`: `"primary"` | `"secondary"` | `"outline"` (style)
- `size`: `"xs"` | `"sm"` | `"md"` | `"lg"` (button size)
- `label`: Text inside the button
- `startIcon` / `endIcon`: Show icons before/after text
- Supports all normal button props like `onClick`, `disabled`, etc.

### Checkbox (Checkbox)

**File:** `src/components/checkbox/CheckBox.tsx`

#### How to Use Checkbox

Import the component:
```tsx
import Checkbox from "@/components/checkbox/CheckBox"
```

Use it like this:
```tsx
<Checkbox
  label="I agree to terms"
  name="terms"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

#### Key Props
- `label`: Label text shown next to the checkbox
- `showInfo`: Optional extra info (e.g. tooltip, icon)
- `checked`: Boolean to control the checkbox
- `onChange`: Function to handle checkbox change
- `className`: Custom styles if needed

### Inputs

#### TextField

**File:** `src/components/custom-input/TextField.tsx`

Labeled text input component.

##### How to Use TextField

```tsx
import TextField from "@/components/custom-input/TextField"
```

Use it like this:
```tsx
<TextField
  label="Username"
  name="username"
  placeholder="Enter your username"
  value={formData.username}
  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
/>
```

##### Required Props
- `label`: The label text shown above the input
- `name`: Input name and ID
- `value`: Current value of the input
- `onChange`: Function to update the value

#### PasswordField

**File:** `src/components/custom-input/PasswordField.tsx`

##### How to Use PasswordField

```tsx
import PasswordField from "@/components/custom-input/PasswordField"
```

Use it like this:
```tsx
<PasswordField
  label="Password"
  name="password"
  placeholder="Enter your password"
  value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>
```

##### Required Props
- `label`: Label text above the input
- `name`: Input name and ID
- `value`: Current input value
- `onChange`: Function to update the value

### FAQ Item

**File:** `src/components/faq/FaqItem.tsx`

Single question–answer pair, expandable component.

#### How to Use FAQItem

```tsx
import FAQItem from "@/components/faq/FAQItem"
```

Use it like this:
```tsx
<FAQItem
  question="How can I track my order?"
  answer="You can track your order from the Tracking page after logging in."
/>
```

#### ✅ Props
- `question` (string): The FAQ question text
- `answer` (string): The answer that shows when the item is expanded

#### Features
- Click to expand/collapse the answer
- Icon changes based on open/close state
- Built with `useState` and `Image` from `next/image`

### Footer

**File:** `src/components/footer/Footer.tsx`

#### How to Use Footer Component

Import the component:
```tsx
import Footer from "@/components/footer/Footer"
```

Use it at the bottom of your layout/page:
```tsx
<Footer />
```

#### What It Includes
- Logo and Company Description
- Social Media Icons
- Link Sections:
  - Our Services
  - Quick Link
  - Our Company
- Legal Links: Terms, Privacy, Cookies
- Floating Buttons:
  - Live Chat Button (Need Help? Chat with Us)
  - Scroll to Top arrow

### Navigation

#### Navbar

**File:** `src/components/navbar/Navbar.tsx`

##### How to Use Navbar

Import the component:
```tsx
import Navbar from "@/components/navbar/Navbar"
```

Use it at the top of your layout/page:
```tsx
<Navbar />
```

##### Features
- Company logo (linked to homepage)
- Navigation links: Home, About, Ship, Track, Services
- Signup/Login link
- Profile icon
- Search icon with toggleable input box (auto-focus + click-outside close)

##### Behavior
- Search input opens when clicking the search icon and closes if clicked outside
- Submitting search shows an alert() with the typed value (can be customized)
- Responsive layout with proper semantic elements (e.g., `<nav>`, `<header>`)

### Sidebar

#### Sidebar Navbar

**File:** `src/components/navbar/SidebarNavbar.tsx`

##### How to Use SidebarNavbar

Import the component:
```tsx
import SidebarNavbar from "@/components/navbar/SidebarNavbar"
```

Use it at the top of a sidebar-based layout:
```tsx
<SidebarNavbar />
```

##### Features
- Navigation links: Home, About, Ship, Track, Services
- Profile dropdown: View Profile, Logout
- Search box: Toggleable input with autofocus and alert on submit
- Notifications: Dropdown with sample notification messages
- Contact info: Call icon + phone number shown at the right

##### ✅ Behavior & UX
- Click outside closes dropdowns (search, profile, notification)
- Icons are from `/Images` (customizable)
- Interactive with React state and controlled dropdowns

#### Sidebar

**File:** `src/components/sidebar/Sidebar.tsx`

##### How to Use Sidebar

Import the Sidebar:
```tsx
import Sidebar from "@/components/sidebar/Sidebar"
```

Use it in a sidebar layout:
```tsx
<div className="flex">
  <Sidebar />
  <main className="flex-1 p-4">Your main content here</main>
</div>
```

##### Features of Sidebar
- Displays a list of navigation items (e.g., Dashboard, Settings, Help)
- Highlights the currently selected item
- Calls `onSelect` when a sidebar item is clicked
- Includes a Logout item (with placeholder logic in console.log)

##### Behavior
- Sidebar state is managed via `useState` in the Sidebar component
- SidebarItems receives the selected item ID and updates it on click
- Clicking Logout triggers `console.log("Logging out...")` (can be replaced with real logout logic)
- Adds a divider before the Logout item for visual separation

---

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Available routes:
- http://localhost:3000/login – login page
- http://localhost:3000/dashboard – dashboard page
- http://localhost:3000/tracking – tracking page
