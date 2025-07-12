```md
# 📦 PEP Project Documentation

Welcome to the comprehensive documentation of the **PEP** project.  
This guide covers the purpose, structure, and usage of all major layouts, pages, and shared components.

---

## 📋 Table of Contents

- [App Directory Structure](#app-directory-structure)
- [Layouts & Pages](#layouts--pages)
  - [Adding New Pages Using Existing Layouts](#️-adding-new-pages-using-existing-layouts)
- [Shared UI Components](#shared-ui-components)
  - [PrimaryButton](#buttons-primarybutton)
  - [CheckBox](#checkboxcheckbox)
  - [TextField](#textfield)
  - [PasswordField](#passwordfield)
  - [FAQItem](#faq-item)
  - [Footer](#footer)
  - [Navbar](#navigation-navbar)
  - [SidebarNavbar](#sidebar-navbar)
  - [Sidebar](#sidebar)

---

## 📁 App Directory Structure

```

src/
│─ app/
│  ├── layout.tsx                    # Root layout (fonts, Metadata)
│  ├── page.tsx                      # Global homepage
│  ├── (without-sidebar)/           # Auth & tracking flows
│  │   ├── layout.tsx               # Navbar + Footer wrapper
│  │   ├── login/
│  │   │   ├── components/
│  │   │   │   ├── LoginForm.tsx
│  │   │   │   └── HelpSection.tsx
│  │   │   └── page.tsx
│  │   └── tracking/
│  │       ├── components/
│  │       │   ├── TrackingHeader.tsx
│  │       │   ├── TrackingDetailsSection.tsx
│  │       │   ├── TrackingUpdates.tsx
│  │       │   ├── FAQSection.tsx
│  │       │   ├── TravelHistoryTable.tsx
│  │       │   └── StatusBadge.tsx
│  │       └── page.tsx
│  └── (sidebar)/
│      └── dashboard/
│          ├── layout.tsx           # Sidebar + Navbar + Footer
│          └── page.tsx
│
└── components/
├── button/
├── checkbox/
├── custom-input/
├── faq/
├── footer/
├── navbar/
└── sidebar/

````

---

## 🧩 Layouts & Pages

### ✅ Adding New Pages Using Existing Layouts

This guide explains how to create new pages under the **two existing layouts**:

---

### 🔹 1. Without-Sidebar Layout  
**Folder Path:** `src/app/(without-sidebar)/<your-page>/page.tsx`

**Steps:**

1. Create a folder under `(without-sidebar)` (e.g., `profile`, `about`, etc.)
2. Add a `page.tsx` file inside it.
3. It will be automatically wrapped by the existing layout (`Navbar` + `Footer`).

**Example:**

```bash
src/app/(without-sidebar)/profile/page.tsx
````

```tsx
export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <p>This is the profile page under the Without-Sidebar layout.</p>
    </div>
  );
}
```

---

### 🔹 2. Sidebar Layout

**Folder Path:** `src/app/(sidebar)/dashboard/<your-page>/page.tsx`

**Steps:**

1. Create a folder inside `dashboard/` (e.g., `settings`, `orders`)
2. Add a `page.tsx` file inside it.
3. It will be automatically wrapped with `SidebarNavbar`, `Sidebar`, and `Footer`.

**Example:**

```bash
src/app/(sidebar)/dashboard/settings/page.tsx
```

```tsx
export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p>Manage your preferences and account settings here.</p>
    </div>
  );
}
```

---

## 🧱 Shared UI Components

### 🔘 Buttons (PrimaryButton)

**File:** `src/components/button/PrimaryButton.tsx`

```tsx
import PrimaryBtn from "@/components/button/PrimaryButton";

<PrimaryBtn label="Submit" />
<PrimaryBtn variant="secondary" size="lg" startIcon="/icon.svg" label="Add" />
<PrimaryBtn variant="outline">Click Me</PrimaryBtn>
```

**Props:**

* `variant`: `"primary" | "secondary" | "outline"`
* `size`: `"xs" | "sm" | "md" | "lg"`
* `label`: string
* `startIcon` / `endIcon`: optional icons
* All standard `button` props supported

---

### ✅ Checkbox (CheckBox)

**File:** `src/components/checkbox/CheckBox.tsx`

```tsx
import Checkbox from "@/components/checkbox/CheckBox";

<Checkbox
  label="I agree to terms"
  name="terms"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

**Props:**

* `label`: string
* `checked`: boolean
* `onChange`: event handler
* `showInfo`, `className`: optional

---

### 🔡 TextField

**File:** `src/components/custom-input/TextField.tsx`

```tsx
import TextField from "@/components/custom-input/TextField";

<TextField
  label="Username"
  name="username"
  placeholder="Enter your username"
  value={formData.username}
  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
/>
```

---

### 🔒 PasswordField

**File:** `src/components/custom-input/PasswordField.tsx`

```tsx
import PasswordField from "@/components/custom-input/PasswordField";

<PasswordField
  label="Password"
  name="password"
  placeholder="Enter your password"
  value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>
```

---

### ❓ FAQItem

**File:** `src/components/faq/FaqItem.tsx`

```tsx
import FAQItem from "@/components/faq/FAQItem";

<FAQItem
  question="How can I track my order?"
  answer="You can track your order from the Tracking page after logging in."
/>
```

**Features:**

* Expand/collapse answer
* Icon toggles open/closed
* Built with `useState` and `next/image`

---

### 📥 Footer

**File:** `src/components/footer/Footer.tsx`

```tsx
import Footer from "@/components/footer/Footer";

<Footer />
```

**Includes:**

* Company logo + description
* Social media icons
* Link sections: Our Services, Company, Quick Links
* Live chat button
* Scroll-to-top button

---

### 🧭 Navbar

**File:** `src/components/navbar/Navbar.tsx`

```tsx
import Navbar from "@/components/navbar/Navbar";

<Navbar />
```

**Features:**

* Links: Home, About, Ship, Track, Services
* Profile icon + Login/Signup
* Search icon opens input (auto-focus, click-outside close)
* Responsive layout

---

### 🧭 SidebarNavbar

**File:** `src/components/navbar/SidebarNavbar.tsx`

```tsx
import SidebarNavbar from "@/components/navbar/SidebarNavbar";

<SidebarNavbar />
```

**Features:**

* Navigation + Search box
* Profile dropdown: View Profile, Logout
* Notifications dropdown
* Phone support on the right

---

### 📂 Sidebar

**File:** `src/components/sidebar/Sidebar.tsx`

```tsx
import Sidebar from "@/components/sidebar/Sidebar";

<div className="flex">
  <Sidebar />
  <main className="flex-1 p-4">Your main content here</main>
</div>
```

**Features:**

* List of navigation items
* Highlight selected item
* Logout with `console.log`
* `useState` based local state
* Divider before Logout


